"use client";
import React from "react";
import Image from "next/image";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/narendersingh",
    img: "/leetcode.png",
    color: "bg-yellow-400",
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/narendersingh",
    img: "/gfg.png",
    color: "bg-green-500",
  },
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
    name: "Portfolio",
    url: "https://narender-portfolio.vercel.app",
    img: "/12.jpg",
    color: "bg-purple-600",
  },
  {
    name: "Resume",
    url: "/Narender Singh Resume.pdf",
    img: "/13.jpg",
    color: "bg-red-500",
  },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <div className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 dark:text-blue-200 text-center">
        <h2>My Coding & Professional Profiles</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
        {profiles.map((profile, idx) => (
          <div
            key={profile.name}
            className="group relative w-[300px] md:w-[350px] h-[200px] md:h-[230px] flex flex-col items-center justify-end cursor-pointer opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full relative block"
            >
              {/* Laptop Frame */}
              <Image
                src="/Laptop.png"
                alt="Laptop Mockup Frame"
                width={350}
                height={230}
                className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none select-none drop-shadow-2xl"
                draggable={false}
                priority={idx === 0}
              />
              {/* Profile Screenshot or Logo */}
              <div className="absolute top-7 left-6 right-6 bottom-7 rounded-lg overflow-hidden z-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <Image
                  src={profile.img}
                  alt={profile.name + " Profile"}
                  width={320}
                  height={160}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  draggable={false}
                />
              </div>
              {/* Profile Name Badge */}
              <span className={`absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white font-bold shadow-lg text-sm z-20 ${profile.color}`}>
                {profile.name}
              </span>
            </a>
          </div>
        ))}
      </div>
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
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProfilesSection;
