import React from 'react';
import { Download } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'it' | 'en';
  setLanguage: (lang: 'it' | 'en') => void;
  onPrint: () => void;
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, language, setLanguage, onPrint }) => {
  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={() => onClose()} // This button is actually the open button in page.tsx, but here we might want to just render the sidebar content or handle the toggle differently.
        // Wait, the toggle button is usually outside the menu or part of the layout.
        // Let's keep the toggle button in the parent or include it here if we want the Menu component to handle its own visibility state?
        // The prompt implies moving the "menu" which usually means the sidebar.
        // Let's stick to the sidebar content and overlay. The toggle button can remain in the parent or be passed in.
        // Actually, looking at the design, the toggle button is fixed on the screen.
        // Let's include the sidebar and overlay here. The parent controls the open state.
        className="hidden" // Placeholder if we don't use it here
      />

      {/* Slide-out Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-2xl transform transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
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
            onClick={onPrint}
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
    </>
  );
};
