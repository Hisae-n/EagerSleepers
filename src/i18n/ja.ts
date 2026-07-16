import type { TranslationTree } from "./en";
import type { DeepPartial } from "./types";

export const ja: DeepPartial<TranslationTree> = {
	common: {
		languageLabel: "言語",
	},
	home: {
		eyebrow: "Wasp ブートストラップ",
		title: "EagerSleepers",
		summary: "Wasp の開発環境は Docker 上で動作しています。",
		goToRoom: "待機ルームへ進む！",
	},
	room: {
		welcomePrefix: "待機ルームへようこそ：",
		ready: "試合開始の準備ができています。",
	},
	auth: {
		loginTitle: "ログイン",
		signupTitle: "新規登録",
		emailLabel: "メールアドレス",
		passwordLabel: "パスワード",
		submit: "送信",
		noAccountYet: "まだアカウントをお持ちではありませんか？",
		goToSignup: "新規登録へ",
		forgotPasswordPrompt: "パスワードをお忘れですか？",
		resetIt: "再設定する",
		mustAgreeToTermsError: "利用規約に同意してください。",
		signupFailedError: "新規登録に失敗しました。",
		confirmationEmailSent: "確認メールを送信しました。メール内のリンクからアカウントを有効化してください。",
		alreadyHaveAccount: "すでにアカウントをお持ちです",
		goToLogin: "ログインへ",
		errorPrefix: "エラー:",
		termsOfService: "利用規約",
		agreeToTerms: "に同意します",
		ifEverythingOkay: "問題なければ、",
		forgotPasswordTitle: "パスワードを忘れた場合",
	},
	game: {
		title: "試合中",
		scoreLabel: "スコア",
	},
};
