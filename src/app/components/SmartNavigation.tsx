'use client';
import React, { useState, useEffect } from 'react';
import { DeveloperIcon, GraduationIcon, LaptopIcon, EmailIcon, HandIcon } from './AnimatedIcons';

const sections = [
  { id: 'hero', label: 'Home', icon: <HandIcon className="w-4 h-4" /> },
  { id: 'about', label: 'About', icon: <DeveloperIcon className="w-4 h-4" /> },
  { id: 'education', label: 'Education', icon: <GraduationIcon className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', icon: <LaptopIcon className="w-4 h-4" /> },
  { id: 'contact', label: 'Contact', icon: <EmailIcon className="w-4 h-4" /> },
];

const SmartNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Show/hide navigation based on scroll
      setIsVisible(scrollTop > 100);

      // Determine active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let currentSection = 'hero';
      sectionElements.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            currentSection = element.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
      
      {/* Smart Navigation */}
      {isVisible && (
        <div className="fixed top-20 right-6 z-50 glass-morphism rounded-2xl p-2 shadow-2xl transform transition-all duration-300 animate-in slide-in-from-right">
          <div className="flex flex-col gap-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-14 h-14 rounded-xl transition-all duration-300 flex items-center justify-center text-xl hover-lift group ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/40 scale-110'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-105'
                  }`}
                >
                  <div className="w-5 h-5">{section.icon}</div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full animate-pulse" />
                  )}
                  
                  {/* Tooltip */}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {section.label}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* Progress Circle */}
          <div className="mt-4 flex justify-center">
            <div className="relative w-10 h-10">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-gray-200 dark:stroke-gray-700"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className="stroke-orange-500 transition-all duration-300"
                  strokeWidth="3"
                  strokeDasharray="100"
                  strokeDashoffset={100 - scrollProgress}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-orange-500">
                {Math.round(scrollProgress)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartNavigation;
