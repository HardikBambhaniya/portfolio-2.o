import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
return(
    <>
    <section 
    id="projects"
    className="mx-auto pt-20 full flex justify-center bg-black px-2">
      

      <div className="max-w-4xl grid gap-2 sm:grid-cols-2 justify-items-center">
        {projects.map((projects) => {
          return  <ProjectCard key={projects.id} project={projects} />
          
        })}
        
      </div>
    </section>
    </>
)
    

}

export default Projects;