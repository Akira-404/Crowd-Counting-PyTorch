import os

import numpy
import numpy as np
from PIL import Image
from typing import Optional
from flask import Flask, jsonify, request, redirect, render_template

import cv2
from models.model_vgg import CSRNet as CSRNet_vgg
from models.model_student_vgg import CSRNet as CSRNet_student

from utils import cal_para, crop_img_patches, get_use_time, base64_to_cvimage, get_result

import torch
from torch.autograd import Variable
from torchvision import transforms

from flask import Flask

import argparse
import json
import time

parser = argparse.ArgumentParser(description='PyTorch CSRNet')

parser.add_argument('--test_json', metavar='TEST', default='preprocess/A_test.json',
                    help='path to test json')
parser.add_argument('--dataset', '-d', default='Shanghai', type=str,
                    help='Shanghai/UCF')
parser.add_argument('--checkpoint', '-c', metavar='CHECKPOINT', default='CSRNet_models_weights/partA_student.pth.tar', type=str,
                    help='path to the checkpoint')
parser.add_argument('--version', '-v', default='quarter_vgg', type=str,
                    help='vgg/quarter_vgg')
parser.add_argument('--transform', '-t', default=True, type=bool,
                    help='1x1 conv transform')
parser.add_argument('--batch', default=1, type=int,
                    help='batch size')
parser.add_argument('--gpu', metavar='GPU', default='0', type=str,
                    help='GPU id to use.')

args = parser.parse_args()

Path = str
CvImgType = np.ndarray
CUDA_AVAILABLE = torch.cuda.is_available()

app = Flask(__name__)

args.seed = time.time()

if CUDA_AVAILABLE:
    os.environ['CUDA_VISIBLE_DEVICES'] = args.gpu
    torch.cuda.manual_seed(args.seed)

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

model = model.cuda() if CUDA_AVAILABLE else ...

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
        print("=> loaded checkpoint '{}' (epoch {})"
              .format(args.checkpoint, checkpoint['epoch']))
    else:
        print("=> no checkpoint found at '{}'".format(args.checkpoint))

'''
input_data= {"image":"base64 code"}
'''


@get_use_time
@app.route('/get_people_num', methods=['POST'])
def get_people_num():
    params = request.json if request.method == "POST" else request.args
    print(type(params['image']))
    input_data = base64_to_cvimage(params["image"])

    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406],
                             std=[0.229, 0.224, 0.225]),
    ])
    if input_data.shape[2] != 3:
        img = cv2.cvtColor(input_data, cv2.COLOR_GRAY2RGB)
    else:
        img = cv2.cvtColor(input_data, cv2.COLOR_BGR2RGB)

    img = transform(img)
    img = torch.unsqueeze(img, 0)

    model.eval()
    img = Variable(img.cuda()) if CUDA_AVAILABLE else ...

    with torch.no_grad():
        output = model(img)
    ret_data = get_result(200, 'Success', int(output.data.sum()))
    return ret_data


app.config['JSON_AS_ASCII'] = False
app.run(host='0.0.0.0', port=24433, debug=True, use_reloader=False)
