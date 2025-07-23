/*
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/default_image.png", alt: "IPCA", name: "IPCA" },
  { src: "/default_image.png", alt: "BrandDaddy", name: "BrandDaddy" },
  { src: "/vercel.svg", alt: "Vercel", name: "Vercel" },
  { src: "/globe.svg", alt: "Global", name: "Global Clients" },
  { src: "/default_image.png", alt: "YaarVichar", name: "YaarVichar" },
];

const SocialProofSection = () => (
  <section className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
      className="text-3xl md:text-4xl font-bold mb-8 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg"
    >
      Trusted By <span className="text-blue-500">/ Social Proof</span>
    </motion.h2>
    <div className="w-full max-w-5xl flex flex-wrap justify-center items-center gap-8">
      {logos.map((logo, i) => (
        <motion.div
          key={logo.name}
          className="relative group flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            title={logo.name}
            width={96}
            height={96}
            className="w-24 h-24 object-contain rounded-2xl shadow-lg bg-white/80 dark:bg-blue-900/80 p-3 border-2 border-blue-200 dark:border-blue-800 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300"
            loading="lazy"
          />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
            {logo.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SocialProofSection;
*/ 