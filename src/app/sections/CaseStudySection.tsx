"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaLightbulb, FaTools, FaCheckCircle } from "react-icons/fa";

const caseStudies = [
  {
    id: "photo-studio-pro-case-study",
    title: "Photo Studio Pro: Professional Photography Management",
    image: "/photo studio pro Cash study.png",
    problem: "Photography studios struggle with managing client bookings, portfolio showcases, and payment processing. Most solutions are either too complex or lack the visual appeal needed for creative businesses.",
    solution: "I developed a comprehensive MERN stack solution featuring client booking management, dynamic portfolio galleries, payment integration, and an intuitive dashboard. The focus was on creating a visually stunning interface that reflects the creative nature of photography while maintaining professional functionality.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "Cloudinary", "TailwindCSS"],
    live: "https://photostudiopro.vercel.app/",
    github: "https://github.com/NarenderSD/PhotoStudioPro",
  },
  {
    id: "apna-pos-case-study",
    title: "Apna POS: Smart Point of Sale System",
    image: "/Apna POS Cash Study.png",
    problem: "Small businesses need an affordable, user-friendly POS system that handles inventory, sales tracking, and customer management without the complexity and high costs of enterprise solutions.",
    solution: "Built a complete POS system with real-time inventory management, sales analytics, customer database, receipt generation, and multi-user support. The system includes offline capabilities and cloud sync to ensure business continuity.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Chart.js", "PWA"],
    live: "https://apnapos.vercel.app/",
    github: "https://github.com/NarenderSD/ApnaPOS",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="w-full py-20 px-4 bg-gradient-to-b from-blue-100 to-blue-200 dark:from-blue-950 dark:to-gray-900 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 dark:text-blue-200 text-center drop-shadow-xl"
      >
        Project Case Studies
      </motion.h2>

      <div className="space-y-24 max-w-5xl mx-auto">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 bg-white/50 dark:bg-gray-800/50 p-8 rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/50 backdrop-blur-lg`}
          >
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={study.image}
                alt={study.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </motion.div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-orange-500 mb-4">{study.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaLightbulb className="text-yellow-400 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300"><strong className="text-gray-800 dark:text-gray-100">The &quot;Why&quot;:</strong> {study.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300"><strong className="text-gray-800 dark:text-gray-100">The Solution:</strong> {study.solution}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaTools className="text-blue-500 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-800 dark:text-gray-100">Tech Stack:</strong>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {study.stack.map(tech => (
                        <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href={study.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={study.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection; 