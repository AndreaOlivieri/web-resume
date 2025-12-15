import React from "react";
import { ResumeData } from "../../types/resume";
import { formatPeriod } from "../../utils/date";

interface ResumeCertificationsProps {
  certifications: ResumeData["certifications"];
  label: string;
  language: "it" | "en";
}

export const ResumeCertifications: React.FC<ResumeCertificationsProps> = ({
  certifications,
  label,
  language,
}) => {
  return (
    <section className="pt-5 pb-5 break-inside-avoid">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>
      <div className="space-y-2 text-xs text-gray-600">
        {certifications.map((cert, index) => {
          const date = formatPeriod(cert.startDate, cert.endDate, language);

          return (
            <div key={index}>
              <p className="flex items-center gap-2">
                <span className="font-bold text-gray-900">{cert.title}</span>
                <span className="text-xs text-gray-500">
                  {cert.organization && <span> • {cert.organization}</span>}
                  {date && <span> • {date}</span>}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
