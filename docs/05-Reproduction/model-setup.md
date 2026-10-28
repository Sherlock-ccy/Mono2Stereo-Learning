# 模型部署的标准检查清单

## 不依赖模型名称的七步法

1. 下载官方源码，记录 Git commit 和许可证。
2. 阅读官方 README，明确 Python、CUDA、框架版本。
3. 创建**独立环境**，避免不同论文的依赖相互覆盖。
4. 安装 Python 依赖和自定义算子；保存完整日志。
5. 单独下载权重，验证目录结构与文件完整性。
6. 用官方最小示例跑一次，保存输入、参数、输出及运行耗时。
7. 在相同测试视频上重复实验，确定结果可复现。

## StereoCrafter 两阶段作为一个案例

先通过视频深度估计与视角投影形成中间结果，再调用视频补全生成最终右眼。**若官方 shell 脚本将第一阶段注释掉，运行前需先确认中间视频已经存在**。这一点应以你实际 clone 的源码版本为准。

## 权重与结果管理

权重统一置于不提交 Git 的 `weights/`；视频结果置于 `outputs/`，仅将经过授权的小体积示意图存入公开仓库。不要把下载的完整第三方代码或模型权重复制进这个学习库。

可参考 [官方 StereoCrafter](https://github.com/TencentARC/StereoCrafter) 和 [DepthCrafter](https://github.com/Tencent/DepthCrafter) 的 README。
