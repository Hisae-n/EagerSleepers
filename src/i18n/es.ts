import type { TranslationTree } from "./en";
import type { DeepPartial } from "./types";

export const es: DeepPartial<TranslationTree> = {
	common: {
		languageLabel: "Idioma",
	},
	home: {
		eyebrow: "Arranque de Wasp",
		title: "EagerSleepers",
		summary: "El entorno de desarrollo de Wasp se ejecuta a través de Docker.",
		goToRoom: "Ir a la sala de espera !",
	},
	room: {
		welcomePrefix: "Bienvenido a la sala de espera :",
		ready: "Estás listo para empezar una partida.",
	},
	auth: {
		loginTitle: "Iniciar sesión",
		signupTitle: "Registrarse",
		emailLabel: "Correo electrónico",
		passwordLabel: "Contraseña",
		submit: "Enviar",
		noAccountYet: "¿Aún no tienes una cuenta?",
		goToSignup: "ir a registrarte",
		forgotPasswordPrompt: "¿Olvidaste tu contraseña?",
		resetIt: "restablécela",
		mustAgreeToTermsError: "Debes aceptar los Términos del servicio.",
		signupFailedError: "Error al registrarse.",
		confirmationEmailSent: "Hemos enviado un correo de confirmación. Activa tu cuenta desde el enlace del correo.",
		alreadyHaveAccount: "Ya tengo una cuenta",
		goToLogin: "ir a iniciar sesión",
		errorPrefix: "Error:",
		termsOfService: "Términos del servicio",
		agreeToTerms: " Acepto los Términos del servicio",
		ifEverythingOkay: "Si todo está bien,",
		forgotPasswordTitle: "Olvidé mi contraseña",
	},
	game: {
		title: "Partida en curso",
		scoreLabel: "Puntuación",
	},
	results: {
		title: "Resultados",
		winner: "Ganador",
		playAgain: "Jugar de nuevo",
	},
};
