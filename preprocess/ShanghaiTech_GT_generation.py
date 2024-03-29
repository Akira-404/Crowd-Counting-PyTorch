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

parser = argparse.ArgumentParser(description='Files path')
parser.add_argument('-r', '--root', default='/home/cv/AI_Data/ShanghaiTech/ShanghaiTech', type=str,
                    help='Dataset root path')

args = parser.parse_args()


def gaussian_filter_density(gt):
    density = np.zeros(gt.shape, dtype=np.float32)
    gt_count = np.count_nonzero(gt)  # nonzero value represent people in labels
    if gt_count == 0:  # gt_count is the amount of people
        return density

    pts = np.array(list(zip(np.nonzero(gt)[1], np.nonzero(gt)[0])))  # human label position
    leafsize = 2048
    # build kdtree
    tree = scipy.spatial.KDTree(pts.copy(), leafsize=leafsize)
    # query kdtree
    distances, locations = tree.query(pts, k=4)

    print('generate density...')
    for i, pt in enumerate(pts):
        pt2d = np.zeros(gt.shape, dtype=np.float32)
        pt2d[pt[1], pt[0]] = 1.
        if gt_count > 1:
            sigma = (distances[i][1] + distances[i][2] + distances[i][3]) * 0.1
        else:
            sigma = np.average(np.array(gt.shape)) / 2. / 2.  # case: 1 point
        density += scipy.ndimage.filters.gaussian_filter(pt2d, sigma, mode='constant')
    print('done.')
    return density


# now generate the ShanghaiA's ground truth
part_A_train = os.path.join(args.root, 'part_A/train_data')
part_A_test = os.path.join(args.root, 'part_A/test_data')
part_B_train = os.path.join(args.root, 'part_B/train_data')
part_B_test = os.path.join(args.root, 'part_B/test_data')
path_sets = [part_A_train, part_A_test]
img_paths = []

for path in path_sets:
    for img_path in glob.glob(os.path.join(path, 'images', '*.jpg')):
        img_paths.append(img_path)

for img_path in img_paths:
    # for every image
    print('image path: ', img_path)
    mat = io.loadmat(img_path.replace('images', 'ground-truth').replace('IMG_', 'GT_IMG_').replace('.jpg', '.mat'))
    img = plt.imread(img_path)
    k = np.zeros((img.shape[0], img.shape[1]))

    # 坐标值 [people_num,(x,y)]
    gt = mat["image_info"][0, 0][0, 0][0]

    for i in range(0, len(gt)):
        if int(gt[i][1]) < img.shape[0] and int(gt[i][0]) < img.shape[1]:
            k[int(gt[i][1]), int(gt[i][0])] = 1

    k = gaussian_filter_density(k)
    # save the Density Maps GT as h5 format

    if os.path.exists(os.path.join(args.root, 'ground-truth-h5')) is False:
        os.mkdir(os.path.join(args.root, 'ground-truth-h5'))
    with h5py.File(img_path.replace('images', 'ground-truth-h5').replace('.jpg', '.h5'), 'w') as hf:
        hf['density'] = k

# now generate the ShanghaiB's ground truth
path_sets = [part_B_train, part_B_test]

img_paths = []
for path in path_sets:
    for img_path in glob.glob(os.path.join(path, 'images', '*.jpg')):
        img_paths.append(img_path)

for img_path in img_paths:
    print(img_path)
    mat = io.loadmat(img_path.replace('images', 'ground-truth').replace('IMG_', 'GT_IMG_').replace('.jpg', '.mat'))
    img = plt.imread(img_path)
    k = np.zeros((img.shape[0], img.shape[1]))
    gt = mat["image_info"][0, 0][0, 0][0]
    for i in range(0, len(gt)):
        if int(gt[i][1]) < img.shape[0] and int(gt[i][0]) < img.shape[1]:
            k[int(gt[i][1]), int(gt[i][0])] = 1

    k = gaussian_filter(k, 15)  # fix 15

    if os.path.exists(os.path.join(args.root, 'ground-truth-h5')) is False:
        os.mkdir(os.path.join(args.root, 'ground-truth-h5'))
    with h5py.File(img_path.replace('images', 'ground-truth-h5').replace('.jpg', '.h5'), 'w') as hf:
        hf['density'] = k
