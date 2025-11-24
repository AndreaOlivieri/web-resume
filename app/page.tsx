'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Resume } from '@/components/Resume';
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

      {/* Slide-out Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
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
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="mb-6">
            <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider">
              Language
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("it")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  language === "it"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Italiano
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  language === "en"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                English
              </button>
            </div>
          </div>

          <button
            onClick={() => handlePrint()}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg font-medium transition-all shadow-md w-full mb-4"
          >
            <Download size={20} />
            Download PDF
          </button>

          <div className="mt-auto text-gray-500 text-xs text-center">
            Resume Viewer v1.1
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

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
