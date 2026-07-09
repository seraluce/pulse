---
title: 'Claude Sonnet 5 发布：Anthropic 的 Agent 时代来了'
description: 'Anthropic 发布 Claude Sonnet 5，以 $2/百万 token 的入门价提供接近 Opus 4.8 的性能，Agentic 编码基准达到 63.2%，标志着 AI 从对话工具向自主 Agent 的转型。'
slug: '20260709'
pubDate: 2026-07-09
image: '/images/blog/brand-building.png'
tags: ['Anthropic', 'Claude', 'AI 模型', 'Agent']
author: 'Pulse'
---

2026 年 6 月 30 日，Anthropic 正式发布 Claude Sonnet 5，这是其迄今为止最具 Agent 能力的 Sonnet 系列模型。在距离上一代 Sonnet 4.6 发布仅数月后，Sonnet 5 在多个维度上实现了显著跃升，尤其在自主编码和多步骤任务执行方面。

## 性能直逼 Opus

Sonnet 5 在 SWE-Bench Pro 上取得了 63.2% 的成绩，较 Sonnet 4.6 的 58.1% 提升 5.1 个百分点。在 Terminal-Bench 2.1 上，提升幅度更达到 13.4%。Humanity's Last Exam 无工具模式下得分 43.2%，有工具模式攀升至 57.4%。

在知识工作评估 GDPval-AA v2 上，Sonnet 5 获得 1618 分，而 Sonnet 4.5 仅为 1395 分。OSWorld-Verified（计算机使用能力）得分 81.2%，较前代提升 8.7 个百分点。

Anthropic 表示，Sonnet 5 在多个指标上已经接近 Opus 4.8 的表现，但成本显著更低。

## 入门定价策略

Sonnet 5 的入门定价为每百万输入 token 2 美元、每百万输出 token 10 美元，有效期至 2026 年 8 月 31 日。到期后价格将调整为 3 美元和 15 美元，与竞争对手 OpenAI 的 GPT-5.6 Terra 处于同一水平。

对比来看，GPT-5.6 Terra 定价为 $2.50/$15，而 Opus 4.8 的定价为 $15/$75。Sonnet 5 以 Opus 约五分之一的价格，提供了接近 Opus 级别的能力。

## 更自主，也更安全

早期测试用户反馈，Sonnet 5 比前代更"主动"。它会在未被要求的情况下自行检查输出质量，能够完成此前 Sonnet 模型无法独立完成的复杂任务，并且在 Agent 场景下的表现远超前代。

安全方面，Anthropic 的安全评估显示，Sonnet 5 的不良行为率整体低于 Sonnet 4.6，能更有效地拒绝恶意请求和抵御提示注入攻击。幻觉率和谄媚率也均有下降。

值得注意的是，Anthropic 表示 Sonnet 5 的网络安全能力被刻意控制，它无法构建可用的漏洞利用代码。这与此前 Anthropic 前沿模型因安全顾虑被美国政府限制形成鲜明对比——Sonnet 5 从一开始就内置了默认开启的网络安全防护。

## 行业影响

Sonnet 5 的发布恰逢 AI 行业的关键转折点。就在同一周，OpenAI 的 GPT-5.6 因美国政府要求而限制发布，xAI 更名为 SpaceXAI，AI 行业正经历从技术竞赛到商业化落地的全面转型。

分析师认为，Sonnet 5 标志着 AI 模型从"对话工具"向"自主 Agent"的转变已经不可逆转。当一款中端模型能够自主规划、执行和验证多步骤任务时，企业级 AI 应用的门槛正在急剧降低。

Sonnet 5 现已面向所有订阅层级开放，包括免费版和专业版用户可通过 Claude 聊天界面直接使用。开发者可通过 Claude API、AWS Bedrock、Google Vertex AI 和 Microsoft Azure 调用。
