import type { ResumeData } from "../types";
import homeScreen from "../assets/screen/home.png";
import mediScreenshot1 from "../assets/screen/medi_screenshot_1.png";
import mediEditPoflle from "../assets/screen/medi_edit_poflle.png";
import mediEditProfil from "../assets/screen/medi_edit_profil.png";
import mediOrderItem from "../assets/screen/medi_order_item.png";
import mediOrder from "../assets/screen/medi_order.png";
import mediPayment from "../assets/screen/medi_payment.png";
import mediProductView from "../assets/screen/medi_product_view.png";
import mediSellerAddProduct from "../assets/screen/medi_seller_add_product.png";
import mediSellerLogin from "../assets/screen/medi_seller_login.png";
import mediUserHome from "../assets/screen/medi_user_home.png";
import astroCover from "../assets/astro/astro_cover.png";
import astroShot1 from "../assets/astro/astro_shot_1.png";
import astroShot2 from "../assets/astro/astro_shot_2.png";
import astroShot3 from "../assets/astro/astro_shot_3.png";
import gameRentalCover from "../assets/game_rental/game_rental_cover.png";
import gameRentalShot1 from "../assets/game_rental/game_rental_shot_1.png";
import gameRentalShot2 from "../assets/game_rental/game_rental_shot_2.png";
import gameRentalShot3 from "../assets/game_rental/game_rental_shot_3.png";
import gameRentalShot4 from "../assets/game_rental/game_rental_shot_4.png";
import gameRentalShot5 from "../assets/game_rental/game_rental_shot_5.png";
import gameRentalShot6 from "../assets/game_rental/game_rental_shot_6.png";
import gameRentalShot7 from "../assets/game_rental/game_rental_shot_7.png";
import gameRentalShot8 from "../assets/game_rental/game_rental_shot_8.png";
import e2eCover from "../assets/e2e/e2e_cover.png";
import e2eShot1 from "../assets/e2e/e2e_shot_1.png";
import e2eShot2 from "../assets/e2e/e2e_shot_2.png";
import e2eShot3 from "../assets/e2e/e2e_shot_3.png";
import e2eShot4 from "../assets/e2e/e2e_shot_4.png";
import e2eShot5 from "../assets/e2e/e2e_shot_5.png";
import lhccCover from "../assets/lhcc/lhcc_cover.png";
import lhccShot1 from "../assets/lhcc/lhcc_shot_1.png";
import lhccShot2 from "../assets/lhcc/lhcc_shot_2.png";
import lhccShot3 from "../assets/lhcc/lhcc_shot_3.png";
import lhccShot4 from "../assets/lhcc/lhcc_shot_4.png";
import lhccShot5 from "../assets/lhcc/lhcc_shot_5.png";
import acrylicCover from "../assets/acrylic/acrylic_cover.png";
import acrylicShot1 from "../assets/acrylic/acrylic_shot_1.png";
import acrylicShot2 from "../assets/acrylic/acrylic_shot_2.png";
import acrylicShot3 from "../assets/acrylic/acrylic_shot_3.png";
import acrylicShot4 from "../assets/acrylic/acrylic_shot_4.png";
import acrylicShot5 from "../assets/acrylic/acrylic_shot_5.png";
import acrylicShot6 from "../assets/acrylic/acrylic_shot_6.png";
import acrylicShot7 from "../assets/acrylic/acrylic_shot_7.png";

export const resumeData: ResumeData = {
    name: "Krishna Prasad Vilasan",
    title: "MERN Stack & Backend Developer",
    location: "N. Paravoor, Ernakulam, Kerala, India",
    summary:
        "Backend Developer specializing in Node.js and Next.js, with a strong foundation in the MERN stack. Currently working at i4interface, delivering scalable backend solutions. Experienced in building care home management systems and e-commerce platforms. Passionate about optimizing server-side performance, database architecture, and building secure, efficient APIs.",
    social: {
        email: "krishnapvilasan124@gmail.com",
        phone: "+91 9446354631",
        linkedin: "https://www.linkedin.com/in/krishna-prasad-vilasan-2014a221b/",
        github: "https://github.com/SREEKRISH100",
    },
    skills: {
        frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
        backend: ["Node.js", "Express.js", "JWT", "REST APIs"],
        database: ["MongoDB", "Schema Design", "Aggregation"],
        tools: ["Postman", "Git", "GitHub", "Docker"],
        other: ["C++", "C", "Python (Basics)", "API Documentation"],
    },
    experience: [
        {
            company: "i4interface",
            role: "Backend Developer",
            period: "Present",
            description: [
                "Developing robust backend services using Node.js and Next.js.",
                "Architecting scalable APIs and managing database interactions.",
                "Collaborating with frontend teams to ensure seamless integration.",
            ],
        },
        {
            company: "CAMERIN FOLKS",
            role: "MERN STACK INTERN",
            period: "2025",
            description: [
                "Developed and maintained web applications using MERN (MongoDB, Express.js, React.js, and Node.js) Stack.",
                "Integrated dynamic data using RESTful APIs and Axios.",
                "Designed and optimized MongoDB schemas to support application functionality and performance.",
                "Implemented JWT-based authentication for secure user access and session handling.",
            ],
        },
    ],
    projects: [
        {
            title: "LHCC (Care Home Project)",
            description:
                "A comprehensive management system for care homes, streamlining resident care, staff scheduling, and administrative tasks. Built with a focus on data security and user-friendly interfaces for staff.",
            technologies: ["Node.js", "Next.js", "MongoDB"],
            images: [
                lhccCover,
                lhccShot1,
                lhccShot2,
                lhccShot3,
                lhccShot4,
                lhccShot5
            ],
        },
        {
            title: "Astrovagmi",
            description: "A specialized astrology platform built with Node.js. Features complex calculations for star charts and personalized horoscopes, served via high-performance APIs.",
            technologies: ["Node.js", "Express.js", "MongoDB"],
            link: "https://astrovagmi.com/",
            images: [
                astroCover,
                astroShot1,
                astroShot2,
                astroShot3
            ],
        },
        {
            title: "Game Rental Platform",
            description: "A comprehensive game rental service allowing users to browse, rent, and manage video games. Features include user authentication, rental tracking, and an admin dashboard for inventory management.",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            images: [
                gameRentalCover,
                gameRentalShot1,
                gameRentalShot2,
                gameRentalShot3,
                gameRentalShot4,
                gameRentalShot5,
                gameRentalShot6,
                gameRentalShot7,
                gameRentalShot8
            ],
        },
        {
            title: "E2E Project",
            description: "A comprehensive solution focusing on End-to-End functionality. Designed with scalability and performance in mind using modern web technologies.",
            technologies: ["React.js", "Node.js", "MongoDB"],
            images: [
                e2eCover,
                e2eShot1,
                e2eShot2,
                e2eShot3,
                e2eShot4,
                e2eShot5
            ],
        },
        {
            title: "Medi-Equipment",
            description:
                "A full-stack web application built using the MERN stack. Enables users to browse, buy, and manage medical equipment online. Features secure product and user data storage.",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            images: [
                homeScreen,
                mediUserHome,
                mediScreenshot1,
                mediProductView,
                mediOrder,
                mediOrderItem,
                mediPayment,
                mediSellerLogin,
                mediSellerAddProduct,
                mediEditProfil,
                mediEditPoflle
            ],
        },
        {
            title: "Acrylic Art",
            description:
                "A modern e-commerce website for acrylic art products. Key features include user sign-up/login, custom photo uploads, LED customization options, cart management, and secure payments.",
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
            images: [
                acrylicCover,
                acrylicShot1,
                acrylicShot2,
                acrylicShot3,
                acrylicShot4,
                acrylicShot5,
                acrylicShot6,
                acrylicShot7
            ],
        },
    ],
    education: [
        {
            degree: "Master of Computer Applications",
            institution:
                "KTU University | Sree Narayana Guru Institute of Science and Technology, Manjaly",
            period: "August 2023 - May 2025",
        },
        {
            degree: "Bachelor of Computer Applications",
            institution:
                "MG University | Sree Narayana Guru Institute of Science and Technology Arts & Science, Manjaly",
            period: "August 2020 - May 2023",
        },
    ],
    certifications: [
        "Certified MERN Stack Developer – Camerinfolks Pvt. Ltd. (Jan–July 2025)",
        "NPTEL – Online certification in Joy of Computing Python",
    ],
    softSkills: [
        "Effective teamwork collaboration",
        "Problem solving",
        "Quick learner",
        "Leadership",
        "Critical Thinking",
    ],
};
