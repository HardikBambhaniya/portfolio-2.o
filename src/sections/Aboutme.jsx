import { Preview } from "../components/Preview";
import profileImg from "../assets/profilepic.avif";
import { Button, WhatsappIcon } from "../components/ui";

function Aboutme() {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-4xl mx-auto pt-25 flex flex-col gap-2 justify-start px-2">
          <h2 className="text-xl font-bold font-montserrat text-white">Profile</h2>
          <div className=" gap-4 flex flex-col md:flex-row justify-evenly">
            <div className=" ">
              <img
                src={profileImg}
                alt="profile-pic"
                loading="lazy"
                className="w-70 md:w-auto rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4 text-neutral-300 font-eb">
              <h1 className="text-xl font-bold font-montserrat text-white">
                Hardik Bambhaniya
              </h1>
              <p>
                Frontend Developer specializing in beautiful, interactive UIs
                with React, JavaScript, GSAP, and modern UI libraries, while
                also handling backend logic, API integration, and state
                management for complete web applications.
              </p>
              <h2>
                I can handle <Preview />
              </h2>
              <div className="w-35 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Open to Work
              </div>
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
          </div>

{/* education-section */}
<div className="mt-20 px-2 max-w-4xl flex flex-col gap-2 justify-start text-white">
            <div className="text-xl font-bold font-montserrat">
              <h2>Academic Journey</h2>
            </div>
            <div>
              <div className="flex flex-col xs:flex-row justify-between">
                <div className="text-neutral-200 text-base">
                  <h2>Sigma institute, Baroda(GTU).</h2>
                  <p>Bachelor of Engineering (IT)</p>
                  <p className="text-sm text-neutral-400">
  Focus Areas: Frontend Engineering • Modern Web Technologies
</p>
                </div>
                <div className="text-neutral-200 text-base">
                  <h2 className="">July 2023 - July 2026(Expected)</h2>
                  <p>Current CGPA: 8.14/10</p>
                </div>
              </div>
              <div className="text-base font-eb text-neutral-300 pt-4">
                <ul className="list-disc px-4">
                  <li>
                    Built a strong foundation in web development by learning and applying modern web technologies through hands-on projects.
                  </li>
                  <li>
                    Built multiple real-world projects, strengthening practical problem-solving and development skills.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="pt-10 flex flex-col xs:flex-row justify-between">
                <div className="text-neutral-200 text-base">
                  <h2>Government polytechnic, Ahmedabad</h2>
                  <p>Diploma (IT)</p>
                </div>
                <div className="text-neutral-200 text-base">
                  <h2 className="">Aug 2020 - July 2023</h2>
                  <p>CGPA: 7.8/10</p>
                </div>
              </div>
              <div className="text-base font-eb text-neutral-300 pt-4">
                <ul className="list-disc px-4">
                  <li>
                    Gained strong foundational knowledge in core computer engineering subjects including OS, DBMS, Computer Networks, OOP, and Java.
                  </li>
                  <li>
                    Studied both basic and advanced software engineering concepts, focusing on scalable and structured application development.
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

export default Aboutme;
