# 基于知识蒸馏的的人群统计模型

模型测试时间：2021-10-29

## DataSets

ShanghaiTech：[Kaggle](https://www.kaggle.com/) 官网可下载

UCF-QNRF：[UCF-QNRF](https://www.crcv.ucf.edu/research/data-sets/ucf-qnrf/) 官网可下载

## Prerequisites

Python:3.6

PyTorch:1.9

## Preprocessing

下载完整的数据集应该包含H5文件，如果没有包含通过以下命令进行H5文件的生成，。

```bash
#ShanghaiTech dataset
python preprocess/ShanghaiTech_GT_generation.py -root xxx/xxx/ShanghaiTech
#生成的文件在xxx/xxx/ShanghaiTech/part_A(B)/train_data(test_data)/ground-truth-h5/下

# UCF-QNRF
python preprocess/UCF_GT_generation.py --mode train
python preprocess/UCF_GT_generation.py --mode test
```

生成train.json test.json val.json

```bash
python preprocess/make_A_json.py --root xxx/xxx/ShanghaiTech
python preprocess/make_B_json.py -root xxx/xxx/ShanghaiTech
```

## Training

```bash
pyton train.py
```

Args具体情况请看代码

## Testing

```bash
#数据测试
python test.py --dataset ShanghaiTech or UCF

#图片测试
python test.py --img img.jpg
```

Args具体情况请看代码

## HTML Testing

提供了HTML 页面进行可视化调试，该部分正在进行开发测试

## Models

训练好的模型：[BaiduYun](https://pan.baidu.com/s/10_SLXF_FID9huRbzMHFT4A) (密码: srpl)

#### Shanghaitech A (576×864)
| Method           | MAE   | RMSE   | #Param (M) | FLOPs (G) | GPU (ms) | CPU (s) | Comment                                                      |
| ---------------- | ----- | ------ | ---------- | --------- | -------- | ------- | ------------------------------------------------------------ |
| CSRNet           | 68.43 | 105.99 | 16.26      | 205.88    | 66.58    | 7.85    | teacher model, trained with [CSRNet-pytorch](https://github.com/leeyeehoo/CSRNet-pytorch) |
| 1/4-CSRNet + SKT | 71.55 | 114.40 | 1.02       | 13.09     | 8.88     | 0.87    | --                                                           |
| BL               | 61.46 | 103.17 | 21.50      | 205.32    | 47.89    | 8.84    | teacher model                                                |
| 1/4-BL + SKT     | 62.73 | 102.33 | 1.35       | 13.06     | 7.40     | 0.88    | --                                                           |

#### UCF-QNRF (2032×2912)
| Method           | MAE    | RMSE   | #Param (M) | FLOPs (G) | GPU (ms) | CPU (s) | Comment                                                      |
| ---------------- | ------ | ------ | ---------- | --------- | -------- | ------- | ------------------------------------------------------------ |
| CSRNet           | 145.54 | 233.32 | 16.26      | 2447.91   | 823.84   | 119.67  | teacher model, trained with [CSRNet-pytorch](https://github.com/leeyeehoo/CSRNet-pytorch) |
| 1/4-CSRNet + SKT | 144.36 | 234.64 | 1.02       | 155.69    | 106.08   | 9.71    | --                                                           |
| BL               | 87.70  | 158.09 | 21.50      | 2441.23   | 595.72   | 130.76  | teacher model                                                |
| 1/4-BL + SKT     | 96.24  | 156.82 | 1.35       | 155.30    | 90.96    | 9.78    | The released model is much better.                           |

