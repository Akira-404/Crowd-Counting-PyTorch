"""
Make json files for dataset
"""
import json
import os
import argparse

parser = argparse.ArgumentParser(description='Root Path')
parser.add_argument('--root', '-r', type=str, default='/home/cv/AI_Data/ShanghaiTech/ShanghaiTech',
                    help='Dataset root path')
args = parser.parse_args()


def get_val(root: str):
    """
    Validation set follows part_A_val.json in CSRNet
    https://github.com/leeyeehoo/CSRNet-pytorch
    """
    with open('train_val_test_json/part_A_val.json', 'r') as f:
        val_list = json.load(f)

    new_val = []
    for item in val_list:
        new_item = item.replace('G:/AI_Data/ShanghaiTech/ShanghaiTech', root)
        new_val.append(new_item)
    with open('train_val_test_json/A_val.json', 'w') as f:
        json.dump(new_val, f)


def get_train(root: str):
    path = os.path.join(root, 'part_A', 'train_data', 'images')
    filenames = os.listdir(path)
    pathname = [os.path.join(path, filename) for filename in filenames]
    with open('train_val_test_json/A_train.json', 'w') as f:
        json.dump(pathname, f)


def get_test(root: str):
    path = os.path.join(root, 'part_A', 'test_data', 'images')
    filenames = os.listdir(path)
    pathname = [os.path.join(path, filename) for filename in filenames]
    with open('train_val_test_json/A_test.json', 'w') as f:
        json.dump(pathname, f)


if __name__ == '__main__':
    if args.root != '':
        get_train(args.root)
        get_val(args.root)
        get_test(args.root)
    print('Finish!')
