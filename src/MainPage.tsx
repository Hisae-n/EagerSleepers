import "./Main.css";
import { Header } from "./_components/Header";

export function MainPage() {
  return (
    <main className="page">
	  <Header />
      <section className="intro">
        <p className="eyebrow">Wasp bootstrap</p>
        <h1>EagerSleepers</h1>
        <p className="summary">
          The Wasp development environment is running through Docker.
        </p>
      </section>
    </main>
  );
}
