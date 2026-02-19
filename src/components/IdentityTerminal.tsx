import React from 'react';
import SkillGauge from '../components/SkillGauge';
import profileImg from '../assets/IMG_20240218_091226.jpg';
import { resumeData } from "../data/resume";

const IdentityTerminal: React.FC = () => {
    return (
        <div id="home" className="max-w-7xl mx-auto px-6 pb-20">
            <header className="min-h-[85vh] flex flex-col justify-center items-center text-center mb-60 scroll-mt-20">
                <div className="inline-block relative">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter glow-text uppercase mb-4">
                        Krishna Prasad Vilasan
                    </h1>
                    <div className="h-1 w-full bg-primary absolute -bottom-2 left-0 scale-x-75 opacity-50 shadow-[0_0_15px_rgba(0,229,255,0.8)]"></div>
                </div>
                <div>
                    <p className="font-mono text-primary tracking-[0.3em] text-sm mt-8 uppercase opacity-80 bg-primary/5 py-1 inline-block px-4 border-x border-primary/20">
                        [ Advanced MERN Stack Developer / Systems Architect ]
                    </p>
                </div>
            </header>

            {/* Skills Section */}
            <section className="mb-40 scroll-mt-32" id="skills">
                <div className="flex items-center gap-4 mb-16">
                    <span className="h-px w-16 bg-primary/40"></span>
                    <h2 className="text-2xl font-bold tracking-[0.3em] text-primary uppercase italic">Core Power Modules</h2>
                    <span className="h-px flex-grow bg-primary/10"></span>
                </div>
                <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                    <SkillGauge label="REACT_JS" percent={95} icon="deployed_code" />
                    <SkillGauge label="NODE_JS" percent={90} icon="memory" />
                    <SkillGauge label="EXPRESS_JS" percent={88} icon="terminal" />
                    <SkillGauge label="MONGODB" percent={85} icon="database" />
                    <SkillGauge label="TAILWIND_CSS" percent={92} icon="palette" />
                    <SkillGauge label="NEXT_JS" percent={90} icon="layers" />
                    <SkillGauge label="POSTMAN" percent={95} icon="send" />
                </div>

                <div className="flex items-center gap-4 mb-10 mt-16">
                    <span className="h-px w-16 bg-primary/40"></span>
                    <h2 className="text-xl font-bold tracking-[0.3em] text-primary uppercase italic">Auxiliary Systems</h2>
                    <span className="h-px flex-grow bg-primary/10"></span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">FRONTEND_LIB</div>
                        <div className="text-primary font-bold tracking-widest">HTML5 / CSS3</div>
                        <div className="absolute top-0 right-0 p-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                        </div>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">UI_FRAMEWORK</div>
                        <div className="text-primary font-bold tracking-widest">BOOTSTRAP</div>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">SECURITY_PROTOCOL</div>
                        <div className="text-primary font-bold tracking-widest">JWT AUTH</div>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">TESTING_UNIT</div>
                        <div className="text-primary font-bold tracking-widest">POSTMAN</div>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">VERSION_CONTROL</div>
                        <div className="text-primary font-bold tracking-widest">GIT / GITHUB</div>
                    </div>
                    <div className="border border-primary/20 bg-primary/5 p-4 relative group hover:bg-primary/10 transition-colors">
                        <div className="text-xs font-mono text-hud-dim mb-2">LANG_CORE</div>
                        <div className="text-primary font-bold tracking-widest">C++ / PYTHON</div>
                    </div>
                </div>
            </section>



            {/* Education Section */}
            <section className="mb-40 max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <span className="material-symbols-outlined text-primary text-2xl">school</span>
                    <h2 className="text-2xl font-bold tracking-[0.3em] text-primary uppercase italic">Academic Database</h2>
                    <span className="h-px flex-grow bg-primary/10"></span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Master's */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-primary/30 rounded-sm blur opacity-20 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-hud-bg border border-primary/30 p-6 h-full flex flex-col justify-between hover:border-primary/60 transition-colors">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs font-mono text-hud-dim border border-primary/20 px-2 py-1">DEGREE_ID: MCA_2025</div>
                                    <span className="material-symbols-outlined text-primary/40">verified</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Master of Computer Applications</h3>
                                <div className="text-primary font-mono text-sm mb-4">KTU University | Sree Narayana Guru Institute of Science and Technology</div>
                            </div>
                            <div className="border-t border-primary/10 pt-4 mt-4 flex justify-between items-center">
                                <span className="text-xs text-hud-dim font-mono">CYCLE: 2023 - 2025</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bachelor's */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-primary/30 rounded-sm blur opacity-20 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-hud-bg border border-primary/30 p-6 h-full flex flex-col justify-between hover:border-primary/60 transition-colors">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-xs font-mono text-hud-dim border border-primary/20 px-2 py-1">DEGREE_ID: BCA_2023</div>
                                    <span className="material-symbols-outlined text-primary/40">verified</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">Bachelor of Computer Applications</h3>
                                <div className="text-primary font-mono text-sm mb-4">MG University | Sree Narayana Guru Institute of Science and Technology</div>
                            </div>
                            <div className="border-t border-primary/10 pt-4 mt-4 flex justify-between items-center">
                                <span className="text-xs text-hud-dim font-mono">CYCLE: 2020 - 2023</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Transmission Panel */}
            <section className="max-w-5xl mx-auto relative group">
                <div className="absolute -inset-1 bg-primary/20 blur-md opacity-30 group-hover:opacity-100 transition-opacity"></div>
                <div className="hud-glass rounded-sm overflow-hidden relative z-10">
                    <div className="bg-primary/10 border-b border-primary/20 px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary animate-pulse">broadcast_on_personal</span>
                            <h3 className="font-bold tracking-[0.2em] text-sm md:text-base uppercase glow-text">DEVELOPER PROFILE: KRISHNA PRASAD VILASAN</h3>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(0,229,255,1)]"></div>
                        </div>
                    </div>

                    <div className="p-8 md:p-16 grid md:grid-cols-3 gap-16">
                        <div className="flex flex-col items-center justify-center space-y-8 border-r border-primary/10 pr-0 md:pr-12">
                            <div className="relative cursor-pointer group/biometric">
                                <div className="absolute -inset-8 border border-primary/10 rounded-full animate-spin-gear"></div>
                                <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-gear-rev"></div>
                                <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5 shadow-[inset_0_0_20px_rgba(0,229,255,0.1)] overflow-hidden">
                                    <img
                                        src={profileImg}
                                        alt="Developer Identity"
                                        className="w-full h-full object-cover opacity-80 group-hover/biometric:opacity-100 transition-opacity grayscale hover:grayscale-0"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="font-mono text-[10px] text-hud-dim uppercase tracking-[0.2em] mb-2">DEVELOPER IDENTITY<br />VERIFIED</p>
                                <p className="font-mono text-sm text-primary mt-2 flex items-center justify-center gap-2 mb-2">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                                    UPLINK_ACTIVE
                                </p>
                                <p className="font-mono text-[10px] text-primary/80 uppercase tracking-widest border-t border-primary/20 pt-2 mt-2">
                                    OPEN TO RELOCATION<br />& IMMEDIATE_JOINING
                                </p>
                            </div>
                        </div>

                        <form className="md:col-span-2 space-y-8">
                            <div className="space-y-12">
                                <div className="relative">
                                    <label className="block font-mono text-[10px] text-hud-dim uppercase mb-2 ml-1 tracking-widest">FULL-STACK ARCHITECT</label>
                                    <input
                                        className="w-full bg-transparent border-b border-primary/30 text-primary font-mono text-sm px-4 py-3 focus:border-primary focus:ring-0 focus:outline-none transition-all rounded-none tracking-wider"
                                        value="Krishna Prasad Vilasan | Full-Stack Architect"
                                        readOnly
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="relative">
                                        <label className="block font-mono text-[10px] text-hud-dim uppercase mb-2 ml-1 tracking-widest">PRIMARY SKILLS</label>
                                        <div className="bg-transparent border-b border-primary/30 text-primary font-mono text-sm px-4 py-3 tracking-wider">MERN_Stack | C++ | C | Python</div>
                                    </div>
                                    <div className="relative">
                                        <div className="flex justify-between">
                                            <label className="block font-mono text-[10px] text-hud-dim uppercase mb-2 ml-1 tracking-widest">TRANSMISSION_STATUS</label>
                                            <label className="block font-mono text-[10px] text-hud-dim uppercase mb-2 ml-1 tracking-widest">LOCATION</label>
                                        </div>
                                        <div
                                            className="w-full bg-transparent border-b border-primary/30 text-primary font-mono text-sm px-4 py-3 text-right"
                                        >
                                            N. Paravoor, Ernakulam, Kerala
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <label className="block font-mono text-[10px] text-hud-dim uppercase mb-2 ml-1 tracking-widest">PROFESSIONAL_SUMMARY</label>
                                    <div className="bg-transparent border-b border-primary/30 text-hud-dim font-mono text-[11px] leading-relaxed py-4 text-justify min-h-[80px]">
                                        MERN Stack Developer skilled in developing responsive, dynamic web applications. Adept at writing clean code and optimizing performance. Passionate about updated standards, tools, and continuous emerging technologies.
                                    </div>
                                </div>
                            </div>


                        </form>
                    </div>

                    <div className="border-t border-primary/20 p-5 bg-black/40 flex flex-wrap justify-between font-mono text-[10px] text-hud-dim uppercase tracking-widest">
                        <div className="flex gap-6">
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>LATENCY: 8ms</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span>CERT: MERN_VERIFIED</span>
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>UPLINK_SECURE</span>
                        </div>
                        <div className="hidden sm:block opacity-40">SESSION: KRISHNA_0x91BA</div>
                    </div>
                </div>
            </section>

            <footer className="mt-40 pt-10 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 relative opacity-60">
                <div className="font-mono text-[10px] text-hud-dim uppercase tracking-[0.25em]">
                    © 2024 KRISHNA_PRASAD_CORE_V2 // TRANSMISSION_PORTAL_ACTIVE
                </div>
                <div className="flex gap-8">
                    <a className="hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px] font-mono" href={resumeData.social.github} target="_blank" rel="noreferrer"><span className="material-symbols-outlined text-sm">terminal</span> Github</a>
                    <a className="hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px] font-mono" href={resumeData.social.linkedin} target="_blank" rel="noreferrer"><span className="material-symbols-outlined text-sm">share_reviews</span> Linkedin</a>
                    <a className="hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px] font-mono" href={`tel:${resumeData.social.phone}`}><span className="material-symbols-outlined text-sm">call</span> {resumeData.social.phone}</a>
                    <a className="hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-widest text-[10px] font-mono" href="https://astrovagmi.com/" target="_blank" rel="noreferrer"><span className="material-symbols-outlined text-sm">radar</span> Station_X</a>
                </div>
            </footer>
        </div >
    );
};

export default IdentityTerminal;
