import "./Main.css";

import { Header } from "./_components/Header";
import { LanguageSwitcher } from "./_components/LanguageSwitcher";
import { Layout } from "./pages/auth";
import { useLanguage } from "./LanguageContext";
import { logout } from "wasp/client/auth";

export function MainPage() {
	const { t } = useLanguage();

	return (
		<Layout>
			<main className="page">
				<Header />
				<section className="intro">
					<p className="eyebrow">{t("home.eyebrow")}</p>
					<h1>{t("home.title")}</h1>
					<p className="summary">{t("home.summary")}</p>

					<button type="button" onClick={() => window.location.assign("/room")} className="roomButton">
						{t("home.goToRoom")}
					</button>
					<button type="button" onClick={() => logout()}>
						Logout
					</button>
					<LanguageSwitcher />
				</section>
			</main>
		</Layout>
	);
}