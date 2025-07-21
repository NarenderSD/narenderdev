"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFoundPage = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-blue-950">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="bg-white/80 dark:bg-blue-900/80 rounded-3xl shadow-2xl p-12 flex flex-col items-center border border-blue-200 dark:border-blue-800 backdrop-blur-lg"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        className="text-6xl font-extrabold text-blue-600 dark:text-blue-300 mb-4 drop-shadow-lg"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
        className="text-2xl md:text-3xl font-bold mb-2 text-blue-900 dark:text-blue-200 text-center"
      >
        Oops! Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-lg text-gray-700 dark:text-blue-100 mb-6 text-center max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved.<br />
        <span className="text-blue-500 font-semibold">Let’s get you back to something awesome!</span>
      </motion.p>
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-500 transition-colors border-2 border-blue-200 dark:border-blue-800"
        >
          Go Home
        </motion.button>
      </Link>
    </motion.div>
  </section>
);

export default NotFoundPage; 