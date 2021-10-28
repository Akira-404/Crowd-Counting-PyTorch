#import h5py
import torch
import torch.nn as nn
import torch.nn.functional as F
from flask import jsonify
import shutil
import os
import time
import numpy as np
import base64
import cv2


def save_net(fname, net):
    with h5py.File(fname, 'w') as h5f:
        for k, v in net.state_dict().items():
            h5f.create_dataset(k, data=v.cpu().numpy())


def load_net(fname, net):
    with h5py.File(fname, 'r') as h5f:
        for k, v in net.state_dict().items():
            param = torch.from_numpy(np.asarray(h5f[k]))
            v.copy_(param)


def save_checkpoint(state, mae_is_best, mse_is_best, path, filename='checkpoint.pth.tar'):
    torch.save(state, os.path.join(path, filename))
    epoch = state['epoch']
    if mae_is_best:
        shutil.copyfile(os.path.join(path, filename), os.path.join(path, 'epoch' + str(epoch) + '_best_mae.pth.tar'))
    if mse_is_best:
        shutil.copyfile(os.path.join(path, filename), os.path.join(path, 'epoch' + str(epoch) + '_best_mse.pth.tar'))


def cal_para(net):
    params = list(net.parameters())
    k = 0
    for i in params:
        l = 1
        # print "stucture of layer: " + str(list(i.size()))
        for j in i.size():
            l *= j
        # print "para in this layer: " + str(l)
        k = k + l
    print("the amount of para: " + str(k))


def crop_img_patches(img, size=512):
    """ crop the test images to patches

    while testing UCF data, we load original images, then use crop_img_patches to crop the test images to patches,
    calculate the crowd count respectively and sum them together finally
    """
    w = img.shape[3]
    h = img.shape[2]
    x = int(w / size) + 1
    y = int(h / size) + 1
    crop_w = int(w / x)
    crop_h = int(h / y)
    patches = []
    for i in range(x):
        for j in range(y):
            start_x = crop_w * i
            if i == x - 1:
                end_x = w
            else:
                end_x = crop_w * (i + 1)

            start_y = crop_h * j
            if j == y - 1:
                end_y = h
            else:
                end_y = crop_h * (j + 1)

            sub_img = img[:, :, start_y:end_y, start_x:end_x]
            patches.append(sub_img)
    return patches


Path = str
CvImgType = np.ndarray


def image2base64(image_path: Path) -> str:
    with open(image_path, 'rb') as f:
        image = f.read()
    return str(base64.b64encode(image), encoding='UTF-8')


def base64_to_cvimage(base64_data: str) -> CvImgType:
    imgData = base64.b64decode(base64_data)
    nparr = np.fromstring(imgData, np.uint8)
    img_np = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    return img_np


def ndarray2base64(img_np: CvImgType):
    image = cv2.imencode('.jpg', img_np)[1]
    base64_data = str(base64.b64encode(image))[2:-1]
    return base64_data


def get_use_time(func):
    def wrapper(*args, **kwargs):
        t1 = time.time()
        res = func(*args, **kwargs)
        t2 = time.time()
        print('Function:{} Run Time:{} s'.format(func.__name__, t2 - t1))
        return res

    return wrapper


# 构建接口返回结果
def get_result(code, message, score):
    result = {
        "code": code,
        "message": message,
        "score": score,
    }
    print("Response data:", result)
    return jsonify(result)
