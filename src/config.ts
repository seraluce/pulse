export const site = {
	// 基本信息
	title: 'Grateful Group',
	description: '专业企业服务平台，提供战略咨询、数字化转型、品牌建设、数据驱动等全方位解决方案，助力企业持续增长。',
	url: 'https://gratefulgroup.com',
	lang: 'zh-CN',
	locale: 'zh_CN',
	twitter: '@gratefulgroup',
	email: 'seraluce@163.com',
	phone: '010-0000-0000',
	address: '北京市朝阳区建国路88号',
	founded: '2015',

	// Favicon
	favicon: '/favicon.svg',
	faviconIco: '/favicon.ico',
	appleTouchIcon: '/apple-touch-icon.png',

	// OG 图片
	ogImage: '/og-image.png',

	// Logo (SVG 路径，相对于 /public)
	logo: {
		light: '/logo-light.svg',
		dark: '/logo-dark.svg',
	},

	// Logo 尺寸
	logoWidth: 28,
	logoHeight: 28,

	// 表单服务（Formsubmit.co 无需注册，直接用邮箱）
	formEndpoint: 'https://formsubmit.co/ajax/seraluce@163.com',
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
	const image = meta.image ? `${site.url}${meta.image}` : `${site.url}${site.ogImage}`;

	return { title, description, url, image };
}
