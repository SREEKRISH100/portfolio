import React, { type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface LayoutProps {
    children: ReactNode;
}

import SunRays from "./SunRays";

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-bg text-text font-sans selection:bg-primary selection:text-bg relative">
            <SunRays />
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <nav className="fixed w-full top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-primary"
                    >
                        KV.
                    </motion.div>
                    <div className="hidden md:flex space-x-8">
                        {["About", "Skills", "Experience", "Projects", "Contact"].map(
                            (item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-textLight hover:text-primary transition-colors text-sm font-medium"
                                >
                                    {item}
                                </motion.a>
                            )
                        )}
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 pt-24 pb-20">{children}</main>

            <footer className="text-center py-6 text-textLight text-sm">
                <p>Built with React, Tailwind & Framer Motion</p>
            </footer>
        </div>
    );
};

export default Layout;
