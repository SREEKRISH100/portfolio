import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import profileImg from "../assets/IMG_20240218_091226.jpg";


const About = () => {
    return (
        <section id="about" className="py-20 min-h-screen flex flex-col justify-center scroll-mt-32">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center text-3xl font-bold text-textLight mb-12"
            >
                About Me
                <span className="ml-4 h-px bg-secondary flex-grow max-w-xs opacity-50"></span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="md:col-span-2 text-gray-100 text-lg leading-relaxed space-y-4 bg-[#112240]/80 p-6 rounded-lg backdrop-blur-sm"
                >
                    <p>
                        Hello! My name is <span className="text-primary">{resumeData.name}</span>, and I enjoy creating things that live on the internet.
                    </p>
                    <p>
                        {resumeData.summary}
                    </p>
                    <p>
                        I am currently a student at <span className="text-primary">KTU University</span>, pursuing my Master of Computer Applications.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
                        {resumeData.skills.frontend.slice(0, 4).map((skill) => (
                            <li key={skill} className="flex items-center">
                                <span className="text-primary mr-2">▹</span> {skill}
                            </li>
                        ))}
                        {resumeData.skills.backend.slice(0, 4).map((skill) => (
                            <li key={skill} className="flex items-center">
                                <span className="text-primary mr-2">▹</span> {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="relative group"
                >
                    <div className="relative w-full max-w-xs mx-auto md:mx-0 aspect-square border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="absolute inset-0 w-full max-w-xs mx-auto md:mx-0 aspect-square bg-secondary rounded overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={profileImg} alt="Profile" className="object-cover w-full h-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
