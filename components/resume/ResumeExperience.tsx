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
    <section>
      <h2 className="text-base font-bold text-gray-900 flex items-center justify-center gap-4 before:h-px before:bg-gradient-to-r before:from-transparent before:to-gray-300 before:flex-1 after:h-px after:bg-gradient-to-l after:from-transparent after:to-gray-300 after:flex-1 uppercase tracking-wider">
        {label}
      </h2>

      <div>
        {experience.map((job, index) => (
          <div
            key={index}
            className={`relative pt-2 pb-2 border-b border-gray-200 last:border-0 ${
              !job.projects ? "break-inside-avoid" : ""
            }`}
          >
            {(job.logo || job.logoText) && (
              <div className="float-right w-20 h-10 flex items-center justify-center ml-3 mb-2">
                {job.logo ? (
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-xs text-gray-500 font-semibold">
                    {job.logoText}
                  </div>
                )}
              </div>
            )}
            <h3 className="font-bold text-gray-900 text-sm mb-0.5 flex items-baseline gap-2">
              <span className="text-base">{job.company}</span>
              <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
                {`${
                  job.location ? "• " + job.location + " • " : ""
                }${formatPeriod(job.startDate, job.endDate, language)}`}
              </span>
            </h3>
            {job.role && (
              <p className="text-xs text-blue-600 font-semibold mb-1.5">
                {job.role}
              </p>
            )}
            <p className="text-xs text-gray-700 mt-1 mb-1 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
            {job.techStack && job.techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {job.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-gray-50 text-gray-700 px-2 py-0.5 rounded-full border border-gray-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <div className="clear-both"></div>

            {/* Nested Projects */}
            {job.projects && (
              <div className="pl-4 border-l-2 border-blue-100">
                {job.projects.map((project, pIndex) => (
                  <div
                    key={pIndex}
                    className={`relative break-inside-avoid ${
                      pIndex !== 0 ? "pt-4" : "pt-1"
                    }`}
                  >
                    {project.logo && (
                      <div className="float-right w-20 h-10 flex items-center justify-center ml-3 mb-2">
                        <img
                          src={project.logo}
                          alt={project.company}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                    <h4 className="font-semibold text-gray-800 text-sm mb-0.5 flex items-baseline gap-2">
                      {project.company}
                    </h4>
                    <p className="text-xs text-gray-700 mt-0.5 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-gray-50 text-gray-700 px-1.5 py-0.5 rounded-full border border-gray-200 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="clear-both"></div>
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
