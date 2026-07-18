import "./Main.css";

import { Link } from "wasp/client/router";

import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";

export function MainPage() {
  return (
    <Layout>
      <main className="page">
	      <Header />
        <section className="intro">
          <p className="eyebrow">Wasp bootstrap</p>
          <h1>EagerSleepers</h1>
          <p className="summary">
            The Wasp development environment is running through Docker.
          </p>
          <Link to="/room" className="roomButton">
            Go to the waiting room!
          </Link>
        </section>
      </main>
    </Layout>
  );
}
