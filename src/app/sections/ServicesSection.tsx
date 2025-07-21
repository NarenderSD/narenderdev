"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaChalkboardTeacher, FaRobot, FaUserTie, FaLightbulb } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Full Stack Web Development",
    desc: "End-to-end web solutions — from interactive UIs to scalable backends. I build robust, maintainable, and high-performance applications for startups and enterprises alike.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-orange-500" />,
    title: "UI/UX & Web Design",
    desc: "Crafting beautiful, user-centric interfaces with a focus on accessibility, responsiveness, and modern design trends. Every pixel matters.",
  },
  {
    icon: <FaRobot className="text-3xl text-purple-500" />,
    title: "Modern Web Technologies",
    desc: "Integrating the latest in web tech — animations, 3D, cloud, and more. I deliver future-proof solutions that stand out in the digital crowd.",
  },
  {
    icon: <FaUserTie className="text-3xl text-green-500" />,
    title: "Consulting & Strategy",
    desc: "Helping businesses architect, optimize, and scale their digital products. From MVPs to enterprise systems, I bring clarity and results.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
    title: "Performance & SEO",
    desc: "Optimizing for speed, discoverability, and conversion. I ensure your web presence is fast, visible, and impactful.",
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
      What I Offer <span className="text-blue-500">/ Services</span>
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