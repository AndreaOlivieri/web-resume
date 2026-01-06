"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Resume } from "@/components/Resume";
import { Menu } from "@/components/Menu";
import itTranslations from "../data/it.json";
import enTranslations from "../data/en.json";
import { resumeData } from "../data/data";

const contactInfo = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  github: process.env.NEXT_PUBLIC_CONTACT_GITHUB,
  linkedin: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN,
};

// Helper function to get value from object by dot notation path
const getTranslation = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) || path;
};

// Recursive function to translate object
const translateData = (data: any, translations: any): any => {
  if (typeof data === "string") {
    // Try to translate the string if it matches a key path
    const translation = getTranslation(translations, data);
    // If translation is same as key, it might not be a key or missing translation.
    // However, some fields might be URLs or dates which are strings but not keys.
    // Our keys are fairly specific (e.g. "header.", "experience.").
    // Let's check if the translation exists and is different from the key, OR if the key follows our pattern.
    // A safer check: does the key exist in translations?
    const exists = pathExists(translations, data);
    return exists ? translation : data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => translateData(item, translations));
  }

  if (typeof data === "object" && data !== null) {
    const result: any = {};
    for (const key in data) {
      result[key] = translateData(data[key], translations);
    }
    return result;
  }

  return data;
};

const pathExists = (obj: any, path: string) => {
  const parts = path.split(".");
  let current = obj;
  for (const part of parts) {
    if (
      current === undefined ||
      current === null ||
      typeof current !== "object"
    )
      return false;
    current = current[part];
  }
  return current !== undefined;
};

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = React.useState<"it" | "en">("it");

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `Andrea_Olivieri_Resume_${language.toUpperCase()}`,
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Merge contact info into header
  const dataWithContact = {
    ...resumeData,
    header: {
      ...resumeData.header,
      contact: {
        ...resumeData.header.contact,
        ...contactInfo,
      },
    },
  };

  const translations = language === "it" ? itTranslations : enTranslations;
  const translatedData = translateData(dataWithContact, translations);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 relative overflow-hidden">
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-8 right-8 z-40 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/20 transition-all shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        language={language}
        setLanguage={setLanguage}
        onPrint={handlePrint}
      />

      {/* Resume Display Area */}
      <div className="overflow-auto w-full flex justify-center px-0 md:px-4 pb-10">
        <div className="w-full md:w-auto transform origin-top transition-transform duration-300">
          <Resume ref={resumeRef} data={translatedData} language={language} />
        </div>
      </div>
    </div>
  );
}
