import "./Main.css";
import { useAuth } from "wasp/client/auth";
import { useState } from "react";
import HelpModal from "./components/HelpModal";

export const Room = () => {
    const { data: user } = useAuth();
    const displayName =
        user?.username ?? user?.identities?.email?.id ?? "Player";
    const [helpOpen, setHelpOpen] = useState(false);

    return (
        <main className="page wait-room">
            <section className="wait-roomCard">
                <p>Welcome to the waiting room : {displayName}</p>
                <p className="summary">You are ready to start a match.</p>
                <button
                    className="btn btn-soft btn-error absolute left-6 top-1/4 w-32 h-20 rounded-xl text-base"
                    onClick={() => setHelpOpen(true)}>
                        How to Play
                </button>
            </section>

            <HelpModal
                open={helpOpen}
                onClose={() => setHelpOpen(false)}
            />
        </main>
    );
};