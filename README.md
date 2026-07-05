# Grateful Group

专业企业服务平台官网，基于 [Astro 7](https://astro.build) 构建。

## 技术栈

- **框架**: Astro 7.0 (静态站点)
- **样式**: Scoped CSS + CSS Custom Properties
- **包管理**: pnpm
- **部署**: 支持 Cloudflare Pages / Vercel / Netlify

## 项目结构

```
├── public/                    # 静态资源
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── logo-light.svg         # 亮色模式 Logo
│   ├── logo-dark.svg          # 暗色模式 Logo
│   ├── robots.txt
│   ├── fonts/                 # 自定义字体
│   └── images/blog/           # 博客封面图
├── src/
│   ├── config.ts              # 全局配置（品牌、SEO、联系方式）
│   ├── content.config.ts      # 内容集合配置
│   ├── content/blog/          # 博客文章（Markdown）
│   ├── components/            # UI 组件
│   │   ├── Header.astro       # 导航栏（桌面文字 / 手机图标+下拉）
│   │   ├── Hero.astro         # 首屏（光晕 + 呼吸球 + 鼠标视差）
│   │   ├── Features.astro     # 服务特色
│   │   ├── About.astro        # 关于我们
│   │   ├── CTA.astro          # 行动号召
│   │   └── Footer.astro       # 页脚
│   ├── layouts/
│   │   └── Layout.astro       # 全局布局（SEO head、主题切换、CSS 变量）
│   └── pages/
│       ├── index.astro        # 首页
│       ├── services.astro     # 服务页
│       ├── cases.astro        # 案例页
│       ├── about.astro        # 关于页
│       ├── contact.astro      # 联系页（表单）
│       ├── sitemap.xml.ts     # 动态 Sitemap
│       └── blog/
│           ├── index.astro    # 博客列表
│           └── [slug].astro   # 文章详情
├── api/contact.ts             # Vercel Serverless 表单处理
└── functions/api/contact.ts   # Cloudflare Pages Function 表单处理
```

## 快速开始

```bash
# 安装依赖
pnpm install

# 本地开发
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 配置

所有品牌信息集中在 `src/config.ts`，修改一处全局生效：

```typescript
export const site = {
  title: 'Grateful Group',
  description: '...',
  url: 'https://gratefulgroup.com',
  email: 'evanyanet@gmail.com',

  // Favicon
  favicon: '/favicon.svg',
  faviconIco: '/favicon.ico',

  // Logo（亮/暗模式各一个）
  logo: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },

  // OG 分享图
  ogImage: '/og-image.png',

  // 表单服务
  formEndpoint: 'https://formspree.io/f/xqevnyjn',
};
```

## 博客

在 `src/content/blog/` 下新建 `.md` 文件即可发布文章：

```markdown
---
title: '文章标题'
description: '摘要描述，用于 SEO 和列表展示'
pubDate: 2026-07-01
image: '/images/blog/cover.jpg'   # 可选封面图
tags: ['标签1', '标签2']
author: 'Grateful Group'
---

正文内容，支持完整 Markdown 语法...
```

## 联系表单

表单支持多平台部署，自动适配：

| 平台 | 方案 | 配置 |
|------|------|------|
| 通用 | Formspree | `config.ts` 中设置 `formEndpoint` |
| Netlify | Netlify Forms | 自动，无需配置 |
| Vercel | Serverless Function | `api/contact.ts`，需配置邮件服务 |
| Cloudflare | Pages Function | `functions/api/contact.ts`，需配置邮件服务 |

## 部署

### Cloudflare Pages

```bash
pnpm build
# 将 dist/ 目录部署到 Cloudflare Pages
```

### Vercel

直接连接 Git 仓库，Vercel 自动识别 Astro 项目。

### Netlify

直接连接 Git 仓库，Netlify 自动处理表单和部署。

## 页面

- **首页** `/` — Hero + 服务特色 + 关于 + CTA
- **服务** `/services` — 服务与能力详情
- **案例** `/cases` — 客户案例展示
- **关于** `/about` — 公司故事、团队、里程碑
- **联系** `/contact` — 联系表单 + FAQ
- **博客** `/blog` — 文章列表与详情

## 功能

- 亮色 / 暗色模式切换（跟随系统 + 手动切换）
- 全端响应式（桌面 / 平板 / 手机）
- SEO 全套（Meta / Open Graph / Twitter Cards / JSON-LD / Sitemap / robots.txt）
- 首屏动效（模糊光晕 + 呼吸球 + 鼠标视差）
- 滚动动画（IntersectionObserver）
- 博客系统（Markdown + 封面图 + 标签 + 上下篇导航）
- 联系表单（多平台适配 + 验证 + Toast 反馈）

## License

MIT
