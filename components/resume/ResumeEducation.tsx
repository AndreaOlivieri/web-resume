import React from "react";
import { ResumeData } from "../../types/resume";
import { formatPeriod } from "../../utils/date";

interface ResumeEducationProps {
  education: ResumeData["education"];
  label: string;
  language: "it" | "en";
}

export const ResumeEducation: React.FC<ResumeEducationProps> = ({
  education,
  label,
  language,
}) => {
  return (
    <section className="pt-6 break-inside-avoid">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => {
          const date = formatPeriod(edu.startDate, edu.endDate, language);

          return (
            <div key={index}>
              <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
              <p className="text-xs text-gray-600">
                <span>{edu.institution}</span>
                {date && <span> • {date}</span>}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
