'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaLightbulb, FaRocket, FaHeart, FaGraduationCap, FaBriefcase, FaAward, FaCoffee, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        
        setMousePosition({ x: deltaX * 0.02, y: deltaY * 0.02 });
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
                  Hello! I'm <strong className="text-orange-500">Narender Singh</strong>, a passionate full-stack developer 
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
              Let's collaborate and create something amazing together. I'm always excited to work on new and challenging projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's Talk
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

const AboutSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        
        setMousePosition({ x: deltaX * 0.02, y: deltaY * 0.02 });
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

  const stats = [
    { icon: <FaCode />, value: '50+', label: 'Projects Completed' },
    { icon: <FaBriefcase />, value: '3+', label: 'Years Experience' },
    { icon: <FaAward />, value: '15+', label: 'Achievements' },
    { icon: <FaCoffee />, value: '1000+', label: 'Cups of Coffee' },
  ];

  const personalityTraits = [
    { icon: <FaCode />, title: 'Problem Solver', description: 'I love tackling complex challenges with creative solutions' },
    { icon: <FaLightbulb />, title: 'Innovative Thinker', description: 'Always exploring new technologies and methodologies' },
    { icon: <FaRocket />, title: 'Fast Learner', description: 'Quick to adapt and master new frameworks and tools' },
    { icon: <FaHeart />, title: 'Passionate Creator', description: 'Driven by passion for creating exceptional user experiences' },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden backdrop-blur-md z-10"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-400/5 to-red-400/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know the person behind the code - my journey, passion, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side - Interactive Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center relative z-30">
              <div
                ref={imageRef}
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${15 + (i * 12)}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <div className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full" />
                    </motion.div>
                  ))}
                </div>

                {/* 3D Image Container */}
                <motion.div
                  style={{
                    x,
                    y,
                    rotateX: mousePosition.y * 0.5,
                    rotateY: mousePosition.x * 0.5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-gray-700/30 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-red-500/15 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 filter blur-xl" />
                    
                    <Image
                      src="/profile.jpg"
                      alt="Narender Singh"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      priority
                    />
                    
                    {/* Overlay with hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Orbiting Tech Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20 + idx * 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="absolute w-16 h-16 flex items-center justify-center">
                        <div
                          className="flex items-center justify-center w-16 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl hover:scale-125 transition-all duration-300 text-2xl"
                          style={{
                            transform: `translateX(${150 + idx * 10}px) translateY(-32px) rotate(-${360}deg)`,
                            color: ['#61dafb', '#339933', '#000000', '#4ea94b', '#3178c6', '#06b6d4'][idx],
                          }}
                        >
                          {skill.icon}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="space-y-8 relative z-30">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
                <h3 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                  Hi, I&apos;m Narender Singh
                </h3>
                
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    A passionate <span className="font-bold text-orange-500">Full Stack Developer</span> with over 3 years of experience 
                    in creating exceptional web applications. I specialize in the <span className="font-bold text-blue-500">MERN stack</span> and 
                    have a deep love for clean, efficient code.
                  </p>
                  <p>
                    My journey began with curiosity about how websites work, and it has evolved into a 
                    career dedicated to <span className="font-bold text-purple-500">crafting digital experiences</span> that make a difference. 
                    I believe in the power of technology to solve real-world problems.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                    or enjoying a good cup of coffee while planning my next innovative project.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-4 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 dark:hover:bg-gray-800/90">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl" style={{ color: ['#61dafb', '#339933', '#000000', '#4ea94b', '#3178c6', '#06b6d4'][index] }}>
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        </motion.div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-3xl text-orange-500 mb-3 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Personality Traits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
              What Makes Me Unique
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalityTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center">
                    <div className="text-4xl text-orange-500 mb-4 flex justify-center">
                      {trait.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                      {trait.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

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