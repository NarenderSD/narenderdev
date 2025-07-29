"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaCertificate, FaGithub, FaRobot } from "react-icons/fa";

const awards = [
  {
    icon: <FaTrophy className="text-3xl text-yellow-500" />,
    title: "Haryana State NSS Award",
    desc: "State Level Recognition 2023",
    tooltip: "Awarded by Haryana Government for outstanding social service and community contribution through NSS activities.",
  },
  {
    icon: <FaMedal className="text-3xl text-orange-500" />,
    title: "DSA Problem Solver",
    desc: "450+ Problems Solved",
    tooltip: "Solved 450+ Data Structures & Algorithms problems on LeetCode, GeeksforGeeks, and other platforms.",
  },
  {
    icon: <FaCertificate className="text-3xl text-blue-500" />,
    title: "Full Stack Developer",
    desc: "MERN Stack Expert",
    tooltip: "Proficient in MongoDB, Express.js, React.js, Node.js with multiple production projects.",
  },
  {
    icon: <FaGithub className="text-3xl text-black dark:text-white" />,
    title: "Active GitHub Contributor",
    desc: "25+ Public Repositories",
    tooltip: "Maintained 25+ repositories with clean code, documentation, and regular commits.",
  },
  {
    icon: <FaRobot className="text-3xl text-purple-500" />,
    title: "AI Integration Specialist",
    desc: "Modern Tech Stack",
    tooltip: "Integrated AI tools like ChatGPT, Gemini in projects with Next.js, TypeScript, and modern frameworks.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const AwardsSection = () => (
  <section id="awards" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      Awards & Badges <span className="text-blue-500">/ Achievements</span>
    </motion.h2>
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {awards.map((a, i) => (
        <motion.div
          key={a.title}
          className="relative bg-white/20 dark:bg-blue-900/30 rounded-3xl shadow-xl p-8 flex flex-col items-center glassmorphism border border-blue-200 dark:border-blue-800 backdrop-blur-lg group transition-all duration-300 cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          tabIndex={0}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #3b82f6cc" }}
        >
          <div className="mb-4 group-hover:animate-bounce transition-transform duration-300" title={a.tooltip} aria-label={a.tooltip}>{a.icon}</div>
          <div className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">{a.title}</div>
          <div className="text-base text-gray-700 dark:text-blue-200 text-center">{a.desc}</div>
          <span className="absolute top-2 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            {a.tooltip}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default AwardsSection; 