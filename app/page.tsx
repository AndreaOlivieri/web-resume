"use client";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Resume } from "@/components/Resume";
import { Menu } from "@/components/Menu";
import { translatedDataBy } from "../data/data";
import { Locale } from "@/types/locale";
import { DEFAULT_LANGUAGE } from "@/utils/i18n";

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<Locale>(DEFAULT_LANGUAGE);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `Andrea_Olivieri_Resume_${language.toUpperCase()}`,
  });

  return (
    <div className="min-h-screen bg-white md:bg-gray-900 flex flex-col items-center py-0 md:py-10 relative overflow-hidden">
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
      <div className="overflow-auto w-full flex justify-center px-0 md:px-4 md:pb-10">
        <div className="w-full md:w-auto transform origin-top transition-transform duration-300">
          <Resume
            ref={resumeRef}
            data={translatedDataBy(language)}
            language={language}
          />
        </div>
      </div>
    </div>
  );
}
