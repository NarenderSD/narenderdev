import React from "react";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";

const ResumeCard = () => (
  <section id="resume" className="w-full flex justify-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900">
    <div className="w-full max-w-4xl bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-3xl shadow-2xl border border-orange-200 dark:border-blue-900 p-8 flex flex-col items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-8 -right-8 opacity-10 text-orange-400 text-8xl pointer-events-none select-none">
        <FaFilePdf />
      </div>
      <div className="absolute -bottom-8 -left-8 opacity-10 text-blue-400 text-8xl pointer-events-none select-none">
        <FaFilePdf />
      </div>
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-200 mb-4 flex items-center justify-center gap-3">
          <FaFilePdf className="text-orange-500" /> Professional Resume
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center text-lg md:text-xl max-w-2xl">
          View or download my professional resume. Designed for recruiters and collaborators — clean, modern, and up-to-date with all my latest achievements.
        </p>
      </div>

      {/* Resume Preview */}
      <div className="w-full flex flex-col items-center gap-6 mb-8">
        <div className="w-full max-w-3xl h-[500px] md:h-[700px] rounded-2xl overflow-hidden border-4 border-orange-200 dark:border-blue-900 bg-white dark:bg-gray-900 shadow-2xl">
          <object
            data="/Narender Singh Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full rounded-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <FaFilePdf className="text-6xl text-orange-500 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                PDF preview not supported in your browser.
              </p>
              <a 
                href="/Narender Singh Resume.pdf" 
                download 
                className="text-orange-500 underline hover:text-orange-600 transition-colors font-semibold"
              >
                Click here to download the resume directly
              </a>
            </div>
          </object>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
        <a
          href="/Narender Singh Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-lg"
        >
          <FaEye className="text-xl" /> 
          Preview Fullscreen
        </a>
        <a
          href="/Narender Singh Resume.pdf"
          download
          className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 text-lg"
        >
          <FaDownload className="text-xl" /> 
          Download PDF
        </a>
      </div>
      
      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Last updated: July 2025 | Format: PDF | Size: ~2MB
        </p>
      </div>
    </div>
  </section>
);

export default ResumeCard; 