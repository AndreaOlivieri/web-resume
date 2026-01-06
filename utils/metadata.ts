import { translatedDataBy } from "@/data/data";
import { Locale } from "@/types/locale";
import { ResumeData } from "@/types/resume";
import { Metadata } from "next";
import { getLocaleCode } from "./i18n";

// Helper to accumulate all skills for keywords
const getSkills = (resumeData: ResumeData) => {
  const {
    industry,
    frontend,
    backend,
    database,
    mobile,
    languages,
    tools,
    soft,
  } = resumeData.skills;
  return [
    ...industry.items,
    ...frontend.items,
    ...backend.items,
    ...(database.items || []),
    ...(mobile.items || []),
    ...(languages.items || []),
    ...(tools.items || []),
    ...(soft.items || []),
  ].filter((item) => typeof item === "string" && !item.startsWith("skills."));
  // Note: Filtering out translation keys if any remain, though current data.ts has mostly raw strings for skills except industry categories
};

export const getMetaData = (language: Locale): Metadata => {
  const resumeData = translatedDataBy(language);
  const title = `${resumeData.header.name} - ${resumeData.header.title}`;
  const description = resumeData?.summary?.join(" ") || "";
  return {
    title: {
      default: title,
      template: `%s | ${resumeData.header.name}`,
    },
    description: description,
    keywords: [
      resumeData.header.name,
      "Software Engineer",
      "Tech Lead",
      ...getSkills(resumeData),
    ],
    authors: [{ name: resumeData.header.name }],
    creator: resumeData.header.name,
    openGraph: {
      type: "website",
      locale: getLocaleCode(language),
      url: process.env.NEXT_PUBLIC_URL || "https://andrea-olivieri.vercel.app",
      title: title,
      description: description,
      siteName: `${resumeData.header.name} ${
        language === "it" ? "CV" : "Resume"
      }`,
      images: [
        {
          url: "/assets/profile_image.jpeg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/assets/profile_image.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
