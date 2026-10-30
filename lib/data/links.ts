import React from "react";
import { navLinks, socialLinks } from "@/types/Links";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


export const navMenu: navLinks[] = [
    {
        name: "About Me",
        link: "/about-me"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Contact Me",
        link: "/contacts"
    }
]

export const socialIcons: socialLinks[] = [
    {
        name: "GitHub",
        link: "https://github.com/Nomolos29/",
        icon: React.createElement(FaGithub),
        color: "black",
        labelDirection: "left",
        position: "bottom-left",
        platform: "github"
    },
    {
        name: "Twitter / X",
        link: "https://x.com/Nomoreloss29",
        icon: React.createElement(FaXTwitter),
        color: "black",
        labelDirection: "left",
        position: "top-left",
        platform: "twitter"
    },
    {
        name: "WhatsApp",
        link: "https://wa.me/+2348101123098",
        icon: React.createElement(FaWhatsapp),
        color: "green",
        labelDirection: "left",
        position: "right-center",
        platform: "whatsapp"
    },
    {
        name: "Gmail",
        link: "mailto:nomolos2019@gmail.com",
        icon: React.createElement(BiLogoGmail),
        color: "red",
        labelDirection: "right",
        position: "bottom-right",
        platform: "gmail"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/nomolos29",
        icon: React.createElement(FaLinkedinIn),
        color: "blue",
        labelDirection: "left",
        position: "top-right",
        platform: "linkedin"
    },
]

export const companyShowcase = [
    {
        name: "Acedboard",
        description: "Project management platform revolutionizing team productivity through centralized communication and customizable project visualization tools.",
        industry: "Project Management SaaS",
        website: "https://www.acedboard.com/",
        logoUrl: "https://www.acedboard.com/mynav/Logo-01.svg",
        logoText: "AB",
        featured: true
    },
    {
        name: "Web3Bridge",
        description: "Leading African blockchain education program training developers in Web3 technology and decentralized applications.",
        industry: "Blockchain Education",
        website: "https://www.web3bridgeafrica.com/",
        logoUrl: "https://www.web3bridgeafrica.com/_next/static/media/logo-light.fec0074f.svg",
        logoText: "W3B",
        featured: true
    },
    {
        name: "KBM Group",
        description: "Real estate, education, and investment firm providing comprehensive digital platforms and strategic growth solutions.",
        industry: "EdTech & Investment",
        website: "#",
        logoText: "KBM"
    },
    {
        name: "WC Digital Agency",
        description: "Full-service digital agency specializing in web development, SEO optimization, and comprehensive digital marketing solutions.",
        industry: "Digital Marketing",
        website: "https://wcdigitalagency.com/",
        logoUrl: "https://wcdigitalagency.com/wp-content/uploads/2021/01/Websitechic-Digital-Agency.png",
        logoText: "WC"
    }
]
