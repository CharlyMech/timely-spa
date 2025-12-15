import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';

export default function Download() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const platforms = [
		{
			name: t.devices.platforms.ios,
			icon: (
				<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
				</svg>
			),
			available: false,
		},
		{
			name: t.devices.platforms.android,
			icon: (
				<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 11.03 1 14.22 1 17.8h22c0-3.58-1.92-6.77-5.4-8.32zM8.06 15.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7.88 0c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z" />
				</svg>
			),
			available: true,
		},
		{
			name: t.devices.platforms.tablet,
			icon: (
				<svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
					/>
				</svg>
			),
			available: true,
		},
		{
			name: t.devices.platforms.web,
			icon: (
				<svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			),
			available: true,
		},
	];

	return (
		<section id="download" className="section-padding relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
				<div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
				<div className="absolute bottom-1/4 right-0 w-96 h-96 bg-warning/10 rounded-full blur-3xl animate-float animation-delay-600" />
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface dark:bg-surface-dark border border-outline/20">
						<span className="text-xs font-medium tracking-wider text-primary">
							{t.devices.badge}
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						<span className="gradient-text">{t.devices.title}</span>
					</h2>
				</div>

				{/* Platforms Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
					{platforms.map((platform, index) => (
						<div
							key={index}
							className="group relative"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div
								className={`relative h-full p-8 rounded-3xl border transition-all duration-500 ${
									platform.available
										? 'bg-surface dark:bg-surface-dark border-outline/20 hover:scale-105 hover:shadow-xl hover:border-primary/50'
										: 'bg-surface/50 dark:bg-surface-dark/50 border-outline/10 opacity-50'
								}`}
							>
								{/* Icon */}
								<div
									className={`inline-flex p-4 rounded-2xl mb-4 transition-all duration-500 ${
										platform.available
											? 'bg-primary/10 text-primary group-hover:scale-110'
											: 'bg-inactive/10 text-inactive'
									}`}
								>
									{platform.icon}
								</div>

								{/* Name */}
								<h3 className="text-xl font-display font-bold mb-2">
									{platform.name}
								</h3>

								{/* Status badge */}
								<span
									className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
										platform.available
											? 'bg-success/10 text-success'
											: 'bg-inactive/10 text-inactive'
									}`}
								>
									<span className="relative flex h-2 w-2">
										{platform.available && (
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
										)}
										<span
											className={`relative inline-flex rounded-full h-2 w-2 ${
												platform.available ? 'bg-success' : 'bg-inactive'
											}`}
										/>
									</span>
									<span>
										{platform.available
											? language === 'es'
												? 'Disponible'
												: 'Available'
											: language === 'es'
												? 'Próximamente'
												: 'Coming Soon'}
									</span>
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Download CTA */}
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<div className="glass dark:glass-dark rounded-3xl p-8 md:p-12 space-y-6">
						<h3 className="text-3xl md:text-4xl font-display font-bold">
							{language === 'es'
								? '¿Listo para empezar?'
								: 'Ready to get started?'}
						</h3>
						<p className="text-lg text-on-background/70 dark:text-on-background-dark/70">
							{language === 'es'
								? 'Descarga Timely ahora y transforma la gestión del tiempo de tu equipo.'
								: "Download Timely now and transform your team's time management."}
						</p>

						{/* Download buttons */}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="#"
								className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
							>
								<span className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
								<span className="relative flex items-center space-x-2">
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 11.03 1 14.22 1 17.8h22c0-3.58-1.92-6.77-5.4-8.32zM8.06 15.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7.88 0c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z" />
									</svg>
									<span>
										{language === 'es' ? 'Descargar para Android' : 'Download for Android'}
									</span>
								</span>
							</a>

							<a
								href="#"
								className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-on-primary hover:scale-105"
							>
								{language === 'es' ? 'Ver Demo' : 'View Demo'}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
