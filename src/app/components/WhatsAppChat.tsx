"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatsAppChat = () => {
  return (
    <motion.div
      initial={{ scale: 0, x: -20 }}
      animate={{ scale: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 999
      }}
    >
      <a
        href="https://wa.me/919999999999" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl p-4 flex items-center justify-center text-2xl focus:outline-none transition-all duration-300 relative group"
        style={{ boxShadow: '0 8px 32px 0 rgba(34, 197, 94, 0.4)' }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          className="animate-pulse group-hover:animate-bounce"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.029-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.974C0 5.364 5.373 0 12 0c3.181 0 6.167 1.24 8.413 3.488A11.8 11.8 0 0 1 24 11.807c0 6.627-5.373 12.192-12.029 12.192m10.17-17.408A11.815 11.815 0 0 0 12 2.003C6.065 2.003 1.003 7.066 1.003 12.998c0 2.21.577 4.362 1.671 6.237l-1.108 4.049 4.158-1.093a11.89 11.89 0 0 0 5.276 1.271h.005c5.934 0 10.996-5.063 10.996-11.002 0-2.363-.693-4.66-2.03-6.68"/>
        </svg>
        
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-75 animate-ping pointer-events-none" />
      </a>
    </motion.div>
  );
};

export default WhatsAppChat;
