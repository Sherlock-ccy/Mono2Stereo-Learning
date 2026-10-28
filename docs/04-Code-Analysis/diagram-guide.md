# 如何维护可编辑的代码分析图

## 推荐规则

1. 图源放仓库 `diagrams/`：建议命名 `route-map.mmd`、`pipeline.mmd`。
2. 导出后 SVG 放 `docs/public/images/`；与图源使用同名。
3. Markdown 通过绝对站点路径嵌入，不直接上传手绘截图作唯一素材。
4. 图中注明哪些节点是抽象教学流程，避免被误认为某论文官方架构。

本仓库提供 3 张原创 SVG：技术路线、双目几何、Forward Splatting，以及完整推理数据流图。图源采用 Mermaid，SVG 由原创矢量布局生成（因此 SVG 与 `.mmd` 表达相同概念，但不是 Mermaid CLI 的逐像素导出）。

## 图片 Markdown 用法

```markdown
![前向投影示意](/images/splatting.svg)
```

如果以后使用自定义域名或修改仓库名，请同步调整含部署前缀的静态图片链接和 VitePress `base`。
