import type { Translations } from "./es";

export const en: Translations = {
	nav: {
		home: "Home",
		features: "Features",
		pricing: "Pricing",
		download: "Download",
		contact: "Contact",
	},
	hero: {
		title: "Time tracking",
		titleHighlight: "simplified",
		subtitle:
			"Timely is the simplest and most flexible way to comply with company's time tracking. Designed for SMEs that want accurate clock-ins without unnecessary costs or complications.",
		cta: {
			download: "Download App",
			demo: "Schedule Demo",
		},
		stats: {
			teams: "Professional teams",
		},
	},
	features: {
		title: "Why choose",
		titleHighlight: "Timely?",
		subtitle:
			"Because time tracking shouldn’t be another problem in your business. Timely removes complexity and focuses on what matters: clear, fast, and reliable work time records.",
		items: {
			simplicity: {
				title: "Simplicity first",
				description:
					"A system designed for the daily reality of SMEs. A shared device, visible users, and a clear flow to start and end the workday in just a few clicks—no training required, no mistakes.",
			},
			security: {
				title: "Secure and compliant data",
				description:
					"Work time records are stored securely and in an orderly manner, ready to be reviewed or presented during a labor inspection. Transparency, data integrity, and peace of mind for your business.",
			},
			customization: {
				title: "Tailored to your business",
				description:
					"Every company works differently. Timely adapts to your schedules, rules, and specific needs without forcing you to change how you operate.",
			},
		},
	},

	tech: {
		title: "Built with Modern",
		titleHighlight: "Technologies",
		items: {
			frontend: {
				title: "Cross-Platform Interface with Flutter",
				description:
					"Built with Flutter and Riverpod 3.0 for a smooth and reactive experience. Adaptive design that seamlessly adjusts to mobile and tablet devices with light and dark themes.",
			},
			backend: {
				title: "Scalable Clean Architecture",
				description:
					"Implements Clean Architecture with three well-defined layers. Interchangeable services between mock data for development and Firebase Firestore for production.",
			},
			integrations: {
				title: "Modular and Extensible System",
				description:
					"Architecture ready for future integrations. Clear separation of concerns that facilitates extension with REST APIs, payroll systems, and report exports.",
			},
		},
	},
	devices: {
		title: "and Platforms",
		titleHighlight: "Devices",
		subtitle:
			"Designed for tablets and mobile. Access from any device, anytime, anywhere.",
		badge: "PLATFORMS",
		platforms: {
			ios: "iOS Devices",
			android: "Android Devices",
		},
	},
	contact: {
		title: "Get in Touch",
		subtitle:
			"Ready to streamline your business? Request a demo or contact to get your custom Timely.",
		findMeOn: "Find me on",
		portfolio: "Portfolio",
		loadingProfile: "Loading profile...",
		errorLoadingProfile: "Error loading profile",
		form: {
			name: "Full name",
			namePlaceholder: "John Doe",
			email: "Email Address",
			emailPlaceholder: "info@mycompany.com",
			message: "Message",
			messagePlaceholder: "How can Timely help you?",
			submit: "Send Message",
			sending: "Sending...",
		},
		messages: {
			success: "Message sent successfully! We will respond soon.",
			error: "Error sending message. Please try again.",
			connectionError: "Connection error. Please try again later.",
		},
	},
	download: {
		downloadDemo: "Download demo",
		comingSoon: "Coming Soon",
		actionTitle: "Want to see Timely in action?",
		actionDescription: "Contact for a live demo and personalized requirements gathering. Timely adapts to your business to create a tailor-made solution.",
		actionButton: "Contact for a Demo",
	},
	footer: {
		about: "About",
		features: "Features",
		privacy: "Privacy Policy",
		terms: "Terms",
		tagline: "Transforming time management for modern SMEs.",
		copyright: "All rights reserved.",
	},
	theme: {
		light: "Light Mode",
		dark: "Dark Mode",
	},
};
