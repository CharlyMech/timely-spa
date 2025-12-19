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
		titleHighlight: "simplificada",
		subtitle:
			"Timely es la forma más simple y flexible de cumplir con el registro horario. Diseñado para PYMEs que quieren fichar sin errores, sin costes innecesarios y sin complicaciones.",
		cta: {
			download: "Descargar Ap",
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
			"Porque el registro horario no debería ser un problema más en tu empresa. Timely elimina la complejidad y se centra en lo importante: registrar la jornada de forma clara, rápida y fiable.",
		items: {
			simplicity: {
				title: "Sencillez ante todo",
				description:
					"Un sistema pensado para el día a día de una PYME. Un dispositivo compartido, usuarios visibles y un flujo claro para iniciar y finalizar la jornada en pocos clics, sin formación ni errores.",
			},
			security: {
				title: "Datos seguros y válidos",
				description:
					"Los registros se almacenan de forma segura y ordenada, listos para ser consultados o presentados ante una inspección de trabajo. Transparencia, integridad y tranquilidad para tu empresa.",
			},
			customization: {
				title: "Hecho a la medida de tu empresa",
				description:
					"Cada empresa trabaja de forma distinta. Timely se adapta a tus horarios, reglas y necesidades específicas sin obligarte a cambiar tu forma de trabajar.",
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
			"¿Listo para agilizar tu negocio? Solicita una demostración o contacta para personalizar tu propio Timely.",
		findMeOn: "Encuéntrame en",
		portfolio: "Portfolio",
		loadingProfile: "Cargando perfil...",
		errorLoadingProfile: "Error al cargar el perfil",
		form: {
			name: "Nombre completo",
			namePlaceholder: "Juan Pérez",
			email: "Dirección de correo",
			emailPlaceholder: "info@miempresa.com",
			message: "Mensaje",
			messagePlaceholder: "¿Cómo puede Timely ayudarte?",
			submit: "Enviar Mensaje",
			sending: "Enviando...",
		},
		messages: {
			success: "¡Mensaje enviado con éxito! Te responderemos pronto.",
			error: "Error al enviar el mensaje. Inténtalo de nuevo.",
			connectionError: "Error de conexión. Por favor, inténtalo más tarde.",
		},
	},
	download: {
		downloadDemo: "Descargar demo",
		comingSoon: "Próximamente",
		actionTitle: "¿Quieres ver Timely en acción?",
		actionDescription: "Contacta para una demo en vivo y una toma de requisitos personalizada. Timely se adapta a tu empresa para crear una solución hecha a medida.",
		actionButton: "Contacta para una demo",
	},
	footer: {
		about: "Acerca de",
		features: "Características",
		privacy: "Política de Privacidad",
		terms: "Términos",
		tagline: "Transformando la gestión del tiempo para PYMEs modernas.",
		copyright: "Todos los derechos reservados.",
	},
	theme: {
		light: "Modo Claro",
		dark: "Modo Oscuro",
	},
};

export type Translations = typeof es;
