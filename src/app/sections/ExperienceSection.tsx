'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGitlab, FaDocker, FaAws, FaPython, FaJs, FaReact, FaNodeJs, FaFigma, FaGoogle, FaMicrosoft, FaCode, FaCloud, FaRobot } from "react-icons/fa";
import { SiVercel, SiOpenai, SiVsco, SiTypescript, SiNextdotjs, SiMongodb, SiFirebase, SiDjango, SiAmazon, SiNotion, SiSlack, SiJupyter, SiKaggle, SiCodesandbox, SiGithubcopilot } from "react-icons/si";

// Sample experience data (update as needed)
const experiences = [
  {
    role: "Self Employed",
    company: "Full Stack Developer",
    duration: "Nov 2023 - Present",
    description: "Working as a freelance full stack developer, building modern web applications and solutions.",
    logo: "/exp-self.png", // Place your logo in public folder
  },
  {
    role: "Brand Daddy",
    company: "App Developer | Internship",
    duration: "Sep 2023 - Oct 2023",
    description: "Developed mobile apps and contributed to UI/UX improvements during internship.",
    logo: "/exp-branddaddy.png",
  },
  {
    role: "IPCA GROUP",
    company: "Web Developer | Internship",
    duration: "July 2022 - April 2023",
    description: "Worked on web development projects, focusing on frontend and backend integration.",
    logo: "/exp-ipca.png",
  },
];

const aiTools = [
  { name: "Cursor IDE", icon: <img src="/cursor-logo.svg" alt="Cursor IDE" className="w-10 h-10" /> },
  { name: "V0.dev", icon: <img src="/v0-logo.svg" alt="V0.dev" className="w-10 h-10" /> },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-600 w-10 h-10" /> },
  { name: "Gemini", icon: <FaGoogle className="text-blue-500 w-10 h-10" /> },
  { name: "Copilot", icon: <SiGithubcopilot className="text-green-500 w-10 h-10" /> },
  { name: "Codesandbox", icon: <SiCodesandbox className="text-black w-10 h-10" /> },
  { name: "VS Code", icon: <SiVsco className="text-blue-600 w-10 h-10" /> },
  { name: "Notion AI", icon: <SiNotion className="text-black w-10 h-10" /> },
  { name: "Slack AI", icon: <SiSlack className="text-pink-500 w-10 h-10" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-orange-500 w-10 h-10" /> },
  { name: "Kaggle", icon: <SiKaggle className="text-blue-400 w-10 h-10" /> },
  { name: "Figma AI", icon: <FaFigma className="text-pink-400 w-10 h-10" /> },
  { name: "AWS Bedrock", icon: <SiAmazon className="text-yellow-500 w-10 h-10" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-10 h-10" /> },
  { name: "Django", icon: <SiDjango className="text-green-700 w-10 h-10" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
  { name: "Python", icon: <FaPython className="text-blue-400 w-10 h-10" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-10 h-10" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-10 h-10" /> },
  { name: "GitHub", icon: <FaGithub className="text-black w-10 h-10" /> },
  { name: "GitLab", icon: <FaGitlab className="text-orange-600 w-10 h-10" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500 w-10 h-10" /> },
  { name: "Cloud", icon: <FaCloud className="text-blue-400 w-10 h-10" /> },
  { name: "AI", icon: <FaRobot className="text-purple-500 w-10 h-10" /> },
  // Add more as needed
];

const Marquee = () => (
  <div className="w-full overflow-x-hidden py-4 mb-6">
    <div className="flex gap-8 animate-marquee whitespace-nowrap">
      {aiTools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[56px]">
          {tool.icon}
          <span className="text-xs text-gray-500 mt-1 text-center">{tool.name}</span>
        </div>
      ))}
      {/* Repeat for infinite effect */}
      {aiTools.map((tool, idx) => (
        <div key={"repeat-"+idx} className="flex flex-col items-center min-w-[56px]">
          {tool.icon}
          <span className="text-xs text-gray-500 mt-1 text-center">{tool.name}</span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <Marquee />
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Experience</h2>
      <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }}
            className="flex items-center gap-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-6 border-l-8 border-orange-400"
          >
            <Image
              src={exp.logo}
              alt={exp.role}
              width={80}
              height={80}
              className="w-20 h-20 object-contain rounded-md border-2 border-orange-200 bg-white shadow"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{exp.duration}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection; 