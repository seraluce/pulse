import { defineMiddleware } from 'astro:middleware';

function setHeaders(headers: Headers) {
	headers.set('Cache-Control', 'public, max-age=600');
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('X-Frame-Options', 'DENY');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
}

export const onRequest = defineMiddleware(async (context, next) => {
	const response = await next();
	setHeaders(response.headers);
	return response;
});
