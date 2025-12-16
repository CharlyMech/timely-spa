import { late } from 'astro:schema';
import { useState, useEffect } from 'react';

interface Release {
	tag_name: string;
}

interface VersionBadgeProps {
	owner?: string;
	repo?: string;
	className?: string;
}

export default function VersionBadge({
	owner = 'CharlyMech',
	repo = 'timely',
	className = '',
}: VersionBadgeProps) {
	const [version, setVersion] = useState<string>('');
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const fetchLatestVersion = async () => {
			try {
				const response = await fetch(
					`https://api.github.com/repos/${owner}/${repo}/releases`
				);

				if (!response.ok) {
					setIsVisible(false);
					return;
				}

				const data: Release[] = await response.json();

				if (!data || data.length === 0) {
					setIsVisible(false);
					return;
				}

				const latestRelease = data[0];
				setVersion(latestRelease.tag_name);
				setIsVisible(true);
			} catch (err) {
				console.error('Error fetching version:', err);
				setIsVisible(false);
			}
		};

		fetchLatestVersion();
	}, [owner, repo]);

	// Si no es visible (error o loading), no renderizar nada
	if (!isVisible) {
		return null;
	}

	return (
		<span
			className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium ${className}`}
		>
			{version}
		</span>
	);
}