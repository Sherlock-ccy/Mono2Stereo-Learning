# StereoCrafter：几何投影与生成式立体补全

**论文**：[arXiv:2409.07447](https://arxiv.org/abs/2409.07447) · **官方代码**：[TencentARC/StereoCrafter](https://github.com/TencentARC/StereoCrafter)

## 解决什么问题？

把单目视频变成双目视频，同时提高新显露区域的视觉质量，并支持不同视频长度和分辨率。

## 一眼看懂方法

`左眼视频 → 视频深度估计 → 深度/视差引导 Forward Splatting → 初始右眼 + 空洞 Mask → 基于视频扩散的补全与修正 → 立体输出`。

## 关键技术

- 使用深度对目标右眼进行初始化，将相对可见的像素直接搬运。
- 使用预训练视频扩散模型并为立体补全任务微调。
- 通过视频分段和空间切块适应较长、高分辨率输入。

## 应该读哪部分源码？

重点跟踪 `depth_splatting_inference.py` 中的深度估计、`ForwardWarpStereo` 和 Mask，再看 `inpainting_inference.py` 的输入组织。详见[代码阅读方法](../04-Code-Analysis/source-reading)。

## 阅读疑问

1. 无覆盖空洞和已覆盖但错误混色区域如何区分？
2. 深度误差与 inpainting 误差如何隔离？
3. Mask 膨胀是否会过度重绘正确区域？

**关联**：[前向投影](../02-Core-Technologies/forward-splatting) · [遮挡 Mask](../02-Core-Technologies/occlusion-mask)。
