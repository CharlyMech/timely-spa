export const es = {
	nav: {
		home: "Inicio",
		features: "Características",
		pricing: "Precios",
		download: "Descargar",
		contact: "Contacto",
	},
	hero: {
		title: "Gestión horaria",
		titleHighlight: "reinventada",
		subtitle:
			"Timely ofrece a las PYMEs un sistema de registro horario flexible y personalizado, adaptado a cada empresa y listo para funcionar sin esfuerzo.",
		cta: {
			download: "Descargar Demo",
			demo: "Agendar Demo",
		},
		stats: {
			teams: "Equipos profesionales",
		},
	},
	features: {
		title: "¿Por qué elegir",
		titleHighlight: "Timely?",
		subtitle:
			"Las tarjetas de fichaje tradicionales y hojas de cálculo son propensas a errores. Timely aporta precisión, estilo y facilidad a la gestión del registro horario con unos pocos clicks.",
		items: {
			security: {
				title: "Seguridad Confiable",
				description:
					"Autenticación biométrica y cifrado OTP garantizan que la persona correcta fiche en el momento correcto.",
			},
			insights: {
				title: "Información en Tiempo Real",
				description:
					"Paneles en vivo muestran quién está trabajando, análisis de uso y cálculos de horas extra instantáneos. Toma decisiones basadas en datos reales.",
			},
			sync: {
				title: "Sincronización en la Nube",
				description:
					"Los datos se almacenan de forma segura en la nube. Accede a los datos de tu empresa desde cualquier lugar, en cualquier dispositivo, con copias de seguridad automáticas.",
			},
		},
	},
	tech: {
		title: "Construido con Tecnologías",
		titleHighlight: "Modernas",
		items: {
			frontend: {
				title: "Interfaz Multiplataforma con Flutter",
				description:
					"Desarrollado con Flutter y Riverpod 3.0 para una experiencia fluida y reactiva. Diseño adaptativo que se ajusta perfectamente a móviles y tablets con temas claro y oscuro.",
			},
			backend: {
				title: "Arquitectura Limpia Escalable",
				description:
					"Implementa Clean Architecture con tres capas bien definidas. Servicios intercambiables entre mock data para desarrollo y Firebase Firestore para producción.",
			},
			integrations: {
				title: "Sistema Modular y Extensible",
				description:
					"Arquitectura preparada para integraciones futuras. Separación clara de responsabilidades que facilita la extensión con APIs REST, sistemas de nómina y exportación de reportes.",
			},
		},
	},
	devices: {
		title: "y Plataformas",
		titleHighlight: "Dispositivos",
		subtitle:
			"Diseñado para tablets y móviles. Accede desde cualquier dispositivo, en cualquier momento.",
		badge: "PLATAFORMAS",
		platforms: {
			ios: "Dispositivos iOS",
			android: "Dispositivos Android",
		},
	},
	contact: {
		title: "Ponte en Contacto",
		subtitle:
			"¿Listo para agilizar tu negocio? Solicita una demostración o descarga la aplicación hoy. Nuestro equipo está aquí para ayudarte a comenzar.",
		form: {
			name: "Juan Pérez",
			email: "DIRECCIÓN DE EMAIL",
			emailPlaceholder: "info@miempresa.com",
			message: "MENSAJE",
			messagePlaceholder: "¿Cómo podemos ayudarte?",
			submit: "Enviar Mensaje",
		},
		info: {
			email: "contacto@timelyapp.com",
			phone: "+34 943 123 4567",
		},
	},
	footer: {
		about: "Acerca de",
		features: "Características",
		privacy: "Política de Privacidad",
		terms: "Términos",
		copyright: "© 2025 Timely App. Todos los derechos reservados.",
	},
	theme: {
		light: "Modo Claro",
		dark: "Modo Oscuro",
	},
};

export type Translations = typeof es;
