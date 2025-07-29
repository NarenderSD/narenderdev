'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaGitlab, FaDocker, FaPython, FaReact, FaNodeJs, FaFigma, FaGoogle, FaCloud, FaRobot } from "react-icons/fa";
import { SiOpenai, SiVsco, SiTypescript, SiNextdotjs, SiMongodb, SiFirebase, SiDjango, SiAmazon, SiNotion, SiSlack, SiJupyter, SiKaggle, SiCodesandbox, SiGithubcopilot } from "react-icons/si";

// Sample experience data (update as needed)
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Contract Work",
    duration: "Nov 2023 - Present",
    description: "Building scalable web applications using MERN stack, Next.js, and modern development practices. Delivering end-to-end solutions for clients across various industries.",
    logo: "/profile.png", // Updated to profile image for self-employed
  },
  {
    role: "App Developer",
    company: "Brand Daddy | Internship",
    duration: "Sep 2023 - Oct 2023",
    description: "Developed mobile applications and enhanced user interface design. Collaborated with design team to implement responsive and user-friendly mobile solutions.",
    logo: "/branddaddy logo.jpg", // Updated to real BrandDaddy logo
  },
  {
    role: "Web Developer",
    company: "IPCA GROUP | Internship",
    duration: "July 2022 - April 2023",
    description: "Contributed to web development projects focusing on frontend and backend integration. Gained hands-on experience with modern web technologies and development workflows.",
    logo: "/IPCA logo.png", // Updated to real IPCA logo
  },
];

const aiTools = [
  { name: "Cursor IDE", icon: <img src="/cursor-logo.svg" alt="Cursor IDE" className="w-10 h-10" /> },
  { name: "V0.dev", icon: <img src="/v0-logo.svg" alt="V0.dev" className="w-10 h-10" /> },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-600 w-10 h-10" /> },
  { name: "Gemini", icon: <FaGoogle className="text-blue-500 w-10 h-10" /> },
  { name: "Copilot", icon: <SiGithubcopilot className="text-green-500 w-10 h-10" /> },
  { name: "Codesandbox", icon: <SiCodesandbox className="text-black w-10 h-10" /> },
  { name: "VS Code", icon: <SiVsco className="text-blue-600 w-10 h-10" /> },
  { name: "Notion AI", icon: <SiNotion className="text-black w-10 h-10" /> },
  { name: "Slack AI", icon: <SiSlack className="text-pink-500 w-10 h-10" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-orange-500 w-10 h-10" /> },
  { name: "Kaggle", icon: <SiKaggle className="text-blue-400 w-10 h-10" /> },
  { name: "Figma AI", icon: <FaFigma className="text-pink-400 w-10 h-10" /> },
  { name: "AWS Bedrock", icon: <SiAmazon className="text-yellow-500 w-10 h-10" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 w-10 h-10" /> },
  { name: "Django", icon: <SiDjango className="text-green-700 w-10 h-10" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
  { name: "Python", icon: <FaPython className="text-blue-400 w-10 h-10" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-10 h-10" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-10 h-10" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-10 h-10" /> },
  { name: "GitHub", icon: <FaGithub className="text-black w-10 h-10" /> },
  { name: "GitLab", icon: <FaGitlab className="text-orange-600 w-10 h-10" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500 w-10 h-10" /> },
  { name: "Cloud", icon: <FaCloud className="text-blue-400 w-10 h-10" /> },
  { name: "AI", icon: <FaRobot className="text-purple-500 w-10 h-10" /> },
  // Add more as needed
];

const Marquee = () => (
  <div className="w-full overflow-x-hidden py-4 mb-6">
    <div className="flex gap-8 animate-marquee whitespace-nowrap">
      {aiTools.map((tool, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[56px]">
          {tool.icon}
          <span className="text-xs text-gray-500 mt-1 text-center">{tool.name}</span>
        </div>
      ))}
      {/* Repeat for infinite effect */}
      {aiTools.map((tool, idx) => (
        <div key={"repeat-"+idx} className="flex flex-col items-center min-w-[56px]">
          {tool.icon}
          <span className="text-xs text-gray-500 mt-1 text-center">{tool.name}</span>
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <Marquee />
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Experience</h2>
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }}
              className="flex items-center gap-8 bg-white/95 dark:bg-gray-800/95 rounded-2xl shadow-xl p-8 border-l-8 border-orange-400 group relative overflow-hidden backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform-gpu perspective-1000 hover:scale-105 hover:-rotate-1 hover:translate-y-1"
              style={{ perspective: 1000 }}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 15;
                const rotateX = ((y / rect.height) - 0.5) * -15;
                card.style.transform = `scale(1.05) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(50px)`;
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.transform = '';
              }}
            >
              {/* Enhanced Light/shine effect */}
              <div className="shine absolute inset-0 rounded-xl pointer-events-none z-10 transition-all duration-500 opacity-0 group-hover:opacity-100" style={{mixBlendMode:'overlay', background: 'linear-gradient(120deg, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.0) 70%)'}} />
              <div className="glow absolute inset-0 rounded-xl pointer-events-none z-5 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)'}} />
              <div className="w-24 h-24 rounded-xl border-2 border-orange-300 bg-gradient-to-br from-white to-gray-50 shadow-lg p-3 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-orange-400 group-hover:rotate-3"
                style={{
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <Image
                  src={exp.logo}
                  alt={exp.role}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Fallback to default image if logo fails to load
                    e.currentTarget.src = '/default_image.png';
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors duration-300">{exp.role}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg mb-2 font-semibold">{exp.company}</p>
                <p className="text-orange-600 dark:text-orange-400 text-sm mb-3 font-medium">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">{exp.description}</p>
              </div>
              <style jsx global>{`
                .shine {
                  background: linear-gradient(120deg, rgba(255,255,255,0.0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.0) 60%);
                  animation: shimmer 3s ease-in-out infinite;
                }
                @keyframes shimmer {
                  0%, 100% { transform: translateX(-100%); }
                  50% { transform: translateX(100%); }
                }
                .glow {
                  filter: blur(20px);
                }
              `}</style>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 