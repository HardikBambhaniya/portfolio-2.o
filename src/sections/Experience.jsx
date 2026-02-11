import { motion } from "framer-motion";

function Experience() {
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 px-2 max-w-4xl flex flex-col gap-2 justify-start text-white"
          >
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
          </motion.div>
        </>
    );
}

export default Experience;