# Mono2Stereo-Learning｜单目立体视频生成中文学习库

> 从零系统学习 **单目视频 → 双目立体视频**：双目几何、深度与视差、视角变换、遮挡补全、视频扩散、论文精读、代码分析图和复现经验。

📖 **在线文档**：`https://<你的用户名>.github.io/Mono2Stereo-Learning/`（完成部署后生效）  
🚀 **部署教程**：[从本地预览到 GitHub Pages](DEPLOY_中文教程.md)  
🧭 **学习地图**：[查看](docs/00-Guide/learning-roadmap.md)

## 这是什么仓库？

- **知识主题驱动**：不是 StereoCrafter 专项仓库；每个技术点交叉关联多篇论文。
- **注重可理解性**：中文解释 + 公式 + 伪代码 + 常见坑 + 来源链接。
- **重视真实复现**：记录系统、GPU、依赖版本、实际运行命令、异常处理及验证方式。
- **代码图解**：绘图源文件（Mermaid）和 SVG 图同时保留，避免只有截图无法修改。
- **研究与学习分离**：个人未公开论文代码、数据、模型权重不直接提交到公开知识库。

## 站点与本地使用

要求 **Node.js 22+**（根据 VitePress 当前文档），打开终端：

```bash
npm install
npm run docs:dev
```

访问 http://localhost:5173/Mono2Stereo-Learning/ 。如端口变更，以终端输出为准。

构建站点：

```bash
npm run docs:build
npm run docs:preview
```

GitHub Pages 自动部署 workflow 已放在 `.github/workflows/deploy.yml`；首次需在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 知识板块

| 板块 | 内容 |
|---|---|
| 01 基础理论 | 双目几何、深度视差、相机模型、光流、扩散入门 |
| 02 核心技术 | 视频深度、前向投影、遮挡 Mask、视频补全、时序一致性 |
| 03 论文精读 | StereoCrafter、M2SVid、DreamStereo、Softmax Splatting 等 |
| 04 代码分析 | 全流程数据流、像素冲突、张量形状、源码阅读方法 |
| 05 安装复现 | CUDA、环境、模型部署、故障排查、日志模板 |
| 06 数据集评价 | Sintel、Spring、Stereo4D、图像和时序指标 |
| 07 研究思考 | 方法对比、失败案例、实验公平性、研究问题 |

### 内容说明

本仓库是一套**入门级到研究前期**的原创中文学习讲义与模板，非论文全文翻译。论文笔记区突出研究动机和思路，具体实验数字应以各论文原文为准。文中示意代码不是官方仓库的原样摘录，不能当作即插即用的工程实现。

相关论文、代码、权重归原作者及其许可方所有。本仓库不打包第三方权重、大型数据集或完整第三方源码。
