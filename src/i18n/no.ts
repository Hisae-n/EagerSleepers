import type { TranslationTree } from "./en";
import type { DeepPartial } from "./types";

export const no: DeepPartial<TranslationTree> = {
	common: {
		languageLabel: "Språk",
	},
	header: {
		goToMyPage : "My Page",
		login: "Logg inn",
		logout: "Logg ut",
	},
	home: {
		eyebrow: "Wasp-oppstart",
		title: "EagerSleepers",
		summary: "Wasp-utviklingsmiljøet kjører gjennom Docker.",
		goToRoom: "Gå til venterommet !",
	},
	room: {
		welcomePrefix: "Velkommen til venterommet :",
		ready: "Du er klar til å starte en kamp.",
	},
	MyPage: {
		userinfotext: "Du er logget inn som :"
	},
	auth: {
		loginTitle: "Logg inn",
		signupTitle: "Registrer deg",
		emailLabel: "E-post",
		passwordLabel: "Passord",
		submit: "Send inn",
		noAccountYet: "Har du ikke en konto ennå?",
		goToSignup: "gå til registrering",
		forgotPasswordPrompt: "Glemt passordet ditt?",
		resetIt: "tilbakestill det",
		mustAgreeToTermsError: "Du må godta vilkårene.",
		signupFailedError: "Registrering mislyktes.",
		confirmationEmailSent: "Vi har sendt en bekreftelses-e-post. Aktiver kontoen din via lenken i e-posten.",
		alreadyHaveAccount: "Jeg har allerede en konto",
		goToLogin: "gå til innlogging",
		errorPrefix: "Feil:",
		termsOfService1: "Vilkår for bruk",
		termsOfService2: " Jeg godtar vilkårene",
		privacyConsent1: "Jeg godtar",
		privacyConsent2: "personvernerklæringen",
		ifEverythingOkay: "Hvis alt er i orden,",
		forgotPasswordTitle: "Glemt passord",
	},
	game: {
		title: "Kamp pågår",
		scoreLabel: "Poengsum",
	},
	results: {
		title: "Resultater",
		winner: "Vinner",
		playAgain: "Spill igjen",
	},
};
