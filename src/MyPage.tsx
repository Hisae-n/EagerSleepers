import "./Main.css";

import type { AuthUser } from "wasp/auth";
import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";

export function MyPage({ user }: { user: AuthUser }) {
  // Get the login ID of the user. This is the ID of the first provider that the user used to log in.
  // Priority is not guaranteed, so if the user has multiple providers, the login ID may not be the one you expect.
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