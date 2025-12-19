import { useAppStore } from '../store/appStore';
import { getTranslations } from '../i18n';
import { MousePointerClick, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import Card from './Card';

export default function Features() {
	const { language } = useAppStore();
	const t = getTranslations(language);


	const features = [
		{
			icon: <MousePointerClick className="w-full h-full" />,
			title: t.features.items.simplicity.title,
			description: t.features.items.simplicity.description,
		},
		{
			icon: <ShieldCheck className="w-full h-full" />,
			title: t.features.items.security.title,
			description: t.features.items.security.description,
		},
		{
			icon: <SlidersHorizontal className="w-full h-full" />,
			title: t.features.items.customization.title,
			description: t.features.items.customization.description,
		},
	];

	return (
		<section id="features" className="section-padding relative overflow-hidden">
			<div className="container-custom relative z-10">
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						{t.features.title}{' '}
						<span className="gradient-text">{t.features.titleHighlight}</span>
					</h2>
					<p className="text-lg text-on-background/70 dark:text-on-background-dark/70 text-balance">
						{t.features.subtitle}
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							variant="feature"
							icon={feature.icon}
							animationDelay={index * 0.2}
						>
							<div className="space-y-4">
								<div className="w-12 h-1 bg-primary rounded-full" />
								<h3 className="text-2xl font-display font-bold text-on-background dark:text-on-background-dark">
									{feature.title}
								</h3>
								<p className="text-on-background/70 dark:text-on-background-dark/70 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}