import type { ChangeEvent } from "react";
import { type Language, useLanguage } from "../LanguageContext";

const languageOptions: Array<{ value: Language; label: string }> = [
	{ value: "en", label: "English" },
	{ value: "ja", label: "Japanese" },
	{ value: "es", label: "Spanish" },
	{ value: "no", label: "Norwegian" },
	{ value: "ar", label: "Arabic" },
];

export function LanguageSwitcher() {
	const { language, setLanguage } = useLanguage();

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value as Language);
	};

	return (
		<div className="languagePicker" aria-label="Language selection">
			<label htmlFor="language-select" className="languagePickerLabel">
				Language
			</label>
			<select id="language-select" className="languagePickerSelect" value={language} onChange={handleLanguageChange}>
				{languageOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			<p className="languageDebug" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
				Current language: <strong>{language}</strong>
			</p>
		</div>
	);
}
