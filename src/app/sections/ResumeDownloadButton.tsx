"use client";
import React from "react";

const ResumeDownloadButton = () => {
  const scrollToResume = () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToResume}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200 border-2 border-blue-200 dark:border-blue-800 backdrop-blur-lg glassmorphism"
      aria-label="View Resume Section"
      tabIndex={0}
    >
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      View Resume
    </button>
  );
};

export default ResumeDownloadButton; 