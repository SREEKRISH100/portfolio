import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

interface ImageViewerProps {
    isOpen: boolean;
    images: string[];
    initialIndex?: number;
    onClose: () => void;
    projectTitle?: string;
    projectLink?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
    isOpen,
    images,
    initialIndex = 0,
    onClose,
    projectTitle,
    projectLink
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Also reset index when closing if desired, but keeping state is fine too
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, initialIndex]);

    const nextImage = () => {
        if (!images || images.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        if (!images || images.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-black hover:bg-hud-orange transition-all z-[10000] p-3 md:p-3 flex items-center gap-2 md:gap-3 group/close bg-black/80 backdrop-blur-md rounded-full px-4 md:px-6 border border-hud-orange/30 shadow-[0_0_15px_rgba(255,85,0,0.3)] pointer-events-auto touch-manipulation"
                    >
                        <span className="text-xs md:text-sm font-bold font-display tracking-widest uppercase hidden sm:inline">Close System</span>
                        <FaTimes size={20} className="group-hover/close:rotate-90 transition-transform duration-300" />
                    </button>

                    {/* Main Content Container */}
                    <div className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center">

                        {/* Header Info */}
                        <div className="absolute top-0 left-0 right-0 flex justify-between items-center text-white/80 z-40 pointer-events-none px-2 md:px-0">
                            <div className="bg-black/50 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded pointer-events-auto">
                                <h3 className="font-display font-bold uppercase tracking-widest text-primary text-sm md:text-base">
                                    {projectTitle}
                                </h3>
                                <p className="text-[10px] md:text-xs font-mono text-gray-400">
                                    IMG_00{currentIndex + 1} // TOTAL_{images.length}
                                </p>
                            </div>

                            {projectLink && (
                                <a
                                    href={projectLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 bg-primary/20 hover:bg-primary/40 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded transition-colors pointer-events-auto cursor-pointer font-bold text-[10px] md:text-xs uppercase tracking-wider"
                                >
                                    <span>Visit Site</span>
                                    <FaExternalLinkAlt size={10} className="md:w-3 md:h-3" />
                                </a>
                            )}
                        </div>

                        {/* Navigation Arrows - Larger touch targets for mobile */}
                        <button
                            onClick={prevImage}
                            className="absolute left-0 top-1/2 -translate-y-1/2 p-4 md:p-6 text-white/50 hover:text-primary transition-colors z-40 bg-black/10 hover:bg-black/50 rounded-r-xl touch-manipulation active:scale-95"
                            aria-label="Previous Image"
                        >
                            <FaChevronLeft size={24} className="md:w-10 md:h-10" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 md:p-6 text-white/50 hover:text-primary transition-colors z-40 bg-black/10 hover:bg-black/50 rounded-l-xl touch-manipulation active:scale-95"
                            aria-label="Next Image"
                        >
                            <FaChevronRight size={24} className="md:w-10 md:h-10" />
                        </button>

                        {/* Main Image */}
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <motion.img
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                src={images[currentIndex]}
                                alt={`Project ${currentIndex + 1}`}
                                className="max-w-full max-h-[80vh] object-contain border-2 border-primary/20 bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="w-full mt-4 overflow-x-auto flex justify-center gap-2 pb-2 h-20 items-center">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative flex-shrink-0 w-16 h-12 overflow-hidden border transition-all duration-300 ${idx === currentIndex
                                        ? 'border-hud-orange scale-110 opacity-100'
                                        : 'border-transparent opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ImageViewer;
