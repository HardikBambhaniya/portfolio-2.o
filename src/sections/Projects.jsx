import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
return(
    <>
    <section 
    id="projects"
    className="bg-black">
       <div className="max-w-4xl mx-auto pt-25 flex flex-col gap-2 justify-start px-2">
        <h2 className="text-xl font-bold font-montserrat text-white">Featured Projects</h2>
      
      <div className="max-w-4xl grid gap-2 sm:grid-cols-2 justify-items-center">
        {projects.map((projects) => {
          return  <ProjectCard key={projects.id} project={projects} />
          
        })}
        
      </div>
       </div>
    </section>
    </>
)
    

}

export default Projects;