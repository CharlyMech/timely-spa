import { Resend } from "resend";
import type { APIRoute } from "astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
	const now = Date.now();
	const maxRequests = parseInt(import.meta.env.RATE_LIMIT_MAX_REQUESTS || "5");
	const windowMs = 60 * 60 * 1000; // 1 hour

	const existing = rateLimitMap.get(ip);

	// Clean up expired entries
	if (existing && existing.resetAt < now) {
		rateLimitMap.delete(ip);
	}

	const current = rateLimitMap.get(ip);

	if (!current) {
		rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
		return { allowed: true, remaining: maxRequests - 1 };
	}

	if (current.count >= maxRequests) {
		return { allowed: false, remaining: 0 };
	}

	current.count += 1;
	return { allowed: true, remaining: maxRequests - current.count };
}

function sanitizeInput(input: string): string {
	return input.trim().slice(0, 1000); // Limit length
}

function isValidEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
	try {
		// Get client IP for rate limiting
		const ip = clientAddress || "unknown";

		// Check rate limit
		const rateLimit = checkRateLimit(ip);
		if (!rateLimit.allowed) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Too many requests. Please try again later.",
				}),
				{
					status: 429,
					headers: {
						"Content-Type": "application/json",
						"X-RateLimit-Remaining": "0",
					},
				}
			);
		}

		// Parse request body
		const body = await request.json();
		const { name, email, message } = body;

		// Validate input
		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "All fields are required.",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Validate email format
		if (!isValidEmail(email)) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Invalid email address.",
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		// Sanitize inputs
		const sanitizedName = sanitizeInput(name);
		const sanitizedEmail = sanitizeInput(email);
		const sanitizedMessage = sanitizeInput(message);

		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: import.meta.env.CONTACT_EMAIL_FROM,
			to: [import.meta.env.CONTACT_EMAIL],
			subject: `Timely - Nueva solicitud de contacto de ${sanitizedName}`,
			replyTo: sanitizedEmail,
			html: `
				<!DOCTYPE html>
				<html lang="es">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Nueva solicitud de contacto - Timely</title>
				</head>
				<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
					<div style="background: linear-gradient(135deg, #EFCC80 0%, #E8B84D 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
						<h1 style="color: #1A1A1A; margin: 0; font-size: 28px;">⏱️ Timely</h1>
						<p style="color: #1A1A1A; margin: 10px 0 0 0; font-size: 14px;">Nueva solicitud de contacto</p>
					</div>
					
					<div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
						<h2 style="color: #1A1A1A; margin-top: 0; font-size: 20px; border-bottom: 2px solid #EFCC80; padding-bottom: 10px;">Información del contacto</h2>
						
						<div style="margin-bottom: 15px;">
							<strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nombre:</strong>
							<p style="margin: 5px 0 0 0; color: #1A1A1A; font-size: 16px;">${sanitizedName}</p>
						</div>
						
						<div style="margin-bottom: 15px;">
							<strong style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email:</strong>
							<p style="margin: 5px 0 0 0;">
								<a href="mailto:${sanitizedEmail}" style="color: #EFCC80; text-decoration: none; font-size: 16px;">${sanitizedEmail}</a>
							</p>
						</div>
					</div>
					
					<div style="background: #f9f9f9; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
						<h2 style="color: #1A1A1A; margin-top: 0; font-size: 20px; border-bottom: 2px solid #EFCC80; padding-bottom: 10px;">Mensaje</h2>
						<p style="color: #333; white-space: pre-wrap; line-height: 1.8; margin: 0;">${sanitizedMessage}</p>
					</div>
					
					<div style="background: #fff3cd; padding: 15px; border-radius: 10px; border-left: 4px solid #EFCC80; margin-bottom: 20px;">
						<p style="margin: 0; color: #856404; font-size: 14px;">
							<strong>💡 Tip:</strong> Puedes responder directamente a este email. Tu respuesta llegará a ${sanitizedEmail}
						</p>
					</div>
					
					<div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
						<p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de Timely</p>
						<p style="margin: 5px 0 0 0;">IP: ${ip} | Fecha: ${new Date().toLocaleString(
				"es-ES"
			)}</p>
					</div>
				</body>
				</html>
			`,
		});

		if (error) {
			console.error("Resend error:", error);
			return new Response(
				JSON.stringify({
					success: false,
					error: "Failed to send email. Please try again later.",
				}),
				{
					status: 500,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: "Email sent successfully!",
				emailId: data?.id,
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
					"X-RateLimit-Remaining": rateLimit.remaining.toString(),
				},
			}
		);
	} catch (error) {
		console.error("Contact form error:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "An unexpected error occurred.",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
};
