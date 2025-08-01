'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaChevronDown } from "react-icons/fa";
import ResumeDownloadButton from "./ResumeDownloadButton";

// Simple visitor counter hook
const useVisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const isNewSession = !sessionStorage.getItem('portfolioVisited');
        sessionStorage.setItem('portfolioVisited', 'true');
        
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: Date.now().toString(),
            isNewSession
          }),
        });
        
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setCount(result.data.totalVisits);
          }
        } else {
          // Fallback count if API fails
          setCount(1250);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        setCount(1250); // Fallback count
      } finally {
        setLoading(false);
      }
    };

    trackVisitor();

    // Update count every 30 seconds
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/visitors');
        if (response.ok) {
          const result = await response.json();
          if (result.success) {
            setCount(result.data.totalVisits);
          }
        }
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { count, loading };
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  {
    label: "Live Hub",
    href: "#live-hub",
    children: [
      { label: "Web Playground", href: "#live-web-playground" },
      { label: "Code Review", href: "#live-code-review" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { count: visitorCount, loading: countLoading } = useVisitorCounter();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-orange-500/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-orange-500 tracking-tight"
        >
          Narender Singh
        </motion.a>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <motion.div
                  key={link.label}
                  className="relative"
                  onHoverStart={() => setOpenDropdown(link.label)}
                  onHoverEnd={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 font-medium px-3 py-2 rounded-md transition-colors"
                  >
                    {link.label}
                    <FaChevronDown className="h-3 w-3" />
                  </a>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-orange-900/50"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 font-medium px-3 py-2 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
          <div className="hidden md:block ml-4">
            <ResumeDownloadButton />
          </div>
          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobile((v) => !v)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
              aria-label="Open menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
          
          {/* Simple Visitor Counter */}
          <div className="flex items-center gap-2">
            <FaEye className="text-orange-500" />
            {countLoading ? (
              <div className="w-6 h-4 bg-orange-200 rounded animate-pulse"></div>
            ) : (
              <motion.span
                key={visitorCount}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-sm font-semibold text-white"
                title="Total Portfolio Views"
              >
                {visitorCount.toLocaleString()}
              </motion.span>
            )}
          </div>
        </div>
      </div>
      {/* Mobile nav overlay */}
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/40 flex flex-col items-center justify-center md:hidden"
            onClick={() => setShowMobile(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white dark:bg-gray-950 rounded-2xl shadow-2xl p-8 flex flex-col gap-6 w-11/12"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 font-semibold px-4 py-2 rounded transition-colors text-center"
                  onClick={() => {
                    setShowMobile(false);
                    // Handle dropdown for mobile if needed, for now it just navigates
                  }}
                >
                  {link.label}
                </a>
              ))}
               <div className="mt-4 mx-auto">
                 <ResumeDownloadButton />
               </div>
              <button
                onClick={() => setShowMobile(false)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 