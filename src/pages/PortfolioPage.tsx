import Layout from "../components/Layout";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const PortfolioPage = () => {
    return (
        <Layout>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </Layout>
    );
};

export default PortfolioPage;
