import { useAppStore } from '../store/appStore';
import { getTranslations } from '../i18n';

export default function Technologies() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const techItems = [
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
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
			),
			title: t.tech.items.frontend.title,
			description: t.tech.items.frontend.description,
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
						d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
					/>
				</svg>
			),
			title: t.tech.items.backend.title,
			description: t.tech.items.backend.description,
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
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			title: t.tech.items.integrations.title,
			description: t.tech.items.integrations.description,
		},
	];

	return (
		<section className="section-padding relative overflow-hidden bg-surface dark:bg-surface-dark">
			{/* Grid pattern background */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `linear-gradient(#EFCC80 1px, transparent 1px),
                             linear-gradient(90deg, #EFCC80 1px, transparent 1px)`,
						backgroundSize: '50px 50px',
					}}
				/>
			</div>

			<div className="container-custom relative z-10">
				{/* Section Header */}
				<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
					<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-background dark:bg-background-dark border border-outline/20">
						<span className="text-xs font-medium tracking-wider text-primary">
							{t.tech.badge}
						</span>
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
						{t.tech.title}{' '}
						<span className="gradient-text">{t.tech.titleHighlight}</span>
					</h2>
				</div>

				{/* Tech Items */}
				<div className="grid lg:grid-cols-3 gap-8">
					{techItems.map((item, index) => (
						<div
							key={index}
							className="group relative"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div className="relative h-full p-8 rounded-3xl bg-background dark:bg-background-dark border border-outline/20 transition-all duration-500 hover:scale-105 hover:shadow-xl">
								{/* Icon container */}
								<div className="flex items-start space-x-4 mb-4">
									<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
										{item.icon}
									</div>
								</div>

								{/* Content */}
								<div className="space-y-3">
									<h3 className="text-2xl font-display font-bold">
										{item.title}
									</h3>
									<p className="text-on-background/70 dark:text-on-background-dark/70 leading-relaxed">
										{item.description}
									</p>
								</div>

								{/* Hover effect line */}
								<div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary via-warning to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
							</div>
						</div>
					))}
				</div>

				{/* Bottom decoration */}
				<div className="mt-16 flex justify-center">
					<div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-background dark:bg-background-dark border border-outline/20">
						<div className="flex -space-x-2">
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-warning border-2 border-background dark:border-background-dark" />
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-success to-primary border-2 border-background dark:border-background-dark" />
							<div className="w-8 h-8 rounded-full bg-gradient-to-br from-warning to-success border-2 border-background dark:border-background-dark" />
						</div>
						<span className="text-sm font-medium">
							{language === 'es'
								? 'Hecho con Flutter & Firebase'
								: 'Built with Flutter & Firebase'}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}