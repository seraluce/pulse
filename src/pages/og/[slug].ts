import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../../config';

export const GET: APIRoute = async ({ params }) => {
	const { slug } = params;
	if (!slug) {
		return new Response('Not found', { status: 404 });
	}

	const posts = await getCollection('blog');
	const post = posts.find(p => p.id === slug);

	if (!post) {
		return new Response('Post not found', { status: 404 });
	}

	const title = post.data.title;
	const description = post.data.description;
	const date = post.data.pubDate.toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	// 将标题拆分为多行（每行最多 14 个字符）
	const lines: string[] = [];
	const maxCharsPerLine = 14;
	let remaining = title;
	while (remaining.length > 0) {
		if (remaining.length <= maxCharsPerLine) {
			lines.push(remaining);
			break;
		}
		let breakAt = maxCharsPerLine;
		// 尝试在标点符号处断行
		const punctuation = '，。、；：！？';
		for (let i = maxCharsPerLine; i > maxCharsPerLine - 5 && i > 0; i--) {
			if (punctuation.includes(remaining[i - 1])) {
				breakAt = i;
				break;
			}
		}
		lines.push(remaining.slice(0, breakAt));
		remaining = remaining.slice(breakAt);
		if (lines.length >= 3) {
			lines[2] = remaining.slice(0, maxCharsPerLine) + (remaining.length > maxCharsPerLine ? '...' : '');
			break;
		}
	}

	const titleSvg = lines.map((line, i) =>
		`<text x="100" y="${300 + i * 64}" font-family="'PingFang SC', 'Noto Sans SC', sans-serif" font-size="48" font-weight="700" fill="#000" letter-spacing="-1">${escapeXml(line)}</text>`
	).join('\n');

	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
	<rect width="1200" height="630" fill="#fafafa"/>

	<!-- 抽象几何背景 -->
	<circle cx="950" cy="150" r="280" fill="none" stroke="#e8e8e8" stroke-width="1"/>
	<circle cx="950" cy="150" r="200" fill="none" stroke="#e0e0e0" stroke-width="1"/>
	<circle cx="950" cy="150" r="120" fill="none" stroke="#d8d8d8" stroke-width="1.5"/>
	<circle cx="950" cy="150" r="40" fill="#000" opacity="0.06"/>

	<line x1="0" y1="520" x2="1200" y2="520" stroke="#eaeaea" stroke-width="1"/>

	<rect x="80" y="80" width="4" height="60" fill="#000" opacity="0.1" rx="2"/>

	<!-- 标题 -->
	${titleSvg}

	<!-- 描述 -->
	<text x="100" y="${300 + lines.length * 64 + 20}" font-family="'PingFang SC', 'Noto Sans SC', sans-serif" font-size="20" fill="#888" letter-spacing="0">
		${escapeXml(truncate(description, 50))}
	</text>

	<!-- 底栏 -->
	<text x="100" y="575" font-family="'PingFang SC', 'Noto Sans SC', sans-serif" font-size="16" fill="#aaa">${escapeXml(site.title)}</text>
	<text x="1100" y="575" font-family="'PingFang SC', 'Noto Sans SC', sans-serif" font-size="16" fill="#aaa" text-anchor="end">${escapeXml(date)}</text>
</svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=86400',
		},
	});
};

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function truncate(str: string, max: number): string {
	return str.length > max ? str.slice(0, max) + '...' : str;
}
