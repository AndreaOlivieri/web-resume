import React from "react";
import { ResumeData } from "../../types/resume";
import { formatPeriod } from "../../utils/date";

interface ResumeExperienceProps {
  experience: ResumeData["experience"];
  label: string;
  language: "it" | "en";
}

export const ResumeExperience: React.FC<ResumeExperienceProps> = ({
  experience,
  label,
  language,
}) => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
        {label}
      </h2>

      <div className="space-y-5">
        {experience.map((job, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-start">
              <div>
                {job.startDate && (
                  <p className="text-[10px] text-gray-500 mb-0.5">
                    {formatPeriod(job.startDate, job.endDate, language)}
                  </p>
                )}
                <h3 className="font-bold text-gray-900 text-sm">
                  {job.company} {job.location ? `- ${job.location}` : ""}
                </h3>
                {job.role && (
                  <p className="text-xs text-green-600 font-bold mb-1">
                    {job.role}
                  </p>
                )}
              </div>
              {job.logo ? (
                <div className="w-16 h-8 flex items-center justify-center ml-2">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : job.logoText ? (
                <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">
                  {job.logoText}
                </div>
              ) : null}
            </div>
            <p className="text-[10px] text-gray-600 mt-1 whitespace-pre-line">
              {job.description}
            </p>

            {/* Nested Projects */}
            {job.projects && (
              <div className="mt-3 space-y-3 pl-3 border-l border-gray-300">
                {job.projects.map((project, pIndex) => (
                  <div key={pIndex} className="relative">
                    <div className="flex justify-between items-start">
                      <div>
                        {project.startDate && (
                          <p className="text-[9px] text-gray-500 mb-0.5">
                            {formatPeriod(
                              project.startDate,
                              project.endDate,
                              language
                            )}
                          </p>
                        )}
                        <h4 className="font-bold text-gray-800 text-xs">
                          {project.company}{" "}
                          {project.role ? `- ${project.role}` : ""}
                        </h4>
                      </div>
                      {project.logo && (
                        <div className="w-16 h-8 flex items-center justify-center ml-2">
                          <img
                            src={project.logo}
                            alt={project.company}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-[9px] text-gray-600 mt-0.5 whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
