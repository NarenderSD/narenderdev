'use client';
import React, { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRocket, FaCode, FaStar, FaArrowRight } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss, SiJavascript, SiPython } from "react-icons/si";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert", 
  "Frontend Architect",
  "Backend Specialist",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
  "Tech Innovator",
  "Digital Creator"
];

const socialLinks = [
  { href: "https://github.com/NarenderSD", icon: <FaGithub />, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
  { href: "https://www.linkedin.com/in/narendersingh1", icon: <FaLinkedin />, label: "LinkedIn", color: "hover:text-blue-600" },
  { href: "mailto:narendersingh2028@gmail.com", icon: <FaEnvelope />, label: "Email", color: "hover:text-red-500" },
];

const techStack = [
  { icon: <SiReact className="text-4xl text-cyan-400" />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs className="text-4xl text-gray-800 dark:text-white" />, name: "Next.js", color: "text-gray-800 dark:text-white" },
  { icon: <SiNodedotjs className="text-4xl text-green-500" />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb className="text-4xl text-green-600" />, name: "MongoDB", color: "text-green-600" },
  { icon: <SiTypescript className="text-4xl text-blue-500" />, name: "TypeScript", color: "text-blue-500" },
  { icon: <SiTailwindcss className="text-4xl text-teal-400" />, name: "Tailwind", color: "text-teal-400" },
  { icon: <SiJavascript className="text-4xl text-yellow-400" />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <SiPython className="text-4xl text-blue-400" />, name: "Python", color: "text-blue-400" },
];

// Premium 3D Laptop Component with Perfect Smooth Animations
const Premium3DLaptop = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const laptopRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!laptopRef.current) return;
    const rect = laptopRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePos({ x: x * 2, y: y * 2 });
  };

  const codeLines = [
    { text: "// Building the future, one line at a time", color: "text-gray-500", delay: 0 },
    { text: "const developer = {", color: "text-blue-400", delay: 0.5 },
    { text: '  name: "Narender Singh",', color: "text-orange-400", delay: 1 },
    { text: '  role: "Full Stack Developer",', color: "text-orange-400", delay: 1.5 },
    { text: '  passion: "Creating Amazing Experiences",', color: "text-orange-400", delay: 2 },
    { text: '  skills: ["React", "Node.js", "AI/ML"],', color: "text-orange-400", delay: 2.5 },
    { text: '  status: "Available for exciting projects"', color: "text-orange-400", delay: 3 },
    { text: "};", color: "text-blue-400", delay: 3.5 },
    { text: 'console.log("Let\'s build something amazing!");', color: "text-purple-400", delay: 4 },
  ];

  return (
    <div 
      ref={laptopRef}
      className="relative group perspective-1000 transform transition-all duration-700 ease-out hover:scale-105"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg) ${isHovered ? 'translateZ(30px)' : 'translateZ(0px)'}`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Laptop Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl filter blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        <Image
          src="/Laptop.png"
          alt="Premium Laptop"
          width={800}
          height={500}
          className="w-full h-auto drop-shadow-2xl relative z-10 transition-all duration-500"
          priority
        />
        
        {/* Advanced Screen Content */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-[62%] h-[42%] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden shadow-inner border border-gray-700/50 mt-[6%]">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-gray-400 text-xs font-mono">portfolio.js</span>
            </div>
            
            {/* Code Content */}
            <div className="h-full p-4 font-mono text-xs overflow-hidden">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={`${line.color} mb-1 opacity-0 animate-type-in`}
                  style={{
                    animationDelay: `${line.delay}s`,
                    animationDuration: '0.8s',
                    animationFillMode: 'forwards',
                  }}
                >
                  <span className="text-gray-600 mr-2">{String(index + 1).padStart(2, '0')}</span>
                  {line.text}
                </div>
              ))}
              
              {/* Blinking Cursor */}
              <span className="text-green-400 text-lg animate-cursor-blink">█</span>
            </div>
          </div>
        </div>

        {/* Orbiting Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="absolute w-16 h-16 flex items-center justify-center animate-orbit"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0',
                animationDuration: `${25 + idx * 2}s`,
                animationDelay: `${idx * 0.3}s`,
              }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 bg-white/10 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-2xl hover:scale-125 hover:shadow-orange-500/50 transition-all duration-300 animate-float-gentle"
                style={{
                  transform: `translateX(${120 + idx * 15}px) translateY(-32px)`,
                  animationDuration: '3s',
                  animationDelay: `${idx * 0.5}s`,
                }}
              >
                {tech.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-60 animate-float-random"
              style={{
                left: `${15 + (i * 10)}%`,
                top: `${25 + (i * 8)}%`,
                animationDuration: `${6 + i * 2}s`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIdx % roles.length];
    
    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 120);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length - 1)), 60);
    } else {
      setDeleting(false);
      setRoleIdx(idx => (idx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"
      onMouseMove={handleMouseMove}
      style={{
        transform: `translateY(${scrollY * 0.05}px)`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-orange-400/15 to-red-400/15 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating Stars and Code Icons */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-random opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            {Math.random() > 0.5 ? (
              <FaStar className="text-orange-400 text-sm" />
            ) : (
              <FaCode className="text-blue-400 text-sm" />
            )}
          </div>
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10" />
      </div>

      {/* Premium Mouse Follower */}
      <div 
        className="absolute pointer-events-none transition-all duration-500 ease-out mix-blend-multiply dark:mix-blend-screen"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          width: 500,
          height: 500,
          background: `radial-gradient(circle, 
            rgba(249, 115, 22, 0.08) 0%, 
            rgba(59, 130, 246, 0.05) 30%, 
            rgba(168, 85, 247, 0.03) 60%, 
            transparent 100%)`,
          borderRadius: '50%',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full py-12">
          
          {/* Left Side - Premium Text Content */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            
            {/* Greeting with Perfect Animation */}
            <div className="flex items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up" 
                 style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl lg:text-5xl drop-shadow-lg animate-wave">👋</div>
              <span className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-semibold">
                Hello, I&apos;m
              </span>
            </div>

            {/* Premium Name with Gradient */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}>
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                  Narender
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-100 drop-shadow-xl opacity-0 animate-slide-in-right"
                      style={{ animationDelay: '0.6s' }}>
                  Singh
                </span>
              </h1>
            </div>

            {/* Perfect Role Animation */}
            <div className="h-20 flex items-center justify-center lg:justify-start opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                  {displayed}
                </span>
                <span className="text-orange-500 ml-2 drop-shadow-lg animate-cursor-blink">|</span>
              </div>
            </div>

            {/* Premium Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-0 animate-fade-in-up"
               style={{ animationDelay: '1s' }}>
              Passionate about creating{" "}
              <span className="text-orange-500 font-bold animate-pulse-scale">
                exceptional digital experiences
              </span>{" "}
              through clean code, innovative solutions, and cutting-edge technologies.
            </p>

            {/* Premium Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '1.2s' }}>
              {socialLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl ${link.color} opacity-0 animate-fade-in-up`}
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <span className="text-2xl text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                    {link.label}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start opacity-0 animate-fade-in-up"
                 style={{ animationDelay: '1.4s' }}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold rounded-2xl shadow-2xl overflow-hidden text-lg hover:scale-105 transition-all duration-500 animate-gradient"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FaRocket className="text-lg animate-bounce-gentle" />
                  Let&apos;s Create Something Amazing
                  <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <button
                onClick={() => {
                  const resumeSection = document.getElementById('resume');
                  if (resumeSection) {
                    resumeSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-bold rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-orange-500 transition-all duration-500 text-lg shadow-xl hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <FaDownload className="text-lg group-hover:text-orange-500 transition-colors duration-300 animate-bounce-gentle" />
                  View Resume
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Premium 3D Laptop */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-slide-in-right"
               style={{ animationDelay: '0.5s' }}>
            <Premium3DLaptop />
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fade-in-up"
           style={{ animationDelay: '2s' }}>
        <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
          <div className="w-2 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mt-2 animate-scroll-indicator" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium text-center animate-pulse">
          Scroll to explore
        </p>
      </div>

      {/* Perfect Custom CSS Animations */}
      <style jsx>{`
        @keyframes type-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(12deg); }
          50% { transform: rotate(-8deg); }
          75% { transform: rotate(12deg); }
        }
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0px); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.5; }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(90deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        .animate-type-in { animation: type-in forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-slide-in-right { animation: slide-in-right 1s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        .animate-gradient { 
          background-size: 200% 200%; 
          animation: gradient 6s ease infinite; 
        }
        .animate-wave { animation: wave 3s ease-in-out infinite 3s; }
        .animate-cursor-blink { animation: cursor-blink 1s ease-in-out infinite; }
        .animate-pulse-scale { animation: pulse-scale 2s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 3s ease-in-out infinite; }
        .animate-float-random { animation: float-random linear infinite; }
        .animate-orbit { animation: orbit linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
