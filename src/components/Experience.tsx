import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { FaCalendar } from "react-icons/fa";

const Experience = () => {
    return (
        <section id="experience" className="py-20 min-h-screen flex flex-col justify-center">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center text-3xl font-bold text-textLight mb-12"
            >
                Experience
                <span className="ml-4 h-px bg-secondary flex-grow max-w-xs opacity-50"></span>
            </motion.h2>

            <div className="relative border-l border-secondary ml-4 md:ml-6 space-y-12 bg-[#112240]/80 p-6 rounded-lg backdrop-blur-sm">
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="relative pl-8"
                    >
                        <span className="absolute -left-9 top-0 bg-bg border-2 border-primary w-6 h-6 rounded-full flex items-center justify-center">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                        </span>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-text">
                                {exp.role} <span className="text-primary">@ {exp.company}</span>
                            </h3>
                            <div className="flex items-center text-sm text-textLight font-mono mt-1 sm:mt-0">
                                <FaCalendar className="mr-2" />
                                {exp.period}
                            </div>
                        </div>

                        <p className="text-gray-100 leading-relaxed mt-4">
                            {exp.description.join(" ")}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
