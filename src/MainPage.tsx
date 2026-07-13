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
          <h1>EagerSleepers</h1>
          <p className="summary">
            The Wasp development environment is running through Docker.
          </p>
          <button type="button" onClick={() => window.location.assign("/room")} className="roomButton">
				Go to the waiting room !
		  </button>
        </section>
      </main>
    </Layout>
  );
}
