import { useAppStore } from '../store/appStore';
import { getTranslations } from '../i18n';

export default function Features() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const features = [
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
			title: t.features.items.security.title,
			description: t.features.items.security.description,
			color: 'from-primary to-warning',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
			title: t.features.items.insights.title,
			description: t.features.items.insights.description,
			color: 'from-success to-primary',
		},
		{
			icon: (
				<svg
					className="w-8 h-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
					/>
				</svg>
			),
			title: t.features.items.sync.title,
			description: t.features.items.sync.description,
			color: 'from-warning to-success',
		},
	];

	return (
		<section id="features" className="section-padding relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-1/2 left-0 w-72 h-72 bg-success/10 rounded-full blur-3xl -translate-y-1/2" />
			<div className="absolute top-1/2 right-0 w-72 h-72 bg-warning/10 rounded-full blur-3xl -translate-y-1/2" />

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface dark:bg-surface-dark border border-outline/20">
						<span className="text-xs font-medium tracking-wider text-primary">
							{t.features.badge}
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						{t.features.title}{' '}
						<span className="gradient-text">{t.features.titleHighlight}</span>
					</h2>
					<p className="text-lg text-on-background/70 dark:text-on-background-dark/70 text-balance">
						{t.features.subtitle}
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group relative"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							{/* Card */}
							<div className="relative h-full p-8 rounded-3xl bg-surface dark:bg-surface-dark border border-outline/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-primary/50 overflow-hidden">
								{/* Gradient overlay on hover */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
								/>

								{/* Content */}
								<div className="relative space-y-4">
									{/* Icon */}
									<div
										className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
									>
										{feature.icon}
									</div>

									{/* Title */}
									<h3 className="text-2xl font-display font-bold">
										{feature.title}
									</h3>

									{/* Description */}
									<p className="text-on-background/70 dark:text-on-background-dark/70 leading-relaxed">
										{feature.description}
									</p>
								</div>

								{/* Decorative corner */}
								<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}