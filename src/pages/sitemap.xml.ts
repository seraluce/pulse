import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

const staticPages = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/services', changefreq: 'monthly', priority: '0.8' },
	{ path: '/cases', changefreq: 'monthly', priority: '0.8' },
	{ path: '/blog', changefreq: 'weekly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.7' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.6' },
];

export const GET: APIRoute = async ({ url }) => {
	const siteUrl = url.origin;
	const posts = await getCollection('blog');

	const blogUrls = posts.map(post => `  <url>
    <loc>${siteUrl}/blog/${post.id}</loc>
    <lastmod>${post.data.pubDate.toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);

	const staticUrls = staticPages.map(p => `  <url>
    <loc>${siteUrl}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls].join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
