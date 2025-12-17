import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';
import { Tablet, Monitor, CalendarCheck, ArrowRight } from 'lucide-react';
import Card from './Card';

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
			downloadUrl: '#',
		},
		{
			name: t.devices.platforms.android,
			icon: (
				<svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.5 11.5 0 00-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85l1.84 3.18C2.92 11.03 1 14.22 1 17.8h22c0-3.58-1.92-6.77-5.4-8.32zM8.06 15.2c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm7.88 0c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2z" />
				</svg>
			),
			available: true,
			downloadUrl: '#', // TODO: Add actual download link
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
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						<span className="gradient-text">{t.devices.titleHighlight}</span>
						{' '}{t.devices.title}
					</h2>
					<p className="text-lg text-on-background/70 dark:text-on-background-dark/70 text-balance">
						{t.devices.subtitle}
					</p>
				</div>

				{/* Platforms Grid */}
				<div className="flex flex-col md:flex-row gap-6 mb-16 w-full px-6 md:px-0 md:max-w-2xl md:mx-auto">
					{platforms.map((platform, index) => (
						<Card
							key={index}
							variant="icon-badge"
							icon={platform.icon}
							animationDelay={index * 0.1}
							hoverEffect={platform.available}
							iconActive={platform.available}
							className={`w-full md:flex-1 ${platform.available
								? ''
								: 'bg-surface/70 dark:bg-surface-dark/70 border-outline/50 opacity-70 rounded-3xl'
								}`}
						>
							<div className="flex flex-col h-full space-y-4">
								{/* Name with availability indicator */}
								<div className="flex items-center space-x-2">
									<h3
										className={`text-xl font-display font-bold ${platform.available
											? 'text-success dark:text-success'
											: 'text-on-background dark:text-on-background-dark'
											}`}
									>
										{platform.name}
									</h3>
									{platform.available && (
										<span className="relative flex h-2 w-2">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
											<span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
										</span>
									)}
								</div>

								{/* Spacer to push button to bottom */}
								<div className="flex-grow" />

								{/* Status label or Download link */}
								{platform.available ? (
									<a
										href={platform.downloadUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="w-full inline-flex items-center justify-end space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium group"
									>
										<span>{language === 'es' ? 'Descargar demo' : 'Download demo'}</span>
										<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
									</a>
								) : (
									<span className="w-full inline-flex items-center justify-center space-x-1.5 text-sm text-inactive">
										<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-inactive" />
										<span>{language === 'es' ? 'Próximamente' : 'Coming Soon'}</span>
									</span>
								)}
							</div>
						</Card>
					))}
				</div>

				{/* CTA */}
				<div className="max-w-2xl mx-auto text-center space-y-8">
					<div className="glass dark:glass-dark rounded-3xl p-8 md:p-12 space-y-6">
						<h3 className="text-3xl md:text-4xl font-display font-bold">
							{language === 'es'
								? '¿Quieres ver Timely en acción?'
								: 'Want to see Timely in action?'}
						</h3>
						<p className="text-lg text-on-background/70 dark:text-on-background-dark/70">
							{language === 'es'
								? 'Contacta para una demo en vivo y una toma de requisitos personalizada. Timely se adapta a tu empresa para crear una solución hecha a medida.'
								: "Contact for a live demo and personalized requirements gathering. Timely adapts to your business to create a tailor-made solution."}
						</p>

						{/* Download buttons */}
						<div className="flex flex-col sm:flex-row space-x-2 justify-center">
							<a
								href="#"
								className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
							>
								<CalendarCheck className="w-5 h-5" />
								<span>{language === 'es' ? 'Contacta para una demo' : 'Contact for a Demo'}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
