import "./Main.css";

import { Link } from "wasp/client/router";

import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";
import { LanguageSwitcher } from "./_components/LanguageSwitcher";

export function MainPage() {
  return (
    <Layout>
      <main className="page">
	      <Header />
        <section className="intro">
          <p className="eyebrow">Wasp bootstrap</p>
          <h1 className="text-emerald-200 text-4xl">EagerSleepers</h1>
          <p className="summary">
            The Wasp development environment is running through Docker.
          </p>

        <button className="btn btn-primary btn-xl btn-block mt-6">
          <Link to="/room">
             Go to the waiting room!
          </Link>
		     </button>
        <LanguageSwitcher />
        </section>
      </main>
    </Layout>
  );
}
