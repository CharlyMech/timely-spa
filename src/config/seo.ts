export const seoConfig = {
	es: {
		title: "Timely - Gestión Horaria Simplificada para PYMEs",
		description: "Timely es la solución de registro horario más simple y flexible para PYMEs. Ficha sin errores, cumple con la normativa laboral y olvídate de las complicaciones. Diseñado para equipos modernos.",
		keywords: [
			"registro horario",
			"control horario",
			"fichar trabajo",
			"gestión de tiempo",
			"PYME",
			"registro de jornada",
			"app de fichaje",
			"control de asistencia",
			"gestión laboral",
			"fichaje empleados",
			"registro trabajadores",
			"normativa laboral",
			"control presencia",
		],
		author: "Carlos Sánchez Recio (@CharlyMech)",
		ogImage: "/og-image-es.png",
		twitterHandle: "@CharlyMech",
		siteUrl: "https://timely.charlymech.com",
		siteName: "Timely",
		locale: "es_ES",
		alternateLocale: "en_US",
	},
	en: {
		title: "Timely - Simplified Time Tracking for SMEs",
		description: "Timely is the simplest and most flexible time tracking solution for SMEs. Clock in without errors, comply with labor regulations, and forget about complications. Designed for modern teams.",
		keywords: [
			"time tracking",
			"time management",
			"attendance tracking",
			"clock in app",
			"employee time tracking",
			"SME time tracking",
			"work hours tracking",
			"attendance management",
			"labor compliance",
			"workforce management",
			"employee clock in",
			"time clock software",
		],
		author: "Carlos Sánchez Recio (@CharlyMech)",
		ogImage: "/og-image-en.png",
		twitterHandle: "@CharlyMech",
		siteUrl: "https://timely.charlymech.com",
		siteName: "Timely",
		locale: "en_US",
		alternateLocale: "es_ES",
	},
};

export type SeoLanguage = keyof typeof seoConfig;

export function getSeoConfig(lang: SeoLanguage = "es") {
	return seoConfig[lang];
}
