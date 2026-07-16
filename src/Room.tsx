import "./Main.css";
import { useAuth } from "wasp/client/auth";
import { LanguageSwitcher } from "./_components/LanguageSwitcher";
import { useLanguage } from "./LanguageContext";

export const Room = () => {
	const { data: user } = useAuth();
	const { t } = useLanguage();
	const displayName =
		user?.username ?? user?.identities?.email?.id ?? "Player";

	return (
		<main className="page wait-room">
			<section className="wait-roomCard">
				<p>
					{t("room.welcomePrefix")} {displayName}
				</p>
				<p className="summary">{t("room.ready")}</p>
				<LanguageSwitcher />
			</section>
		</main>
	);
};