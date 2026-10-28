# ProPainter：光流传播与高效视频修复

**论文**：ProPainter: Improving Propagation and Transformer for Video Inpainting（ICCV 2023）· [项目](https://shangchenzhou.com/projects/ProPainter/)

## 研究问题

如何从远处时间帧传播真实可见内容，并减少时空 Transformer 处理大量无关区域带来的计算开销？

## 方法要点

图像与特征空间的双域传播；利用 Mask 引导的稀疏时空 Transformer，重点处理需要恢复的内容。

## 为什么要读？

立体视频新显露背景可能在其他帧中出现。相比凭空生成，跨帧匹配和传播可能更忠实地保留真实纹理。

但它是**通用视频修复**论文，不是完整的 mono-to-stereo 视频生成系统。作为修复组件的参考要比作为完整生成 baseline 更恰当。
