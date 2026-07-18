import "./Main.css";

import type { AuthUser } from "wasp/auth";
import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";

export function MyPage({ user }: { user: AuthUser }) {
  const loginId = user.getFirstProviderUserId();

  return (
    <Layout>
      <main className="page">
        <Header />
        <section className="user-info">
          <p className="user-info__text">
            You are logged in as <strong>{loginId}</strong>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
