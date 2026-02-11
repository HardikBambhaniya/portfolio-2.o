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
      <section>
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
              loading="eager"
              className="h-30 w-30 rounded-full object-cover"
            />
          </div>

          <h1 className="font-montserrat text-3xl md:text-4xl font-bold text-white">
            Hi, I'm Hardik -{" "}
            <i className="text-gray-300">A Frontend developer</i>
          </h1>
          <div className="mt-4 max-w-lg md:max-w-4xl px-2 flex flex-wrap justify-start text-start gap-x-1.5 gap-y-2 text-base md:text-lg lg:text-xl text-neutral-200 ">
            <span>I build interactive websites with</span>
            <SkillBadge
              as="a"
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <div className="size-4 shrink-0">
                <img src={jsSvg} alt="js-logo" />
              </div>
              <p className="pl-1 text-sm font-bold">Javascript</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://react.dev/">
              <div className="size-4 shrink-0">
                <img src={reactSvg} alt="react-logo" />
              </div>
              <p className="pl-1 text-sm font-bold">React</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://nodejs.org/en">
              <div className="size-4 shrink-0">
                <img src={nodeSvg} alt="nodejs-logo" />
              </div>
              <p className="pl-1 text-sm font-bold">Node.js</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap">, </span>
            <SkillBadge as="a" target="_blank" href="https://tailwindcss.com/">
              <div className="size-4 shrink-0">
                <img src={tailwindSvg} alt="tailwind-logo" />
              </div>
              <p className="pl-1 text-sm font-bold">Tailwind CSS</p>
            </SkillBadge>
            <span className="whitespace-pre-wrap"> and </span>
            <SkillBadge as="a" target="_blank" href="https://www.mongodb.com/">
              <div className="size-4 shrink-0">
                <img src={mongoSvg} alt="mongodb-logo" />
              </div>
              <p className="pl-1 text-sm font-bold">Mongodb. </p>
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
          <div className=" w-full flex justify-start gap-x-4 px-2  font-extrabold">
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
        </div>
      </section>
    </>
  );
}

export default Hero;
