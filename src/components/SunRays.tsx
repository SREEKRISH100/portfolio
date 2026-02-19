import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const SunRays = () => {
    const mouseX = useMotionValue(0);
    // Map mouse X (0 to window width) to rotation (-45deg to 45deg)
    // Wider range ensures rays stay visible at screen edges
    const rotate = useTransform(mouseX, [0, window.innerWidth], [-45, 45]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-start justify-center">
            <motion.div
                style={{ rotate }}
                className="w-[500vmax] h-[500vmax] opacity-[0.12] -translate-y-1/2 origin-center transition-transform duration-75 ease-out"
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background:
                            "conic-gradient(from 0deg, var(--color-primary) 0deg, transparent 5deg, transparent 20deg, var(--color-primary) 30deg, transparent 35deg, transparent 50deg, var(--color-primary) 60deg, transparent 65deg, transparent 80deg, var(--color-primary) 90deg, transparent 95deg, transparent 110deg, var(--color-primary) 120deg, transparent 125deg, transparent 140deg, var(--color-primary) 150deg, transparent 155deg, transparent 170deg, var(--color-primary) 180deg, transparent 185deg, transparent 200deg, var(--color-primary) 210deg, transparent 215deg, transparent 230deg, var(--color-primary) 240deg, transparent 245deg, transparent 260deg, var(--color-primary) 270deg, transparent 275deg, transparent 290deg, var(--color-primary) 300deg, transparent 305deg, transparent 320deg, var(--color-primary) 330deg, transparent 335deg, transparent 350deg, var(--color-primary) 360deg)",
                        maskImage: "radial-gradient(circle, black 0%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(circle, black 0%, transparent 80%)",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default SunRays;
