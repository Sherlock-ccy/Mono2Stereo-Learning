# 复现环境：GPU、驱动、CUDA 与 PyTorch

## 四个版本的关系

- **NVIDIA 驱动**：操作系统层面的 GPU 驱动，决定可支持的 CUDA 运行时上限。
- **CUDA Toolkit（nvcc）**：用于编译自定义 CUDA/C++ 扩展，不等于 PyTorch 自带的运行时。
- **PyTorch 安装包 CUDA 运行时**：`torch.version.cuda` 显示编译/发行目标版本。
- **GPU 架构**：新显卡需要匹配的 PyTorch wheel 和自定义编译目标。

## 运行检查

```bash
nvidia-smi
python --version
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

若使用自定义 CUDA 扩展，再运行 `nvcc --version`，检查编译器与 PyTorch 的兼容性。

## 关于 RTX 4090 / RTX 5090

老项目常写 CUDA 11.8 / Python 3.8。**不要在 RTX 5090 上直接盲目照搬老 CUDA/PyTorch 组合**，尤其要检查自定义算子的架构支持。先在独立虚拟环境中安装适配 GPU 的 PyTorch，再逐个构建扩展。

## 环境记录示例

```text
OS：
GPU / VRAM：
NVIDIA Driver：
Python：
PyTorch：
torch.version.cuda：
nvcc：
Commit：
命令：
结果：
```

安装以 [PyTorch 官方说明](https://pytorch.org/get-started/locally/) 和 [NVIDIA 官方文档](https://docs.nvidia.com/cuda/) 为准。
