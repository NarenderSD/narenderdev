'use client';
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ResumeDownloadButton from "./ResumeDownloadButton";
import Image from "next/image";

const techStack = [
  "ReactJS", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "TailwindCSS", "Framer Motion", "AI/ML", "OpenAI", "Vercel"
];

const codeSnippet = `// AI-powered API Example\nimport OpenAI from 'openai';\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });\n\nasync function askAI(question) {\n  const res = await openai.chat.completions.create({\n    model: 'gpt-4',\n    messages: [{ role: 'user', content: question }],\n  });\n  return res.choices[0].message.content;\n}\n\naskAI('How to build a world-class portfolio?').then(console.log);\n`;

const socialLinks = [
  { href: "https://github.com/NarenderSD", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/narendersinghdev", icon: <FaLinkedin /> },
  { href: "mailto:narendersingh8515@gmail.com", icon: <MdEmail /> },
];

const AboutSection = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  // Animated code typing effect
  const [codeDisplay, setCodeDisplay] = useState('');
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (codeDisplay.length < codeSnippet.length) {
      timeout = setTimeout(() => setCodeDisplay(codeSnippet.slice(0, codeDisplay.length + 2)), 18);
    } else if (codeDisplay.length === codeSnippet.length) {
      timeout = setTimeout(() => setCodeDisplay(''), 2000);
    }
    return () => clearTimeout(timeout);
  }, [codeDisplay]);

  const aboutMe = `
A passionate Full Stack Developer & Web Designer crafting modern, impactful digital products. My expertise spans from robust backends to beautiful, animated frontends. I thrive on transforming complex ideas into scalable, high-performance web applications with a premium, user-centric touch.
`;

  return (
    <section id="about" className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-100 dark:border-blue-900"
      >
        {/* Profile Image with 3D/hover effect */}
        <motion.div
          className="flex-shrink-0 mb-6 md:mb-0 group relative w-64 h-80 md:w-80 md:h-96"
          style={{ perspective: 800 }}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            x.set(200);
            y.set(200);
          }}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            className="w-full h-full"
          >
            <Image
              src="/profile.png"
              alt="Narender Singh"
              width={320}
              height={400}
              className="w-full h-full rounded-3xl object-cover border-4 border-orange-400 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </motion.div>
          {/* Colored overlay on hover */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.18 }}
            style={{ background: "linear-gradient(135deg, #f59e42 0%, #3b82f6 100%)" }}
          />
        </motion.div>
        {/* Animated Bio & Tech */}
        <div className="flex-1 flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-2 text-blue-900 dark:text-blue-200"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-2"
          >
            {aboutMe}
          </motion.p>
          {/* Resume Download Button */}
          <div className="my-2">
            <div className="inline-block transition-transform duration-200">
              <ResumeDownloadButton />
            </div>
          </div>
          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-2"
          >
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-mono shadow">
                {tech}
              </span>
            ))}
          </motion.div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-4 mt-2"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-orange-500 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/* Achievements Marquee removed from AboutSection */}
      <div className="mt-8 flex flex-col items-center">
        <span className="text-2xl font-signature text-orange-500 select-none" style={{ fontFamily: 'Pacifico, cursive' }}>
          — Narender Singh
        </span>
      </div>
    </section>
  );
};

// New AchievementsSection component
export const AchievementsSection = () => {
  // All available images
  const images = [
    "/1.jpg",
    "/achieve.jpg",
    "/achieve1.jpg",
    "/achieve2.jpg",
    "/achieve3.jpg",
    "/achieve4.jpg",
    "/achieve5.jpg",
    "/achieve6.jpg",
    "/achieve7.jpg"
  ];
  // Double the array for seamless infinite scroll
  const marqueeImages = images.concat(images);
  return (
    <section className="w-full py-20 px-4 overflow-x-hidden select-none bg-transparent flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900 dark:text-blue-200 text-center drop-shadow-lg">Achievements & Awards</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-2xl">A glimpse of my journey—each achievement is a story of passion, hard work, and relentless pursuit of excellence. Let’s get inspired together!</p>
        <div className="relative w-full">
          <div className="overflow-hidden w-full">
          <div className="flex items-center gap-12 animate-achievement-marquee will-change-transform" style={{ width: 'max-content' }}>
            {marqueeImages.map((img, idx) => (
              <div
                  key={idx}
                className="relative min-w-[220px] h-40 md:min-w-[300px] md:h-56 flex items-center justify-center group floating-achievement-card overflow-visible"
                style={{ perspective: 1200 }}
                onMouseMove={e => {
                  const card = e.currentTarget;
                  const imgEl = card.querySelector('img');
                  const shine = card.querySelector('.shine');
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rotateY = ((x / rect.width) - 0.5) * 18;
                  const rotateX = ((y / rect.height) - 0.5) * -18;
                  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
                  if (imgEl) imgEl.style.transform = `scale(1.18) translateZ(32px)`;
                  if (shine) shine.style.background = `linear-gradient(120deg, rgba(255,255,255,0.0) 60%, rgba(255,255,255,0.25) 100%)`;
                  if (shine) shine.style.left = `${x - rect.width * 0.2}px`;
                  if (shine) shine.style.top = `${y - rect.height * 0.2}px`;
                }}
                onMouseLeave={e => {
                  const card = e.currentTarget;
                  const imgEl = card.querySelector('img');
                  const shine = card.querySelector('.shine');
                  card.style.transform = '';
                  if (imgEl) imgEl.style.transform = '';
                  if (shine) shine.style.background = '';
                  if (shine) shine.style.left = '';
                  if (shine) shine.style.top = '';
                }}
              >
                {/* Blurred background using the same image */}
                <Image
                  src={images.includes(img) ? img : "/default_image.png"}
                  alt=""
                  aria-hidden="true"
                  width={300}
                  height={224}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl blur-lg scale-110 opacity-40 z-0 pointer-events-none select-none"
                  style={{ filter: 'blur(18px) brightness(1.1) saturate(1.2)' }}
                />
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl z-10 pointer-events-none animated-gradient-border" />
                {/* Glassmorphism Frame with inner shadow */}
                <div className="absolute inset-0 rounded-3xl bg-white/30 dark:bg-gray-700/30 backdrop-blur-md border border-white/30 dark:border-gray-800/40 shadow-2xl z-10 group-hover:shadow-orange-400/40 group-hover:scale-105 transition-all duration-300 inner-shadow" />
                {/* Shine/Reflection */}
                <div className="shine absolute inset-0 rounded-3xl pointer-events-none z-20 transition-all duration-300" style={{mixBlendMode:'lighten', left:0, top:0}} />
                {/* Achievement Image with 3D tilt and glow on hover */}
                <Image
                  src={images.includes(img) ? img : "/default_image.png"}
                  alt={`Achievement ${idx + 1}`}
                  width={300}
                  height={224}
                  className="relative z-30 w-full h-full object-cover object-center rounded-2xl border-4 border-white dark:border-gray-900 shadow-xl cursor-pointer transition-all duration-300 popout-image"
                  style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                />
                <span className="absolute bottom-3 right-3 bg-orange-500 text-white text-xs md:text-base px-2 md:px-3 py-1 rounded-full shadow-lg z-40 font-bold animate-bounce">
                  Achievement
                  </span>
              </div>
              ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes achievement-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-achievement-marquee {
          animation: achievement-marquee 32s linear infinite;
        }
        .animated-gradient-border {
          background: linear-gradient(120deg, #f59e42, #3b82f6, #f59e42, #fff, #f59e42);
          background-size: 300% 300%;
          animation: border-gradient-move 4s linear infinite;
          filter: blur(2px) brightness(1.2);
          opacity: 0.7;
        }
        @keyframes border-gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .inner-shadow {
          box-shadow: 0 4px 32px 0 rgba(0,0,0,0.10) inset, 0 1.5px 8px 0 rgba(255,255,255,0.10) inset;
        }
        .floating-achievement-card {
          animation: float-card 4s ease-in-out infinite alternate;
        }
        @keyframes float-card {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
        .popout-image {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1), z-index 0.2s;
        }
        .group:hover .popout-image {
          transform: scale(1.18) translateZ(32px) !important;
          box-shadow: 0 12px 48px 0 #f59e42cc, 0 0 0 8px #fff8, 0 0 0 0 #0000;
          z-index: 40;
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 