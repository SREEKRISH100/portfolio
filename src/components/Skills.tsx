import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import {
    FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaPython, FaDatabase, FaServer, FaCode
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiCplusplus, SiC, SiJsonwebtokens
} from "react-icons/si";
import React from "react";

const iconMap: Record<string, React.ReactNode> = {
    "React.js": <FaReact className="text-4xl mb-3 text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-4xl mb-3 text-white" />,
    "HTML5": <FaHtml5 className="text-4xl mb-3 text-[#E34F26]" />,
    "CSS3": <FaCss3Alt className="text-4xl mb-3 text-[#1572B6]" />,
    "Tailwind CSS": <SiTailwindcss className="text-4xl mb-3 text-[#06B6D4]" />,
    "Node.js": <FaNodeJs className="text-4xl mb-3 text-[#339933]" />,
    "Express.js": <SiExpress className="text-4xl mb-3 text-white" />,
    "JWT": <SiJsonwebtokens className="text-4xl mb-3 text-[#D63AFF]" />,
    "REST APIs": <FaServer className="text-4xl mb-3 text-[#007ACC]" />,
    "MongoDB": <SiMongodb className="text-4xl mb-3 text-[#47A248]" />,
    "Schema Design": <FaDatabase className="text-4xl mb-3 text-[#F29111]" />,
    "Aggregation": <FaDatabase className="text-4xl mb-3 text-[#4DB33D]" />,
    "Postman": <SiPostman className="text-4xl mb-3 text-[#FF6C37]" />,
    "Git": <FaGitAlt className="text-4xl mb-3 text-[#F05032]" />,
    "GitHub": <FaGithub className="text-4xl mb-3 text-white" />,
    "Docker": <FaDocker className="text-4xl mb-3 text-[#2496ED]" />,
    "C++": <SiCplusplus className="text-4xl mb-3 text-[#00599C]" />,
    "C": <SiC className="text-4xl mb-3 text-[#A8B9CC]" />,
    "Python (Basics)": <FaPython className="text-4xl mb-3 text-[#3776AB]" />,
    "API Documentation": <FaCode className="text-4xl mb-3 text-[#007ACC]" />,
};

const Skills = () => {
    // Flatten skills for a unified grid view, or keep them categorized?
    // User image shows a unified grid. Let's flatten for the main view but maybe keep categories if requested later.
    // For now, let's just display all skills in a big grid to match the "cool card" look.

    // Helper to get all skills flat
    const allSkills = [
        ...resumeData.skills.frontend,
        ...resumeData.skills.backend,
        ...resumeData.skills.database,
        ...resumeData.skills.tools,
        ...resumeData.skills.other
    ];

    return (
        <section id="skills" className="py-20 min-h-screen flex flex-col justify-center relative z-10">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center text-3xl font-bold text-textLight mb-12"
            >
                Skills
                <span className="ml-4 h-px bg-secondary flex-grow max-w-xs opacity-50"></span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {allSkills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-[#112240] p-6 rounded-xl flex flex-col items-center justify-center shadow-lg border border-transparent hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {iconMap[skill] || <FaCode className="text-4xl mb-3 text-primary" />}
                        </div>
                        <h3 className="text-sm md:text-md font-semibold text-textLight group-hover:text-white transition-colors text-center">
                            {skill}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
