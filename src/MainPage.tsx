import "./Main.css";

import { Link } from "wasp/client/router";

import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";
import { useState } from "react";
import HelpModal from "./components/HelpModal";

export function MainPage() {
  const [helpOpen, setHelpOpen] = useState(false);

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
          <Link to="/room" className="roomButton">
            Go to the waiting room!
          </Link>
          <button
            className="btn btn-outline mt-6"
            onClick={() => setHelpOpen(true)}>
              How to Play
          </button>
        </section>
        <HelpModal
          open={helpOpen}
          onClose={() => setHelpOpen(false)}
        />
      </main>
    </Layout>
  );
}
