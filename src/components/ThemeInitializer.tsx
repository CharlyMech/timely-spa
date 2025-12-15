import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

export default function ThemeInitializer() {
	const { theme, setTheme } = useAppStore();

	useEffect(() => {
		// Apply theme on mount
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return null;
}