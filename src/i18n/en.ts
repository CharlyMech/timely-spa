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
		titleHighlight: "reimagined",
		subtitle:
			"Timely offers SMEs a flexible and personalized time tracking system, tailored to each company and ready to run effortlessly.",
		cta: {
			download: "Download APK",
			demo: "Schedule a Demo",
		},
		stats: {
			teams: "Professional teams",
		},
	},
	features: {
		title: "Why choose",
		titleHighlight: "Timely?",
		subtitle:
			"Traditional time cards and spreadsheets are prone to errors. Timely brings accuracy, style, and ease to time tracking with just a few clicks.",
		items: {
			security: {
				title: "Reliable Security",
				description:
					"Biometric authentication and OTP encryption ensure the right person clocks in at the right time.",
			},
			insights: {
				title: "Real-time Insights",
				description:
					"Live dashboards show who is working, usage analysis, and instant overtime calculations. Make decisions based on real data.",
			},
			sync: {
				title: "Cloud Sync",
				description:
					"Data is safely stored in the cloud. Access your company data from anywhere, on any device, with automatic backups.",
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
		title: "Devices",
		platforms: {
			ios: "iOS App",
			android: "Android App",
			tablet: "Tablet",
			web: "Web Portal",
		},
	},
	contact: {
		title: "Get in Touch",
		subtitle:
			"Ready to streamline your business? Request a demo or download the app today. Our team is here to help you get started.",
		form: {
			name: "John Doe",
			email: "EMAIL ADDRESS",
			emailPlaceholder: "info@mycompany.com",
			message: "MESSAGE",
			messagePlaceholder: "How can we help you?",
			submit: "Send Message",
		},
		info: {
			email: "contact@timelyapp.com",
			phone: "+1 (343) 123-4567",
		},
	},
	footer: {
		about: "About",
		features: "Features",
		privacy: "Privacy Policy",
		terms: "Terms",
		copyright: "© 2025 Timely App. All rights reserved.",
	},
	theme: {
		light: "Light Mode",
		dark: "Dark Mode",
	},
};
