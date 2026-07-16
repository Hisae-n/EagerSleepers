import type { TranslationTree } from "./en";
import type { DeepPartial } from "./types";

export const ar: DeepPartial<TranslationTree> = {
	common: {
		languageLabel: "اللغة",
	},
	home: {
		eyebrow: "تشغيل Wasp",
		title: "EagerSleepers",
		summary: "بيئة تطوير Wasp تعمل عبر Docker.",
		goToRoom: "اذهب إلى غرفة الانتظار !",
	},
	room: {
		welcomePrefix: "مرحبًا بك في غرفة الانتظار :",
		ready: "أنت جاهز لبدء المباراة.",
	},
	auth: {
		loginTitle: "تسجيل الدخول",
		signupTitle: "إنشاء حساب",
		emailLabel: "البريد الإلكتروني",
		passwordLabel: "كلمة المرور",
		submit: "إرسال",
		noAccountYet: "ليس لديك حساب بعد؟",
		goToSignup: "اذهب إلى إنشاء حساب",
		forgotPasswordPrompt: "هل نسيت كلمة المرور؟",
		resetIt: "أعد تعيينها",
		mustAgreeToTermsError: "يرجى الموافقة على شروط الخدمة.",
		signupFailedError: "فشل إنشاء الحساب.",
		confirmationEmailSent: "أرسلنا رسالة تأكيد عبر البريد الإلكتروني. يرجى تفعيل حسابك من خلال الرابط في الرسالة.",
		alreadyHaveAccount: "لدي حساب بالفعل",
		goToLogin: "اذهب إلى تسجيل الدخول",
		errorPrefix: "خطأ:",
		termsOfService: "شروط الخدمة",
		agreeToTerms: " أوافق على شروط الخدمة",
		ifEverythingOkay: "إذا كان كل شيء على ما يرام،",
		forgotPasswordTitle: "نسيت كلمة المرور",
	},
	game: {
		title: "المباراة جارية",
		scoreLabel: "النتيجة",
	},
	results: {
		title: "النتائج",
		winner: "الفائز",
		playAgain: "العب مرة أخرى",
	},
};
