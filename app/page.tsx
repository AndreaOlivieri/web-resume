'use client';

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Resume } from '@/components/Resume';
import { Download, Printer } from 'lucide-react';

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: 'Andrea_Olivieri_Resume',
  });

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      {/* Menu / Controls */}
      <div className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/20 p-4 flex justify-between items-center z-50 px-8 shadow-lg">
        <h1 className="text-white text-xl font-bold">Resume Viewer</h1>
        <button
          onClick={() => handlePrint()}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Download size={18} />
          Download PDF
        </button>
      </div>

      {/* Resume Display Area */}
      <div className="mt-20 overflow-auto w-full flex justify-center px-4">
        <div className="transform scale-90 md:scale-100 origin-top transition-transform duration-300">
           <Resume ref={resumeRef} />
        </div>
      </div>
      
      <div className="text-gray-500 text-sm mt-8 pb-4">
        &copy; {new Date().getFullYear()} Andrea Olivieri
      </div>
    </div>
  );
}
