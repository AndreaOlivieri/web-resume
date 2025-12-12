import React from "react";
import { ResumeData } from "../../types/resume";

interface ResumeLanguagesProps {
  languages: ResumeData["languages"];
  label: string;
}

export const ResumeLanguages: React.FC<ResumeLanguagesProps> = ({
  languages,
  label,
}) => {
  return (
    <section className="pt-6 break-inside-avoid">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-1 text-xs text-gray-600">
        {languages.map((lang, index) => (
          <div key={index}>
            <span className="font-bold text-gray-900">{lang.name}:</span>{" "}
            {lang.level}
          </div>
        ))}
      </div>
    </section>
  );
};
