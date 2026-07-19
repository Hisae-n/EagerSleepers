import "./Main.css";

import type { AuthUser } from "wasp/auth";
import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";
import { useLanguage } from "./LanguageContext";

export function MyPage({ user }: { user: AuthUser }) {
	const loginId = user.getFirstProviderUserId();

	const { t } = useLanguage();
	return (

    <Layout>
      <main className="page">
        <Header />
        <section className="user-info">
          <p className="user-info__text">
            {t("MyPage.userinfotext")} <strong>{loginId}</strong>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
