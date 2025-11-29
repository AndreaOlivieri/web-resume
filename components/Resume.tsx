import { forwardRef } from "react";
import { ResumeData } from "../types/resume";
import { ResumeHeader } from "./resume/ResumeHeader";
import { ResumeExperience } from "./resume/ResumeExperience";
import { ResumeEducation } from "./resume/ResumeEducation";
import { ResumeSkills } from "./resume/ResumeSkills";
import { ResumeLanguages } from "./resume/ResumeLanguages";
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
          className="bg-white shadow-lg print:shadow-none text-black relative"
          style={{
            width: "210mm",
            minHeight: "297mm",
            padding: "10mm",
            boxSizing: "border-box",
          }}
        >
          <ResumeHeader header={header} />
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
          <ResumeSkills skills={skills} label={labels.skills} />
          <ResumeLanguages languages={languages} label={labels.languages} />
          <ResumeCertifications
            certifications={certifications}
            label={labels.certifications}
            language={language}
          />

          {/* Footer Note */}
          <div className="mt-8 pt-4 border-t border-gray-300 text-[9px] text-gray-500 text-center">
            {footer.note}
          </div>
        </div>
      </div>
    );
  }
);

Resume.displayName = "Resume";

