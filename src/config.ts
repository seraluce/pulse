export const site = {
	title: 'Grateful Group',
	description: '专业企业服务平台，提供战略咨询、数字化转型、品牌建设、数据驱动等全方位解决方案，助力企业持续增长。',
	url: 'https://gratefulgroup.com',
	lang: 'zh-CN',
	locale: 'zh_CN',
	twitter: '@gratefulgroup',
	email: 'hello@gratefulgroup.com',
	phone: '010-0000-0000',
	address: '北京市朝阳区建国路88号',
	founded: '2015',
};

export type PageMeta = {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
};

export function getPageMeta(meta: PageMeta = {}) {
	const title = meta.title ? `${meta.title} - ${site.title}` : site.title;
	const description = meta.description || site.description;
	const url = meta.path ? `${site.url}${meta.path}` : site.url;
	const image = meta.image || `${site.url}/og-image.png`;

	return { title, description, url, image };
}
