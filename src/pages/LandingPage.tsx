import Hero from "../components/Hero";

import TechBackground from "../components/TechBackground";

const LandingPage = () => {
    return (
        <div className="text-text min-h-screen relative font-sans">
            <nav className="fixed w-full top-0 z-50 bg-transparent pt-6">
                <div className="max-w-7xl mx-auto px-6 flex justify-end">
                    <div className="hidden md:flex space-x-8">
                        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`/portfolio#${item.toLowerCase()}`}
                                className="text-textLight hover:text-primary transition-colors text-sm font-medium font-mono"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
            <TechBackground />
            <Hero />
        </div>
    );
};

export default LandingPage;
