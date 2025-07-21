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

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Get in Touch</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-lg bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-8 flex flex-col gap-4"
        onSubmit={e => { e.preventDefault(); /* TODO: Add form submission logic */ }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="mt-2 px-6 py-2 bg-orange-500 text-white rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-colors"
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="flex gap-6 mt-8">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-orange-500 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection; 