import type { APIRoute } from 'astro';
import { getSeoConfig } from '@/config/seo';

export const GET: APIRoute = async () => {
	const seoEs = getSeoConfig('es');
	const seoEn = getSeoConfig('en');
	const baseUrl = seoEs.siteUrl;

	const pages = [
		{
			loc: baseUrl + '/',
			lastmod: new Date().toISOString().split('T')[0],
			changefreq: 'weekly',
			priority: '1.0',
			alternates: [
				{ hreflang: 'es', href: baseUrl + '/' },
				{ hreflang: 'en', href: baseUrl + '/en/' },
				{ hreflang: 'x-default', href: baseUrl + '/' },
			],
		},
		// Add more pages as needed
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
	.map(
		(page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${page.alternates
	.map(
		(alt) =>
			`    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>`
	)
	.join('\n')}
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		status: 200,
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
