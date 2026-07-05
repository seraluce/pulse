import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

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

	// 将标题拆分为多行（每行最多 12 个字符）
	const lines: string[] = [];
	const maxCharsPerLine = 12;
	let remaining = title;
	while (remaining.length > 0) {
		if (remaining.length <= maxCharsPerLine) {
			lines.push(remaining);
			break;
		}
		let breakAt = maxCharsPerLine;
		const punctuation = '，。、；：！？';
		for (let i = maxCharsPerLine; i > maxCharsPerLine - 4 && i > 0; i--) {
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

	// 根据标题长度生成不同的渐变配色
	const colorSets = [
		{ c1: '#8b5cf6', c2: '#3b82f6', c3: '#ec4899' }, // 紫蓝粉
		{ c1: '#06b6d4', c2: '#8b5cf6', c3: '#f59e0b' }, // 青紫橙
		{ c1: '#ec4899', c2: '#8b5cf6', c3: '#06b6d4' }, // 粉紫青
		{ c1: '#10b981', c2: '#3b82f6', c3: '#8b5cf6' }, // 绿蓝紫
		{ c1: '#f59e0b', c2: '#ec4899', c3: '#8b5cf6' }, // 橙粉紫
	];
	const colors = colorSets[title.length % colorSets.length];

	// 计算标题垂直居中位置
	const lineHeight = 72;
	const totalHeight = lines.length * lineHeight;
	const startY = (675 - totalHeight) / 2 + lineHeight - 18;

	const titleSvg = lines.map((line, i) =>
		`<text x="600" y="${startY + i * lineHeight}" font-family="'PingFang SC', 'Noto Sans SC', sans-serif" font-size="56" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-1">${escapeXml(line)}</text>`
	).join('\n');

	const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
			<feGaussianBlur in="SourceGraphic" stdDeviation="80"/>
		</filter>
		<linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#000000" stop-opacity="0.3"/>
			<stop offset="50%" stop-color="#000000" stop-opacity="0"/>
			<stop offset="100%" stop-color="#000000" stop-opacity="0.4"/>
		</linearGradient>
	</defs>

	<!-- 深色背景 -->
	<rect width="1200" height="675" fill="#0a0a0a"/>

	<!-- 渐变光效 -->
	<g filter="url(#blur)">
		<circle cx="250" cy="200" r="280" fill="${colors.c1}" opacity="0.6"/>
		<circle cx="900" cy="450" r="320" fill="${colors.c2}" opacity="0.5"/>
		<circle cx="600" cy="340" r="200" fill="${colors.c3}" opacity="0.4"/>
	</g>

	<!-- 暗角遮罩 -->
	<rect width="1200" height="675" fill="url(#overlay)"/>

	<!-- 标题文字 -->
	${titleSvg}
</svg>`;

	return new Response(svg, {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Cache-Control': 'public, max-age=86400',
		},
	});
};

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map(post => ({
		params: { slug: post.id },
	}));
}

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
