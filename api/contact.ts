import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
	if (request.method !== 'POST') {
		return response.status(405).json({ error: 'Method not allowed' });
	}

	const { name, email, company, subject, message } = request.body || {};

	if (!name || !email || !message) {
		return response.status(400).json({ error: 'Missing required fields' });
	}

	// 这里可以集成邮件发送服务，如 Resend, SendGrid, Nodemailer 等
	// 示例：使用 fetch 调用第三方邮件 API
	/*
	const emailService = {
		apiKey: process.env.EMAIL_API_KEY,
		from: process.env.EMAIL_FROM || 'noreply@gratefulgroup.com',
		to: process.env.EMAIL_TO || 'hello@gratefulgroup.com',
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

	return response.status(200).json({
		success: true,
		message: '留言已收到，我们会尽快回复您！',
	});
}
