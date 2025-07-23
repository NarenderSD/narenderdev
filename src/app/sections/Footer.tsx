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
  <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm py-4 px-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-t-xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
        © {new Date().getFullYear()} Narender Singh. All rights reserved.
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
    <span className="text-lg font-signature text-orange-500 select-none ml-4" style={{ fontFamily: 'Pacifico, cursive' }}>
      — Build By Narender Singh
    </span>
  </footer>
);

export default Footer; 