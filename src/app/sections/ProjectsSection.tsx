'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";
import { useRef } from "react";

const categories = [
  { label: "All", value: "all" },
  { label: "MERN", value: "mern" },
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "ERPNext", value: "erpnext" },
  { label: "Django", value: "django" },
  { label: "Mobile", value: "mobile" },
  { label: "Basic Web", value: "basic" },
];

const projects = [
  {
    id: "apna-blog",
    title: "Apna Blog",
    image: "/project-blog.png",
    description: "A modern, full-stack blogging platform with a rich text editor, authentication, and responsive design. Built for creators who want a seamless publishing experience.",
    live: "https://apnablog.vercel.app/",
    github: "https://github.com/NarenderSD/ApnaBlog",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
  },
  {
    id: "yaar-vichar",
    title: "Yaar Vichar (Social Media App)",
    image: "/project-yaarvichar.png",
    description: "A feature-rich social platform with real-time chat, posts, and notifications. Designed for high engagement and smooth user experience.",
    live: "https://yaarvichar.vercel.app/",
    github: "https://github.com/NarenderSD/YaarVichar",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
  },
  {
    id: "dental-care",
    title: "Narender Dental Care",
    image: "/project-dental.png",
    description: "A premium clinic website with appointment booking, gallery, and modern UI. Focused on accessibility and conversion.",
    live: "https://narenderdental.vercel.app/",
    github: "https://github.com/NarenderSD/NarenderDentalCare",
    categories: ["basic"],
    stack: ["HTML5", "CSS3", "JavaScript", "TailwindCSS"],
  },
  // Add more projects as needed
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const getViewCount = (id: string) => {
  if (typeof window === 'undefined') return 0;
  const count = localStorage.getItem(`project_view_${id}`);
  return count ? parseInt(count, 10) : 0;
};

const incrementViewCount = (id: string) => {
  if (typeof window === 'undefined') return;
  const current = getViewCount(id);
  localStorage.setItem(`project_view_${id}`, String(current + 1));
};

// Reusable Counter component
const AnimatedCounter = ({ count }: { count: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    let start = 0;
    const end = count;
    if (start === end) return;
    let current = start;
    const duration = 800;
    const step = Math.ceil(end / (duration / 16));
    const animate = () => {
      current += step;
      if (current > end) current = end;
      if (ref.current) ref.current.textContent = current.toString();
      if (current < end) requestAnimationFrame(animate);
    };
    animate();
  }, [count]);
  return (
    <span ref={ref} className="font-bold text-orange-500 text-lg transition-all duration-300" />
  );
};

const ProjectsSection = () => {
  const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const maxToShow = 8;
  const visibleProjects = showAll ? projects : projects.slice(0, maxToShow);

  useEffect(() => {
    const counts: { [key: string]: number } = {};
    projects.forEach((project) => {
      counts[project.id] = getViewCount(project.id);
    });
    setViewCounts(counts);
  }, []);

  const handleLiveClick = (id: string, url: string) => {
    incrementViewCount(id);
    setViewCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    window.open(url, '_blank', 'noopener noreferrer');
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Featured Projects</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">A showcase of real-world, production-grade web applications and digital products. Each project is crafted with a focus on performance, scalability, and premium user experience — from SaaS dashboards to social platforms and modern business sites.</p>
      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-1 rounded-full font-semibold border transition-all duration-200 text-sm md:text-base shadow-sm
              ${activeCategory === cat.value
                ? "bg-orange-500 text-white border-orange-500 scale-105 shadow-lg"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-orange-100 dark:hover:bg-orange-900 hover:text-orange-500"}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        <AnimatePresence>
          {visibleProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 backdrop-blur-lg flex flex-col overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <motion.div
                variants={item}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
                whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 #f59e42cc" }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-200 mb-2 flex items-center gap-2">
                    {project.title}
                    <span className="ml-auto flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                      <FaEye className="text-orange-400" />
                      <AnimatedCounter count={viewCounts[project.id] || 0} />
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3" style={{display:'-webkit-box',WebkitLineClamp:3,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <button
                      onClick={() => handleLiveClick(project.id, project.live)}
                      className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition-colors text-center flex items-center justify-center gap-2"
                    >
                      View <FaExternalLinkAlt />
                    </button>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold shadow hover:bg-gray-900 transition-colors text-center flex items-center justify-center gap-2">
                      GitHub <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </AnimatePresence>
      </div>
      {projects.length > maxToShow && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
        >
          View All
        </button>
      )}
      {showAll && projects.length > maxToShow && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 px-8 py-2 bg-gray-300 dark:bg-gray-700 text-blue-900 dark:text-blue-100 rounded-full font-semibold shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors text-base"
        >
          Show Less
        </button>
      )}
    </section>
  );
};

export default ProjectsSection; 