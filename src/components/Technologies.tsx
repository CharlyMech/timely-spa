import { useAppStore } from '../store/appStore';
import { getTranslations } from '../i18n';
import { Code, Server, Zap } from 'lucide-react';
import Card from './Card';

export default function Technologies() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const techItems = [
		{
			icon: <Code className="w-full h-full" />,
			title: t.tech.items.frontend.title,
			description: t.tech.items.frontend.description,
		},
		{
			icon: <Server className="w-full h-full" />,
			title: t.tech.items.backend.title,
			description: t.tech.items.backend.description,
		},
		{
			icon: <Zap className="w-full h-full" />,
			title: t.tech.items.integrations.title,
			description: t.tech.items.integrations.description,
		},
	];

	return (
		<section className="section-padding relative overflow-hidden bg-surface dark:bg-surface-dark">
			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						{t.tech.title}{' '}
						<span className="gradient-text">{t.tech.titleHighlight}</span>
					</h2>
				</div>

				{/* Tech Items */}
				<div className="grid lg:grid-cols-3 gap-8">
					{techItems.map((item, index) => (
						<Card
							key={index}
							variant="feature"
							icon={item.icon}
							animationDelay={index * 0.2}
							backgroundColor="background"
						>
							<div className="space-y-4">
								<div className="w-12 h-1 bg-primary rounded-full" />
								<h3 className="text-2xl font-display font-bold text-on-background dark:text-on-background-dark">
									{item.title}
								</h3>
								<p className="text-on-background/70 dark:text-on-background-dark/70 leading-relaxed">
									{item.description}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
