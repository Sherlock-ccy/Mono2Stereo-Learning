---
layout: home
hero:
  name: Mono2Stereo Learning
  text: 单目立体视频生成
  tagline: 从双目几何到视频生成：一份可检索、可复现、可持续更新的中文学习知识库
  actions:
    - theme: brand
      text: 开始学习
      link: /00-Guide/overview
    - theme: alt
      text: 浏览核心技术
      link: /02-Core-Technologies/index
features:
  - icon: 📐
    title: 基础理论
    details: 双目成像、深度视差、相机几何、光流与视频扩散。
    link: /01-Fundamentals/index
  - icon: 🧩
    title: 核心技术
    details: 视频深度、Forward Splatting、遮挡 Mask、修复与时序一致性。
    link: /02-Core-Technologies/index
  - icon: 📖
    title: 论文精读
    details: 对照多个研究流派，不以单个模型作为学习中心。
    link: /03-Papers/index
  - icon: 🧠
    title: 代码图解
    details: 数据流、张量形状、重投影贡献与源码阅读方法。
    link: /04-Code-Analysis/index
  - icon: 🛠️
    title: 安装复现
    details: 运行环境、安装流程、CUDA 算子、故障排查。
    link: /05-Reproduction/index
  - icon: 📊
    title: 数据与研究
    details: 评测协议、误差分析、方法对比与科研问题。
    link: /06-Evaluation/index
---

## 怎么使用这份知识库？

按 [学习路线](/00-Guide/learning-roadmap) 选择起点；遇到某个问题时可直接搜索，例如 `视差`、`遮挡 Mask`、`Forward Splatting`、`CUDA`。每个专题尽量采用 **直觉 → 数学定义 → 代码思路 → 易错点 → 关联论文** 的格式。

> [!NOTE] 关于“中文笔记”和“研究结论”
> 本站将基础概念、论文作者提出的方法、个人可验证的研究假设区别陈述。所有示意性计算、候选风险函数和优化方向都应通过实验验证，不能当作已证实的论文贡献。
