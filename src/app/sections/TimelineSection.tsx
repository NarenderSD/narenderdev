/*
"use client";
import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    title: "Started B.Com (Hons)",
    desc: "Began my academic journey at Delhi University, building a strong foundation in business and tech.",
    icon: "🎓",
  },
  {
    year: "2020",
    title: "First Internship @ BrandDaddy",
    desc: "Worked as a Web Developer Intern, learned real-world coding, teamwork, and project delivery.",
    icon: "💼",
  },
  {
    year: "2021",
    title: "Cracked 200+ DSA Problems",
    desc: "Mastered DSA on LeetCode, Codeforces, and GFG. Built strong problem-solving skills.",
    icon: "🧠",
  },
  {
    year: "2022",
    title: "Joined IPCA as Software Engineer",
    desc: "Worked on scalable web apps, led a team, and delivered high-impact projects.",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "Built AI-Powered Portfolio",
    desc: "Launched this world-class, animated, AI-powered portfolio to showcase my journey and skills!",
    icon: "🌟",
  },
];

const TimelineSection = () => (
  <section id="timeline" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      My Journey <span className="text-blue-500">/ Timeline</span>
    </motion.h2>
    <div className="w-full max-w-3xl flex flex-col gap-8 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-200 dark:from-blue-700 dark:to-blue-900 rounded-full -translate-x-1/2 z-0" />
      {milestones.map((m, i) => (
        <motion.div
          key={m.year}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.7, type: "spring" }}
          className={`relative z-10 flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}
        >
          <div className="w-1/2 flex flex-col items-center">
            {i % 2 === 0 ? (
              <div className="w-full flex flex-col items-end pr-8">
                <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-lg p-5 mb-2 border border-blue-200 dark:border-blue-800 glassmorphism max-w-xs">
                  <div className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-1">{m.title}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-300 mb-2">{m.year}</div>
                  <div className="text-base text-gray-700 dark:text-blue-200">{m.desc}</div>
                </div>
              </div>
            ) : null}
          </div>
          {/* Timeline Dot & Icon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-700 dark:to-blue-900 border-4 border-white dark:border-blue-900 flex items-center justify-center text-2xl font-bold shadow-lg z-20">
            {m.icon}
          </div>
          <div className="w-1/2 flex flex-col items-center">
            {i % 2 !== 0 ? (
              <div className="w-full flex flex-col items-start pl-8">
                <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-lg p-5 mb-2 border border-blue-200 dark:border-blue-800 glassmorphism max-w-xs">
                  <div className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-1">{m.title}</div>
                  <div className="text-sm text-blue-600 dark:text-blue-300 mb-2">{m.year}</div>
                  <div className="text-base text-gray-700 dark:text-blue-200">{m.desc}</div>
                </div>
              </div>
            ) : null}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TimelineSection;
*/ 