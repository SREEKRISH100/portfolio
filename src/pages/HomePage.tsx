import { useState } from "react";
import HUDLayout from "../components/HUDLayout";
import IdentityTerminal from "../components/IdentityTerminal";
import EvolutionLog from "../components/EvolutionLog";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";

const HomePage = () => {
    const [currentView, setCurrentView] = useState("TERMINAL");

    const toggleView = (view: string) => {
        setCurrentView(view);
    };

    return (
        <HUDLayout currentView={currentView} onToggleView={toggleView}>
            {currentView === "TERMINAL" ? (
                <>
                    <IdentityTerminal />
                    <About />
                    <Projects />
                    <Contact />
                </>
            ) : (
                <EvolutionLog />
            )}
        </HUDLayout>
    );
};

export default HomePage;
