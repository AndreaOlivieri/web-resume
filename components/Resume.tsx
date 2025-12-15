import { forwardRef } from "react";
import { ResumeData } from "../types/resume";
import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeExperience } from "./resume/ResumeExperience";
import { ResumeEducation } from "./resume/ResumeEducation";
import { ResumeCertifications } from "./resume/ResumeCertifications";

interface ResumeProps {
  data: ResumeData;
  language: "it" | "en";
}

export const Resume = forwardRef<HTMLDivElement, ResumeProps>(
  ({ data, language }, ref) => {
    const {
      header,
      experience,
      education,
      skills,
      languages,
      certifications,
      footer,
      labels,
    } = data;

    return (
      <div className="w-full flex justify-center bg-gray-100 p-8 print:p-0">
        <div
          ref={ref}
          className="bg-white shadow-lg print:shadow-none text-black relative pt-3 pb-3 pl-6 pr-6"
          style={{
            width: "210mm",
            minHeight: "297mm",
            boxSizing: "border-box",
          }}
        >
          <ResumeHeader
            header={header}
            languages={languages}
            softSkills={skills.soft.items}
          />
          <ResumeExperience
            experience={experience}
            label={labels.experience}
            language={language}
          />
          <ResumeEducation
            education={education}
            label={labels.education}
            language={language}
          />
          <ResumeCertifications
            certifications={certifications}
            label={labels.certifications}
            language={language}
          />

          {/* Footer Note */}
          <div className="pb-3 text-[10px] text-gray-500 text-center">
            {footer.note}
          </div>
        </div>
      </div>
    );
  }
);

Resume.displayName = "Resume";
