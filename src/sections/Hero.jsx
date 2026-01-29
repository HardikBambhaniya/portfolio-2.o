import profilePic from "../assets/profilepic.avif";
import SkillBadge from "../components/SkillBadge";
import {
  Button,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  FileTextIcon,
  MailCheckIcon,
} from "../components/ui";
import jsSvg from "../assets/Svgs/jsSvg.svg";
import tailwindSvg from "../assets/Svgs/tailwindSvg.svg";
import mongoSvg from "../assets/Svgs/mongoSvg.svg";
import nodeSvg from "../assets/Svgs/nodeSvg.svg";
import reactSvg from "../assets/Svgs/reactSvg.svg";
import IconTooltip from "../components/common/IconTooltip";
import SkillSection from "../components/common/SkillSection";

const social = [
  {
    href: "https://github.com/HardikBambhaniya",
    label: "Github",
    icon: <GithubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/hardik-bambhaniya/",
    label: "Linkedin",
    icon: <LinkedinIcon />,
  },
  {
    href: "https://x.com/Hardik_bambh",
    label: "Twitter/X",
    icon: <TwitterIcon />,
  },
  {
    href: "mailto:hardikb181@gmail.com",
    label: "G-mail",
    icon: <MailCheckIcon />,
  },
];

function Hero() {
  return (
    <>
      <section className="mx-auto w-full flex flex-col justify-center items-center z-20 bg-black/70">
        {/* top-content */}
        <div className=" max-w-4xl flex flex-col justify-center px-2  gap-6 pt-25 ">
          {/* img-section */}

          <div
            className="h-30  
"
          >
            <img
              src={profilePic}
              alt="profilepic"
              className=" h-30 w-30 rounded-full object-cover"
            />
          </div>

          <h1 className="font-montserrat  text-4xl font-bold px-3 md:font-extrabold  text-white">
            Hi, I'm Hardik -{" "}
            <i className="text-gray-300">A Frontend developer</i>
          </h1>
          <div className="mt-4 max-w-lg md:max-w-4xl px-2 flex flex-wrap justify-start text-start gap-x-1.5 gap-y-2 text-base md:text-lg lg:text-xl text-neutral-200 font-eb">
            <span>I build interactive websites with</span>
            <SkillBadge
              as="a"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <div className="size-4 shrink-0">
                <img src={jsSvg} alt="js-logo" />
              </div>
              <p className="ml-1 text-sm font-bold"> Javascript</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://react.dev/">
              <div className="size-4 shrink-0">
                <img src={reactSvg} alt="react-logo" />
              </div>
              <p className="ml-1 text-sm font-bold">React</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://nodejs.org/en">
              <div className="size-4 shrink-0">
                <img src={nodeSvg} alt="nodejs-logo" />
              </div>
              <p className="ml-1 text-sm font-bold">Node.js</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://tailwindcss.com/">
              <div className="size-4 shrink-0">
                <img src={tailwindSvg} alt="tailwind-logo" />
              </div>
              <p className="ml-1 text-sm font-bold">Tailwind CSS</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap"> and </span>
            <SkillBadge as="a" target="_blank" href="https://www.mongodb.com/">
              <div className="size-4 shrink-0">
                <img src={mongoSvg} alt="mongodb-logo" />
              </div>
              <p className="ml-1 text-sm font-bold">Mongodb. </p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">
              With focus on{" "}
              <b className="whitespace-pre-wrap text-yellow-300">UI</b>{" "}
              <span className="whitespace-pre-wrap ">and</span>{" "}
              <b className="text-yellow-300"> Animation</b>{" "}
              <span className="whitespace-pre-wrap">by help of</span>
              <b className="whitespace-pre-wrap text-yellow-300">
                {" "}
                Motion/GSAP.
              </b>
            </span>
          </div>

          {/* Buttons */}
          <div className=" w-full flex justify-start gap-x-4 px-2 font-eb font-extrabold">
            <a href="#work">
              <Button
                variant="outline"
                className=" bg-white/75 cursor-pointer "
              >
                <FileTextIcon />
                Resume
              </Button>
            </a>
            <a
              href="https://wa.me/917016400658?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="bg-black/90 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.6)] hover:shadow-[inset_0_0_15px_rgba(255,255,255,0.8)] hover:bg-black/90 hover:text-white "
              >
                <WhatsappIcon className="text-white" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* social-info */}

          <div className="max-w-4xl flex justify-start px-2 text-white gap-x-4">
            {social.map((item, i) => (
              <IconTooltip key={i} href={item.href} label={item.label}>
                {item.icon}
              </IconTooltip>
            ))}
          </div>

          {/* skills-section */}
          <div className="mt-20 px-2 max-w-4xl flex flex-col gap-2 justify-start text-white">
            <div className="text-xl font-bold font-montserrat">
              <h2>Skills & Technologies</h2>
            </div>

            <SkillSection
              skillKeys={[
                "javascript",
                "react",
                "node",
                "express",
                "mongodb",
                "redux",
                "tailwindcss",
                "shadcn",
                "gsap",
                "motion",
                "framer",
                "git",
                "github",
                "vite",
                "vercel",
                "vscode",
                "postman",
              ]}
            />

          </div>

          {/* experience-section */}
          <div className="mt-20 px-2 max-w-4xl flex flex-col gap-2 justify-start text-white">
            <div className="text-xl font-bold font-montserrat">
              <h2>Experience</h2>
            </div>
            <div>
              <div className="flex flex-col xs:flex-row justify-between">
                <div className="text-neutral-200 text-base">
                  <h2>INFOLABZ IT SERVICES PVT. LTD.</h2>
                  <p>React.js Developer Intern</p>
                </div>
                <div className="text-neutral-200 text-base">
                  <h2 className="">July - 2025</h2>
                  <p>Ahmedabad (Remote)</p>
                </div>
              </div>
              <div className="text-base font-eb text-neutral-300 pt-4">
                <ul className="list-disc px-4">
                  <li>
                    Completed a summer internship focused on React.js, working
                    with components, hooks, state management, and reusable UI
                    patterns.
                  </li>
                  <li>
                    Contributed to two React-based projects, implementing
                    responsive layouts and interactive user features.
                  </li>
                  <li>
                    Strengthened understanding of component-based architecture
                    and modern frontend development best practices.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="pt-10 flex flex-col xs:flex-row justify-between">
                <div className="text-neutral-200 text-base">
                  <h2>PRODIGY INFOTECH</h2>
                  <p>Frontend Developer Intern</p>
                </div>
                <div className="text-neutral-200 text-base">
                  <h2 className="">April 2024 - May 2024</h2>
                  <p>Mumbai (Remote)</p>
                </div>
              </div>
              <div className="text-base font-eb text-neutral-300 pt-4">
                <ul className="list-disc px-4">
                  <li>
                    Developed and delivered multiple frontend applications using
                    modern JavaScript, CSS, and Tailwind CSS, focusing on
                    scalable and maintainable UI architecture.
                  </li>
                  <li>
                    Implemented responsive design systems, structured reusable
                    components, and optimized layouts across devices.
                  </li>
                  <li>
                    Applied end-to-end frontend workflows, including component
                    organization, styling strategy, and deployment practices.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
