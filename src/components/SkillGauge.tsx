import React, { useState, useEffect, useRef } from 'react';

interface SkillGaugeProps {
    label: string;
    percent: number;
    icon: string;
    size?: 'sm' | 'md';
    subLabel?: string;
}

const SkillGauge: React.FC<SkillGaugeProps> = ({ label, percent, icon, size = 'md', subLabel }) => {
    const [hovered, setHovered] = useState(false);
    const [displayPercent, setDisplayPercent] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);
    const rafRef = useRef<number | null>(null);

    const outerSize = size === 'md' ? 'w-28 h-28' : 'w-16 h-16';
    const radius = size === 'md' ? 48 : 28;
    const strokeWidth = size === 'md' ? 6 : 4;
    const center = size === 'md' ? 56 : 32;
    const iconSize = size === 'md' ? 'text-4xl' : 'text-xl';
    const circumference = 2 * Math.PI * radius;

    // Reusable animation runner — cancels any in-progress animation then sweeps 0 → percent
    const runAnimation = (targetPercent: number, durationMs = 1500) => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

        setDisplayPercent(0);
        const startTime = performance.now();
        const ease = (t: number) => 1 - Math.pow(1 - t, 3); // cubic ease-out

        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / durationMs, 1);
            setDisplayPercent(Math.round(ease(progress) * targetPercent));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
    };

    // Trigger once on scroll-into-view
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    if (!hasAnimated.current) {
                        hasAnimated.current = true;
                        runAnimation(percent);
                    }
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [percent]);

    // Re-play animation on every hover
    const handleMouseEnter = () => {
        setHovered(true);
        runAnimation(percent, 1000); // slightly faster on hover
    };

    const handleMouseLeave = () => {
        setHovered(false);
        // keep the arc at 100% of target after hover — no reset
    };

    const offset = circumference - (circumference * displayPercent) / 100;

    return (
        <div
            ref={containerRef}
            className="flex flex-col items-center"
            style={{
                transform: hovered ? 'scale(1.22) translateY(-14px)' : 'scale(1) translateY(0px)',
                transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                zIndex: hovered ? 10 : 'auto',
                position: 'relative',
                cursor: 'default',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow aura */}
            <div
                style={{
                    position: 'absolute',
                    width: size === 'md' ? '7rem' : '4rem',
                    height: size === 'md' ? '7rem' : '4rem',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    boxShadow: hovered
                        ? '0 0 28px 10px rgba(0,229,255,0.35), 0 0 60px 20px rgba(0,229,255,0.15)'
                        : '0 0 0px 0px rgba(0,229,255,0)',
                    transition: 'box-shadow 0.35s ease',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            />

            <div className={`relative flex items-center justify-center ${outerSize} mb-4`}>
                <svg
                    className={`${outerSize} -rotate-90`}
                    style={{
                        filter: hovered
                            ? 'drop-shadow(0 0 10px rgba(0,229,255,0.9)) drop-shadow(0 0 22px rgba(0,229,255,0.5))'
                            : 'none',
                        transition: 'filter 0.35s ease',
                        overflow: 'visible',
                    }}
                >
                    {/* Track */}
                    <circle
                        cx={center} cy={center}
                        fill="transparent" r={radius}
                        stroke="rgba(0,229,255,0.15)"
                        strokeWidth="2"
                    />
                    {/* Animated arc */}
                    <circle
                        cx={center} cy={center}
                        fill="transparent" r={radius}
                        stroke="#00E5FF"
                        strokeWidth={hovered ? strokeWidth + 2 : strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-width 0.3s ease' }}
                    />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span
                        className={`material-symbols-outlined text-primary ${iconSize}`}
                        style={{
                            transform: hovered ? 'scale(1.25)' : 'scale(1)',
                            filter: hovered ? 'drop-shadow(0 0 6px rgba(0,229,255,1))' : 'none',
                            transition: 'transform 0.3s ease, filter 0.3s ease',
                        }}
                    >
                        {icon}
                    </span>
                    {size === 'sm' && (
                        <span className="text-[10px] font-mono font-bold text-primary">{displayPercent}%</span>
                    )}
                </div>
            </div>

            <span className="font-mono text-[10px] text-hud-dim tracking-widest uppercase">{label}</span>

            <span
                className="font-bold text-sm tracking-widest mt-1 text-primary"
                style={{
                    textShadow: hovered ? '0 0 12px rgba(0,229,255,1), 0 0 24px rgba(0,229,255,0.6)' : 'none',
                    transition: 'text-shadow 0.3s ease',
                }}
            >
                {displayPercent}%
            </span>

            {subLabel && (
                <span className="text-[9px] font-mono text-hud-dim tracking-tighter mt-1 opacity-60 uppercase">{subLabel}</span>
            )}
        </div>
    );
};

export default SkillGauge;
