import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "../i18n";

export type Theme = "light" | "dark";

interface AppState {
	theme: Theme;
	language: Language;
	setTheme: (theme: Theme) => void;
	setLanguage: (language: Language) => void;
	toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
	persist(
		(set) => ({
			theme: "light",
			language: "es",
			setTheme: (theme) => {
				set({ theme });
				if (typeof document !== "undefined") {
					if (theme === "dark") {
						document.documentElement.classList.add("dark");
					} else {
						document.documentElement.classList.remove("dark");
					}
				}
			},
			setLanguage: (language) => {
			set({ language });
			// Dispatch custom event for Astro components to listen
			if (typeof window !== 'undefined') {
				window.dispatchEvent(new CustomEvent('languageChange', { detail: { language } }));
			}
		},
			toggleTheme: () =>
				set((state) => {
					const newTheme = state.theme === "light" ? "dark" : "light";
					if (typeof document !== "undefined") {
						if (newTheme === "dark") {
							document.documentElement.classList.add("dark");
						} else {
							document.documentElement.classList.remove("dark");
						}
					}
					return { theme: newTheme };
				}),
		}),
		{
			name: "timely-preferences",
		}
	)
);
