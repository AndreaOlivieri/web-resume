import React, { forwardRef } from "react";
import { Mail, Phone, MapPin, Github, Car } from "lucide-react";

interface ResumeData {
  header: {
    name: string;
    title: string;
    subTitle: string;
    contact: {
      location: string;
      email: string;
      phone: string;
      github: string;
    };
  };
  summary: string;
  experience: Array<{
    company: string;
    location?: string;
    period?: string;
    role?: string;
    logoText?: string;
    logo?: string;
    description: string;
  }>;
  education: Array<{
    date: string;
    degree: string;
    institution: string;
    level?: string;
  }>;
  skills: Array<{
    category: string;
    items: string;
  }>;
  languages: Array<{
    name: string;
    level: string;
  }>;
  certifications: Array<{
    date: string;
    title: string;
  }>;
  footerNote: string;
  labels: {
    experience: string;
    education: string;
    skills: string;
    languages: string;
    certifications: string;
  };
}

interface ResumeProps {
  data: ResumeData;
}

export const Resume = forwardRef<HTMLDivElement, ResumeProps>(({ data }, ref) => {
  const {
    header,
    summary,
    experience,
    education,
    skills,
    languages,
    certifications,
    footerNote,
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
        {/* Header */}
        <header className="flex items-start gap-6 mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden border border-gray-300">
            <img
              src="/assets/profile_image.jpeg"
              alt={header.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.classList.add(
                  "flex",
                  "items-center",
                  "justify-center"
                );
                (e.target as HTMLImageElement).parentElement!.innerHTML =
                  '<span class="text-xs text-center text-gray-500">Photo</span>';
              }}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              {header.name}
            </h1>
            <p className="text-lg text-gray-800 font-bold mb-3">
              {header.title} <br />
              {header.subTitle}
            </p>

            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="font-semibold">{header.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span className="font-semibold">{header.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span className="font-semibold">{header.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={14} />
                <span className="font-semibold">{header.contact.github}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <p className="text-xs text-gray-800 leading-relaxed text-justify font-medium">
            {summary}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            {labels.experience}
          </h2>

          <div className="space-y-5">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-start">
                  <div>
                    {job.period && (
                      <p className="text-[10px] text-gray-500 mb-0.5">
                        {job.period}
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
                <p className="text-[11px] text-gray-700 text-justify leading-snug whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            {labels.education}
          </h2>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index}>
                {edu.date && (
                  <p className="text-[10px] text-gray-500 mb-0.5">{edu.date}</p>
                )}
                <h3 className="font-bold text-gray-900 text-sm">
                  {edu.degree}{" "}
                  {edu.level && (
                    <span className="text-gray-500 font-normal">
                      {edu.level}
                    </span>
                  )}
                </h3>
                <p className="text-xs text-gray-600">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            {labels.skills}
          </h2>
          <div className="space-y-2 text-[11px]">
            {skills.map((skill, index) => (
              <div key={index}>
                <span className="font-bold text-gray-800 block">
                  {skill.category}:
                </span>
                <span className="text-gray-600">{skill.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            {labels.languages}
          </h2>
          <div className="space-y-1 text-[11px] text-gray-600">
            {languages.map((lang, index) => (
              <div key={index}>
                <span className="font-bold text-gray-900">{lang.name}:</span>{" "}
                {lang.level}
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            {labels.certifications}
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

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-[9px] text-gray-500 text-center">
          {footerNote}
        </div>
      </div>
    </div>
  );
});

Resume.displayName = "Resume";
