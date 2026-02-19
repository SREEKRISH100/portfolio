import React, { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface HUDLayoutProps {
    children: React.ReactNode;
    currentView: string;
    onToggleView: (view: string) => void;
}

const HUDLayout: React.FC<HUDLayoutProps> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = ['Home', 'Skills', 'About', 'Projects', 'Contact'];

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 noise-bg z-50 pointer-events-none"></div>
            <div className="fixed inset-0 pointer-events-none z-40 opacity-30 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)]"></div>
            <div className="fixed top-0 left-0 w-full h-[2px] bg-primary/30 animate-scanline z-50 pointer-events-none"></div>

            {/* Animated Background Icons & Gears */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
                {/* Large Central Master Gear */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] animate-spin-slow opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-primary" strokeWidth="0.2">
                        <path d="M50 5 L54 18 L66 18 L70 5 L80 9 L76 22 L86 30 L96 26 L100 36 L88 40 L88 60 L100 64 L96 74 L86 70 L76 78 L80 91 L70 95 L66 82 L54 82 L50 95 L40 91 L44 78 L34 70 L24 74 L20 64 L32 60 L32 40 L20 36 L24 26 L34 30 L44 22 L40 9 Z" />
                        <circle cx="50" cy="50" r="45" strokeDasharray="1 2" />
                        <circle cx="50" cy="50" r="30" />
                    </svg>
                </div>

                {/* Existing Icon Gears */}
                <div className="absolute -top-20 -left-20 w-[400px] h-[400px] animate-spin-gear">
                    <span className="material-symbols-outlined text-[400px] text-primary opacity-50 select-none">settings</span>
                </div>
                <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] animate-spin-gear-rev">
                    <span className="material-symbols-outlined text-[600px] text-primary opacity-30 select-none">settings</span>
                </div>

                {/* Data Streams (Vertical Lines) */}
                <div className="absolute inset-0 flex justify-around opacity-20">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{ animationDelay: '1s' }}></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{ animationDelay: '3s' }}></div>
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream" style={{ animationDelay: '5s' }}></div>
                </div>
            </div>

            {/* Persistent HUD Markers */}
            <div className="fixed top-10 left-10 z-30 hidden lg:block animate-float-readout">
                <div className="border-l-2 border-primary pl-4 py-2 space-y-1 bg-hud-bg/40 backdrop-blur-sm">
                    <div className="text-[10px] font-mono uppercase text-hud-dim tracking-tighter">System Health</div>
                    <div className="flex gap-1">
                        {[1, 1, 1, 1].map((_, i) => <div key={i} className="w-1.5 h-3 bg-primary"></div>)}
                        <div className="w-1.5 h-3 bg-primary/20"></div>
                    </div>
                    <div className="text-[12px] font-mono text-primary">98.4% STABLE</div>
                </div>
            </div>

            <div className="fixed top-10 right-10 z-30 hidden lg:block animate-float-readout" style={{ animationDelay: '-2s' }}>
                <div className="border-r-2 border-primary pr-4 py-2 text-right space-y-1 bg-hud-bg/40 backdrop-blur-sm">
                    <div className="text-[10px] font-mono uppercase text-hud-dim tracking-tighter">CPU Load x64</div>
                    <div className="font-mono text-[12px] text-primary">0.04 ms/cycle</div>
                    <div className="w-32 h-1 bg-primary/20 overflow-hidden mt-2">
                        <div className="w-2/3 h-full bg-primary animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-[60] bg-hud-bg/90 backdrop-blur-md border-b border-primary/20 px-6 md:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4 z-[70]">
                    <span className="font-display font-bold tracking-tighter text-xl text-primary uppercase glow-text">Krishna Prasad</span>
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest uppercase text-hud-dim">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-primary transition-colors relative group"
                        >
                            <span className="group-hover:text-shadow-glow transition-all">{item}</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden z-[70]">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[55] bg-hud-bg/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 font-mono text-xl tracking-widest uppercase text-primary">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="hover:text-white transition-colors relative group py-2"
                                >
                                    <span className="group-hover:text-shadow-glow transition-all">{item}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Decorations */}
                        <div className="absolute bottom-10 text-[10px] text-primary/40 font-mono">
                            SYSTEM_NAV_ACTIVE // TOUCH_INPUT_ ENABLED
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content */}
            <main className="relative z-10 w-full overflow-x-hidden">
                {children}
            </main>
        </div>
    );
};

export default HUDLayout;
