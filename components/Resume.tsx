import { forwardRef } from "react";
import { ResumeData } from "../types/resume";
import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeExperience } from "./resume/ResumeExperience";
import { ResumeEducation } from "./resume/ResumeEducation";
import { ResumeCertifications } from "./resume/ResumeCertifications";
import { Locale } from "@/types/locale";

export interface ResumeProps {
  data: ResumeData;
  language: Locale;
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
      <div className="w-full flex justify-center bg-white md:bg-gray-100 p-0 md:p-8 print:p-0">
        <div
          ref={ref}
          className="bg-white shadow-lg print:shadow-none text-black relative pt-5 pb-5 pl-5 pr-5 w-full max-w-[210mm] min-h-screen md:min-h-[297mm] print:w-[210mm] print:min-h-[297mm] box-border"
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
