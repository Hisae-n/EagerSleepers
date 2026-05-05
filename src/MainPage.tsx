import "./Main.css";
import { Header } from "./_components/Header";
import { Layout } from "./pages/auth";

export function MainPage() {
  return (
    <Layout>
      <main className="page flex flex-col items-center justify-center">
	    <Header />
        <section className="intro">
          <p className="eyebrow">Wasp bootstrap</p>
          <h1>EagerSleepers</h1>
          <p className="summary">
            The Wasp development environment is running through Docker.
          </p>
        </section>
      </main>
    </Layout>
  );
}
