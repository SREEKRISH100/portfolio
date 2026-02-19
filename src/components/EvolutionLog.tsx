import React from 'react';
import SkillGauge from './SkillGauge';

const EvolutionLog: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
            <header className="mb-20">
                <div className="flex items-center gap-4 mb-2">
                    <div className="h-px w-12 bg-primary"></div>
                    <span className="font-mono text-primary text-[10px] tracking-[0.5em] uppercase">System Progression Log</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter glow-text uppercase">
                    KRISHNA PRASAD // <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">SYSTEM_EVOLUTION</span>
                </h1>
            </header>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Education Timeline */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-primary">history_edu</span>
                        <h2 className="text-xl font-bold tracking-[0.2em] text-primary uppercase">Education Timeline</h2>
                    </div>

                    <div className="relative pl-12 space-y-20">
                        {/* Timeline Vertical Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_10px_rgba(0,229,255,0.5)]"></div>

                        {/* Phase 02 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(0,229,255,1)]"></div>
                            <div className="hud-glass p-6 border-l-4 border-l-primary relative">
                                <div className="absolute -left-12 top-4 h-px w-12 bg-primary/40"></div>
                                <span className="font-mono text-[10px] text-primary block mb-2 opacity-60">PHASE_02 // UPGRADED</span>
                                <h3 className="text-2xl font-bold text-white mb-1">MCA @ KTU</h3>
                                <p className="font-mono text-sm text-hud-dim mb-4 tracking-tighter">Master of Computer Applications</p>
                                <div className="flex items-center justify-between font-mono text-[10px] text-primary/80 border-t border-primary/10 pt-4">
                                    <span>START: 2023</span>
                                    <span className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        ACTIVE_PROCESS
                                    </span>
                                    <span>ETA: 2025</span>
                                </div>
                            </div>
                        </div>

                        {/* Phase 01 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-2 w-4 h-4 rounded-full bg-primary/40 border border-primary"></div>
                            <div className="hud-glass p-6 border-l-4 border-l-primary/40 relative">
                                <div className="absolute -left-12 top-4 h-px w-12 bg-primary/20"></div>
                                <span className="font-mono text-[10px] text-primary block mb-2 opacity-60">PHASE_01 // COMPILED</span>
                                <h3 className="text-2xl font-bold text-white/80 mb-1">BCA @ MG</h3>
                                <p className="font-mono text-sm text-hud-dim mb-4 tracking-tighter">Bachelor of Computer Applications</p>
                                <div className="flex items-center justify-between font-mono text-[10px] text-primary/40 border-t border-primary/10 pt-4">
                                    <span>START: 2020</span>
                                    <span>STATUS: COMPLETED</span>
                                    <span>END: 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Soft Skills Section */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="material-symbols-outlined text-primary">psychology</span>
                        <h2 className="text-xl font-bold tracking-[0.2em] text-primary uppercase">Neural Network // Soft Skills</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        <SkillGauge
                            label="Analytical Thinking"
                            percent={95}
                            icon="monitoring"
                            size="sm"
                            subLabel="COGNITIVE_LOGIC_01"
                        />
                        <SkillGauge
                            label="Teamwork"
                            percent={88}
                            icon="groups"
                            size="sm"
                            subLabel="SWARM_SYNC_V2"
                        />
                        <SkillGauge
                            label="Leadership"
                            percent={82}
                            icon="auto_awesome"
                            size="sm"
                            subLabel="CORE_ORCHESTRATOR"
                        />
                        <SkillGauge
                            label="Critical Thinking"
                            percent={90}
                            icon="psychology_alt"
                            size="sm"
                            subLabel="DATA_INTERPRET_RX"
                        />
                    </div>

                    <div className="mt-12 hud-glass p-8 border-dashed border-primary/20 bg-primary/5">
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 bg-hud-bg/60 border border-primary/30 flex items-center gap-3 animate-float-readout">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Adaptive_Learning</span>
                            </div>
                            <div className="px-4 py-2 bg-hud-bg/60 border border-primary/30 flex items-center gap-3 animate-float-readout" style={{ animationDelay: '-1.5s' }}>
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Cross-Platform_Comms</span>
                            </div>
                            <div className="px-4 py-2 bg-hud-bg/60 border border-primary/30 flex items-center gap-3 animate-float-readout" style={{ animationDelay: '-3s' }}>
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Conflict_Resolution_0xFF</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="mt-32 pt-10 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 opacity-60">
                <div className="font-mono text-[10px] text-hud-dim uppercase tracking-[0.25em]">
                    SYS_VERSION: 2.4.0-STABLE // BUILD_DATE: 2024.Q4
                </div>
                <div className="flex gap-10">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-mono text-[10px] text-primary uppercase">Transmission_Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-mono text-[10px] text-primary uppercase">Neural_Link_OK</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EvolutionLog;
