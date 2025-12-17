import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';
import VersionBadge from './VersionBadge';
import { CalendarCheck, Download } from 'lucide-react';

export default function Hero() {
	const { language, theme } = useAppStore();
	const t = getTranslations(language);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Animated Background - Balanced intensity */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/28 dark:bg-primary/20 rounded-full blur-3xl animate-float" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/28 dark:bg-primary/20 rounded-full blur-3xl animate-float animation-delay-400" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 dark:bg-primary/10 rounded-full blur-3xl animate-float animation-delay-800" />
			</div>

			<div className="container-custom px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
					{/* Left Content */}
					<div className="space-y-6 md:space-y-8 animate-fade-in">
						{/* Title */}
						<div className="space-y-4">
							<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight animate-slide-up">
								{t.hero.title}
								<br />
								<span className="gradient-text">{t.hero.titleHighlight}</span>
							</h1>
							<p className="text-base sm:text-lg md:text-xl text-on-background/70 dark:text-on-background-dark/70 max-w-xl text-balance animate-slide-up animation-delay-200">
								{t.hero.subtitle}
							</p>
						</div>

						{/* CTAs - Desktop Only */}
						<div className="hidden lg:flex flex-col gap-3">
							<div className="inline-flex w-fit">
								<VersionBadge />
							</div>
							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-400">
								<a
									href="#download"
									className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
								>
									<span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
									<span className="relative flex items-center space-x-2">
										<Download className="w-5 h-5" />
										<span>{t.hero.cta.download}</span>
									</span>
								</a>
								<a
									href="#features"
									className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-on-primary hover:scale-105"
								>
									<CalendarCheck className="w-5 h-5" />
									<span>{t.hero.cta.demo}</span>
								</a>
							</div>
						</div>
					</div>

					{/* Right Content - Mockup */}
					<div className="relative animate-scale-in animation-delay-400 py-8 md:py-0">
						{/* Floating decoration elements - Subtle in light mode */}
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/35 dark:bg-primary/20 rounded-full blur-2xl animate-float" />
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/35 dark:bg-primary/20 rounded-full blur-2xl animate-float animation-delay-600" />

						{/* Main mockup container */}
						<div className="relative z-10 flex items-center justify-center">
							{/* Responsive wrapper with scaling */}
							<div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[580px] mx-auto">
								{/* Glow effect - Subtle in light mode */}
								<div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-primary/50 dark:from-primary/30 dark:via-primary/25 dark:to-primary/30 blur-3xl animate-glow" />
								{/* Hero phones */}
								<img
									src={theme === 'dark' ? '/images/hero-dark.png' : '/images/hero-light.png'}
									alt="Hero mockup"
									className='relative z-10 w-full h-auto 
										[filter:drop-shadow(0_15px_45px_rgba(0,0,0,0.2))_drop-shadow(0_6px_15px_rgba(0,0,0,0.12))] 
										md:[filter:drop-shadow(0_20px_55px_rgba(0,0,0,0.25))_drop-shadow(0_8px_20px_rgba(0,0,0,0.15))]
										lg:[filter:drop-shadow(0_25px_65px_rgba(0,0,0,0.28))_drop-shadow(0_10px_25px_rgba(0,0,0,0.17))]
										dark:[filter:drop-shadow(0_20px_60px_rgba(0,0,0,0.45))_drop-shadow(0_8px_22px_rgba(0,0,0,0.3))]
										dark:md:[filter:drop-shadow(0_25px_70px_rgba(0,0,0,0.5))_drop-shadow(0_10px_25px_rgba(0,0,0,0.32))]
										dark:lg:[filter:drop-shadow(0_30px_80px_rgba(0,0,0,0.55))_drop-shadow(0_12px_30px_rgba(0,0,0,0.35))]'
								/>
							</div>
						</div>
					</div>

					{/* CTAs - Mobile/Tablet Only (appears below image) */}
					<div className="lg:hidden flex flex-col gap-3 animate-fade-in animation-delay-600">
						<div className="inline-flex w-fit">
							<VersionBadge />
						</div>
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
							<a
								href="#download"
								className="flex-1 group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
							>
								<span className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
								<span className="relative flex items-center space-x-2">
									<Download className="w-5 h-5" />
									<span>{t.hero.cta.download}</span>
								</span>
							</a>
							<a
								href="#features"
								className="flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-primary rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-on-primary hover:scale-105"
							>
								{t.hero.cta.demo}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}