'use client';
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample education data (update as needed)
const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Gurugram University, Gurgaon, Haryana",
    year: "2023-2025 | Pursuing",
    logo: "/logo gurugram universtiy.jpg", // Updated to real logo
  },
  {
    degree: "Bachelor of Vocational Studies in Software Development",
    institute: "Aggarwal College Ballabgarh | MDU Rohtak, Haryana",
    year: "2020-2023 | Completed with Distinction",
    logo: "/MDU logo.png", // Updated to MDU logo
  },
  {
    degree: "Bachelor of Commerce (Honours)",
    institute: "Delhi University, New Delhi",
    year: "2020-2023 | Completed",
    logo: "/Du logo.png", // Updated to DU logo
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
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-900 dark:text-blue-200">Educational Background</h2>
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
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
                  src={edu.logo}
                  alt={edu.degree}
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
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors duration-300">{edu.degree}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg mb-2 font-semibold">{edu.institute}</p>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">{edu.year}</p>
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

export default EducationSection; 