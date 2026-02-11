import SkillSection from "../components/common/SkillSection";
import { motion } from "framer-motion";


function SkillContainer () {

    return(<>
    
     <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-20 px-2 max-w-4xl flex flex-col gap-2 justify-start text-white"
          >
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
          </motion.div>

    </>)

}

export default SkillContainer;