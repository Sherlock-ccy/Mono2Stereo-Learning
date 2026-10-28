# DreamStereo：几何感知投影与稀疏立体修复

**论文**：DreamStereo: Towards Real-Time Stereo Inpainting for HD Videos（CVPR 2026）。

## 研究定位

这项工作主要关注**stereo inpainting（立体遮挡补全）**的投影质量、数据构造和推理效率，不应把它直接与全流程单目立体视频生成系统等同。

## 三个关键词

- **GAPW**：Gradient-Aware Parallax Warping，利用坐标映射的梯度性质改善投影与 Mask 的边界质量。
- **PBDP**：Parallax-Based Dual Projection，从单目数据构造用于立体修复的训练配对。
- **SASI**：Sparsity-Aware Stereo Inpainting，减少不必要的视觉 token 处理，提高速度。

## 与研究问题的关系

它已经研究了**几何映射与边界质量**。因此，若仅把深度梯度阈值化后扩张 Mask，难以证明独立新意。可深入讨论**已覆盖但不可靠像素**与正常遮挡竞争如何区分。

关联：[遮挡 Mask](../02-Core-Technologies/occlusion-mask) · [研究想法与证据等级](../07-Research/research-questions)。
