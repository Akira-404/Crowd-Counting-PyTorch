import argparse
import h5py
import scipy.io as io
import numpy as np
import os
import glob
from matplotlib import pyplot as plt
from scipy.ndimage.filters import gaussian_filter
import scipy
import scipy.spatial
import cv2

parser = argparse.ArgumentParser(description='Files path')
parser.add_argument('-r', '--root', default='/home/cv/AI_Data/ShanghaiTech//ShanghaiTech', type=str,
                    help='Root path')

args = parser.parse_args()

part_A_train = os.path.join(args.root, 'part_A/train_data', 'ground-truth')
part_A_test = os.path.join(args.root, 'part_A/test_data', 'ground-truth')
part_B_train = os.path.join(args.root, 'part_B/train_data', 'ground-truth')
part_B_test = os.path.join(args.root, 'part_B/test_data', 'ground-truth')
path_sets = [part_A_train, part_A_test, part_B_train, part_B_test]

# h5_set_path = []
# img_set_path = []
# mat_set_path = []
for path in path_sets:
    mat_set_path = glob.glob(os.path.join(path, '*.mat'))

h5_set_path = [item.replace('ground-truth', 'ground-truth-h5').replace('mat', 'h5').replace('GT_IMG', 'IMG') for
               item in mat_set_path]

img_set_path = [item.replace('ground-truth', 'images').replace('mat', 'jpg').replace('GT_IMG', 'IMG') for item in
                mat_set_path]

cnt = 1

for mat_file, h5_file, img_file in zip(mat_set_path, h5_set_path, img_set_path):
    print(f'img:{img_file}\nmat:{img_file}\nh5:{h5_file}')
    cnt += 1
    with h5py.File(h5_file, 'r') as f:
        mat = io.loadmat(mat_file)
        # print(mat['image_info'].dtype)
        # print(mat['image_info'][0, 0])
        density_img = f['density'][:]
        print(density_img.sum())
        img = plt.imread(img_file)
        plt.subplot(1, 2, 1)
        plt.imshow(img)

        plt.subplot(1, 2, 2)
        plt.imshow(density_img)

        plt.show()
