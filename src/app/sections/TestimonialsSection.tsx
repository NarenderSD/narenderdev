/*
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Aman Sharma",
    role: "Senior Developer, Google",
    image: "/profile.png",
    text: "Working with you was a game-changer! Your DSA and web skills are next-level. Highly recommended for any tech team.",
  },
  {
    name: "Priya Verma",
    role: "Product Manager, Microsoft",
    image: "/default_image.png",
    text: "Your attention to detail and creative problem-solving made our project a huge success. Love your energy and passion!",
  },
  {
    name: "Rahul Singh",
    role: "CTO, StartupX",
    image: "/exp-self.png",
    text: "You bring premium quality and futuristic thinking to every project. Your portfolio is a true inspiration!",
  },
  {
    name: "Sana Khan",
    role: "Mentor, Coding Ninjas",
    image: "/achieve1.jpg",
    text: "Your DSA explanations are so clear—even beginners get it! Keep rocking and inspiring the next generation.",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const TestimonialsSection = () => (
  <section className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      What People Say <span className="text-blue-500">/ Testimonials</span>
    </motion.h2>
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          className="relative bg-white/20 dark:bg-blue-900/30 rounded-3xl shadow-xl p-6 flex flex-col items-center glassmorphism border border-blue-200 dark:border-blue-800 backdrop-blur-lg group transition-all duration-300 cursor-pointer"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #3b82f6cc" }}
        >
          <div className="mb-4 group-hover:animate-bounce transition-transform duration-300">
            <Image
              src={t.image}
              alt={t.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-4 border-blue-300 dark:border-blue-700 object-cover mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1 text-center">{t.name}</div>
          <div className="text-sm text-blue-600 dark:text-blue-300 mb-3 text-center">{t.role}</div>
          <div className="text-base text-gray-700 dark:text-blue-200 text-center italic">“{t.text}”</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
*/ 