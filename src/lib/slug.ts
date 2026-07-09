export function getEffectiveSlug(post: { id: string; data: { slug?: string | null; pubDate: Date } }): string {
	if (post.data.slug) return post.data.slug;
	const base = String(post.data.pubDate.getTime()).slice(0, 8);
	let h = 0;
	for (let i = 0; i < post.id.length; i++) {
		h = ((h << 5) - h + post.id.charCodeAt(i)) | 0;
	}
	return base + String(Math.abs(h) % 10000).padStart(4, '0');
}
