import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { getTranslations, languages, type Language } from '@/i18n';

export default function NavBar() {
	const { theme, language, toggleTheme, setLanguage } = useAppStore();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const t = getTranslations(language);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = [
		{ label: t.nav.home, href: '#home' },
		{ label: t.nav.features, href: '#features' },
		{ label: t.nav.download, href: '#download' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'
				}`}
		>
			<div className="container-custom">
				<div
					className={`relative transition-all duration-500 rounded-full ${isScrolled
						? theme === 'dark'
							? 'glass-dark shadow-2xl'
							: 'glass shadow-lg'
						: 'bg-transparent'
						}`}
				>
					<div className="flex items-center justify-between px-6 py-3">
						{/* Logo */}
						<a
							href="#home"
							className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
						>
							<div className="relative">
								<div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow" />
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="relative"
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
										strokeLinecap="round"
									/>
									<line
										x1="20"
										y1="15"
										x2="30"
										y2="10"
										stroke="#EFCC80"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<line
										x1="20"
										y1="15"
										x2="15"
										y2="25"
										stroke="#EFCC80"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<line
										x1="20"
										y1="15"
										x2="25"
										y2="30"
										stroke="#EFCC80"
										strokeWidth="2"
										strokeLinecap="round"
									/>
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
							{/* Language Switcher */}
							<div className="hidden sm:flex items-center space-x-2 bg-surface dark:bg-surface-dark rounded-full p-1">
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

							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className="p-2.5 rounded-full bg-surface dark:bg-surface-dark hover:bg-primary/10 transition-all duration-300 group"
								aria-label="Toggle theme"
							>
								{theme === 'light' ? (
									<svg
										className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
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
										className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
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