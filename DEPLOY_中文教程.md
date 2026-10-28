# 从 Markdown 到 GitHub Pages：完整操作指南

## 0. 前提检查

仓库名称为 `Mono2Stereo-Learning`，默认分支为 `main`，已在本机安装 Git、Node.js **22 或更高**与 npm。打开项目根目录（和 `package.json` 同级）。

```powershell
node -v
npm -v
git status
```

## 1. 将 ZIP 内容合并到现有仓库

先备份现有 README 等文件。**解压后复制 `Mono2Stereo-Learning` 文件夹里面的内容**到你已经 clone 的同名仓库根目录；不要再套一层同名文件夹。注意 Windows 可能默认隐藏 `.github`、`.gitignore`、`.npmrc`，复制时也需保留。

## 2. 安装依赖，预览

```powershell
npm install
npm run docs:dev
```

首次安装会访问 npm，需要网络。预览地址通常为 `http://localhost:5173/Mono2Stereo-Learning/`；不要打开不带仓库名的 `/` 路径。按 `Ctrl+C` 停止。

如果下载依赖失败，检查 npm 网络、代理或镜像配置；不要把 `node_modules` 上传到 GitHub。

## 3. 构建生产站点

```powershell
npm run docs:build
npm run docs:preview
```

构建文件生成到 `docs/.vitepress/dist/`。项目仓库的 VitePress `base` 已设置为 `/Mono2Stereo-Learning/`，**如果修改仓库名，必须同步修改** `docs/.vitepress/config.mts` 中的 `base`。

## 4. 推送 GitHub

```powershell
git add .
git commit -m "docs: initialize mono2stereo knowledge base"
git push origin main
```

若已经有提交，先 `git pull --rebase origin main` 并处理冲突。默认分支若不是 `main`，需要相应修改 `.github/workflows/deploy.yml` 的触发分支。请勿覆盖 `.git` 文件夹或执行 `git init` 来重建现有仓库。

## 5. 打开 GitHub Pages

进入 GitHub 仓库：

1. 点击 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 在 **Actions** 页面查看 `Deploy VitePress to GitHub Pages` 是否构建成功。
4. 完成后访问 `https://你的GitHub用户名.github.io/Mono2Stereo-Learning/`。

页面 404 常见原因：仓库名和 `base` 不一致；Pages 来源未切换到 GitHub Actions；工作流尚未成功；组织策略限制 Pages；仓库尚未对 Pages 开放。先查看 Actions 日志。

## 6. 以后如何更新笔记

编辑 `docs/` 的 `.md` 文件；若是新文章，还需要在 `docs/.vitepress/config.mts` 侧栏添加链接。然后：

```powershell
git add .
git commit -m "docs: update learning notes"
git push origin main
```

推送到 `main` 后由 GitHub Actions 自动构建并发布。不需要安装 ChatGPT GitHub 插件。

## 7. 配图与公式

- 图片放在 `docs/public/images/`，文章内写 `![示意](/Mono2Stereo-Learning/images/splatting.svg)`；本项目优先使用相对路径或通过 `withBase` 的方式适配部署前缀。
- 自己绘制的流程图可以写 Mermaid 源码到 `diagrams/*.mmd`，同时导出 SVG 到 `docs/public/images/`；当前网站直接展示 SVG，不依赖 Mermaid 浏览器插件。
- 公式使用 `$...$` 或 `$$...$$`，由 VitePress 的 Markdown 数学渲染支持。

## 8. 安全和版权

不要上传模型权重、训练数据、账号令牌、私人实验记录或完整第三方仓库。翻译、截图、论文插图请标注来源并遵循授权。

## 9. 官方文档

- https://vitepress.dev/guide/getting-started
- https://vitepress.dev/guide/deploy
- https://docs.github.com/en/pages
