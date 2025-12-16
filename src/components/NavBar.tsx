import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { getTranslations, languages, type Language } from '@/i18n';

export default function NavBar() {
	const { theme, language, toggleTheme, setLanguage } = useAppStore();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const t = getTranslations(language);

	const navItems = [
		{ label: t.nav.home, href: '#home' },
		{ label: t.nav.features, href: '#features' },
		{ label: t.nav.download, href: '#download' },
		{ label: t.nav.contact, href: '#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4`}
		>
			<div className="container-custom">
				<div
					className={`relative transition-all duration-500 rounded-full ${theme === 'dark' ? 'glass-dark shadow-2xl' : 'glass shadow-lg'}`}
				>
					<div className="flex items-center justify-between px-6 py-3">
						<a
							href="#home"
							className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
						>
							<div className="relative">
								<div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow" />
								<svg width="40" height="25" viewBox="0 0 2814 1595" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1240.27 353.402C1337.9 451.033 1337.9 609.324 1240.27 706.955C1142.63 804.587 984.343 804.587 886.712 706.955C789.081 609.324 789.081 451.033 886.712 353.402C984.343 255.771 1142.63 255.771 1240.27 353.402ZM975.1 618.567C1023.92 667.383 1103.06 667.383 1151.88 618.567C1200.69 569.752 1200.69 490.606 1151.88 441.79C1103.06 392.975 1023.92 392.975 975.1 441.79C926.285 490.606 926.285 569.752 975.1 618.567Z" fill="#EFCC80" />
									<path d="M531.037 1064.04C628.668 1161.68 628.668 1319.97 531.037 1417.6C433.406 1515.23 275.115 1515.23 177.484 1417.6C79.8527 1319.97 79.8527 1161.68 177.484 1064.04C275.115 966.413 433.406 966.413 531.037 1064.04ZM265.872 1329.21C314.688 1378.02 393.833 1378.02 442.649 1329.21C491.464 1280.39 491.464 1201.25 442.649 1152.43C393.833 1103.62 314.688 1103.62 265.872 1152.43C217.057 1201.25 217.057 1280.39 265.872 1329.21Z" fill="#EFCC80" />
									<rect x="398.808" y="1107.18" width="750" height="125" transform="rotate(-45 398.808 1107.18)" fill="#EFCC80" />
									<path d="M2636.14 176.777C2733.77 274.408 2733.77 432.699 2636.14 530.33C2538.51 627.961 2380.22 627.961 2282.59 530.33C2184.96 432.699 2184.96 274.408 2282.59 176.777C2380.22 79.1456 2538.51 79.1456 2636.14 176.777ZM2370.97 441.942C2419.79 490.757 2498.94 490.757 2547.75 441.942C2596.57 393.126 2596.57 313.981 2547.75 265.165C2498.94 216.349 2419.79 216.349 2370.97 265.165C2322.16 313.981 2322.16 393.126 2370.97 441.942Z" fill="#EFCC80" />
									<path d="M1926.91 887.419C2024.54 985.05 2024.54 1143.34 1926.91 1240.97C1829.28 1338.6 1670.99 1338.6 1573.36 1240.97C1475.73 1143.34 1475.73 985.05 1573.36 887.419C1670.99 789.788 1829.28 789.788 1926.91 887.419ZM1661.75 1152.58C1710.56 1201.4 1789.71 1201.4 1838.52 1152.58C1887.34 1103.77 1887.34 1024.62 1838.52 975.807C1789.71 926.992 1710.56 926.992 1661.75 975.807C1612.93 1024.62 1612.93 1103.77 1661.75 1152.58Z" fill="#EFCC80" />
									<rect x="1794.68" y="930.552" width="750" height="125" transform="rotate(-45 1794.68 930.552)" fill="#EFCC80" />
									<rect x="1209.83" y="553.537" width="600" height="125" transform="rotate(40 1209.83 553.537)" fill="#EFCC80" />
								</svg>
							</div>
							<span className="text-xl font-display font-bold tracking-tight">
								Timely
							</span>
						</a>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="text-sm font-medium transition-colors duration-300 hover:text-primary relative group"
								>
									{item.label}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
								</a>
							))}
						</div>

						{/* Actions */}
						<div className="flex items-center space-x-4">
							<div className="hidden sm:flex items-center space-x-2 bg-outline/40 dark:bg-outline-dark/40 rounded-full p-1">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => setLanguage(lang.code as Language)}
										className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${language === lang.code
											? 'bg-primary text-on-primary shadow-md'
											: 'text-on-surface dark:text-on-surface-dark hover:bg-primary/10'
											}`}
									>
										{lang.code.toUpperCase()}
									</button>
								))}
							</div>

							<button
								onClick={toggleTheme}
								className="p-2.5 rounded-full hover:bg-outline/40 dark:hover:bg-outline-dark/40 transition-all duration-300 group"
								aria-label="Toggle theme"
							>
								{theme === 'light' ? (
									<svg
										className="w-5 h-5 transition-transform duration-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
										/>
									</svg>
								) : (
									<svg
										className="w-5 h-5 transition-transform duration-300"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								)}
							</button>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="md:hidden p-2.5 rounded-full bg-surface dark:bg-surface-dark hover:bg-primary/10 transition-all duration-300"
								aria-label="Toggle menu"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									{isMobileMenuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<div className="md:hidden absolute top-full left-0 right-0 mt-2 glass dark:glass-dark rounded-3xl p-6 space-y-4 animate-slide-up">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={() => setIsMobileMenuOpen(false)}
									className="block text-sm font-medium transition-colors duration-300 hover:text-primary py-2"
								>
									{item.label}
								</a>
							))}
							<div className="pt-4 border-t border-outline/20">
								<div className="flex items-center justify-center space-x-2">
									{languages.map((lang) => (
										<button
											key={lang.code}
											onClick={() => setLanguage(lang.code as Language)}
											className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${language === lang.code
												? 'bg-primary text-on-primary'
												: 'bg-surface dark:bg-surface-dark'
												}`}
										>
											{lang.name}
										</button>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}