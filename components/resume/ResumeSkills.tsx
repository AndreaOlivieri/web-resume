import React from "react";
import { ResumeData } from "../../types/resume";

interface ResumeSkillsProps {
  skills: ResumeData["skills"];
  label: string;
}

export const ResumeSkills: React.FC<ResumeSkillsProps> = ({ skills, label }) => {
  return (
    <section className="mb-6 break-inside-avoid">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-2 text-[11px]">
        {skills.map((skill, index) => (
          <div key={index}>
            <span className="font-bold text-gray-800 block">
              {skill.category}:
            </span>
            <span className="text-gray-600">{skill.items.join(" • ")}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
