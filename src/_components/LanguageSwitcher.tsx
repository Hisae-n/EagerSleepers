import type { ChangeEvent } from "react";
import { type Language, useLanguage } from "../LanguageContext";

const languageOptions: Array<{ value: Language; label: string }> = [
	{ value: "en", label: "English" },
	{ value: "ja", label: "日本語" },
	{ value: "es", label: "Español" },
	{ value: "no", label: "Norsk" },
	{ value: "ar", label: "العربية" },
];

export function LanguageSwitcher() {
	const { language, setLanguage, t } = useLanguage();

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value as Language);
	};

	return (
		<div className="languagePicker" aria-label="Language selection">
			<label htmlFor="language-select" className="languagePickerLabel">
				{t("common.languageLabel")}
			</label>
			<select className="menu bg-base-200 rounded-box w-56" value={language} onChange={handleLanguageChange}>
				{languageOptions.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
}