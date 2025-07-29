"use client";
import React from "react";
import Image from "next/image";

const profiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/narendersingh1",
    img: "/Linkedin.png",
    color: "bg-blue-600",
  },
  {
    name: "GitHub",
    url: "https://github.com/NarenderSD",
    img: "/githubimg.png",
    color: "bg-gray-800",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Narender1",
    img: "/leetcode.png",
    color: "bg-yellow-400",
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/narender22",
    img: "/gfg.png",
    color: "bg-green-500",
  },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 dark:text-blue-200 text-center relative z-10">
        <h2 className="drop-shadow-lg">My Coding & Professional Profiles</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl justify-items-center relative z-10">
        {profiles.map((profile, idx) => (
          <div
            key={profile.name}
            className="group relative w-[320px] md:w-[380px] h-[220px] md:h-[250px] flex flex-col items-center justify-center cursor-pointer opacity-0 animate-fadeInUp transform-gpu hover:scale-[1.08] hover:-translate-y-4 transition-all duration-500 hover:drop-shadow-2xl"
            style={{ 
              animationDelay: `${idx * 0.2}s`,
              transformStyle: 'preserve-3d'
            }}
          >
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full relative block group-hover:transform group-hover:rotateY-2 group-hover:rotateX-1 transition-all duration-700"
            >
              {/* Enhanced 3D Shadow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent rounded-2xl transform translate-x-3 translate-y-3 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              {/* Laptop Frame with better 3D effect */}
              <div className="relative w-full h-full transform-gpu">
                <Image
                  src="/Laptop.png"
                  alt="Laptop Mockup Frame"
                  width={380}
                  height={250}
                  className="absolute inset-0 w-full h-full z-20 pointer-events-none select-none drop-shadow-2xl group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:brightness-110 transition-all duration-700"
                  draggable={false}
                  priority={idx === 0}
                />
                
                {/* Profile Screenshot with enhanced visibility and better hover effects */}
                <div className="absolute top-[30px] left-[25px] right-[25px] bottom-[30px] rounded-lg overflow-hidden z-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/40 dark:group-hover:to-purple-900/40 transition-all duration-700 group-hover:shadow-inner">
                  <Image
                    src={profile.img}
                    alt={profile.name + " Profile"}
                    width={330}
                    height={190}
                    className="object-contain w-full h-full group-hover:scale-110 group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-110 transition-all duration-700"
                    draggable={false}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/default_image.png') {
                        target.src = '/default_image.png';
                      }
                    }}
                  />
                </div>
                
                {/* Enhanced Glowing Profile Name Badge with better visibility */}
                <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-white font-bold shadow-2xl text-sm z-30 ${profile.color} group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-500 border-2 border-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]`}>
                  {profile.name}
                </div>
                
                {/* Enhanced floating particles effect with better visibility */}
                <div className="absolute inset-0 pointer-events-none z-25 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute bottom-12 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-400/50"></div>
                  <div className="absolute top-16 left-16 w-2.5 h-2.5 bg-green-400 rounded-full animate-bounce delay-500 shadow-lg shadow-green-400/50"></div>
                  <div className="absolute bottom-6 right-12 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-700 shadow-lg shadow-yellow-400/50"></div>
                  
                  {/* Additional 3D light effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-orange-500/20 transition-all duration-700"></div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(45deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
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
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards, float 3s ease-in-out infinite;
        }
        
        .group:hover {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProfilesSection; 