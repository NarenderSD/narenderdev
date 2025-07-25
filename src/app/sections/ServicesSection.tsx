"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaChalkboardTeacher, FaRobot, FaUserTie, FaLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Full Stack Web Development",
    desc: "Complete web application development using MERN stack, Next.js, and TypeScript. Building scalable, maintainable, and production-ready applications with modern development practices.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-orange-500" />,
    title: "Frontend Development & UI/UX",
    desc: "Creating responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks. Focused on user experience, accessibility, and cross-browser compatibility.",
  },
  {
    icon: <FaRobot className="text-3xl text-purple-500" />,
    title: "Backend Development & APIs",
    desc: "Developing robust server-side solutions using Node.js, Express.js, and MongoDB. Implementing RESTful APIs, authentication systems, and database optimization.",
  },
  {
    icon: <FaUserTie className="text-3xl text-green-500" />,
    title: "Technical Consulting & Code Review",
    desc: "Providing technical guidance, code reviews, and architectural recommendations. Helping teams optimize their development processes and implement best practices.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    title: "Performance Optimization & SEO",
    desc: "Optimizing web applications for speed, performance, and search engine visibility. Implementing advanced techniques for better user experience and higher rankings.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const ServicesSection = () => (
  <section id="services" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      Professional Services <span className="text-blue-500">& Solutions</span>
    </motion.h2>
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          className="relative bg-white/20 dark:bg-blue-900/30 rounded-3xl shadow-xl p-8 flex flex-col items-center glassmorphism border border-blue-200 dark:border-blue-800 backdrop-blur-lg group transition-all duration-300 cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #3b82f6cc" }}
        >
          <div className="mb-4 group-hover:animate-bounce transition-transform duration-300">{s.icon}</div>
          <div className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">{s.title}</div>
          <div className="text-base text-gray-700 dark:text-blue-200 text-center">{s.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection; 