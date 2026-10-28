# 常见报错：从现象回溯原因

| 现象 | 可能原因 | 优先排查 |
|---|---|---|
| `ModuleNotFoundError` | 当前解释器与安装环境不一致 | `which python` / `where python`、`pip -V` |
| CUDA extension 编译失败 | nvcc、GCC/MSVC、PyTorch ABI 或显卡架构不匹配 | 编译日志**第一处 error**，版本与架构 |
| `CUDA out of memory` | 输入分辨率、帧长、模型和 attention 消耗过高 | 降低帧数/分辨率或使用切块 |
| 权重路径找不到 | 目录名不同、下载不完整 | 列出目录，核实配置参数 |
| 生成结果全黑/全灰 | 张量归一化、Mask 语义、解码或输入拼图错误 | 打印 min/max、shape、可视化输入 |
| 推理正常但非常慢 | 未使用 GPU、后备 CPU 实现、显存换页或多步采样 | 确认 device、扩展调用、步骤数 |
| GitHub Pages 404 | `base` 与仓库名不匹配，或 Actions 未成功 | `config.mts`、Pages 设置、Actions 日志 |

## 推荐的错误记录格式

**现象 → 原始报错 → 环境 → 复现命令 → 定位过程 → 解决方案 → 验证命令**。

不要只保存“安装成功”的截图；版本号、日志和 commit 才能让问题可复现。
