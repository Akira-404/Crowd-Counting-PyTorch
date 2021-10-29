import math
import os
import argparse
import json
import time

import cv2
import h5py
import numpy as np
from PIL import Image
from matplotlib import pyplot as plt
import torch
from torch.utils.data import DataLoader
from torch.autograd import Variable
from torchvision import datasets, transforms

import mydataset
from models.model_vgg import CSRNet as CSRNet_vgg
from models.model_student_vgg import CSRNet as CSRNet_student
from utils import save_checkpoint
from utils import cal_para, crop_img_patches, get_use_time

parser = argparse.ArgumentParser(description='PyTorch CSRNet')

parser.add_argument('--test_json', '-tj', metavar='TEST', default='preprocess/train_val_test_json/A_test.json',
                    help='path to test json')
parser.add_argument('--dataset', '-d', default='Shanghai', type=str,
                    help='test dataset:Shanghai/UCF/Other')
parser.add_argument('--checkpoint', '-c', metavar='CHECKPOINT', default='CSRNet_models_weights/partA_student.pth.tar',
                    type=str,
                    help='path to the checkpoint')
parser.add_argument('--img', '-i', type=str, default='img.png',
                    help='input test image path')
parser.add_argument('--version', '-v', default='quarter_vgg', type=str,
                    help='vgg/quarter_vgg')
parser.add_argument('--transform', '-t', default=True, type=bool,
                    help='1x1 conv transform')
parser.add_argument('--batch', default=1, type=int,
                    help='batch size')
parser.add_argument('--gpu', metavar='GPU', default='0', type=str,
                    help='GPU id to use.')

args = parser.parse_args()

# Type Config
Path = str
CvImg = np.ndarray
CUDA_AVAILABLE = torch.cuda.is_available()


def main(args):
    global best_prec1

    # args.batch_size = 1
    # args.workers = 4
    args.seed = time.time()

    if CUDA_AVAILABLE:
        os.environ['CUDA_VISIBLE_DEVICES'] = args.gpu
        torch.cuda.manual_seed(int(args.seed))

    if args.version == 'vgg':
        print('VGG')
        model = CSRNet_vgg(pretrained=False)
        cal_para(model)

    elif args.version == 'quarter_vgg':
        print('quarter_VGG')
        model = CSRNet_student(ratio=4, transform=args.transform)
        cal_para(model)  # including 1x1conv transform layer that can be removed
    else:
        raise NotImplementedError()

    model = model.cuda() if CUDA_AVAILABLE else model

    if args.checkpoint:
        if os.path.isfile(args.checkpoint):
            print("=> loading checkpoint '{}'".format(args.checkpoint))
            checkpoint = torch.load(args.checkpoint)

            if args.transform is False:
                # remove 1x1 conv para
                for k in checkpoint['state_dict'].keys():
                    if k[:9] == 'transform':
                        del checkpoint['state_dict'][k]

            model.load_state_dict(checkpoint['state_dict'])
            print("=> loaded checkpoint '{}' (epoch {})".format(args.checkpoint, checkpoint['epoch']))
        else:
            print("=> no checkpoint found at '{}'".format(args.checkpoint))
            exit(0)

    if args.dataset == 'UCF':
        test_ucf(model)
    elif args.dataset == 'Shanghai':
        test_shanghai(model)
    else:
        img_path = args.img
        if os.path.exists(args.img) is False:
            print(f'img path:{args.img} is error ')
            exit(0)
        ret = run_model(img_path, model)
        img = cv2.imread(img_path)
        cv2.putText(img, 'people num:{}'.format(ret), (20, 20), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 1)
        cv2.imshow('img', img)
        cv2.imwrite('out.jpg', img)
        cv2.waitKey(0)


def test_shanghai(model):
    print('begin test')

    with open(args.test_json, 'r') as outfile:
        test_list = json.load(outfile)

    transform = transforms.Compose([transforms.ToTensor(),
                                    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                                         std=[0.229, 0.224, 0.225])])
    h5_set = []
    for test_item in test_list:
        h5_set.append(test_item.replace('images', 'ground-truth-h5').replace('jpg', 'h5'))

    mae = 0
    mse = 0

    for i, (h5_item, img_item) in enumerate(zip(h5_set, test_list)):
        with h5py.File(h5_item, 'r') as f:
            density_img = f['density'][:]

            img = Image.open(img_item).convert('RGB')
            img = transform(img)
            img = torch.unsqueeze(img, 0)

            model.eval()
            img = img.cuda() if CUDA_AVAILABLE else img
            img = Variable(img)

            with torch.no_grad():
                output = model(img)

            plt.text(x=10,  # 文本x轴坐标
                     y=60,  # 文本y轴坐标
                     s='model output:{}'.format(int(output.data.sum())),  # 文本内容
                     ha='left',  # x=2.2是文字的左端位置，可选'center', 'right', 'left'
                     va='baseline',  # y=8是文字的低端位置，可选'center', 'top', 'bottom', 'baseline', 'center_baseline'
                     fontdict=dict(fontsize=12,
                                   color='r',
                                   family='monospace',
                                   weight='bold',
                                   )  # 字体属性设置
                     )
            mae += abs(float(output.data.sum()) - float(density_img.sum()))
            mse += (float(output.data.sum()) - float(density_img.sum())) ** 2

            # show and save image
            img = plt.imread(img_item)
            plt.imshow(img)
            plt.imshow(density_img, alpha=0.4, cmap='rainbow')  # alpha设置透明度, cmap可以选择颜色
            plt.text(x=10,  # 文本x轴坐标
                     y=30,  # 文本y轴坐标
                     s='target:{}'.format(int(density_img.sum())),  # 文本内容
                     ha='left',  # x=2.2是文字的左端位置，可选'center', 'right', 'left'
                     va='baseline',  # y=8是文字的低端位置，可选'center', 'top', 'bottom', 'baseline', 'center_baseline'
                     fontdict=dict(fontsize=12,
                                   color='r',
                                   family='monospace',
                                   weight='bold',
                                   )  # 字体属性设置
                     )
            print(f'idx:{i} | MAE:{mae} | MSE:{mse}')
            # plt.savefig("./img_out/part_B/{}.jpg".format(i))
            plt.show()
            plt.cla()

    N = len(test_list)
    mae = mae / N
    mse = math.sqrt(mse / N)
    print(' img * MAE {mae:.3f} \t    img * MSE {mse:.3f}'.format(mae=mae, mse=mse))


def test_ucf(model):
    print('begin test')
    with open(args.test_json, 'r') as outfile:
        test_list = json.load(outfile)

    transform = transforms.Compose([transforms.ToTensor(),
                                    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                                         std=[0.229, 0.224, 0.225])])
    dataset = mydataset.listDataset(test_list, transform=transform)
    test_loader = torch.utils.data.DataLoader(dataset, shuffle=False, batch_size=1)

    model.eval()

    mae = 0
    mse = 0

    for i, (img, target) in enumerate(test_loader):
        img = img.cuda()
        img = Variable(img)

        people = 0
        img_patches = crop_img_patches(img, size=512)
        for patch in img_patches:
            with torch.no_grad():
                sub_output = model(patch)
            people += sub_output.data.sum()
        print('people:', people)
        error = people - target.sum().type(torch.FloatTensor).cuda()
        mae += abs(error)
        mse += error.pow(2)

    N = len(test_loader)
    mae = mae / N
    mse = torch.sqrt(mse / N)
    print(' * MAE {mae:.3f} \t    * MSE {mse:.3f}'.format(mae=mae, mse=mse))

    return mae, mse


@get_use_time
def run_model(img: [Path, CvImg], model) -> int:
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225])])
    if isinstance(img, Path):
        img = cv2.imread(img)
        if img.shape[2] != 3:
            img = cv2.cvtColor(img, cv2.COLOR_GRAY2RGB)
        else:
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    elif isinstance(img, CvImg):
        img = img

    img = transform(img)
    img = torch.unsqueeze(img, 0)

    model.eval()
    img = img.cuda() if CUDA_AVAILABLE else img
    img = Variable(img)

    with torch.no_grad():
        output = model(img)

    return int(output.data.sum())


if __name__ == '__main__':
    main(args)
