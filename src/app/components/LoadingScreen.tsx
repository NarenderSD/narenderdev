"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaCode, FaLightbulb, FaStar } from "react-icons/fa";

const NUM_PARTICLES = 20;

const LoadingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [particlePositions, setParticlePositions] = useState<{x: number, y: number}[]>([]);
  const [show, setShow] = useState(true);

  const steps = [
    { icon: FaRocket, text: "Launching Portfolio", color: "from-orange-500 to-red-500" },
    { icon: FaCode, text: "Loading Components", color: "from-blue-500 to-purple-500" },
    { icon: FaLightbulb, text: "Initializing AI", color: "from-green-500 to-blue-500" },
    { icon: FaStar, text: "Ready to Inspire", color: "from-purple-500 to-pink-500" },
  ];

  useEffect(() => {
    // Only runs in the browser
    if (typeof window !== "undefined") {
      const positions = Array.from({ length: NUM_PARTICLES }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticlePositions(positions);
    }
    // Hide loading after 1.5 seconds
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [show, steps.length]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.length > 0 && particlePositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              initial={{
                x: pos.x,
                y: pos.y,
                opacity: 0,
              }}
              animate={{
                x: pos.x,
                y: pos.y,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center">
          {/* Main Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-12"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 mx-auto border-4 border-orange-500 border-t-transparent rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {React.createElement(steps[currentStep].icon, { className: "text-4xl text-orange-400" })}
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Narender Singh
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl text-blue-200 mb-12"
          >
            Full Stack Developer & DSA Enthusiast
          </motion.p>
          <motion.div
            key={currentStep}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            className="mb-8"
          >
            <div className={`inline-flex items-center gap-4 bg-gradient-to-r ${steps[currentStep].color} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl`}>
              {React.createElement(steps[currentStep].icon, { className: "text-2xl" })}
              {steps[currentStep].text}
            </div>
          </motion.div>
          <div className="w-96 mx-auto mb-8">
            <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg text-gray-300 mt-4"
            >
              {progress}% Complete
            </motion.p>
          </div>
          <motion.div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 bg-orange-500 rounded-full"
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-20 text-orange-400 text-4xl opacity-30"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-20 right-20 text-blue-400 text-4xl opacity-30"
        >
          <FaLightbulb />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
          className="absolute top-1/2 right-20 text-purple-400 text-4xl opacity-30"
        >
          <FaStar />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen; 