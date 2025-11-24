'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Resume } from '@/components/Resume';
import { Menu } from "@/components/Menu";
import { Download, Globe } from "lucide-react";
import itData from '../data/it.json';
import enData from '../data/en.json';

const resumeData = {
  it: itData,
  en: enData,
};

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = React.useState<"it" | "en">("it");

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `Andrea_Olivieri_Resume_${language.toUpperCase()}`,
  });

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
      <div className="overflow-auto w-full flex justify-center px-4">
        <div className="transform scale-90 md:scale-100 origin-top transition-transform duration-300">
          <Resume ref={resumeRef} data={resumeData[language]} />
        </div>
      </div>

      <div className="text-gray-500 text-sm pb-4">
        &copy; {new Date().getFullYear()} Andrea Olivieri
      </div>
    </div>
  );
}
