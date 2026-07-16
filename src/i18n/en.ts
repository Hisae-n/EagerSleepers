export const en = {
	common: {
		languageLabel: "Language",
	},
	home: {
		eyebrow: "Wasp bootstrap",
		title: "EagerSleepers",
		summary: "The Wasp development environment is running through Docker.",
		goToRoom: "Go to the waiting room !",
	},
	room: {
		welcomePrefix: "Welcome to the waiting room :",
		ready: "You are ready to start a match.",
	},
	auth: {
		loginTitle: "Log in",
		signupTitle: "Sign up",
		emailLabel: "Email",
		passwordLabel: "Password",
		submit: "Submit",
		noAccountYet: "Don't have an account yet?",
		goToSignup: "go to signup",
		forgotPasswordPrompt: "Forgot your password?",
		resetIt: "reset it",
		mustAgreeToTermsError: "Please agree to the Terms of Service.",
		signupFailedError: "Sign up failed.",
		confirmationEmailSent: "We've sent a confirmation email. Please activate your account from the link in the email.",
		alreadyHaveAccount: "I already have an account",
		goToLogin: "go to login",
		errorPrefix: "Error:",
		termsOfService: "Terms of Service",
		agreeToTerms: " I agree to the Terms of Service",
		ifEverythingOkay: "If everything is okay,",
		forgotPasswordTitle: "Forgot password",
	},
	game: {
		title: "Match in progress",
		scoreLabel: "Score",
	},
	results: {
		title: "Results",
		winner: "Winner",
		playAgain: "Play again",
	},
} as const;

export type TranslationTree = typeof en;
