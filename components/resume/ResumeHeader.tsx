import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Languages,
  Sparkles,
} from "lucide-react";
import { ResumeData } from "../../types/resume";
import { Tags } from "./Tags";

interface ResumeHeaderProps {
  header: ResumeData["header"];
  languages: ResumeData["languages"];
  softSkills?: string[];
}

export const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  header,
  languages,
  softSkills,
}) => {
  return (
    <>
      <header className="flex flex-col md:flex-row print:flex-row items-stretch gap-6 mb-4">
        <div className="w-full md:w-52 print:w-52 relative bg-gray-200 rounded-md flex-shrink-0 overflow-hidden border border-gray-300 h-64 md:h-auto print:h-auto">
          <img
            src="/assets/profile_image.jpeg"
            alt={header.name}
            className="absolute inset-0 w-full h-full object-cover"
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
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">
              {header.name}
            </h1>
            <p className="text-lg text-gray-800 font-bold mb-3">
              {header.title}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
              {header.contact.email && (
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span className="font-semibold">{header.contact.email}</span>
                </div>
              )}
              {header.contact.linkedin && (
                <div className="flex items-center gap-2">
                  <Linkedin size={14} />
                  <span className="font-semibold">
                    {header.contact.linkedin}
                  </span>
                </div>
              )}
              {header.contact.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span className="font-semibold">{header.contact.phone}</span>
                </div>
              )}
              {header.contact.github && (
                <div className="flex items-center gap-2">
                  <Github size={14} />
                  <span className="font-semibold">{header.contact.github}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="font-semibold">{header.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages size={14} />
                <span className="font-semibold">
                  {languages.map((lang) => `${lang.name}`).join(" • ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mb-3">
        <ul className="text-xs text-gray-800 leading-relaxed text-justify font-medium list-disc ml-4 space-y-1">
          {header.summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {softSkills && <Tags items={softSkills} />}
      </section>
    </>
  );
};
