import "./Main.css";
import { useAuth } from "wasp/client/auth";
import { Layout } from "./pages/auth";
import { useLanguage } from "./LanguageContext";

export const Room = () => {
	const { t } = useLanguage();
    const { data: user } = useAuth();
    const displayName =
        user?.username ?? user?.identities?.email?.id ?? "Player";

    return (
		<Layout>
        	<main className="page wait-room">
        	    <section className="wait-roomCard">
        	        <p>{t("room.welcomePrefix")} : {displayName}</p>
        	        <p className="summary">{t("room.ready")}</p>
        	    </section>
        	</main>
		</Layout>
    );
};