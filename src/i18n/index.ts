import { es } from "./es";
import { en } from "./en";

export type Language = "es" | "en";

const translations = {
	es,
	en,
};

export const getTranslations = (lang: Language = "es") => {
	return translations[lang] || translations.es;
};

export const languages: { code: Language; name: string }[] = [
	{ code: "es", name: "Español" },
	{ code: "en", name: "English" },
];
