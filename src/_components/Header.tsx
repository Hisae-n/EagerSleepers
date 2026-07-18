import { Link } from "wasp/client/router";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../LanguageContext";
import { useAuth, logout } from "wasp/client/auth";

export function Header() {
	const { t } = useLanguage();
	const { data: user } = useAuth();

	return (
		<header>
			<img src="/favicon.svg" alt="EagerSleepers logo" />
			<p>EagerSleepers</p>
			<Link to="/mypage">{t("header.goToMyPage")}</Link>
			{user ? (
				<button type="button" onClick={() => logout()} className="roomButton">
					{t("header.logout")}
				</button>
			) : (
				<Link to="/login" className="roomButton">
					{t("header.login")}
				</Link>
			)}
			<LanguageSwitcher />
		</header>
  );
}
