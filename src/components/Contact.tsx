import { useState, useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';
import { Send, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiGlobeAlt } from 'react-icons/hi';
import Card from './Card';

interface GitHubProfile {
	login: string;
	name: string;
	avatar_url: string;
	bio: string;
	public_repos: number;
	followers: number;
	following: number;
	html_url: string;
	blog: string;
	location: string;
	company: string;
}

export default function Contact() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	// GitHub Profile State
	const [githubProfile, setGithubProfile] = useState<GitHubProfile | null>(null);
	const [profileLoading, setProfileLoading] = useState(true);
	const [profileError, setProfileError] = useState<string | null>(null);

	useEffect(() => {
		const fetchGitHubProfile = async () => {
			try {
				const response = await fetch('https://api.github.com/users/charlymech');

				if (!response.ok) {
					throw new Error('Error fetching GitHub profile');
				}

				const data = await response.json();
				setGithubProfile(data);
			} catch (err) {
				setProfileError(err instanceof Error ? err.message : 'Unknown error');
				console.error('Error fetching GitHub profile:', err);
			} finally {
				setProfileLoading(false);
			}
		};

		fetchGitHubProfile();
	}, []);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<{
		type: 'success' | 'error' | null;
		message: string;
	}>({ type: null, message: '' });
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ type: null, message: '' });

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (response.ok && data.success) {
				setSubmitStatus({
					type: 'success',
					message:
						language === 'es'
							? '¡Mensaje enviado con éxito! Te responderemos pronto.'
							: 'Message sent successfully! We will respond soon.',
				});
				// Reset form
				setFormData({ name: '', email: '', message: '' });

				// Auto-hide success message after 3 seconds
				setTimeout(() => {
					setSubmitStatus({ type: null, message: '' });
				}, 3000);
			} else {
				setSubmitStatus({
					type: 'error',
					message:
						data.error ||
						(language === 'es'
							? 'Error al enviar el mensaje. Inténtalo de nuevo.'
							: 'Error sending message. Please try again.'),
				});
			}
		} catch (error) {
			setSubmitStatus({
				type: 'error',
				message:
					language === 'es'
						? 'Error de conexión. Por favor, inténtalo más tarde.'
						: 'Connection error. Please try again later.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="section-padding relative overflow-hidden bg-surface dark:bg-surface-dark">
			{/* Background decoration */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle, #EFCC80 1px, transparent 1px)`,
						backgroundSize: '30px 30px',
					}}
				/>
			</div>

			<div className="container-custom relative z-10">
				<div className="max-w-5xl mx-auto">

					<div className="text-center mb-16 space-y-4">
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
							<span className="gradient-text">{t.contact.title}</span>
						</h2>
						<p className="text-lg text-on-surface/70 dark:text-on-surface-dark/70 max-w-2xl mx-auto text-balance">
							{t.contact.subtitle}
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<Card variant="simple" hoverEffect={false} padding='p-0' backgroundColor='background'>
							<div className="grid lg:grid-cols-5 gap-0">
								{/* Left Section */}
								<div className="lg:col-span-2 bg-primary rounded-3xl p-8 order-2 lg:order-1 flex items-center justify-center">
									<div className="flex flex-col items-center text-center space-y-6">
										{profileLoading ? (
											<div className="flex flex-col items-center space-y-4">
												<Loader2 className="w-12 h-12 animate-spin text-on-primary/50" />
												<p className="text-sm text-on-primary/70">
													{language === 'es' ? 'Cargando perfil...' : 'Loading profile...'}
												</p>
											</div>
										) : profileError ? (
											<div className="flex flex-col items-center space-y-4">
												<p className="text-sm text-on-primary/70">
													{language === 'es' ? 'Error al cargar el perfil' : 'Error loading profile'}
												</p>
											</div>
										) : githubProfile ? (
											<>
												<img
													src={githubProfile.avatar_url}
													alt={githubProfile.name || githubProfile.login}
													className="w-32 h-32 rounded-full ring-4 ring-white/30"
												/>

												<div>
													<h3 className="text-xl font-display font-bold text-on-primary">
														{githubProfile.name || githubProfile.login}
													</h3>
													<p className="text-sm text-on-primary/80">
														@{githubProfile.login}
													</p>
												</div>

												{githubProfile.bio && (
													<p className="text-sm text-on-primary/90">
														{githubProfile.bio}
													</p>
												)}
											</>
										) : null}

										{/* Divider */}
										<div className="w-full h-px bg-on-primary/20 my-4" />

										<div className="w-full">
											<h3 className="text-xs font-display font-bold mb-4 text-on-primary uppercase tracking-wider">
												{language === 'es' ? 'Encuéntrame en' : 'Find me on'}
											</h3>

											<div className="flex gap-3 max-w-md w-full mx-auto">
												<a
													href="https://github.com/charlymech"
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
												>
													<FaGithub className="w-5 h-5 text-on-primary" />
													<span className="text-xs font-medium text-on-primary">
														GitHub
													</span>
												</a>

												{/* LinkedIn */}
												<a
													href="https://linkedin.com/in/charlymech"
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
												>
													<FaLinkedin className="w-5 h-5 text-on-primary" />
													<span className="text-xs font-medium text-on-primary">
														LinkedIn
													</span>
												</a>

												{/* Portfolio */}
												<a
													href="https://charlymech.com"
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
												>
													<HiGlobeAlt className="w-5 h-5 text-on-primary" />
													<span className="text-xs font-medium text-on-primary">
														{language === 'es' ? 'Portfolio' : 'Portfolio'}
													</span>
												</a>
											</div>
										</div>
									</div>
								</div>

								{/* Right Section - Contact Form - Order 1 on mobile, 2 on desktop */}
								<div className="lg:col-span-3 p-8 order-1 lg:order-2">
									<form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
										{/* Name Field */}
										<div>
											<label className="block text-sm font-medium mb-2 text-on-surface dark:text-on-surface-dark">
												{t.contact.form.name}
											</label>
											<input
												type="text"
												required
												minLength={2}
												maxLength={100}
												value={formData.name}
												onChange={(e) => setFormData({ ...formData, name: e.target.value })}
												placeholder={language === 'es' ? 'Juan Pérez' : 'John Doe'}
												className="w-full px-4 py-3 rounded-2xl bg-surface dark:bg-surface-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												disabled={isSubmitting}
											/>
										</div>

										{/* Email Field */}
										<div>
											<label className="block text-sm font-medium mb-2 text-on-surface dark:text-on-surface-dark">
												{t.contact.form.email}
											</label>
											<input
												type="email"
												required
												maxLength={100}
												value={formData.email}
												onChange={(e) => setFormData({ ...formData, email: e.target.value })}
												placeholder={t.contact.form.emailPlaceholder}
												className="w-full px-4 py-3 rounded-2xl bg-surface dark:bg-surface-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
												disabled={isSubmitting}
											/>
										</div>

										{/* Message Field */}
										<div className="flex-1 flex flex-col">
											<label className="block text-sm font-medium mb-2 text-on-surface dark:text-on-surface-dark">
												{t.contact.form.message}
											</label>
											<textarea
												required
												minLength={10}
												maxLength={1000}
												value={formData.message}
												onChange={(e) => setFormData({ ...formData, message: e.target.value })}
												placeholder={t.contact.form.messagePlaceholder}
												rows={6}
												className="w-full flex-1 px-4 py-3 rounded-2xl bg-surface dark:bg-surface-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
												disabled={isSubmitting}
											/>
											<p className="text-xs text-on-surface/50 dark:text-on-surface-dark/50 mt-2">
												{formData.message.length}/1000
											</p>
										</div>

										{/* Status Message */}
										{submitStatus.type && (
											<div
												className={`p-4 rounded-2xl ${submitStatus.type === 'success'
													? 'bg-primary/10 text-primary dark:text-primary border border-primary/20'
													: 'bg-error/10 text-error border border-error/20'
													}`}
											>
												<p className="text-sm font-medium">{submitStatus.message}</p>
											</div>
										)}

										{/* Submit Button */}
										<button
											type="submit"
											disabled={isSubmitting}
											className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
										>
											<span className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
											<span className="relative flex items-center justify-center space-x-2">
												{isSubmitting ? (
													<>
														<Loader2 className="w-5 h-5 animate-spin" />
														<span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
													</>
												) : (
													<>
														<span>{t.contact.form.submit}</span>
														<Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
													</>
												)}
											</span>
										</button>
									</form>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}