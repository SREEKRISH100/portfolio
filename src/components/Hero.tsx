import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "../data/resume";
import MagneticWrapper from "./MagneticWrapper";
import RevealText from "./RevealText";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);



    return (
        <section className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20 px-6 md:px-20">
            {/* Background shapes */}
            <motion.div style={{ y: y1, x: -50 }} className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl w-full flex justify-start">
                {/* Text Content */}
                <div className="flex flex-col items-start max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-primary font-mono mb-4 text-lg"
                    >
                        Hi, my name is
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 flex flex-col gap-2">
                        <RevealText text="Krishna Prasad" delay={0.2} />
                        <RevealText text="Vilasan" delay={0.4} />
                    </h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold text-textLight mb-8 leading-tight"
                    >
                        {resumeData.title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="max-w-xl text-textLight text-lg leading-relaxed mb-10"
                    >
                        {resumeData.summary}
                    </motion.p>

                    <div className="flex gap-6 items-center">
                        <MagneticWrapper>
                            <a
                                href="#about"
                                className="inline-block border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-300 font-mono"
                            >
                                Check out my work
                            </a>
                        </MagneticWrapper>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex gap-6 text-2xl"
                        >
                            <a href={resumeData.social.github} target="_blank" rel="noreferrer" className="text-textLight hover:text-primary transition-colors">
                                <FaGithub />
                            </a>
                            <a href={resumeData.social.linkedin} target="_blank" rel="noreferrer" className="text-textLight hover:text-primary transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href={`mailto:${resumeData.social.email}`} className="text-textLight hover:text-primary transition-colors">
                                <FaEnvelope />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
