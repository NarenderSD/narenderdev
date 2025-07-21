'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaEye } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";
import { useSpring, motion as motion3d } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "Frontend Architect",
  "Backend Specialist",
  "UI/UX Enthusiast",
  "Creative Coder",
];

const socialLinks = [
  { href: "https://github.com/NarenderSD", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/narendersinghdev", icon: <FaLinkedin /> },
  { href: "mailto:narendersingh8515@gmail.com", icon: <FaEnvelope /> },
];

const ORBIT_ICONS = [
  { icon: <SiReact className="text-3xl text-cyan-400" />, angle: 0 },
  { icon: <SiNextdotjs className="text-3xl text-gray-800 dark:text-white" />, angle: 90 },
  { icon: <SiNodedotjs className="text-3xl text-green-500" />, angle: 180 },
  { icon: <SiMongodb className="text-3xl text-green-600" />, angle: 270 },
];

const OrbitingIcons = ({ radius = 110, duration = 10 }) => {
  return (
    <>
      {ORBIT_ICONS.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            width: 0,
            height: 0,
            left: '50%',
            top: '50%',
            zIndex: 2,
          }}
          animate={{
            rotate: 360 + item.angle,
          }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
            delay: idx * (duration / ORBIT_ICONS.length),
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: `${radius}px`,
              top: `-20px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {item.icon}
          </div>
        </motion.div>
      ))}
    </>
  );
};

const DigitalRain = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{[]}";
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 opacity-20 dark:opacity-30">
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.p
                    key={i}
                    className="text-orange-500 font-mono absolute"
                    style={{
                        left: `${Math.random() * 100}%`,
                        fontSize: `${Math.random() * 1 + 0.5}rem`,
                    }}
                    initial={{ y: '-20%' }}
                    animate={{ y: '120%' }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                >
                    {chars[Math.floor(Math.random() * chars.length)]}
                </motion.p>
            ))}
        </div>
    );
};

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIdx % roles.length];
    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 80);
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length - 1)), 40);
    } else {
      setDeleting(false);
      setRoleIdx(idx => (idx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center py-20 px-4 overflow-hidden bg-gray-50 dark:bg-gray-950">
        <div 
            className="absolute inset-0 -z-20 transition-all duration-300"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 30%)`
            }}
        />
        <DigitalRain />

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-16 z-10 text-left">
            <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                Hi, I'm <span className="text-orange-500">Narender</span>
                <br />
                I Build Things for the Web.
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="h-8 md:h-10 flex items-center mb-6"
            >
                <span className="text-lg md:text-2xl font-mono text-blue-700 dark:text-blue-300">
                    {displayed}
                    <span className="animate-pulse">|</span>
                </span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="flex gap-4 mb-8"
            >
                {socialLinks.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                        {link.icon}
                    </a>
                ))}
            </motion.div>
            <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-transform hover:scale-105"
            >
                Get In Touch
            </motion.a>
        </div>
        
        {/* Right: Profile Photo with animations */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-0 perspective-1000 mb-8 md:mb-0">
            <div className="relative w-52 h-52 md:w-80 md:h-80 flex items-center justify-center" style={{ perspective: 1200 }}>
                <OrbitingIcons radius={110} duration={10} />
                <motion3d.img
                    src="/profile.png"
                    alt="Narender Singh"
                    className="w-52 h-52 md:w-80 md:h-80 rounded-full border-4 border-white shadow-xl object-cover cursor-pointer z-10"
                    style={{
                        transform: `rotateY(${tilt.x * 15}deg) rotateX(${-tilt.y * 15}deg) scale(1.08)`
                    }}
                    whileHover={{ scale: 1.12, boxShadow: "0 8px 32px 0 #f59e42cc" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
            </div>
        </div>
    </section>
  );
};

export default HeroSection; 