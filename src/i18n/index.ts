import type { Language } from "../LanguageContext";
import { en, type TranslationTree } from "./en";
import { ja } from "./ja";
import { es } from "./es";
import { no } from "./no";
import { ar } from "./ar";
import type { DeepPartial, Leaves } from "./types";

export type TranslationKey = Leaves<TranslationTree>;

const dictionaries: Record<Language, DeepPartial<TranslationTree>> = {
	en,
	ja,
	es,
	no,
	ar,
};

// Languages that should render right-to-left.
export const RTL_LANGUAGES: ReadonlySet<Language> = new Set(["ar"]);

/**
 * Resolves a dot-notation key (e.g. "home.title") against the given language's
 * dictionary. Returns "" — never the English fallback, never undefined —
 * if the key is missing for that language, per the "untranslated keys are
 * not displayed" requirement.
 */
export function resolveTranslation(language: Language, key: TranslationKey): string {
	const dict = dictionaries[language];
	const value = key
		.split(".")
		.reduce<unknown>(
			(acc, part) => (acc && typeof acc === "object" ? (acc as Record<string, unknown>)[part] : undefined),
			dict
		);

	return typeof value === "string" ? value : "";
}
