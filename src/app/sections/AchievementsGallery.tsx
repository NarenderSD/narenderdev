"use client";

import React from 'react';
import Image from 'next/image';

export default function AchievementsGallery() {
  const achievements = [
    { src: '/achieve.jpg', id: 'achieve' },
    { src: '/achieve1.jpg', id: 'achieve1' },
    { src: '/achieve2.jpg', id: 'achieve2' },
    { src: '/achieve3.jpg', id: 'achieve3' },
    { src: '/achieve4.jpg', id: 'achieve4' },
    { src: '/achieve5.jpeg', id: 'achieve5' },
    { src: '/achieve6.jpg', id: 'achieve6' },
    { src: '/achieve7.jpg', id: 'achieve7' },
    { src: '/achieve8.jpg', id: 'achieve8' },
    { src: '/achieve9.jpg', id: 'achieve9' },
    { src: '/achieve10.jpg', id: 'achieve10' },
    // Duplicate for seamless loop
    { src: '/achieve.jpg', id: 'achieve-2' },
    { src: '/achieve1.jpg', id: 'achieve1-2' },
    { src: '/achieve2.jpg', id: 'achieve2-2' },
    { src: '/achieve3.jpg', id: 'achieve3-2' },
    { src: '/achieve4.jpg', id: 'achieve4-2' },
    { src: '/achieve5.jpeg', id: 'achieve5-2' },
    { src: '/achieve6.jpg', id: 'achieve6-2' },
    { src: '/achieve7.jpg', id: 'achieve7-2' },
    { src: '/achieve8.jpg', id: 'achieve8-2' },
    { src: '/achieve9.jpg', id: 'achieve9-2' },
    { src: '/achieve10.jpg', id: 'achieve10-2' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 11 - 12px * 10));
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
            box-shadow: 0 10px 40px rgba(255, 165, 0, 0.3);
          }
          50% {
            box-shadow: 0 10px 60px rgba(255, 165, 0, 0.6);
          }
        }
        
        .scrolling-container {
          animation: scrollRight 18s linear infinite;
        }
        
        .scrolling-container:hover {
          animation-play-state: paused;
        }
        
        .achievement-card {
          width: 400px;
          height: 225px;
          flex-shrink: 0;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .achievement-card:hover {
          transform: scale(1.25) translateY(-15px) rotateY(8deg);
          z-index: 10;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-32 w-24 h-24 bg-gradient-to-r from-green-400/15 to-teal-400/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        
        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent z-20 pointer-events-none"></div>
          
          {/* Scrolling Gallery */}
          <div className="flex gap-12 scrolling-container">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="achievement-card relative group cursor-pointer transform-gpu"
              >
                {/* YouTube Thumbnail Size Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-glow">
                  
                  {/* Achievement Image */}
                  <Image
                    src={achievement.src}
                    alt={`Achievement ${(index % 8) + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-115 group-hover:contrast-115"
                    sizes="400px"
                  />
                  
                  {/* Premium Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* 3D Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-purple-500/20 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Floating Trophy Badge */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-140 group-hover:rotate-12 transition-all duration-600 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-2xl font-bold">🏆</span>
                  </div>
                  
                  {/* Bottom Achievement Number */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    #{(index % 8) + 1}
                  </div>
                  
                  {/* Side Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-40 transition-all duration-700 -z-10 blur-md"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float"></div>
                <div className="absolute -bottom-3 -right-3 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-5 left-5 w-12 h-12 border-2 border-orange-400 rounded-full animate-float"></div>
        <div className="absolute bottom-5 right-5 w-8 h-8 border-2 border-blue-400 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
}
