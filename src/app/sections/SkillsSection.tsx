'use client';
import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaAws, FaGitAlt, FaGithub, FaWordpress, FaLightbulb, FaRocket, FaStar } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiHeroku, SiTypescript, SiNextdotjs } from "react-icons/si";

// Add or update skills here
const skills = [
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Framer Motion", icon: <FaReact className="text-pink-400" /> },
  { name: "Three.js", icon: <SiHeroku className="text-purple-700" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
  { name: "Web Design", icon: <FaWordpress className="text-blue-700" /> },
  { name: "UI/UX", icon: <FaLightbulb className="text-yellow-400" /> },
  { name: "Performance", icon: <FaRocket className="text-orange-500" /> },
  { name: "SEO", icon: <FaStar className="text-yellow-400" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Skills & Technologies</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">My toolkit includes modern web development technologies that I use to build efficient, scalable, and user-friendly applications.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-5xl px-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center glass-morphism rounded-xl shadow-md p-4 hover-lift cursor-pointer hover:shadow-2xl border border-blue-100 dark:border-blue-900 group relative overflow-hidden transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              style={{
                animationDelay: `${0.2 + idx * 0.07}s`
              }}
            >
              {/* Sparkle effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-1 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
              
              <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">{skill.icon}</div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center transition-colors duration-300 group-hover:text-orange-500">{skill.name}</div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 