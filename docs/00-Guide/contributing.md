# 如何贡献和维护笔记

1. 新建专题：复制 `templates/note.md`，保存到相关 `docs/` 章节。
2. 在 `docs/.vitepress/config.mts` 的对应 sidebar 添加标题与链接。
3. 有引用的知识应附来源；自己假设应明确标注“待验证”。
4. 图片与图源分别保存，详见[图解规范](../04-Code-Analysis/diagram-guide)。
5. `npm run docs:build` 构建成功再提交；将学习笔记按主题更新。

公开素材需符合版权和数据许可，个人未公开实验请另行私有保存。
