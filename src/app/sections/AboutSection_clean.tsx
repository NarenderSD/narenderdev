"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const personalityTraits = [
    { trait: "Problem Solver", level: 92 },
    { trait: "Creative Thinker", level: 88 },
    { trait: "Team Player", level: 95 },
    { trait: "Quick Learner", level: 90 },
    { trait: "Detail Oriented", level: 87 }
  ];

  const achievements = [
    { icon: "🎓", title: "B.Voc Software Development", desc: "Completed with honors" },
    { icon: "📊", title: "MCA Graduate", desc: "Advanced computing concepts" },
    { icon: "🚀", title: "Fresher Developer", desc: "Ready for new challenges" },
    { icon: "💼", title: "Project Portfolio", desc: "15+ completed projects" }
  ];

  const socialProofs = [
    { platform: "GitHub", value: "15+ repos", icon: "⭐" },
    { platform: "Projects", value: "100% completion", icon: "✅" },
    { platform: "Learning", value: "Always growing", icon: "📚" },
    { platform: "Collaboration", value: "Team ready", icon: "🤝" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* About Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer ready to contribute fresh ideas and dedication to your team
          </p>
        </div>

        {/* Main About Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Narender Singh - Software Developer"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Hello! I'm <span className="text-orange-500">Narender Singh</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                A dedicated and enthusiastic <strong>Software Developer</strong> fresh out of college with a passion for creating 
                innovative digital solutions. I specialize in <strong>full-stack web development</strong> and am always eager 
                to learn new technologies and take on exciting challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With a strong foundation in modern web technologies and a commitment to writing clean, 
                efficient code, I'm ready to contribute to meaningful projects and grow alongside your team.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-500">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Personality & Approach
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalityTraits.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">{skill.trait}</span>
                  <span className="text-orange-500 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Achievement Images Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            My Achievements Gallery
          </h3>
          
          {/* Scrolling Achievement Images */}
          <div className="relative overflow-hidden bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 rounded-2xl py-8">
            {/* CSS Animation for scrolling */}
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .scroll-container {
                animation: scroll 20s linear infinite;
                display: flex;
                gap: 2rem;
                width: fit-content;
              }
            `}</style>
            
            <div className="scroll-container">
              {/* First set of achievement images */}
              {[
                { src: "/achieve1.jpg", title: "Academic Excellence", desc: "B.Voc Software Development" },
                { src: "/achieve2.jpg", title: "Project Success", desc: "15+ Completed Projects" },
                { src: "/achieve3.jpg", title: "Technical Skills", desc: "Full Stack Development" },
                { src: "/achieve4.jpg", title: "Innovation", desc: "Creative Problem Solving" },
                { src: "/achieve5.jpg", title: "Learning", desc: "Continuous Growth" },
                { src: "/achieve6.jpg", title: "Collaboration", desc: "Team Player" },
                { src: "/achieve7.jpg", title: "Code Quality", desc: "Best Practices" },
                { src: "/achieve1.jpg", title: "Academic Excellence", desc: "B.Voc Software Development" },
                { src: "/achieve2.jpg", title: "Project Success", desc: "15+ Completed Projects" },
                { src: "/achieve3.jpg", title: "Technical Skills", desc: "Full Stack Development" },
                { src: "/achieve4.jpg", title: "Innovation", desc: "Creative Problem Solving" },
                { src: "/achieve5.jpg", title: "Learning", desc: "Continuous Growth" }
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:rotate-y-12"
                  style={{ 
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  <div className="w-48 h-32 relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={achievement.src}
                      alt={achievement.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* 3D Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-bold text-sm mb-1">{achievement.title}</h4>
                      <p className="text-gray-300 text-xs">{achievement.desc}</p>
                    </div>

                    {/* 3D Border Effect */}
                    <div className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for smooth edge effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-orange-100 to-transparent dark:from-orange-900/20 dark:to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-blue-100 to-transparent dark:from-blue-900/20 dark:to-transparent z-10"></div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { number: "15+", label: "Projects Completed", icon: "🏆" },
              { number: "2+", label: "Years Learning", icon: "🎓" },
              { number: "100%", label: "Dedication", icon: "❤️" },
              { number: "∞", label: "Growth Mindset", icon: "🚀" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-y-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="text-2xl mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Education & Professional Growth
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎓",
                title: "B.Voc Software Development",
                description: "Comprehensive software development program with practical skills",
                year: "2023",
                category: "Education"
              },
              {
                icon: "🎓",
                title: "MCA Graduate",
                description: "Master of Computer Applications with specialization in software engineering",
                year: "2024",
                category: "Education"
              }
            ].map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-500 font-semibold bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                    {achievement.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to discuss new opportunities and bring creative solutions to challenging projects.
          </p>
          <button
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
}

// Export the Awards & Achievements section as a separate component
export function AchievementsSection() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
        Awards & Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: "🎓", title: "B.Voc Software Development", desc: "Completed with honors" },
          { icon: "📊", title: "MCA Graduate", desc: "Advanced computing concepts" },
          { icon: "🚀", title: "Fresher Developer", desc: "Ready for new challenges" },
          { icon: "💼", title: "Project Portfolio", desc: "15+ completed projects" }
        ].map((achievement, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 text-center transform hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">{achievement.icon}</span>
            </div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{achievement.title}</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
