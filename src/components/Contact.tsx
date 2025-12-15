import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { getTranslations } from '@/i18n';

export default function Contact() {
	const { language } = useAppStore();
	const t = getTranslations(language);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1500));

		// Reset form
		setFormData({ name: '', email: '', message: '' });
		setIsSubmitting(false);

		alert(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
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
					{/* Section Header */}
					<div className="text-center mb-16 space-y-4">
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold">
							<span className="gradient-text">{t.contact.title}</span>
						</h2>
						<p className="text-lg text-on-background/70 dark:text-on-background-dark/70 max-w-2xl mx-auto text-balance">
							{t.contact.subtitle}
						</p>
					</div>

					<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
						{/* Contact Info */}
						<div className="lg:col-span-2 space-y-6">
							<div className="glass dark:glass-dark rounded-3xl p-8 space-y-6">
								<h3 className="text-2xl font-display font-bold mb-6">
									{language === 'es' ? 'Información de Contacto' : 'Contact Information'}
								</h3>

								{/* Email */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
										<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div>
										<p className="text-sm text-on-background/60 dark:text-on-background-dark/60 mb-1">
											Email
										</p>
										<a
											href={`mailto:${t.contact.info.email}`}
											className="font-medium hover:text-primary transition-colors"
										>
											{t.contact.info.email}
										</a>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
										<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div>
										<p className="text-sm text-on-background/60 dark:text-on-background-dark/60 mb-1">
											{language === 'es' ? 'Teléfono' : 'Phone'}
										</p>
										<a
											href={`tel:${t.contact.info.phone}`}
											className="font-medium hover:text-primary transition-colors"
										>
											{t.contact.info.phone}
										</a>
									</div>
								</div>
							</div>

							{/* Decorative element */}
							<div className="hidden lg:block">
								<div className="relative w-full h-48 rounded-3xl bg-gradient-to-br from-primary/20 to-warning/20 overflow-hidden">
									<div className="absolute inset-0 flex items-center justify-center">
										<svg width="120" height="120" viewBox="0 0 40 40" fill="none">
											<circle cx="10" cy="10" r="3" fill="#EFCC80" />
											<circle cx="20" cy="15" r="3" fill="#EFCC80" />
											<circle cx="30" cy="10" r="3" fill="#EFCC80" />
											<circle cx="15" cy="25" r="3" fill="#EFCC80" />
											<circle cx="25" cy="30" r="3" fill="#EFCC80" />
											<line x1="10" y1="10" x2="20" y2="15" stroke="#EFCC80" strokeWidth="2" />
											<line x1="20" y1="15" x2="30" y2="10" stroke="#EFCC80" strokeWidth="2" />
											<line x1="20" y1="15" x2="15" y2="25" stroke="#EFCC80" strokeWidth="2" />
											<line x1="20" y1="15" x2="25" y2="30" stroke="#EFCC80" strokeWidth="2" />
										</svg>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="lg:col-span-3">
							<form onSubmit={handleSubmit} className="glass dark:glass-dark rounded-3xl p-8 space-y-6">
								{/* Name Field */}
								<div>
									<label className="block text-xs font-medium tracking-wider mb-2 text-on-background/60 dark:text-on-background-dark/60">
										{t.contact.badge}
									</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										placeholder={t.contact.form.name}
										className="w-full px-4 py-3 rounded-2xl bg-background dark:bg-background-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
									/>
								</div>

								{/* Email Field */}
								<div>
									<label className="block text-xs font-medium tracking-wider mb-2 text-on-background/60 dark:text-on-background-dark/60">
										{t.contact.form.email}
									</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										placeholder={t.contact.form.emailPlaceholder}
										className="w-full px-4 py-3 rounded-2xl bg-background dark:bg-background-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
									/>
								</div>

								{/* Message Field */}
								<div>
									<label className="block text-xs font-medium tracking-wider mb-2 text-on-background/60 dark:text-on-background-dark/60">
										{t.contact.form.message}
									</label>
									<textarea
										required
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
										placeholder={t.contact.form.messagePlaceholder}
										rows={5}
										className="w-full px-4 py-3 rounded-2xl bg-background dark:bg-background-dark border border-outline/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
									/>
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<span className="absolute inset-0 bg-gradient-to-r from-primary via-warning to-primary bg-[length:200%_100%] animate-[gradient-shift_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
									<span className="relative flex items-center space-x-2">
										{isSubmitting ? (
											<>
												<svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
													<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
													<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
												</svg>
												<span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
											</>
										) : (
											<>
												<span>{t.contact.form.submit}</span>
												<svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
												</svg>
											</>
										)}
									</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
