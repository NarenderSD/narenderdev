import React from "react";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";

const ResumeCard = () => (
  <section className="w-full flex justify-center py-12 px-4 bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
    <div className="w-full max-w-2xl bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-2xl border border-orange-200 dark:border-blue-900 p-6 flex flex-col items-center relative overflow-hidden">
      <div className="absolute -top-8 -right-8 opacity-10 text-orange-400 text-8xl pointer-events-none select-none">
        <FaFilePdf />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
        <FaFilePdf className="text-orange-500" /> Resume
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-4 text-base md:text-lg">
        View or download my professional resume. Designed for recruiters and collaborators — clean, modern, and up-to-date.
      </p>
      <div className="w-full flex flex-col items-center gap-4 mb-4">
        <div className="w-full h-[420px] md:h-[600px] rounded-xl overflow-hidden border-2 border-orange-200 dark:border-blue-900 bg-white dark:bg-gray-900 shadow-lg">
          <object
            data="/Narender Singh Resume.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            className="w-full h-full rounded-xl"
          >
            <p className="text-center text-gray-500 dark:text-gray-400 p-4">PDF preview not supported. <a href="/Narender Singh Resume.pdf" download className="text-orange-500 underline">Download Resume</a></p>
          </object>
        </div>
      </div>
      <div className="flex gap-4 w-full justify-center">
        <a
          href="/Narender Singh Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors text-base"
        >
          <FaEye /> Preview Fullscreen
        </a>
        <a
          href="/Narender Singh Resume.pdf"
          download
          className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-600 transition-colors text-base"
        >
          <FaDownload /> Download PDF
        </a>
      </div>
    </div>
  </section>
);

export default ResumeCard; 