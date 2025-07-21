"use client";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa";

const themes = [
  { value: "light", icon: <FaSun className="text-yellow-400" />, label: "Light" },
  { value: "dark", icon: <FaMoon className="text-blue-500" />, label: "Dark" },
  { value: "system", icon: <FaDesktop className="text-gray-500" />, label: "System" },
];

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    // On mount, set theme from localStorage or system
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
    else setTheme("system");
  }, []);

  useEffect(() => {
    let applied = theme;
    if (theme === "system") applied = getSystemTheme();
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(applied);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2 bg-white/60 dark:bg-blue-900/60 rounded-xl px-3 py-2 shadow-lg border border-blue-200 dark:border-blue-800 backdrop-blur-lg">
      {themes.map((t) => (
        <button
          key={t.value}
          className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-700 transition-all duration-200 ${theme === t.value ? "bg-blue-100 dark:bg-blue-800 scale-110" : "hover:bg-blue-50 dark:hover:bg-blue-800"}`}
          aria-label={`Switch to ${t.label} mode`}
          onClick={() => setTheme(t.value)}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher; 