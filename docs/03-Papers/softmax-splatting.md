# Softmax Splatting：从多源像素竞争理解投影

**论文**：[Softmax Splatting for Video Frame Interpolation (CVPR 2020)](https://arxiv.org/abs/2003.05534)

## 核心问题

Forward Warping 允许多个源像素投射到同一目标像素，简单求平均会混合深度不同的物体；用硬性的 Z-buffer 选择又可能不便于训练端到端系统。

## 核心思想

引入重要性得分，利用指数加权控制多源贡献，再归一化得到目标结果。原论文主要在**视频帧插值**任务中验证，不是专门的单目立体视频生成方法。

$$I(x)=\frac{\sum_i b_i(x)\exp(z_i)I_i}{\sum_i b_i(x)\exp(z_i)+\epsilon}.$$

## 与 StereoCrafter 有何联系？

单目立体重投影同样存在前后景投影竞争。这篇论文提供了理解**贡献融合**的基础，但**没有提出“错误覆盖 Mask 检测”这个完整方法**。

## 可做练习

模拟前景蓝色像素与背景黄色像素投到同一目标点，改变两者权重并观察混色。再想一想：高权重熵是否一定代表错误？答案是否定的。

关联：[投影贡献统计](../04-Code-Analysis/contribution-analysis)。
