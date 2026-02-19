import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import HUDCard from "./HUDCard";

const Projects = () => {
    return (
        <section id="projects" className="py-24 min-h-screen flex flex-col justify-center relative z-10 px-6 scroll-mt-32">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-16"
            >
                <span className="h-px w-12 bg-primary/40"></span>
                <h2 className="text-3xl font-bold tracking-[0.2em] text-primary uppercase italic glow-text">
                    Operational_Projects
                </h2>
                <span className="h-px flex-grow bg-primary/10"></span>
            </motion.div>

            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
                {resumeData.projects.map((project, index) => (
                    <HUDCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
