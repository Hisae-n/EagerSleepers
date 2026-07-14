import "./Main.css";
import { useAuth } from "wasp/client/auth";
import { LanguageSwitcher } from "./_components/LanguageSwitcher";

export const Room = () => {
    const { data: user } = useAuth();
    const displayName =
        user?.username ?? user?.identities?.email?.id ?? "Player";

    return (
        <main className="page wait-room">
            <section className="wait-roomCard">
                <p>Welcome to the waiting room : {displayName}</p>
                <p className="summary">You are ready to start a match.</p>
                <LanguageSwitcher />
            </section>
        </main>
    );
};