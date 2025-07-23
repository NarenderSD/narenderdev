'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaLightbulb, FaRocket, FaHeart, FaGraduationCap, FaBriefcase, FaAward, FaCoffee, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        mouseX.set(deltaX * 0.05);
        mouseY.set(deltaY * 0.05);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const skills = [
    { icon: <SiReact />, name: 'React', level: 95 },
    { icon: <SiNodedotjs />, name: 'Node.js', level: 90 },
    { icon: <SiNextdotjs />, name: 'Next.js', level: 88 },
    { icon: <SiMongodb />, name: 'MongoDB', level: 85 },
    { icon: <SiTypescript />, name: 'TypeScript', level: 92 },
    { icon: <SiTailwindcss />, name: 'Tailwind', level: 95 },
  ];

  const personality = [
    { icon: <FaCode />, trait: 'Problem Solver', desc: 'Love tackling complex challenges' },
    { icon: <FaLightbulb />, trait: 'Creative Thinker', desc: 'Always finding innovative solutions' },
    { icon: <FaRocket />, trait: 'Fast Learner', desc: 'Quick to adapt new technologies' },
    { icon: <FaHeart />, trait: 'Passionate', desc: 'Deeply committed to quality code' }
  ];

  const achievements = [
    { icon: <FaGraduationCap />, title: 'B.Com Graduate', desc: 'Strong analytical foundation' },
    { icon: <FaBriefcase />, title: 'Professional Dev', desc: '2+ years experience' },
    { icon: <FaAward />, title: 'Project Success', desc: '15+ completed projects' },
    { icon: <FaCoffee />, title: 'Code Enthusiast', desc: '1000+ hours coding' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/narendersingh1", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/NarenderSD", label: "GitHub" },
    { icon: <FaEnvelope />, href: "mailto:narendersingh2028@gmail.com", label: "Email" }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-orange-800"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-blue-800"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-purple-800"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-orange-500 to-blue-600 bg-clip-text text-transparent dark:from-gray-100 dark:via-orange-400 dark:to-blue-400 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div
                ref={imageRef}
                className="relative w-80 h-80 mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-orange-400 to-blue-500 p-1 shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  style={{ x, y }}
                  className="w-full h-full relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900"
                >
                  <Image
                    src="/profile.png"
                    alt="Narender Singh"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                  
                  {/* Floating Tech Icons */}
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                  >
                    <SiReact />
                  </motion.div>
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
                    className="absolute bottom-4 left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                  >
                    <SiNodedotjs />
                  </motion.div>
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg shadow-lg"
                  >
                    <SiNextdotjs />
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl flex items-end justify-center pb-6"
                  >
                    <div className="text-white text-center">
                      <p className="font-semibold">Full Stack Developer</p>
                      <p className="text-sm opacity-90">Building Digital Dreams</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating Achievement Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FaCode className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">15+ Projects</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Completed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <FaRocket className="text-white text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900 dark:text-gray-100">2+ Years</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Bio */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Full Stack Developer & 
                <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent"> Digital Innovator</span>
              </h3>
              
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none">
                <p className="leading-relaxed">
                  Hello! I&apos;m <strong className="text-orange-500">Narender Singh</strong>, a passionate full-stack developer 
                  with a strong foundation in both business and technology. Armed with a B.Com degree and 2+ years 
                  of hands-on development experience, I bring a unique blend of analytical thinking and creative 
                  problem-solving to every project.
                </p>
                
                <p className="leading-relaxed">
                  I specialize in building modern, responsive web applications using cutting-edge technologies 
                  like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. 
                  My mission is to transform ideas into powerful digital solutions that make a real impact.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    title={link.label}
                  >
                    <span className="text-lg">{link.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Personality Traits */}
            <div className="grid grid-cols-2 gap-4">
              {personality.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-2xl text-orange-500 mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{item.trait}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group relative"
              >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{skill.name}</h4>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Key Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{achievement.icon}</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let&apos;s collaborate and create something amazing together. I&apos;m always excited to work on new and challenging projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let&apos;s Talk
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
