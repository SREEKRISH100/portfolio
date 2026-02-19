export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    image?: string;
    images?: string[];
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export interface SocialLinks {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

export interface ResumeData {
    name: string;
    title: string;
    location: string;
    summary: string;
    skills: {
        frontend: string[];
        backend: string[];
        database: string[];
        tools: string[];
        other: string[];
    };
    experience: Experience[];
    projects: Project[];
    social: SocialLinks;
    education: {
        degree: string;
        institution: string;
        period: string;
    }[];
    certifications: string[];
    softSkills: string[];
}
