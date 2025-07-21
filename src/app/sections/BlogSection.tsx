/*
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    title: "How I Cracked 200+ DSA Problems (and You Can Too!)",
    summary: "My journey from zero to hero in DSA, with tips, code, and mindset hacks for every level.",
    image: "/project-blog.png",
    tags: ["DSA", "Motivation", "Python"],
    date: "2024-07-01",
    link: "#",
  },
  {
    title: "Building a Futuristic Portfolio with Next.js & AI",
    summary: "Step-by-step guide to creating a premium, animated, AI-powered portfolio using Next.js, Tailwind, and Gemini.",
    image: "/project-yaarvichar.png",
    tags: ["Web Dev", "Next.js", "AI"],
    date: "2024-06-20",
    link: "#",
  },
  {
    title: "Top 5 Mistakes in Coding Interviews (and How to Avoid Them)",
    summary: "Real stories, practical tips, and code snippets to help you ace your next interview.",
    image: "/project-dental.png",
    tags: ["Interviews", "Tips", "JavaScript"],
    date: "2024-05-15",
    link: "#",
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const BlogSection = () => (
  <section id="blog" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      Blog & Articles <span className="text-blue-500">/ Insights</span>
    </motion.h2>
    <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((a, i) => (
        <motion.a
          key={a.title}
          href={a.link}
          className="relative bg-white/20 dark:bg-blue-900/30 rounded-3xl shadow-xl p-6 flex flex-col glassmorphism border border-blue-200 dark:border-blue-800 backdrop-blur-lg group"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
          tabIndex={0}
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #f59e42cc" }}
        >
          <Image
            src={a.image}
            alt={a.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-2">
              {a.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-xs font-bold shadow-sm">{tag}</span>
              ))}
            </div>
            <div className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">{a.title}</div>
            <div className="text-sm text-blue-600 dark:text-blue-300 mb-3">{a.date}</div>
            <div className="text-base text-gray-700 dark:text-blue-200 mb-2">{a.summary}</div>
            <span className="text-blue-500 dark:text-blue-300 font-bold mt-auto group-hover:underline">Read More →</span>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);

export default BlogSection;
*/ 