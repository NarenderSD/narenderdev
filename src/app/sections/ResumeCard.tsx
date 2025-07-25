"use client";

import React, { useState, useEffect } from "react";
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const ResumeCard = () => {
  const [showFallback, setShowFallback] = useState(false);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const handleIframeError = () => {
    console.log("PDF iframe failed to load, showing fallback");
    setShowFallback(true);
    setPdfLoaded(true);
  };

  const handleIframeLoad = () => {
    console.log("PDF iframe loaded successfully");
    setPdfLoaded(true);
  };

  // Auto show PDF after 3 seconds if not loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!pdfLoaded) {
        console.log("Auto-loading PDF after timeout");
        setPdfLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [pdfLoaded]);

  return (
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
            {!showFallback ? (
              <div className="relative w-full h-full bg-white dark:bg-gray-900">
                {/* Direct PDF iframe with proper configuration */}
                <iframe
                  src="/api/resume"
                  width="100%"
                  height="100%"
                  className="w-full h-full rounded-lg"
                  title="Professional Resume - Narender Singh"
                  style={{ 
                    border: 'none',
                    minHeight: '500px'
                  }}
                  allow="fullscreen"
                  loading="lazy"
                  onError={() => {
                    console.log("API route failed, trying direct PDF");
                    // Fallback to direct PDF
                    const iframe = document.querySelector('iframe[title="Professional Resume - Narender Singh"]') as HTMLIFrameElement;
                    if (iframe) {
                      iframe.src = "/Narender Singh Resume.pdf";
                    }
                    setTimeout(() => {
                      if (!pdfLoaded) {
                        handleIframeError();
                      }
                    }, 2000);
                  }}
                  onLoad={handleIframeLoad}
                />
                
                {/* Loading overlay */}
                {!pdfLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/95 dark:from-gray-900/95 dark:to-gray-800/95 flex items-center justify-center z-10 rounded-lg">
                    <div className="text-center bg-white/90 dark:bg-gray-800/90 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-orange-200/50 dark:border-gray-700/50 max-w-sm">
                      <div className="relative mb-4">
                        <FaFilePdf className="text-6xl text-orange-500 mx-auto animate-pulse" />
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                        � Loading Resume
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        Preparing your professional PDF...
                      </p>
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setPdfLoaded(true);
                            setShowFallback(true);
                          }}
                          className="w-full px-4 py-2 text-sm bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          Show Options
                        </button>
                        <a
                          href="/Narender Singh Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
                        >
                          Open PDF Direct
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <FaFilePdf className="text-8xl text-orange-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  📄 Professional Resume Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-md leading-relaxed">
                  My professional resume with complete work experience, skills, and achievements. 
                  Click below to view in full screen or download.
                </p>
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                  <button
                    onClick={() => setShowFallback(false)}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                  >
                    🔄 Retry Preview
                  </button>
                  <a 
                    href="/Narender Singh Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
                  >
                    <FaExternalLinkAlt /> Open PDF
                  </a>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <p>✓ Complete Professional Experience</p>
                  <p>✓ Technical Skills & Certifications</p>
                  <p>✓ Project Portfolio & Achievements</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 w-full max-w-md justify-center">
          <a
            href="/Narender Singh Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-base"
          >
            <FaExternalLinkAlt className="text-base" /> 
            View Fullscreen
          </a>
          <a
            href="/Narender Singh Resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-base"
          >
            <FaDownload className="text-base" /> 
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
};

export default ResumeCard; 