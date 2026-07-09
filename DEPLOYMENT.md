# Cloudflare Workers 部署指南

## 📋 前置要求

1. **Cloudflare 账户**：注册并登录 [Cloudflare](https://dash.cloudflare.com)
2. **Wrangler CLI**：已全局安装 `wrangler`（`npm install -g wrangler`）
3. **API Token**：需要创建 Cloudflare API Token

## 🔧 配置步骤

### 1. 创建 Cloudflare API Token

1. 登录 Cloudflare Dashboard
2. 进入 **My Profile** > **API Tokens**
3. 点击 **Create Token**
4. 选择 **Edit Cloudflare Workers** 模板
5. 配置权限：
   - Account: Cloudflare Workers Scripts: Edit
   - Account: Cloudflare Workers KV Storage: Edit
   - Zone: Zone: Read
   - Zone: Cache Purge: Purge
6. 复制生成的 API Token

### 2. 获取 Account ID 和 Zone ID

1. 进入 Cloudflare Dashboard 的任意站点
2. 在右侧边栏找到 **Account ID** 和 **Zone ID**
3. 复制这些值

### 3. 配置 GitHub Secrets

在 GitHub 仓库中配置以下 Secrets：

- `CLOUDFLARE_API_TOKEN`: 你的 API Token
- `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID
- `CLOUDFLARE_ZONE_ID`: 你的 Zone ID（用于缓存清理）

### 4. 创建 KV Namespace（可选）

```bash
# 创建生产环境 KV
wrangler kv:namespace create "SESSION"

# 创建预览环境 KV
wrangler kv:namespace create "SESSION" --preview
```

将返回的 ID 更新到 `wrangler.toml` 中。

## 🚀 部署方式

### 方式一：自动部署（推荐）

1. 将代码推送到 `main` 分支
2. GitHub Actions 会自动：
   - 运行类型检查
   - 构建项目
   - 部署到 Cloudflare Workers
   - 清理 CDN 缓存

### 方式二：手动部署

```bash
# 构建并部署到生产环境
pnpm deploy

# 部署到预览环境
pnpm deploy:preview

# 或使用 wrangler 直接部署
pnpm build
wrangler deploy --config dist/server/wrangler.json
```

### 方式三：本地开发测试

```bash
# 启动开发服务器
pnpm dev

# 本地测试 Workers
wrangler dev --config dist/server/wrangler.json
```

## 🔍 验证部署

1. 访问你的 Workers 域名：`https://pulse.<your-subdomain>.workers.dev`
2. 检查 Cloudflare Dashboard 中的 Workers 日志
3. 验证功能是否正常

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本（需要 >= 22.12.0）
   - 清除缓存：`rm -rf node_modules pnpm-lock.yaml && pnpm install`

2. **部署失败**
   - 验证 API Token 权限
   - 检查 Account ID 是否正确
   - 查看 GitHub Actions 日志

3. **KV 绑定错误**
   - 确保 KV Namespace 已创建
   - 验证 `wrangler.toml` 中的 ID 是否正确

4. **缓存问题**
   - 手动清理缓存：在 Cloudflare Dashboard 中操作
   - 检查 `_headers` 文件配置

## 📊 监控和优化

1. **查看日志**
   ```bash
   wrangler tail
   ```

2. **性能监控**
   - 在 Cloudflare Dashboard 查看 Workers 分析
   - 监控 CPU 时间、内存使用等

3. **成本优化**
   - 免费额度：每天 100,000 个请求
   - 超出后按 $0.50/百万请求计费

## 🔄 更新部署

每次推送到 `main` 分支都会自动触发部署。如需手动触发：

1. 进入 GitHub 仓库
2. 点击 **Actions** 标签
3. 选择 **Deploy to Cloudflare Workers** 工作流
4. 点击 **Run workflow**

## 📝 注意事项

1. **环境变量**：敏感信息请使用 GitHub Secrets，不要提交到代码仓库
2. **预览部署**：PR 会自动创建预览部署，方便测试
3. **回滚**：在 Cloudflare Dashboard 中可以回滚到之前的版本
4. **自定义域名**：可以在 Cloudflare Dashboard 中为 Workers 添加自定义域名

## 🔗 相关链接

- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Astro Cloudflare 适配器](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
