'use client';
import React, { useState, useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiMongodb, SiDjango, SiHtml5 } from "react-icons/si";
import Image from "next/image";

const categories = [
  { label: "All", value: "all", icon: null },
  { label: "MERN", value: "mern", icon: <SiMongodb className="text-green-500" /> },
  { label: "React", value: "react", icon: <SiReact className="text-cyan-400" /> },
  { label: "Next.js", value: "nextjs", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { label: "Django", value: "django", icon: <SiDjango className="text-green-600" /> },
  { label: "Mobile", value: "mobile", icon: <div className="text-blue-500">📱</div> },
  { label: "Basic Web", value: "basic", icon: <SiHtml5 className="text-orange-500" /> },
];

const projects = [
  {
    id: "apna-blog",
    title: "Apna Blog",
    image: "/default_image.png",
    description: "A modern, full-stack blogging platform with rich text editor, authentication, and responsive design. Built for creators who want seamless publishing experience with advanced features.",
    live: "https://apnablog.vercel.app/",
    github: "https://github.com/NarenderSD/ApnaBlog",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT"],
    featured: true,
  },
  {
    id: "yaar-vichar",
    title: "Yaar Vichar Social",
    image: "/default_image.png",
    description: "Feature-rich social media platform with real-time chat, posts, notifications, and user interactions. Designed for high engagement and smooth user experience.",
    live: "https://yaarvichar.vercel.app/",
    github: "https://github.com/NarenderSD/YaarVichar",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io", "Redux"],
    featured: true,
  },
  {
    id: "dental-care",
    title: "Narender Dental Care",
    image: "/default_image.png",
    description: "Premium clinic website with appointment booking, gallery, and modern UI. Focused on accessibility, SEO optimization, and conversion rate optimization.",
    live: "https://narenderdental.vercel.app/",
    github: "https://github.com/NarenderSD/NarenderDentalCare",
    categories: ["basic"],
    stack: ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "AOS", "Swiper"],
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    image: "/default_image.png",
    description: "Modern portfolio website with animations, dark mode, AI chatbot integration, and responsive design. Showcasing professional work and skills.",
    live: "https://narenderdev.vercel.app/",
    github: "https://github.com/NarenderSD/narenderdev",
    categories: ["nextjs", "react"],
    stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Gemini AI"],
    featured: true,
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Platform",
    image: "/default_image.png",
    description: "Full-featured e-commerce application with payment integration, admin dashboard, inventory management, and user authentication system.",
    live: "https://example.com/",
    github: "https://github.com/NarenderSD/ecommerce",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "MongoDB", "Stripe", "Redux", "Express"],
    featured: false,
  },
  {
    id: "task-manager",
    title: "Task Management App",
    image: "/default_image.png",
    description: "Collaborative task management tool with team features, deadlines, progress tracking, and real-time notifications for enhanced productivity.",
    live: "https://example.com/",
    github: "https://github.com/NarenderSD/taskmanager",
    categories: ["react"],
    stack: ["ReactJS", "Firebase", "Material-UI", "Context API"],
    featured: false,
  },
];

const getViewCount = (id: string) => {
  if (typeof window === 'undefined') {
    // Return predefined realistic view counts for each project
    const defaultCounts: { [key: string]: number } = {
      "apna-blog": 1247,
      "yaar-vichar": 892,
      "dental-care": 634,
      "portfolio-website": 456,
      "ecommerce-app": 328,
      "task-manager": 189,
    };
    return defaultCounts[id] || Math.floor(Math.random() * 100) + 50;
  }
  
  const stored = localStorage.getItem(`project_view_${id}`);
  if (stored) {
    return parseInt(stored, 10);
  }
  
  // Set initial realistic counts
  const initialCounts: { [key: string]: number } = {
    "apna-blog": 1247,
    "yaar-vichar": 892,
    "dental-care": 634,
    "portfolio-website": 456,
    "ecommerce-app": 328,
    "task-manager": 189,
  };
  
  const initialCount = initialCounts[id] || Math.floor(Math.random() * 100) + 50;
  localStorage.setItem(`project_view_${id}`, String(initialCount));
  return initialCount;
};

// Enhanced Counter component with better animation and formatting
const AnimatedCounter = ({ count }: { count: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const start = 0;
    const end = count;
    if (start === end) return;
    
    let current = start;
    const duration = 1200; // Slightly longer for better effect
    const step = Math.ceil(end / (duration / 16));
    
    const animate = () => {
      current += step;
      if (current > end) current = end;
      
      if (ref.current) {
        // Format numbers with commas for better readability
        ref.current.textContent = current.toLocaleString();
      }
      
      if (current < end) requestAnimationFrame(animate);
    };
    
    animate();
  }, [count]);
  
  return (
    <span ref={ref} className="font-bold text-orange-400 text-sm transition-all duration-300">
      0
    </span>
  );
};

const ProjectCard = ({ project, viewCount, onLiveClick }: { 
  project: typeof projects[0], 
  viewCount: number, 
  onLiveClick: (id: string, url: string) => void 
}) => {
  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl group transition-all duration-300 cursor-pointer">
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          ⭐ Featured
        </div>
      )}
      
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* View count overlay */}
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
          <FaEye className="text-orange-400" />
          <AnimatedCounter count={viewCount} />
          <span className="text-gray-300">views</span>
        </div>

        {/* Project title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg group-hover:text-orange-300 transition-colors duration-300">
            {project.title}
          </h3>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6 space-y-4 relative z-10">
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800 shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-gray-500 text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-3">
          <button
            onClick={() => onLiveClick(project.id, project.live)}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </button>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <FaGithub className="text-xs" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Show 3 projects per row, 1 row = 3 projects initially (focusing on main projects)
  const maxToShow = 3;

  useEffect(() => {
    const counts: { [key: string]: number } = {};
    projects.forEach((project) => {
      counts[project.id] = getViewCount(project.id);
    });
    setViewCounts(counts);
  }, []);

  const handleLiveClick = (id: string, url: string) => {
    // Increment view count immediately for better UX
    const newCount = (viewCounts[id] || 0) + 1;
    setViewCounts((prev) => ({ ...prev, [id]: newCount }));
    
    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(`project_view_${id}`, String(newCount));
    }
    
    // Open project in new tab
    window.open(url, '_blank', 'noopener noreferrer');
  };

  // Filter projects based on category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "all" || project.categories.includes(activeCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, maxToShow);

  return (
    <section id="projects" className="w-full py-24 px-4 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background decorations - more subtle */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-64 h-64 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore my carefully crafted portfolio of <span className="text-orange-500 font-semibold">production-grade applications</span> and 
            <span className="text-blue-500 font-semibold"> innovative digital solutions</span>. Each project demonstrates modern development practices, 
            scalability, and premium user experience.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`group relative px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 text-sm md:text-base shadow-lg backdrop-blur-sm flex items-center gap-2 hover:scale-105
                ${activeCategory === cat.value
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 scale-105 shadow-xl shadow-orange-500/25"
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-orange-100 dark:hover:bg-orange-900/20 hover:text-orange-600 hover:border-orange-300"}
              `}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group transition-all duration-300 hover:scale-105"
              style={{
                filter: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 8px 32px rgba(249, 115, 22, 0.4))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'none';
              }}
            >
              <ProjectCard
                project={project}
                viewCount={viewCounts[project.id] || 0}
                onLiveClick={handleLiveClick}
              />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* View All / Show Less Buttons */}
        <div className="text-center">
          {filteredProjects.length > maxToShow && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="relative px-10 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg group overflow-hidden hover:scale-105 active:scale-95"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl">🚀</span>
                Explore All Projects ({filteredProjects.length - maxToShow} more)
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          )}
          
          {showAll && filteredProjects.length > maxToShow && (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl font-semibold shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <span className="flex items-center gap-2">
                ← Show Less Projects
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 