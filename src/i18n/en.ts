export const en = {
	common: {
		languageLabel: "Language",
	},
	header: {
		goToMyPage: "My Page",
		login: "Login",
		logout: "Logout",
	},
	home: {
		eyebrow: "Wasp bootstrap",
		title: "EagerSleepers",
		summary: "The Wasp development environment is running through Docker.",
		goToRoom: "Go to the waiting room !",
	},
	room: {
		welcomePrefix: "Welcome to the waiting room ",
		ready: "You are ready to start a match.",
	},
	MyPage: {
		userinfotext: "You are logged in as :"
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
		mustAgreeToPrivacyError: "Please agree to the Privacy Policy.",
		signupFailedError: "Sign up failed.",
		confirmationEmailSent: "We've sent a confirmation email. Please activate your account from the link in the email.",
		alreadyHaveAccount: "I already have an account",
		goToLogin: "go to login",
		errorPrefix: "Error:",
		termsOfService1: "I agree to the ",
		termsOfService2: "Terms of Service",
		privacyConsent1: "I agree to the ",
		privacyConsent2: "Privacy Policy.",
		agreeToPrivacyPolicy: " I agree to the Privacy Policy",
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