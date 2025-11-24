import React from "react";
import { ResumeData } from "../../types/resume";

interface ResumeEducationProps {
  education: ResumeData["education"];
  label: string;
}

export const ResumeEducation: React.FC<ResumeEducationProps> = ({
  education,
  label,
}) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index}>
            {edu.date && (
              <p className="text-[10px] text-gray-500 mb-0.5">{edu.date}</p>
            )}
            <h3 className="font-bold text-gray-900 text-sm">
              {edu.degree}{" "}
              {edu.level && (
                <span className="text-gray-500 font-normal">{edu.level}</span>
              )}
            </h3>
            <p className="text-xs text-gray-600">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
