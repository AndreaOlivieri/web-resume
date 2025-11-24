import React from "react";

interface ResumeSummaryProps {
  summary: string;
}

export const ResumeSummary: React.FC<ResumeSummaryProps> = ({ summary }) => {
  return (
    <section className="mb-6">
      <p className="text-xs text-gray-800 leading-relaxed text-justify font-medium">
        {summary}
      </p>
    </section>
  );
};
