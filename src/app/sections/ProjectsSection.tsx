'use client';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import Image from "next/image";
import { 
  MobileIcon, 
  DatabaseIcon, 
  ReactIcon, 
  NextIcon, 
  DjangoIcon, 
  HtmlIcon, 
  AllProjectsIcon,
  StarIcon,
  RocketIcon
} from "../components/AnimatedIcons";

const categories = [
  { label: "All", value: "all", icon: <AllProjectsIcon className="w-5 h-5 text-purple-500" /> },
  { label: "MERN", value: "mern", icon: <DatabaseIcon className="w-5 h-5 text-green-500" /> },
  { label: "React", value: "react", icon: <ReactIcon className="w-5 h-5 text-cyan-400" /> },
  { label: "Next.js", value: "nextjs", icon: <NextIcon className="w-5 h-5 text-black dark:text-white" /> },
  { label: "Django", value: "django", icon: <DjangoIcon className="w-5 h-5 text-green-600" /> },
  { label: "Mobile", value: "mobile", icon: <MobileIcon className="w-5 h-5 text-blue-500" /> },
  { label: "Basic Web", value: "basic", icon: <HtmlIcon className="w-5 h-5 text-orange-500" /> },
];

// Fallback projects for when database is not available
const fallbackProjects = [
  {
    _id: "1",
    id: "apna-blog",
    title: "Apna Blog",
    image: "/project-blog.png",
    description: "Production-ready blogging platform featuring rich text editor, user authentication, and SEO optimization. Includes admin dashboard, comment system, and responsive design for optimal user experience across all devices.",
    live: "https://apnablog.vercel.app/",
    github: "https://github.com/NarenderSD/ApnaBlog",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS", "JWT"],
    featured: true,
  },
  {
    _id: "2",
    id: "yaar-vichar",
    title: "Yaar Vichar Social",
    image: "/project-yaarvichar.png",
    description: "Comprehensive social media platform with real-time messaging, post management, user profiles, and notification system. Features include live chat, image sharing, user authentication, and responsive design for seamless social interactions.",
    live: "https://yaarvichar.vercel.app/",
    github: "https://github.com/NarenderSD/YaarVichar",
    categories: ["mern", "react"],
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io", "Redux"],
    featured: true,
  },
  {
    _id: "3",
    id: "dental-care",
    title: "Dental Care Website",
    image: "/project-dental.png",
    description: "Modern dental clinic website with online appointment booking system, service portfolio, and patient testimonials. Features responsive design, contact forms, and optimized performance for healthcare professionals.",
    live: "https://dentalcare.vercel.app/",
    github: "https://github.com/NarenderSD/DentalCare",
    categories: ["react", "nextjs"],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    featured: false,
  },
];

interface Project {
  _id: string;
  id: string;
  title: string;
  image: string;
  description: string;
  live: string;
  github: string;
  categories: string[];
  stack: string[];
  featured: boolean;
}

// Function to get initial view count from database
const getViewCount = async (id: string): Promise<number> => {
  try {
    const response = await fetch('/api/views');
    const data = await response.json();
    
    if (data.success) {
      const projectView = data.views.find((view: { projectId: string; count: number }) => view.projectId === id);
      return projectView?.count || 0;
    }
  } catch (error) {
    console.error('Error fetching view count:', error);
  }
  
  // Fallback to localStorage
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`project_view_${id}`);
    return stored ? parseInt(stored, 10) : 0;
  }
  
  return 0;
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
  
  return <span ref={ref}>0</span>;
};

const ProjectCard = ({ project, viewCount, onLiveClick }: { 
  project: Project, 
  viewCount: number, 
  onLiveClick: (id: string, url: string) => void 
}) => {
  return (
    <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 shadow-xl group transition-all duration-500 cursor-pointer transform-gpu perspective-1000 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 hover:-rotate-2 hover:translate-y-2">
      {/* 3D Card Inner Container */}
      <div className="relative transition-transform duration-500 transform-style-preserve-3d group-hover:rotateX-5">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              Featured
            </div>
          </div>
        )}
      
        {/* Project Image */}
        <div className="relative h-52 overflow-hidden">
          <Image 
            src={project.image || '/default_image.png'} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              console.error(`Image failed to load for project ${project.title}:`, project.image);
              // Fallback to default image if the project image fails to load
              const target = e.target as HTMLImageElement;
              if (target.src !== '/default_image.png') {
                target.src = '/default_image.png';
              }
            }}
            onLoad={() => {
              console.log(`Image loaded successfully for project ${project.title}:`, project.image);
            }}
            priority={project.featured}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* View count overlay */}
          <div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/10">
            <FaEye className="text-orange-400" />
            <AnimatedCounter count={viewCount} />
            <span className="text-gray-200">{viewCount === 1 ? 'view' : 'views'}</span>
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
      </div> {/* Close 3D Card Inner Container */}
    </div>
  );
};

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [viewCounts, setViewCounts] = useState<{ [key: string]: number }>({});
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  
  // Show 3 projects per row, 1 row = 3 projects initially (focusing on main projects)
  const maxToShow = 3;

  useEffect(() => {
    loadProjects();
    
    // Set up automatic refresh every 30 seconds to get real-time updates
    const interval = setInterval(() => {
      loadProjects();
      setLastRefresh(new Date());
      console.log('🔄 Projects and view counts refreshed automatically');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      console.log('Loading projects from API...');
      
      // Try to fetch from database first
      const response = await fetch('/api/admin/projects');
      const data = await response.json();
      
      console.log('API Response:', data);
      
      if (data.success && data.projects && data.projects.length > 0) {
        // Process database projects to ensure images are properly handled
        const processedProjects = data.projects.map((project: Project) => {
          let imageUrl = project.image;
          
          // If the image is a Cloudinary URL or external URL, try to use it
          // Otherwise use fallback images based on project title or default
          if (!imageUrl || imageUrl === '/default_image.png') {
            if (project.title.toLowerCase().includes('blog')) {
              imageUrl = '/project-blog.png';
            } else if (project.title.toLowerCase().includes('yaar') || project.title.toLowerCase().includes('social')) {
              imageUrl = '/project-yaarvichar.png';
            } else if (project.title.toLowerCase().includes('dental')) {
              imageUrl = '/project-dental.png';
            } else {
              imageUrl = '/default_image.png';
            }
          }
          
          return {
            ...project,
            image: imageUrl
          };
        });
        
        console.log('Processed projects:', processedProjects);
        setProjects(processedProjects);
        console.log('Loaded projects from database:', processedProjects.length);
      } else {
        // Fallback to static projects
        console.log('Using fallback projects');
        setProjects(fallbackProjects);
        console.log('Fallback projects loaded:', fallbackProjects.length);
      }
    } catch (error) {
      console.error('Error loading projects:', error);
      // Use fallback projects if API fails
      console.log('Using fallback projects due to error');
      setProjects(fallbackProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadViewCounts = async () => {
      const counts: { [key: string]: number } = {};
      for (const project of projects) {
        counts[project.id] = await getViewCount(project.id);
      }
      setViewCounts(counts);
    };

    if (projects.length > 0) {
      loadViewCounts();
      
      // Set up view counts refresh every 15 seconds for real-time updates
      const viewCountInterval = setInterval(() => {
        loadViewCounts();
        console.log('📊 View counts refreshed from database');
      }, 15000);

      return () => clearInterval(viewCountInterval);
    }
  }, [projects]);

  const handleLiveClick = async (id: string, url: string) => {
    try {
      // Update view count in database
      const response = await fetch('/api/views', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: id })
      });

      const data = await response.json();
      
      if (data.success) {
        // Update local state with database count
        setViewCounts((prev) => ({ ...prev, [id]: data.count }));
        
        // Also update localStorage as backup
        localStorage.setItem(`project_view_${id}`, String(data.count));
        
        console.log(`✅ Project "${id}" view count updated: ${data.count} (Database + Local)`);
      } else {
        // Fallback to local increment if database fails
        const currentCount = viewCounts[id] || 0;
        const newCount = currentCount + 1;
        setViewCounts((prev) => ({ ...prev, [id]: newCount }));
        localStorage.setItem(`project_view_${id}`, String(newCount));
        
        console.log(`⚠️ Project "${id}" view count updated locally: ${newCount} (Database failed)`);
      }
    } catch (error) {
      console.error('Error updating view count:', error);
      
      // Fallback to local increment
      const currentCount = viewCounts[id] || 0;
      const newCount = currentCount + 1;
      setViewCounts((prev) => ({ ...prev, [id]: newCount }));
      localStorage.setItem(`project_view_${id}`, String(newCount));
    }
    
    // Open project after a short delay for better UX
    setTimeout(() => {
      window.open(url, '_blank');
    }, 100);
  };

  // Debug function to reset all view counts (can be called from console)
  const resetViewCounts = useCallback(async () => {
    try {
      // Reset in database
      await fetch('/api/views', { method: 'DELETE' });
      
      // Reset in localStorage
      if (typeof window !== 'undefined') {
        projects.forEach(project => {
          localStorage.removeItem(`project_view_${project.id}`);
        });
      }
      
      // Reload view counts
      const newCounts: { [key: string]: number } = {};
      for (const project of projects) {
        newCounts[project.id] = await getViewCount(project.id);
      }
      setViewCounts(newCounts);
      console.log('All view counts reset to 0');
    } catch (error) {
      console.error('Error resetting view counts:', error);
    }
  }, [projects]);

  // Make reset function available globally for debugging
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as { resetProjectViewCounts?: () => void }).resetProjectViewCounts = resetViewCounts;
      console.log('Debug: Use resetProjectViewCounts() in console to reset all view counts');
    }
  }, [projects, resetViewCounts]);

  // Filter projects based on category and search
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.categories.includes(activeCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, maxToShow);

  if (loading) {
    return (
      <section id="projects" className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loading Projects...
            </h2>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Projects</span>
            </h2>
            <button
              onClick={() => {
                loadProjects();
                setLastRefresh(new Date());
              }}
              className="ml-4 p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              title="Refresh Projects"
            >
              <RocketIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full font-medium">
              {projects.length} Projects Available
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
              Last Updated: {lastRefresh.toLocaleTimeString()}
            </span>
          </div>
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
              key={project._id}
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
                <RocketIcon className="w-6 h-6 text-orange-500" />
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
