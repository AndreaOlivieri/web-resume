import React from "react";
import { ResumeData } from "../../types/resume";

interface ResumeCertificationsProps {
  certifications: ResumeData["certifications"];
  label: string;
}

export const ResumeCertifications: React.FC<ResumeCertificationsProps> = ({
  certifications,
  label,
}) => {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-2 text-[11px] text-gray-600">
        {certifications.map((cert, index) => (
          <div key={index}>
            <p className="text-[10px] text-gray-500">{cert.date}</p>
            <p className="font-bold text-gray-900">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
