import mmImg from "../assets/Projectsimg/mmImg.webp";
import eaImg from "../assets/Projectsimg/eventAgency.webp";
import skipAdImg from "../assets/Projectsimg/skip-ad.webp"
import lakeSideImg from "../assets/Projectsimg/lakesideImg.webp"

export const projects = [
    {
        id: 1,
        title: "Maneandmore E-commerce",
        description: "Mane & More is an online hair extension store for women, built as a freelance project for a Canadian client, featuring premium products and a modern, responsive, user-friendly shopping experience.",
        image: mmImg,
        status: "planned",
        liveUrl: "https://www.maneandmore.shop/",
        skills: ["react", "css", "github", "node", "express", "mongodb", "redux", "vercel", "motion", "lenis"]
        
    },
    {
        id: 2,
        title: "Event-agency website",
        description: "A landing page website for a college event agency, built to present services, event highlights, and brand identity in a clean and engaging design.",
        image:  eaImg,
        status: "live",
        liveUrl: "https://eventagency.vercel.app/",
        githubUrl: "https://github.com/HardikBambhaniya/eventagency/tree/main",
        skills: ["react", "reactbits", "guthub", "swiperjs", "vercel", "tailwindcss", "motion"]
    },
    {
        id: 3,
        title: "Auto Skip-ad Extension",
        description: "An auto-skip browser extension that detects and clicks the YouTube “Skip Ad” button to provide uninterrupted video playback.",
        image: skipAdImg,
        status: "live",
        skills: ["javascript", "github", "chrome", "dynamic-dOM", "mutationObserver"]
        
    },
    {
        id: 4,
        title: "Lakeside Retreat",
        description: "A visually engaging GSAP-animated website designed for showcasing and booking a serene lakeside retreat.",
        image: lakeSideImg,
        status: "in-progress",
        githubUrl: "https://github.com/HardikBambhaniya/Lakeside-Retreat",
        skills: ["react", "tailwindcss", "github", "gsap"]
    }
]