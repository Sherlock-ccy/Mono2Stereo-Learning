# SpatialDreamer：自监督立体视频合成

**论文**：SpatialDreamer: Self-supervised Stereo Video Synthesis from Monocular Input（CVPR 2025）· [项目](https://spatialdreamer.github.io/)

## 研究动机

高质量双目视频训练数据有限，且跨视角/跨时间的几何一致性不易维持。

## 核心思路

构造与深度有关的自监督合成视频数据，为训练引入几何和时序线索，并设计一致性控制机制。

## 要问的问题

1. 自生成配对数据是否存在几何或遮挡偏差？
2. 跨帧一致性由哪个模块控制？
3. 与显式投影后补全路线相比，误差从哪里产生？

与 StereoCrafter 的差别，不仅在于是否使用扩散模型，更在于**训练信号来源和几何约束方式**。
