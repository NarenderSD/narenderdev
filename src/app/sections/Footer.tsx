'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { href: "https://github.com/NarenderSD", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/narendersingh1", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:narendersingh2028@gmail.com", icon: <MdEmail />, label: "Email" },
  { href: "https://www.instagram.com/buildbynarender", icon: <FaInstagram />, label: "Instagram" },
  { href: "tel:+918595962615", icon: <FaPhone />, label: "Phone" },
];

const Footer = () => (
  <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-6 px-4 shadow-t-xl">
    {/* Professional Credits Section */}
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500/10 to-blue-500/10 dark:from-orange-500/20 dark:to-blue-500/20 px-6 py-3 rounded-full border border-orange-200 dark:border-orange-800">
          <span className="text-2xl">🚀</span>
          <div className="text-center">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Crafted with Passion & Innovation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Professional Portfolio • Built by <span className="font-semibold text-orange-500">Narender Singh</span>
            </p>
          </div>
          <span className="text-2xl">💼</span>
        </div>
      </motion.div>

      {/* Tech Stack & Credits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-6"
      >
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Next.js 15</span>
          <span className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">React 18</span>
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">TypeScript</span>
          <span className="px-3 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full">TailwindCSS</span>
          <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">MongoDB</span>
          <span className="px-3 py-1 text-xs font-medium bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">Framer Motion</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Advanced portfolio featuring interactive animations, responsive design, and modern web technologies
        </p>
      </motion.div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold">Narender Singh</span>. All rights reserved.
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Full Stack Developer  • Available for Projects
          </div>
        </motion.div>
        
        <div className="flex gap-4 text-xl">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-300 transform hover:scale-110"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Developed with 💖 by Narender Singh
          </span>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 