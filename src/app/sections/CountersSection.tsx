"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaProjectDiagram, FaCode, FaUsers, FaCoffee } from "react-icons/fa";

const counters = [
  {
    icon: <FaCalendarAlt className="text-3xl text-blue-500" />,
    label: "Years Experience",
    value: 3,
  },
  {
    icon: <FaProjectDiagram className="text-3xl text-green-500" />,
    label: "Projects Completed",
    value: 18,
  },
  {
    icon: <FaCode className="text-3xl text-orange-500" />,
    label: "DSA Problems Solved",
    value: 220,
  },
  {
    icon: <FaUsers className="text-3xl text-purple-500" />,
    label: "Happy Clients",
    value: 7,
  },
  {
    icon: <FaCoffee className="text-3xl text-yellow-500" />,
    label: "Cups of Chai",
    value: 999,
  },
];

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const incrementTime = 1200 / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
};

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const CountersSection = () => (
  <section id="counters" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      My Numbers <span className="text-blue-500">/ Counters</span>
    </motion.h2>
    <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
      {counters.map((c, _i) => (
        <motion.div
          key={c.label}
          className="relative bg-white/20 dark:bg-blue-900/30 rounded-3xl shadow-xl p-8 flex flex-col items-center glassmorphism border border-blue-200 dark:border-blue-800 backdrop-blur-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="mb-2">{c.icon}</div>
          <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-1">
            <AnimatedCounter value={c.value} />
          </div>
          <div className="text-base text-gray-700 dark:text-blue-200 text-center">{c.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default CountersSection; 