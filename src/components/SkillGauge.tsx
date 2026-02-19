import React from 'react';

interface SkillGaugeProps {
    label: string;
    percent: number;
    icon: string;
    size?: 'sm' | 'md';
    subLabel?: string;
}

const SkillGauge: React.FC<SkillGaugeProps> = ({ label, percent, icon, size = 'md', subLabel }) => {
    const outerSize = size === 'md' ? 'w-28 h-28' : 'w-16 h-16';
    const radius = size === 'md' ? 48 : 28;
    const strokeWidth = size === 'md' ? 6 : 4;
    const center = size === 'md' ? 56 : 32;
    const iconSize = size === 'md' ? 'text-4xl' : 'text-xl';

    return (
        <div className="group flex flex-col items-center">
            <div className={`relative flex items-center justify-center ${outerSize} mb-4`}>
                <svg className={`${outerSize} transform -rotate-90`}>
                    <circle
                        className="text-hud-border/20"
                        cx={center} cy={center}
                        fill="transparent" r={radius}
                        stroke="currentColor" strokeWidth="2"
                    />
                    <circle
                        className="text-primary gauge-ring transition-all duration-1000 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,1)]"
                        cx={center} cy={center}
                        fill="transparent" r={radius}
                        stroke="currentColor" strokeWidth={strokeWidth}
                        style={{ '--percent': percent } as React.CSSProperties}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className={`material-symbols-outlined text-primary group-hover:scale-110 transition-transform ${iconSize}`}>
                        {icon}
                    </span>
                    {size === 'sm' && (
                        <span className="text-[10px] font-mono font-bold text-primary">{percent}%</span>
                    )}
                </div>
            </div>
            <span className="font-mono text-[10px] text-hud-dim tracking-widest uppercase">{label}</span>
            <span className="font-bold text-sm tracking-widest mt-1 text-primary">{percent}%</span>
            {subLabel && (
                <span className="text-[9px] font-mono text-hud-dim tracking-tighter mt-1 opacity-60 uppercase">{subLabel}</span>
            )}
        </div>
    );
};

export default SkillGauge;
