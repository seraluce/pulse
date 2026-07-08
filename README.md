# Pulse

AI Agents & ModelHub 聚合平台部署服务网站，基于 [Astro 7](https://astro.build) 构建。

为有需要的人提供 AI 智能体安装、ModelHub 聚合平台部署等专业服务。

## 技术栈

- **框架**: Astro 7.0 (SSR)
- **样式**: Scoped CSS + CSS Custom Properties
- **包管理**: pnpm
- **部署**: 支持 Cloudflare Pages / Vercel / Netlify

## 项目结构

```
├── public/                    # 静态资源
├── src/
│   ├── config.ts              # 全局配置（品牌、服务、案例）
│   ├── content.config.ts      # 内容集合配置
│   ├── content/blog/          # 博客文章（Markdown）
│   ├── components/            # UI 组件
│   ├── layouts/
│   │   └── Layout.astro       # 全局布局
│   └── pages/                 # 页面路由
├── api/contact.ts             # Vercel Serverless 表单处理
└── functions/api/contact.ts   # Cloudflare Pages Function 表单处理
```

## 快速开始

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## 配置

所有品牌信息集中在 `src/config.ts`，修改一处全局生效。

## 部署

### Cloudflare Pages
```bash
pnpm build
# 将 dist/ 目录部署到 Cloudflare Pages
```

### Vercel / Netlify
直接连接 Git 仓库，自动识别 Astro 项目。

## 页面

- **首页** `/` — Hero + 服务特色 + 关于 + CTA
- **服务** `/services` — 部署服务详情
- **案例** `/cases` — 部署案例展示
- **关于** `/about` — 团队故事、里程碑
- **联系** `/contact` — 联系表单 + FAQ
- **博客** `/blog` — 部署相关文章
