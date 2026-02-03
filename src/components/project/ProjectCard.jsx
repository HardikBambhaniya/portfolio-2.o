import React from "react";
import {LinkIcon} from "../ui/link";
import {GithubIcon} from "../ui/github";
import { SKILLS } from "../../data/skills";
import IconTooltip from "../common/IconTooltip";
import ProjectStatusBadge from "../common/ProjectStatusBadge";

const ProjectCard = React.memo(({ project }) => {
  return (
    
    
    
    
    
    <article className="group rounded-xl border flex flex-col gap-3 border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
    
    
    
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="h-40 w-full rounded-lg object-contain"
      />

      {/* Title */}
      <div className="flex justify-between pt-3">
        <h3 className=" text-lg font-bold text-white font-montserrat">
        {project.title}
      </h3>

       {/* Links */}
      <div className=" flex gap-4 text-sm text-neutral-400">
        {project.liveUrl && (
          <IconTooltip
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            label="View Website"
          >
            <LinkIcon />
          </IconTooltip>
        )}
        {project.githubUrl && (
          <IconTooltip
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            label="View Code"
          >
            <GithubIcon /> 
          </IconTooltip>
        )}
      </div>
      </div>
      
       
      
      <p className="text-neutral-200 font-eb">{project.description}</p>

       {/* Skill badges */}
       <span className="text-neutral-400">Technologies</span>
       {project.skills?.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.skills.map((key) => {
            const skill = SKILLS[key]
            if (!skill) return null

            return (
             <IconTooltip key={key}
             label={skill.label}
             >
            
            <img
              src={skill.icon}
              alt={skill.label}
              className="h-6 w-6 cursor-pointer opacity-80 transition hover:opacity-100"
            />
          

          
        </IconTooltip>
            )
          })}
        </div>
      )}

    <div className="text-white">
    <ProjectStatusBadge status={project.status} />
  </div>
      
     
    </article>
  )
})

export default ProjectCard