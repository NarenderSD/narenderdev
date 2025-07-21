"use client";
import React from "react";

const ResumeDownloadButton = () => (
  <a
    href="/Narender Singh Resume.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-200 border-2 border-blue-200 dark:border-blue-800 backdrop-blur-lg glassmorphism"
    aria-label="Download Resume (PDF)"
    tabIndex={0}
  >
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
    </svg>
    Download Resume
  </a>
);

export default ResumeDownloadButton; 