import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';

export default function Hero() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Animated Background */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-warning/20 rounded-full blur-3xl animate-float animation-delay-400" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-float animation-delay-800" />
			</div>

			<div className="container-custom">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-8 animate-fade-in">
						{/* Badge */}
						<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-surface dark:bg-surface-dark border border-outline/20 animate-slide-in">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
							</span>
							<span className="text-xs font-medium tracking-wider">
								{t.hero.badge}
							</span>
						</div>

						{/* Title */}
						<div className="space-y-4">
							<h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight animate-slide-up">
								{t.hero.title}
								<br />
								<span className="gradient-text">{t.hero.titleHighlight}</span>
							</h1>
							<p className="text-lg sm:text-xl text-on-background/70 dark:text-on-background-dark/70 max-w-xl text-balance animate-slide-up animation-delay-200">
								{t.hero.subtitle}
							</p>
						</div>

						{/* CTAs */}
						<div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
							<a
								href="#download"
								className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
							>
								<span className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
								<span className="relative flex items-center space-x-2">
									<svg
										className="w-5 h-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
									<span>{t.hero.cta.download}</span>
								</span>
							</a>
							<a
								href="#features"
								className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-on-primary hover:scale-105"
							>
								{t.hero.cta.demo}
							</a>
						</div>

						{/* Stats */}
						<div className="flex items-center space-x-8 pt-8 animate-slide-up animation-delay-600">
							<div className="flex -space-x-3">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-warning border-2 border-background dark:border-background-dark"
									/>
								))}
							</div>
							<div>
								<p className="text-2xl font-display font-bold">500+</p>
								<p className="text-sm text-on-background/60 dark:text-on-background-dark/60">
									{t.hero.stats.teams}
								</p>
							</div>
						</div>
					</div>

				{/* Right Content - Mockup */}
				<div className="relative animate-scale-in animation-delay-400">
					{/* Floating decoration elements */}
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" />
					<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-warning/20 rounded-full blur-2xl animate-float animation-delay-600" />

					{/* Main mockup container */}
					<div className="relative z-10 flex items-center justify-center">
						<div className="relative">
							{/* Glow effect */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-warning/30 blur-3xl animate-glow" />

							{/* Phone mockup placeholder */}
							<div className="relative bg-surface dark:bg-surface-dark rounded-[3rem] p-3 shadow-2xl">
								<div className="bg-background dark:bg-background-dark rounded-[2.5rem] overflow-hidden aspect-[9/19] w-[280px] sm:w-[320px]">
									{/* Status bar */}
									<div className="h-12 bg-surface dark:bg-surface-dark flex items-center justify-between px-6">
										<span className="text-xs font-medium">9:41</span>
										<div className="flex items-center space-x-1">
											<div className="w-4 h-3 border border-current rounded-sm" />
										</div>
									</div>

									{/* App content */}
									<div className="p-6 space-y-6">
										{/* Logo */}
										<div className="flex justify-center">
											<div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
												<svg
													width="48"
													height="48"
													viewBox="0 0 40 40"
													fill="none"
												>
													<circle cx="10" cy="10" r="3" fill="#EFCC80" />
													<circle cx="20" cy="15" r="3" fill="#EFCC80" />
													<circle cx="30" cy="10" r="3" fill="#EFCC80" />
													<circle cx="15" cy="25" r="3" fill="#EFCC80" />
													<circle cx="25" cy="30" r="3" fill="#EFCC80" />
													<line
														x1="10"
														y1="10"
														x2="20"
														y2="15"
														stroke="#EFCC80"
														strokeWidth="2"
													/>
													<line
														x1="20"
														y1="15"
														x2="30"
														y2="10"
														stroke="#EFCC80"
														strokeWidth="2"
													/>
													<line
														x1="20"
														y1="15"
														x2="15"
														y2="25"
														stroke="#EFCC80"
														strokeWidth="2"
													/>
													<line
														x1="20"
														y1="15"
														x2="25"
														y2="30"
														stroke="#EFCC80"
														strokeWidth="2"
													/>
												</svg>
											</div>
										</div>

										{/* Title */}
										<div className="text-center space-y-2">
											<h3 className="text-2xl font-display font-bold">
												Timely
											</h3>
											<p className="text-sm text-on-background/60 dark:text-on-background-dark/60">
												{language === 'es'
													? 'Tu aplicación de registro horario'
													: 'Your time registration app'}
											</p>
										</div>

										{/* CTA Button */}
										<button className="w-full bg-primary text-on-primary py-4 rounded-2xl font-medium shadow-lg">
											{language === 'es' ? 'Empezar' : 'Get Started'}
										</button>

										{/* Footer text */}
										<p className="text-center text-xs text-on-background/40 dark:text-on-background-dark/40">
											{language === 'es'
												? 'Accede a tu registro horario'
												: 'Access your time registration'}
										</p>
									</div>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
				<svg
					className="w-6 h-6 text-on-background/40 dark:text-on-background-dark/40"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}