"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes progressBar {
          from {
            width: 0%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 165, 0, 0.8);
          }
        }
        
        .animate-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-left {
          animation: fadeInLeft 1s ease-out forwards;
        }
        
        .animate-fade-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        
        .animate-progress {
          animation: progressBar 2s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1.0s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1300 { animation-delay: 1.3s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1500 { animation-delay: 1.5s; }
        
        .opacity-0 { opacity: 0; }
        
        .text-gradient {
          background: linear-gradient(135deg, #ff6b35, #f7931e, #4dabf7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="container mx-auto px-6">
        
        {/* About Section Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-up">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A passionate and dedicated software developer ready to bring fresh perspectives and innovative solutions to your team
          </p>
        </div>

        {/* Main About Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start opacity-0 animate-fade-left delay-300">
            <div className="relative group">
              {/* Main Image Container - Larger Vertical Size */}
              <div className="w-80 h-[500px] relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-orange-500/20">
                <Image
                  src="/profile.png"
                  alt="Narender Singh"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                  priority
                />
                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
              </div>
              
              {/* 3D Floating Elements with Enhanced Animations */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl opacity-0 animate-scale-in delay-600 animate-float hover:scale-125 hover:rotate-12 transition-all duration-500 transform-gpu hover:shadow-orange-500/50">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-8 -left-8 w-18 h-18 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl opacity-0 animate-scale-in delay-800 animate-float hover:scale-125 hover:rotate-12 transition-all duration-500 transform-gpu hover:shadow-blue-500/50" style={{ animationDelay: '1.5s' }}>
                <span className="text-white text-xl">�</span>
              </div>
              <div className="absolute top-1/3 -left-6 w-16 h-16 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl opacity-0 animate-scale-in delay-1000 animate-float hover:scale-125 hover:rotate-12 transition-all duration-500 transform-gpu hover:shadow-green-500/50" style={{ animationDelay: '3s' }}>
                <span className="text-white text-lg">🎯</span>
              </div>
              <div className="absolute top-1/4 -right-4 w-14 h-14 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-xl flex items-center justify-center shadow-lg opacity-0 animate-scale-in delay-1200 animate-float hover:scale-125 hover:rotate-12 transition-all duration-500 transform-gpu hover:shadow-yellow-500/50" style={{ animationDelay: '4s' }}>
                <span className="text-white text-sm">�</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 opacity-0 animate-fade-right delay-500">
            
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Hello! I&apos;m <span className="text-gradient animate-pulse">Narender Singh</span>
                <span className="block text-2xl text-gray-600 dark:text-gray-400 font-normal mt-3">
                  Full Stack Developer & Creative Problem Solver
                </span>
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  A dedicated and enthusiastic <strong className="text-orange-500">Software Developer</strong> fresh out of college with a burning passion for creating 
                  innovative digital solutions that make a real difference.
                </p>
                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  I specialize in <strong className="text-blue-500">full-stack web development</strong> and am always eager 
                  to learn cutting-edge technologies, tackle complex challenges, and contribute meaningfully to dynamic teams.
                </p>
                <p className="transform hover:scale-105 transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200">
                  With a strong foundation in modern web technologies and an unwavering commitment to writing clean, 
                  efficient code, I&apos;m ready to bring fresh ideas and grow alongside your organization.
                </p>
              </div>
            </div>

            {/* Compact Key Highlights with Icons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span className="text-lg">📁</span>
                <span className="font-semibold text-sm">15+ Projects</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="font-semibold text-sm">2+ Years</span>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span className="text-lg">💯</span>
                <span className="font-semibold text-sm">100% Dedication</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <span className="font-semibold text-sm">Growth Mindset</span>
              </div>
            </div>

            {/* Action Buttons with Enhanced 3D Effects */}
            <div className="flex flex-wrap gap-6 pt-8 opacity-0 animate-fade-up delay-1100">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:shadow-orange-500/50 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 flex items-center gap-3 transform-gpu"
              >
                <span className="text-lg">Let&apos;s Connect</span>
                <span className="text-2xl animate-bounce">🤝</span>
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 px-10 py-5 rounded-full font-bold shadow-2xl border-2 border-gray-300 dark:border-gray-600 hover:shadow-gray-500/30 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transition-all duration-500 flex items-center gap-3 transform-gpu"
              >
                <span className="text-lg">View Projects</span>
                <span className="text-2xl animate-bounce">💼</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
