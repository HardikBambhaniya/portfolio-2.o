import React, { useState } from "react";
import { LinkIcon } from "../ui/link";
import { GithubIcon } from "../ui/github";
import { SKILLS } from "../../data/skills";
import IconTooltip from "../common/IconTooltip";
import ProjectStatusBadge from "../common/ProjectStatusBadge";
import { PlayIcon } from "../ui/play";

const ProjectCard = React.memo(({ project }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <video
            src={project.video}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <article className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 flex flex-col gap-3">
        {/* Image */}
        <div className="relative h-40 w-full overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-contain transition duration-500 ${
              project.video ? "group-hover:scale-105" : ""
            }`}
          />

          {/* Overlay (Only if video exists) */}
         {/* Overlay (Only if video exists) */}
{project.video && (
  <div
    onClick={() => setShowVideo(true)}
    className="
      absolute
      inset-0
      object-contain
      flex
      cursor-pointer
      flex-col
      items-center
      justify-center
      bg-black/55
      transition-all
      duration-300

      /* Mobile */
      opacity-100

      /* Desktop */
      md:opacity-0
      md:group-hover:opacity-100
    "
  >
    <div
      className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-white/20
        backdrop-blur-md
        transition-transform
        duration-300
        md:group-hover:scale-110
      "
    >
      <PlayIcon className="h-7 w-7 text-white" />
    </div>

    <p
      className="
        mt-3
        text-sm
        font-semibold
        tracking-wide
        text-white
      "
    >
      Watch Demo
    </p>
  </div>
)}
        </div>

        {/* Title */}
        <div className="flex justify-between pt-3">
          <h3 className="text-lg font-bold text-white font-montserrat">
            {project.title}
          </h3>

          <div className="flex gap-4 text-sm text-neutral-400">
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

        {/* Description */}
        <p className="font-eb text-neutral-200">{project.description}</p>

        {/* Skills */}
        <span className="text-neutral-400">Technologies</span>

        {project.skills?.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {project.skills.map((key) => {
              const skill = SKILLS[key];
              if (!skill) return null;

              return (
                <IconTooltip key={key} label={skill.label}>
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="h-6 w-6 cursor-pointer opacity-80 transition hover:opacity-100"
                  />
                </IconTooltip>
              );
            })}
          </div>
        )}

        <div className="text-white">
          <ProjectStatusBadge status={project.status} />
        </div>
      </article>
    </>
  );
});

export default ProjectCard;
