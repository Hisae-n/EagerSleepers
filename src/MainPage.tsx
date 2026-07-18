import "./Main.css";

import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";

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
        </section>
      </main>
    </Layout>
  );
}
