import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 min-h-screen flex flex-col justify-center items-center text-center">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-primary font-mono mb-4 text-sm"
            >
                What's Next?
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-text mb-6"
            >
                Get In Touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-textLight max-w-xl text-lg mb-12"
            >
                I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center space-x-6 mb-12"
            >
                <a href={`mailto:${resumeData.social.email}`} className="text-textLight hover:text-primary text-2xl transition-colors">
                    <FaEnvelope />
                </a>
                <a href={`tel:${resumeData.social.phone}`} className="text-textLight hover:text-primary transition-colors flex items-center gap-2">
                    <FaPhone className="text-2xl" />
                    <span className="text-sm font-mono">{resumeData.social.phone}</span>
                </a>
                <a href={resumeData.social.linkedin} target="_blank" rel="noreferrer" className="text-textLight hover:text-primary text-2xl transition-colors">
                    <FaLinkedin />
                </a>
                <a href={resumeData.social.github} target="_blank" rel="noreferrer" className="text-textLight hover:text-primary text-2xl transition-colors">
                    <FaGithub />
                </a>
            </motion.div>

            <motion.a
                href={`mailto:${resumeData.social.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors duration-300"
            >
                Say Hello
            </motion.a>
        </section>
    );
};

export default Contact;
