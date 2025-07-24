import React from 'react';

// Mobile Phone Icon - Animated
export const MobileIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
);

// Database Icon - Animated  
export const DatabaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// React Icon - Animated
export const ReactIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-spin" style={{ animationDuration: '3s' }}>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
      <path d="M12 1c-2.5 0-4.9.4-7 1.1C3.7 2.7 2.7 4.1 2.7 5.7c0 1.6 1 3 2.3 3.6 2.1.7 4.5 1.1 7 1.1s4.9-.4 7-1.1c1.3-.6 2.3-2 2.3-3.6 0-1.6-1-3-2.3-3.6C16.9 1.4 14.5 1 12 1z" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M12 23c2.5 0 4.9-.4 7-1.1 1.3-.6 2.3-2 2.3-3.6 0-1.6-1-3-2.3-3.6-2.1-.7-4.5-1.1-7-1.1s-4.9.4-7 1.1C3.7 14.3 2.7 15.7 2.7 17.3c0 1.6 1 3 2.3 3.6C7.1 22.6 9.5 23 12 23z" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M8.2 2.8c-1.3 2.2-2 4.8-2 7.2s.7 5 2 7.2c.6 1.1 1.4 1.9 2.4 2.3 1 .4 2.1.4 3.1 0 1-.4 1.8-1.2 2.4-2.3 1.3-2.2 2-4.8 2-7.2s-.7-5-2-7.2c-.6-1.1-1.4-1.9-2.4-2.3-1-.4-2.1-.4-3.1 0-1 .4-1.8 1.2-2.4 2.3z" stroke="currentColor" strokeWidth="1" fill="none"/>
    </g>
  </svg>
);

// Next.js Icon - Animated
export const NextIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 8l8 8" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 16l4-4" stroke="currentColor" strokeWidth="2"/>
    </g>
  </svg>
);

// Django Icon - Animated
export const DjangoIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce" style={{ animationDuration: '2s' }}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 8h2v8H8V8z" fill="currentColor"/>
      <path d="M12 6h2v12h-2V6z" fill="currentColor"/>
      <circle cx="16" cy="10" r="1" fill="currentColor"/>
      <circle cx="16" cy="14" r="1" fill="currentColor"/>
    </g>
  </svg>
);

// HTML5 Icon - Animated
export const HtmlIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M2 3l1.5 17L12 22l8.5-2L22 3H2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M6 7h12l-1 11-5 1.5L7 18L6 7z" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M9 13h6" stroke="currentColor" strokeWidth="1"/>
      <path d="M10 10h4" stroke="currentColor" strokeWidth="1"/>
    </g>
  </svg>
);

// All Projects Icon - Animated
export const AllProjectsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-spin" style={{ animationDuration: '4s' }}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Lightning/Energy Icon - Animated
export const LightningIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    </g>
  </svg>
);

// Target Icon - Animated
export const TargetIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    </g>
  </svg>
);

// Book Icon - Animated
export const BookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce" style={{ animationDuration: '2s' }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Rocket Icon - Animated
export const RocketIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Briefcase Icon - Animated
export const BriefcaseIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Star Icon - Animated
export const StarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    </g>
  </svg>
);

// Trophy Icon - Animated
export const TrophyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 22h16" stroke="currentColor" strokeWidth="2"/>
      <path d="M10 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Graduation Cap Icon - Animated
export const GraduationIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <path d="M22 10v6M6 12H4a2 2 0 0 1 0-4h2" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 12h2a2 2 0 0 0 0-4h-2" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M2 10l10-8 10 8-10 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Chart/Analytics Icon - Animated
export const ChartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" strokeWidth="2"/>
    </g>
  </svg>
);

// Person/Developer Icon - Animated
export const DeveloperIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1"/>
    </g>
  </svg>
);

// Email Icon - Animated
export const EmailIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-bounce">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
    </g>
  </svg>
);

// Computer/Laptop Icon - Animated
export const LaptopIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <rect x="4" y="3" width="16" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="2" y1="17" x2="22" y2="17" stroke="currentColor" strokeWidth="2"/>
    </g>
  </svg>
);

// Fire/Hot Icon - Animated
export const FireIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
    </g>
  </svg>
);

// Globe/Web Icon - Animated
export const GlobeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-spin" style={{ animationDuration: '4s' }}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
  </svg>
);

// Hand/Wave Icon - Animated
export const HandIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-wave origin-center" style={{ animationDuration: '1s' }}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M18 8a2 2 0 1 1 4 0v6a10 10 0 0 1-10 10H6a2 2 0 0 1-2-2v-2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </g>
    <style jsx>{`
      @keyframes wave {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(20deg); }
        75% { transform: rotate(-15deg); }
      }
      .animate-wave {
        animation: wave 1s ease-in-out infinite;
      }
    `}</style>
  </svg>
);

// Document/Note Icon - Animated
export const DocumentIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
    </g>
  </svg>
);
