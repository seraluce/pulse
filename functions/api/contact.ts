export const onRequestPost: PagesFunction = async (context) => {
	const { request } = context;

	try {
		const body = await request.json();
		const { name, email, company, subject, message } = body;

		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ error: 'Missing required fields' }),
				{ status: 400, headers: { 'Content-Type': 'application/json' } }
			);
		}

		// 这里可以集成邮件发送服务
		// Cloudflare Workers 可以使用 fetch 调用第三方 API
		/*
		const emailService = {
			apiKey: context.env.EMAIL_API_KEY,
			from: context.env.EMAIL_FROM || 'noreply@gratefulgroup.com',
			to: context.env.EMAIL_TO || 'evanyanet@gmail.com',
		};

		await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${emailService.apiKey}`,
			},
			body: JSON.stringify({
				from: emailService.from,
				to: emailService.to,
				subject: `[官网留言] ${subject || '无主题'} - ${name}`,
				html: `
					<h2>新留言</h2>
					<p><strong>姓名:</strong> ${name}</p>
					<p><strong>邮箱:</strong> ${email}</p>
					<p><strong>公司:</strong> ${company || '未填写'}</p>
					<p><strong>主题:</strong> ${subject || '未选择'}</p>
					<p><strong>留言:</strong></p>
					<p>${message}</p>
				`,
			}),
		});
		*/

		console.log('New contact form submission:', { name, email, company, subject, message });

		return new Response(
			JSON.stringify({
				success: true,
				message: '留言已收到，我们会尽快回复您！',
			}),
			{ status: 200, headers: { 'Content-Type': 'application/json' } }
		);
	} catch (error) {
		return new Response(
			JSON.stringify({ error: 'Internal server error' }),
			{ status: 500, headers: { 'Content-Type': 'application/json' } }
		);
	}
};
