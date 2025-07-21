"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/your-username",
    img: "/default_image.png", // Replaced missing image
    color: "bg-yellow-400",
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/your-username/profile",
    img: "/default_image.png", // Replaced missing image
    color: "bg-green-500",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/narendersinghdev",
    img: "/default_image.png", // Replaced missing image
    color: "bg-blue-600",
  },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, type: "spring" }}
        className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 dark:text-blue-200 text-center"
      >
        My Coding & Professional Profiles
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {profiles.map((profile, idx) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.7, type: "spring" }}
            className="group relative w-[320px] md:w-[400px] h-[220px] md:h-[260px] flex flex-col items-center justify-end cursor-pointer"
          >
            {/* Laptop Frame */}
            <Image
              src="/Laptop.png"
              alt="Laptop Mockup Frame"
              width={400}
              height={260}
              className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none select-none drop-shadow-2xl"
              draggable={false}
              priority={idx === 0}
            />
            {/* Profile Screenshot or Logo */}
            <div className="absolute top-8 left-6 right-6 bottom-8 rounded-xl overflow-hidden z-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Image
                src={profile.img}
                alt={profile.name + " Profile"}
                width={360}
                height={180}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                draggable={false}
              />
            </div>
            {/* Profile Name Badge */}
            <span className={`absolute top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white font-bold shadow-lg text-sm z-20 ${profile.color}`}
            >
              {profile.name}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection; 