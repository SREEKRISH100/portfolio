import React, { useState } from 'react';
import ImageViewer from './ImageViewer';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface HUDCardProps {
    project: any;
    index: number;
}

const HUDCard: React.FC<HUDCardProps> = ({ project, index }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    const nextImage = () => {
        if (project.images && project.images.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (project.images && project.images.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    const hasMultipleImages = project.images && project.images.length > 1;

    // Mock Data for decorations (deterministic based on index/title)
    const dat01 = `44.092.${10 + index}`;
    const dat02 = `FF.0${index + 1}.AA`;
    const secLevel = `0${index + 1}`;
    const temp = `${30 + index}°C`;
    const version = `V.${2 + index}.0.${project.technologies.length}`;

    const currentImage = project.images && project.images.length > 0
        ? project.images[currentImageIndex]
        : `https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/800`; // Fallback placeholder

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="relative w-full max-w-5xl group mx-auto mb-12"
        >
            <ImageViewer
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                images={project.images || []}
                initialIndex={currentImageIndex}
                projectTitle={project.title}
                projectLink={project.link}
            />

            {/* Outer Glow & Background Accent */}
            <div className="absolute -inset-4 border border-primary/10 rounded-lg pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Decorative Binary Header */}
            <div className="absolute -top-10 left-0 flex items-center space-x-2">
                <div className="h-px w-6 bg-primary/40"></div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-[0.3em]">Project: Repository_0{index + 1}</span>
            </div>

            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] text-primary/20 font-mono tracking-[0.5em] hidden lg:block select-none pointer-events-none">
                001100{index} 01001011 01010010 01001001 01010011 01001000 01001110 01000001
            </div>

            {/* Main Card Container */}
            <div className="relative hud-glass p-1 hud-border overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.2)] transition-shadow duration-500 bg-[#020c1b]/80">

                {/* Animated Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-2.5 w-full pointer-events-none animate-scanline z-0"></div>

                <div className="flex flex-col md:flex-row p-6 relative z-10 gap-8">

                    {/* Left Side: Media Section (Carousel) */}
                    <div className="w-full md:w-[42%] flex-shrink-0 relative group/image">
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary z-20"></div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary z-20"></div>

                        <div className="relative aspect-square overflow-hidden border border-primary/20 bg-slate-900 flex items-center justify-center">
                            {/* Image */}
                            <img
                                alt={`${project.title} Screenshot`}
                                className="w-full h-full object-cover grayscale opacity-60 group-hover/image:grayscale-0 group-hover/image:opacity-100 transition-all duration-1000 scale-105 group-hover/image:scale-110"
                                src={currentImage}
                            />

                            {/* Carousel Controls (Only show if multiple images) */}
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={(e) => { e.preventDefault(); prevImage(); }}
                                        className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-gradient-to-r from-black/80 to-transparent text-primary opacity-0 group-hover/image:opacity-100 transition-opacity z-30 cursor-pointer"
                                    >
                                        <FaChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.preventDefault(); nextImage(); }}
                                        className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center bg-gradient-to-l from-black/80 to-transparent text-primary opacity-0 group-hover/image:opacity-100 transition-opacity z-30 cursor-pointer"
                                    >
                                        <FaChevronRight size={20} />
                                    </button>
                                    {/* Carousel Indicators */}
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 opacity-0 group-hover/image:opacity-100 transition-opacity bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                        {project.images.map((_: any, idx: number) => (
                                            <div
                                                key={idx}
                                                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-hud-orange' : 'bg-primary/30'}`}
                                            ></div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Internal Image Overlay Text (Only visible when not hovering controls/active) - Simplified to always show for style */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 opacity-100 group-hover/image:opacity-0 transition-opacity duration-500">
                                <h3 className="text-xl font-display font-bold text-white/80 tracking-tight drop-shadow-md text-center px-4">{project.title.substring(0, 15)}{project.title.length > 15 ? '...' : ''}</h3>
                                <p className="text-sm text-white/40 font-mono mt-1">SYS_ACCESS_GRANTED</p>

                                {/* Decorative Glowing Orbs */}
                                <div className="absolute bottom-1/4 flex space-x-8 opacity-20">
                                    <div className="w-12 h-12 bg-white rounded-full blur-xl"></div>
                                    <div className="w-16 h-16 bg-white rounded-full blur-2xl"></div>
                                </div>
                            </div>

                            {/* Status Indicators (Orange dots) */}
                            <div className="absolute top-2 right-2 flex space-x-1.5 z-20">
                                <span className="w-1.5 h-1.5 rounded-full bg-hud-orange animate-pulse"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-hud-orange/40"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-hud-orange/40"></span>
                            </div>

                            {/* Bottom Label */}
                            <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-0.5 text-[10px] text-primary border border-primary/30 uppercase tracking-tighter z-20">
                                CAM_0{index + 1} // LINK_ACTIVE
                            </div>
                        </div>

                        {/* Cyan Corner Accent (Bottom Right of Image Area) */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></div>
                    </div>

                    {/* Right Side: Content Section */}
                    <div className="flex-grow flex flex-col justify-between">
                        <div className="relative">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <h2 className="font-display text-3xl md:text-4xl font-black text-primary tracking-tighter uppercase mb-1 leading-none group-hover:animate-pulse-glow">
                                            {project.title}
                                        </h2>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary/50 hover:text-primary transition-colors hover:scale-110 active:scale-95"
                                                title={`Visit ${project.title}`}
                                            >
                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] text-primary/60 font-bold uppercase tracking-widest mt-2">
                                        <span>SYS: {version}</span>
                                        <span>LOC: INTERNAL_SERVER</span>
                                        <span className="text-hud-green flex items-center">
                                            <span className="w-1 h-1 bg-hud-green rounded-full mr-1 shadow-[0_0_5px_#00ff41]"></span>
                                            STATUS: OPERATIONAL
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 mt-1 opacity-50">
                                    <HUDIcon type="settings" />
                                    <HUDIcon type="terminal" />
                                </div>
                            </div>

                            {/* HUD Progress Bar Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-primary/80 via-primary/20 to-transparent my-6 flex items-center relative">
                                <div className="h-1.5 w-1/4 bg-primary relative">
                                    <div className="absolute right-0 top-0 h-full w-2 bg-white/40"></div>
                                </div>
                                <div className="ml-auto flex space-x-1.5">
                                    <div className="w-1 h-1 bg-hud-orange rounded-full"></div>
                                    <div className="w-1 h-1 bg-hud-orange rounded-full"></div>
                                    <div className="w-1 h-1 bg-hud-orange rounded-full"></div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-[13px] leading-relaxed text-slate-400 font-light max-w-lg font-mono">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.slice(0, 6).map((tech: string) => (
                                    <span key={tech} className="px-3 py-1 text-[9px] border border-primary/20 bg-primary/5 text-primary uppercase font-bold tracking-widest hover:bg-primary/20 transition-colors cursor-crosshair">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer Row */}
                        <div className="flex items-end justify-between border-t border-primary/10 pt-5 mt-auto">
                            <div className="text-[9px] text-primary/40 space-y-1 font-mono uppercase hidden sm:block">
                                <div className="flex space-x-6">
                                    <span className="flex items-center"><span className="text-primary/20 mr-1">►</span> DAT_01: {dat01}</span>
                                    <span className="flex items-center"><span className="text-primary/20 mr-1">►</span> DAT_02: {dat02}</span>
                                </div>
                                <div className="flex space-x-6">
                                    <span className="flex items-center"><span className="text-primary/20 mr-1">►</span> SEC_LVL: {secLevel}</span>
                                    <span className="flex items-center"><span className="text-primary/20 mr-1">►</span> CORE_TEMP: {temp}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 w-full sm:w-auto justify-end">
                                <div className="flex space-x-1 text-primary/40 group-hover:text-hud-green transition-colors duration-500 hidden sm:flex">
                                    <ArrowIcon />
                                    <ArrowIcon />
                                    <ArrowIcon />
                                </div>
                                <button
                                    onClick={(e) => {
                                        if (project.images && project.images.length > 0) {
                                            e.preventDefault();
                                            setIsGalleryOpen(true);
                                        } else if (project.link) {
                                            window.open(project.link, '_blank');
                                        }
                                    }}
                                    className="relative bg-primary hover:bg-white text-hud-dark font-display font-black px-6 md:px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_10px_rgba(0,229,255,0.3)] hover:shadow-[0_8px_20px_rgba(255,255,255,0.4)] flex items-center justify-center cursor-pointer"
                                >
                                    {project.images && project.images.length > 0 ? "View Gallery" : "View Project"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Decorative Gears/SVG Elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 pointer-events-none opacity-[0.05] group-hover:opacity-100 transition-opacity duration-1000 z-0">
                    <svg className="animate-spin-slow fill-primary w-full h-full" viewBox="0 0 100 100">
                        <path d="M50 0 L55 20 L75 10 L65 30 L90 25 L75 45 L100 50 L75 55 L90 75 L65 70 L75 90 L55 80 L50 100 L45 80 L25 90 L35 70 L10 75 L25 55 L0 50 L25 45 L10 25 L35 30 L25 10 L45 20 Z"></path>
                        <circle className="fill-[#020c1b]" cx="50" cy="50" r="15"></circle>
                    </svg>
                </div>
                <div className="absolute -bottom-10 right-12 w-20 h-20 pointer-events-none opacity-[0.07] group-hover:opacity-15 transition-opacity duration-1000 z-0">
                    <svg className="animate-spin-gear-rev stroke-primary fill-none w-full h-full" strokeWidth="1.5" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" strokeDasharray="10 6"></circle>
                        <circle cx="50" cy="50" r="28" strokeDasharray="4 4"></circle>
                        <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50" stroke="currentColor"></path>
                    </svg>
                </div>

                {/* Sidebar Color Accents */}
                <div className="absolute left-0 top-1/4 h-1/2 w-[2px] flex flex-col justify-between py-6 z-20">
                    <div className="h-1/4 w-full bg-primary/10"></div>
                    <div className="h-4 w-full bg-hud-orange shadow-[0_0_8px_#ff5500]"></div>
                    <div className="h-1/4 w-full bg-primary/10"></div>
                </div>
            </div>

            {/* Signature Footer */}
            <div className="absolute -bottom-6 right-0 text-[8px] text-primary/30 font-mono uppercase tracking-widest hidden md:block">
                HUD-OS v24 // SECURE_CONNECTION
            </div>
        </motion.div>
    );
};

// Sub-components for Icons
const HUDIcon: React.FC<{ type: 'settings' | 'terminal' }> = ({ type }) => {
    if (type === 'settings') {
        return (
            <svg className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-1.1-.9-2-2-2h-1.1c-.2-1.1-.6-2.1-1.3-3l.8-.8c.8-.8.8-2 0-2.8s-2-.8-2.8 0l-.8.8c-.9-.7-1.9-1.1-3-1.3V2c0-1.1-.9-2-2-2S8 .9 8 2v1.1c-1.1.2-2.1.6-3 1.3l-.8-.8c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l.8.8c-.7.9-1.1 1.9-1.3 3H2c-1.1 0-2 .9-2 2s.9 2 2 2h1.1c.2 1.1.6 2.1 1.3 3l-.8.8c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l.8-.8c.9.7 1.9 1.1 3 1.3V22c0 1.1.9 2 2 2s2-.9 2-2v-1.1c1.1-.2 2.1-.6 3-1.3l.8.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8l-.8-.8c.7-.9 1.1-1.9 1.3-3H20c1.1 0 2-.9 2-2zM12 15.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
            </svg>
        );
    }
    return (
        <svg className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3" />
        </svg>
    );
};

const ArrowIcon: React.FC = () => (
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

export default HUDCard;
