'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaAws, FaGitAlt, FaGithub, FaWordpress, FaBootstrap, FaLightbulb, FaRocket, FaStar } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiKotlin, SiHeroku, SiSass, SiTypescript, SiPostgresql, SiDigitalocean, SiFlutter, SiJquery, SiCplusplus, SiPhp, SiNextdotjs } from "react-icons/si";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Expertise & Tech Stack</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">My toolkit blends the best of modern web development — from frontend frameworks and backend APIs to design systems and cloud deployments. I specialize in building interactive, scalable, and visually stunning digital experiences.</p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-5xl px-4"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={item}
              transition={{ delay: 0.2 + idx * 0.07, duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.12, rotate: -2 }}
              className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-4 transition-transform cursor-pointer hover:shadow-xl border border-blue-100 dark:border-blue-900"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 