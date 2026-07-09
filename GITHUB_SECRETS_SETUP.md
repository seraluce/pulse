# GitHub Secrets 配置指南

## 📋 需要配置的 Secrets

根据你的仓库信息：`https://github.com/seraluce/pulse`

请按以下步骤在 GitHub 网页上配置三个 Secrets：

### 1. Cloudflare API Token

**Token**: 

**配置步骤**：
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 点击右上角头像 → **My Profile**
3. 左侧菜单找到 **API Tokens**
4. 点击 **Create Token**
5. 选择 **Edit Cloudflare Workers** 模板
6. 配置权限：
   - Account: Cloudflare Workers Scripts: Edit
   - Account: Cloudflare Workers KV Storage: Edit
   - Zone: Zone: Read
   - Zone: Cache Purge: Purge
7. 点击 **Continue to summary** → **Create Token**
8. 复制生成的 Token（如果需要重新生成）

**添加到 GitHub**：
1. 进入 GitHub 仓库：`https://github.com/seraluce/pulse`
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 点击 **New repository secret**
4. 配置：
   - Name: `CLOUDFLARE_API_TOKEN`
   - Secret: `[你的 Token]`
5. 点击 **Add secret**

### 2. Cloudflare Account ID

**Account ID**: `[你的 Cloudflare Account ID]`

**获取步骤**：
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 在任意站点页面，右侧边栏找到 **Account ID**
3. 复制该 ID

**添加到 GitHub**：
1. 点击 **New repository secret**
2. 配置：
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Secret: `[你的 Cloudflare Account ID]`
3. 点击 **Add secret**

### 3. Cloudflare Zone ID（可选）

**获取步骤**：c483d3b
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 选择任意站点
3. 在右侧边栏找到 **Zone ID**
4. 复制该 ID

**添加到 GitHub**：
1. 点击 **New repository secret**
2. 配置：
   - Name: `CLOUDFLARE_ZONE_ID`
   - Secret: `[你的 Zone ID]`
3. 点击 **Add secret**

**注意**：如果你不需要自动清理 CDN 缓存，可以暂时不配置这个 Secret。缓存会在 24 小时后自动过期。

## ✅ 配置完成后的测试

配置完成后，测试自动部署：

1. **提交并推送代码**：
   ```bash
   git add .
   git commit -m "测试自动部署"
   git push origin main
   ```

2. **查看部署状态**：
   - 进入 GitHub 仓库的 **Actions** 标签
   - 应该能看到 "Deploy to Cloudflare Workers" 工作流正在运行
   - 点击查看详细日志

3. **验证部署**：
   - 等待部署完成后，访问：https://pulse.seraluce.workers.dev
   - 确认网站正常访问

## 🔍 查看已配置的 Secrets

1. 进入 GitHub 仓库：`https://github.com/seraluce/pulse`
2. 点击 **Settings** → **Secrets and variables** → **Actions**
3. 在列表中可以看到已添加的 Secrets（Value 会显示为 `***`）

## ⚠️ 注意事项

1. **Secrets 保护**：
   - Secrets 只能在 GitHub 网页上添加或删除
   - 值会被加密存储，不会显示在日志中
   - 不要在代码中硬编码 Secrets

2. **权限检查**：
   - 确保你的 API Token 有足够的权限
   - 如果部署失败，检查 Actions 日志中的错误信息

3. **缓存清理**：
   - 配置了 Zone ID 后，每次部署会自动清理 CDN 缓存
   - 如果不需要自动清理，可以从工作流中移除相关步骤

## 📞 如遇问题

如果配置或部署过程中遇到问题：

1. 检查 Actions 日志中的错误信息
2. 确认 API Token 权限是否正确
3. 验证 Account ID 和 Zone ID 是否正确
4. 查看官方文档：[Cloudflare Workers 部署](https://developers.cloudflare.com/workers/)
