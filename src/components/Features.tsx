import { useAppStore } from '../store/appStore';
import { getTranslations } from '../i18n';
import { Lock, BarChart3, Cloud } from 'lucide-react';

export default function Features() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const features = [
		{
			icon: <Lock className="w-full h-full" />,
			title: t.features.items.security.title,
			description: t.features.items.security.description,
		},
		{
			icon: <BarChart3 className="w-full h-full" />,
			title: t.features.items.insights.title,
			description: t.features.items.insights.description,
		},
		{
			icon: <Cloud className="w-full h-full" />,
			title: t.features.items.sync.title,
			description: t.features.items.sync.description,
		},
	];

	return (
		<section id="features" className="section-padding relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
			<div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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
							<div className="relative h-full p-8 rounded-3xl bg-surface dark:bg-surface-dark border border-outline/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 overflow-hidden">
								{/* Extra Large Background Icon - Behind content with primary color */}
								<div className="absolute -right-16 -bottom-16 w-64 h-64 z-0 text-primary opacity-[0.08] dark:opacity-[0.04] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.12] dark:group-hover:opacity-[0.06]">
									{feature.icon}
								</div>

								{/* Subtle glow effect on hover */}
								<div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 dark:to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Content - Above the icon */}
								<div className="relative space-y-4 z-10">
									{/* Small decorative line */}
									<div className="w-12 h-1 bg-primary rounded-full" />

									{/* Title */}
									<h3 className="text-2xl font-display font-bold text-on-background dark:text-on-background-dark">
										{feature.title}
									</h3>

									{/* Description */}
									<p className="text-on-background/70 dark:text-on-background-dark/70 leading-relaxed">
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}