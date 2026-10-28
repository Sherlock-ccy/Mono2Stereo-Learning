# Forward Splatting：像素从源图像走向目标图像

## 一句话

对每个源像素，根据视差或光流计算其目标位置，并将其值**散射**到周围目标像素。它与目标像素主动查询源图像的 backward warping 不同。

![前向投影原理图](/images/splatting.svg)

## 简化公式

对整列平行双目，$u_R=u_L-d(u_L,v)$。如果位置不是整数，通常通过双线性核向附近 4 个目标位置分配贡献。令 $b_i(x)$ 表示离散插值权重，$z_i$ 表示重要性值，则

$$\hat I_R(x)=\frac{\sum_i b_i(x)e^{z_i}I_L(i)}{\sum_i b_i(x)e^{z_i}+\epsilon}.$$

这是一类 Softmax Splatting 加权融合形式，并非所有 Forward Splatting 都采用指数加权。

## 两个问题

1. **空洞**：目标位置无源像素贡献；需补全或跨时间传播。
2. **碰撞**：多个源像素投向一个位置；需要深度排序、权重分配或可见性判断。

> [!WARNING] 有投影碰撞不等于有错误覆盖。深度正确时，前景遮挡背景属于正常的可见性结果。投影数量、权重熵等只能作为可能的风险线索。

## 伪代码

```python
# 教学伪代码：忽略亚像素插值与边界检查细节
for y, x in source_pixels:
    target_x = x - disparity[y, x]
    accumulate(target_x, y, color[y, x], weight[y, x])
result = weighted_sum / (weight_sum + eps)
```

下一步：[遮挡 Mask](./occlusion-mask)、[投影贡献统计图解](../04-Code-Analysis/contribution-analysis)、[Softmax Splatting](../03-Papers/softmax-splatting)。
