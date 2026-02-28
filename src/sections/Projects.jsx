import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
return(
    <>
    <section 
    id="projects">
       <motion.div
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.6, ease: "easeOut" }}

       className="max-w-4xl mx-auto pt-25 flex flex-col gap-2 justify-start px-2">
        <h2 className="text-xl font-bold  text-white">Featured Projects</h2>
      
      <div className="max-w-4xl grid gap-2 sm:grid-cols-2 justify-items-center">
        {projects.map((projects) => {
          return  <ProjectCard key={projects.id} project={projects} />
          
        })}
        
      </div>
       </motion.div>
    </section>
    </>
)
    

}

export default Projects;