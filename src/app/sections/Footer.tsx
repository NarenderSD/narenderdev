'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { href: "https://github.com/NarenderSD", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/narendersinghdev", icon: <FaLinkedin /> },
  { href: "mailto:narendersingh8515@gmail.com", icon: <MdEmail /> },
];

const Footer = () => (
  <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 px-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-t-xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left"
    >
      © {new Date().getFullYear()} Narender Singh. All rights reserved.
    </motion.div>
    <div className="flex gap-4 text-xl">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
    <span className="text-lg font-signature text-orange-500 select-none ml-4" style={{ fontFamily: 'Pacifico, cursive' }}>
      — Build By Narender Singh
    </span>
  </footer>
);

export default Footer; 