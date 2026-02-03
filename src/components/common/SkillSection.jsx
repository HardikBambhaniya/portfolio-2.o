// This file contain reusable code for Skills logo/label


import { SKILLS } from "../../data/skills";
import SkillBadge from "../SkillBadge";

const SkillSection = ({ skillKeys }) => {
  return (
    <div >
      

      <div className="flex flex-wrap gap-2 text-sm font-bold font-eb">
        {skillKeys.map((key) => {
          const skill = SKILLS[key];

          if (!skill) return null;

          return (
            <SkillBadge key={key} className="gap-x-2">
              <img
                className="h-4"
                src={skill.icon}
                alt={`${skill.label}-logo`}
              />
              {skill.label}
            </SkillBadge>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSection;