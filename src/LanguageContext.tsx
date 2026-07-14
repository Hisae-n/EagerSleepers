import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "ja" | "es" | "no" | "ar";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
}

const LANGUAGE_STORAGE_KEY = "app_language";

const isLanguage = (value: string | null): value is Language => {
	return value === "en" || value === "ja" || value === "es" || value === "no" || value === "ar";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [language, setLanguageState] = useState<Language>(() => {
		if (typeof window === "undefined") {
			return "en";
		}

		const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
		return isLanguage(savedLang) ? savedLang : "en";
	});

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		if (typeof window !== "undefined") {
			window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
		}
	};

	useEffect(() => {
		console.log("[LanguageContext] active language:", language);
	}, [language]);

	const contextValue = useMemo(
		() => ({ language, setLanguage }),
		[language]
	);

	return (
		<LanguageContext.Provider value={contextValue}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
