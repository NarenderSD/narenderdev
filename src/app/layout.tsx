import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
  title: "Narender Singh | Portfolio",
  description: "Narender Singh - Full Stack Developer Portfolio. Projects, skills, experience, and contact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" aria-label="Portfolio site for Narender Singh">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Narender Singh - Full Stack Developer Portfolio. Projects, skills, experience, and contact." />
        <meta name="keywords" content="Narender Singh, Portfolio, Full Stack Developer, DSA, AI, Next.js, React, Web Developer, India" />
        <meta name="author" content="Narender Singh" />
        {/* Open Graph */}
        <meta property="og:title" content="Narender Singh | Portfolio" />
        <meta property="og:description" content="Narender Singh - Full Stack Developer Portfolio. Projects, skills, experience, and contact." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="/profile.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Narender Singh | Portfolio" />
        <meta name="twitter:description" content="Narender Singh - Full Stack Developer Portfolio. Projects, skills, experience, and contact." />
        <meta name="twitter:image" content="/profile.png" />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100" aria-label="Main content">
        <LoadingScreen />
        {/* Theme Switcher fixed at top-right */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
        <Navbar />
        <div className="pt-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
