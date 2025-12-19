import type { ReactNode } from 'react';

type CardVariant = 'feature' | 'icon-badge' | 'simple';

interface CardProps {
	children: ReactNode;
	variant?: CardVariant;
	icon?: ReactNode;
	padding?: string;
	className?: string;
	hoverEffect?: boolean;
	animationDelay?: number;
	backgroundColor?: 'surface' | 'background';
	iconActive?: boolean;
}

export default function Card({
	children,
	variant = 'simple',
	icon,
	padding = 'p-8',
	className = '',
	hoverEffect = true,
	animationDelay = 0,
	backgroundColor = 'surface',
	iconActive = true,
}: CardProps) {
	const bgClasses =
		backgroundColor === 'background'
			? 'bg-background dark:bg-background-dark'
			: 'bg-surface dark:bg-surface-dark';

	const baseClasses = `relative h-full ${padding} rounded-3xl ${bgClasses} border border-outline/20`;

	const hoverClasses = hoverEffect
		? 'transition-[transform,box-shadow,border-color,background-color] duration-[500ms,500ms,500ms,150ms] hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50'
		: 'transition-[background-color,border-color] duration-150';

	if (variant === 'feature') {
		return (
			<div
				className="group relative"
				style={{ animationDelay: `${animationDelay}s` }}
			>
				<div className={`${baseClasses} ${hoverClasses} overflow-hidden ${className}`}>
					{icon && (
						<div className="absolute -right-16 -bottom-16 w-64 h-64 z-0 text-primary opacity-[0.08] dark:opacity-[0.04] transition-[transform,opacity] duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:opacity-[0.12] dark:group-hover:opacity-[0.06]">
							{icon}
						</div>
					)}
					{/* Glow effect on hover */}
					<div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 dark:to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
					<div className="relative z-10">{children}</div>
				</div>
			</div>
		);
	}

	if (variant === 'icon-badge') {
		const iconClasses = iconActive
			? 'bg-primary/10 text-primary group-hover:scale-110'
			: 'bg-inactive/10 text-inactive';

		return (
			<div
				className={`group relative h-full ${className}`}
				style={{ animationDelay: `${animationDelay}s` }}
			>
				<div className={`${baseClasses} ${hoverClasses}`}>
					{icon && (
						<div
							className={`inline-flex p-4 rounded-2xl mb-4 transition-[transform,background-color] duration-500 ${iconClasses}`}
						>
							{icon}
						</div>
					)}
					{children}
				</div>
			</div>
		);
	}

	return (
		<div
			className="group relative"
			style={{ animationDelay: `${animationDelay}s` }}
		>
			<div className={`${baseClasses} ${hoverClasses} ${className}`}>
				{children}
			</div>
		</div>
	);
}
