'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample education data (update as needed)
const education = [
  {
    degree: "Master of Computer Applications",
    institute: "Gurugram University, Gurgaon, Haryana",
    year: "2023-2025 | Pursuing",
    logo: "/default_image.png", // Replaced missing logo
  },
  {
    degree: "Bachelor Of Vocational Studies in Software Development",
    institute: "Aggarwal College Ballabgarh | MDU Rohtak, Haryana",
    year: "2020-2023 | Completed",
    logo: "/default_image.png", // Replaced missing logo
  },
  {
    degree: "Bachelor Of Commerce (Honours)",
    institute: "Delhi University",
    year: "2020-2023 | Completed",
    logo: "/default_image.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const EducationSection = () => {
  return (
    <section id="education" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-blue-950">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">My Education</h2>
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7, type: "spring" }}
              className="flex items-center gap-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-lg p-6 border-l-8 border-orange-400 group relative overflow-hidden"
              style={{ perspective: 800 }}
              onMouseMove={e => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rotateY = ((x / rect.width) - 0.5) * 18;
                const rotateX = ((y / rect.height) - 0.5) * -18;
                card.style.transform = `scale(1.03) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
              }}
              onMouseLeave={e => {
                const card = e.currentTarget;
                card.style.transform = '';
              }}
            >
              {/* Light/shine effect */}
              <div className="shine absolute inset-0 rounded-xl pointer-events-none z-10 transition-all duration-300" style={{mixBlendMode:'lighten', left:0, top:0}} />
              <Image
                src={edu.logo}
                alt={edu.degree}
                width={80}
                height={80}
                className="w-20 h-20 object-contain rounded-md border-2 border-orange-200 bg-white shadow"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">{edu.institute}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{edu.year}</p>
              </div>
              <style jsx global>{`
                .shine {
                  background: linear-gradient(120deg, rgba(255,255,255,0.0) 60%, rgba(255,255,255,0.18) 100%);
                }
              `}</style>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 