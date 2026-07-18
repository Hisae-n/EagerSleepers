import "./Main.css";

import { Link } from "wasp/client/router";

import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";
import { useLanguage } from "./LanguageContext";

export function MainPage() {
	const { t } = useLanguage();

	return (
		<Layout>
			<main className="page">
				<Header />
				<section className="intro">
					<p className="eyebrow">{t("home.eyebrow")}</p>
					<h1 className="text-emerald-200 text-4xl">{t("home.title")}</h1>
					<p className="summary">{t("home.summary")}</p>

					<Link to="/room" className="btn btn-primary flex mt-2">
						{t("home.goToRoom")}
					</Link>
				</section>
			</main>
		</Layout>
	);
}
