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
  <footer className="w-full bg-gray-900 text-white py-6 px-4 shadow-xl border-t border-gray-700">
    {/* Professional Credits Section */}
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center justify-center space-x-3 bg-gray-800/60 px-6 py-3 rounded-full border border-gray-700">
          <span className="text-2xl">🚀</span>
          <div className="text-center">
            <h3 className="text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Crafted with Passion & Innovation
            </h3>
            <p className="text-sm text-gray-300 mt-1">
              Professional Portfolio • Built by <span className="font-semibold text-orange-400">Narender Singh</span>
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
          <span className="px-3 py-1 text-xs font-medium bg-blue-800 text-blue-200 rounded-full">Next.js 15</span>
          <span className="px-3 py-1 text-xs font-medium bg-cyan-800 text-cyan-200 rounded-full">React 18</span>
          <span className="px-3 py-1 text-xs font-medium bg-purple-800 text-purple-200 rounded-full">TypeScript</span>
          <span className="px-3 py-1 text-xs font-medium bg-teal-800 text-teal-200 rounded-full">TailwindCSS</span>
          <span className="px-3 py-1 text-xs font-medium bg-green-800 text-green-200 rounded-full">MongoDB</span>
          <span className="px-3 py-1 text-xs font-medium bg-orange-800 text-orange-200 rounded-full">Framer Motion</span>
        </div>
        <p className="text-xs text-gray-400">
          Advanced portfolio featuring interactive animations, responsive design, and modern web technologies
        </p>
      </motion.div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Narender Singh</span>. All rights reserved.
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Full Stack Developer • Available for Projects
          </div>
        </motion.div>
        
        <div className="flex gap-4 text-xl text-gray-300">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300 transform hover:scale-110"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-3">
          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white">
            Developed with 💖 by <span className="text-orange-400 font-semibold">Narender Singh</span>
          </span>
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 