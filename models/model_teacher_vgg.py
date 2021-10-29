"""
Teacher model in SKT
"""
import numpy as np
import torch.nn as nn
import torch
from torchvision import models
from utils import save_net, load_net, cal_para

_frontend_feat = [64, 64, 'M', 128, 128, 'M', 256, 256, 256, 'M', 512, 512, 512]
_backend_feat = [512, 512, 512, 256, 128, 64]


class CSRNet(nn.Module):
    def __init__(self, pretrained: bool = False):
        super(CSRNet, self).__init__()
        self.seen = 0

        self.frontend = _make_layers(_frontend_feat)
        self.backend = _make_layers(_backend_feat, in_channels=512, dilation=True)
        self.output_layer = nn.Conv2d(64, 1, kernel_size=(1, 1))
        self.features = []
        if pretrained:
            print('load vgg pretrained model')
            self._initialize_weights(mode='normal')
            vgg = models.vgg16(pretrained)
            pretrain_keys = list(vgg.state_dict().keys())
            state_keys = list(self.frontend.state_dict().keys())

            for i in range(len(self.frontend.state_dict().items())):
                # self.frontend.state_dict().items()[i][1].data[:] = vgg.state_dict().items()[i][1].data[:]
                self.frontend.state_dict()[state_keys[i]].data = vgg.state_dict()[pretrain_keys[i]].data
        else:
            self._initialize_weights(mode='kaiming')

    def forward(self, x):
        self.features = []
        # frontend: VGG
        x = self.frontend(x)
        # backend: dilated convolution
        x = self.backend(x)
        x = self.output_layer(x)
        return x

    def _initialize_weights(self, mode: str):
        for m in self.modules():
            if isinstance(m, nn.Conv2d):
                if mode == 'normal':
                    nn.init.normal_(m.weight, std=0.01)
                elif mode == 'kaiming':
                    nn.init.kaiming_uniform_(m.weight, mode='fan_out', nonlinearity='relu')

                if m.bias is not None:
                    nn.init.constant_(m.bias, 0)
            elif isinstance(m, nn.BatchNorm2d):
                nn.init.constant_(m.weight, 1)
                nn.init.constant_(m.bias, 0)

    def regist_hook(self):
        self.features = []

        def get(model, input, output):
            # function will be automatically called each time, since the hook is injected
            self.features.append(output.detach())

        for name, module in self._modules['frontend']._modules.items():
            if name in ['1', '4', '9', '16']:
                self._modules['frontend']._modules[name].register_forward_hook(get)
        for name, module in self._modules['backend']._modules.items():
            if name in ['1', '7']:
                self._modules['backend']._modules[name].register_forward_hook(get)


def _make_layers(cfg: list, in_channels: int = 3, batch_norm: bool = False, dilation: bool = False):
    # if dilation:
    #     d_rate = 2
    # else:
    #     d_rate = 1
    d_rate = 2 if dilation else 1
    layers = []
    for v in cfg:
        if v == 'M':
            layers += [nn.MaxPool2d(kernel_size=2, stride=2, ceil_mode=True)]
        else:
            conv2d = nn.Conv2d(in_channels, v, kernel_size=(3, 3), padding=d_rate, dilation=(d_rate, d_rate))
            if batch_norm:
                layers += [conv2d, nn.BatchNorm2d(v), nn.ReLU(inplace=True)]
            else:
                layers += [conv2d, nn.ReLU(inplace=True)]
            in_channels = v
    return nn.Sequential(*layers)


if __name__ == '__main__':
    net = CSRNet()
    print(net)
    net_dict = net.state_dict()
    with open('teacher_vgg.txt', 'w') as f:
        f.write(str(net))
    for k, v in net_dict.items():
        print(k, "-->", np.shape(v))
