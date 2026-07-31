//File that contain all projects data in single place for

import ccVid from "../assets/ProjectRecordings/cc-recording.mp4"
import ccImg from "../assets/Projectsimg/clipCaptionly.webp"
import mmImg from "../assets/Projectsimg/mmImg.webp";
import tradingImg from "../assets/Projectsimg/tradingImg.webp";
import taVid from "../assets/ProjectRecordings/ta-recording.mp4"
import eaImg from "../assets/Projectsimg/eventAgency.webp";
import eaVid from "../assets/ProjectRecordings/ea-recording.mp4";
import skipAdImg from "../assets/Projectsimg/skip-ad.webp";
import lakeSideImg from "../assets/Projectsimg/lakesideImg.webp";
import lrVid from "../assets/ProjectRecordings/lr-recording.mp4";

export const projects = [
  {
    id: 1,
    title: "Clip Captionly",
    description:
      "Clip Captionly is an AI-powered SaaS that transforms short videos into engaging social media content by generating accurate subtitles, SEO-friendly titles, descriptions, hashtags, and key takeaways using AI transcription and language models.",
    image: ccImg,
    video: ccVid,
    status: "in-progress",
    skills: [
      "react",
      "tailwindcss",
      "ollama",
      "openai",
      "node",
      "express",
      "mongodb",
      "cloudinary",
      "motion",
      "git",
      "github",
    ],
  },

  {
    id: 2,
    title: "Maneandmore E-commerce",
    description:
      "Mane & More is an online hair extension store for women, built as a freelance project for a Canadian client, featuring premium products and a modern, responsive, user-friendly shopping experience.",
    image: mmImg,
    status: "in-progress",
    liveUrl: "https://www.maneandmore.shop/",
    skills: [
      "react",
      "css",
      "github",
      "node",
      "express",
      "mongodb",
      "redux",
      "vercel",
      "motion",
      "lenis",
    ],
  },
   {
    id: 3,
    title: "Lakeside Retreat",
    description:
      "A visually engaging GSAP-animated website designed for showcasing and booking a serene lakeside retreat.",
    image: lakeSideImg,
    video: lrVid,
    status: "live",
    liveUrl: "https://lakeside-retreat.vercel.app/",
    githubUrl: "https://github.com/HardikBambhaniya/Lakeside-Retreat",
    skills: ["react", "tailwindcss", "github", "gsap"],
  },
  
  {
    id: 4,
    title: "Event-agency website",
    description:
      "A landing page website for a college event agency, built to present services, event highlights, and brand identity in a clean and engaging design.",
    image: eaImg,
    video: eaVid,
    status: "live",
    liveUrl: "https://eventagency.vercel.app/",
    githubUrl: "https://github.com/HardikBambhaniya/eventagency/tree/main",
    skills: [
      "react",
      "reactbits",
      "github",
      "swiperjs",
      "vercel",
      "tailwindcss",
      "motion",
    ],
  },
  {
    id: 5,
    title: "Auto Skip-ad Extension",
    description:
      "An auto-skip browser extension that detects and clicks the YouTube “Skip Ad” button to provide uninterrupted video playback.",
    image: skipAdImg,
    status: "completed",
    skills: [
      "javascript",
      "github",
      "chrome",
      "dynamic-dOM",
      "mutationObserver",
    ],
  },
  {
    id: 6,
    title: "Trading web-app",
    description:
      "Developed a MERN stack trading simulation application modeling real-world trading workflows with responsive frontend and backend services.",
    image: tradingImg,
    video: taVid,
    status: "completed",
    skills: [
      "javascript",
      "react",
      "tailwindcss",
      "github",
      "node",
      "express",
      "mongodb",
      "vercel",
    ],
  },
 
];
