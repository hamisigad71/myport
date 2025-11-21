"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "./portfolio.css";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "Aura Finance Dashboard",
    desc: "Real-time financial analytics platform with advanced data visualization and predictive insights",
    tags: ["React", "D3.js", "TypeScript", "Node.js"],
    category: "dashboard",
    img: "https://i.pinimg.com/1200x/14/06/bd/1406bd2f617ebb1513d22693038a259b.jpg",
  },
  {
    title: "Quantum Analytics",
    desc: "Scientific data visualization platform for complex research datasets",
    tags: ["Vue.js", "WebGL", "Python"],
    category: "dashboard",
    img: "https://i.pinimg.com/736x/45/2a/97/452a97c2e355344757aee72d44a00166.jpg",
  },
  {
    title: "Restaurant Website",
    desc: "Modern restaurant website with 3D menu visualization and booking system",
    tags: ["Next.js", "Three.js", "Booking"],
    category: "website",
    img: "https://i.pinimg.com/736x/1c/07/ab/1c07abe2f1eac35e1d00a623e85deb28.jpg",
  },
  {
    title: "Resort Website",
    desc: "Professional resort website with smart booking and recommendation system",
    tags: ["React", "Booking", "Tourism"],
    category: "website",
    img: "https://i.pinimg.com/736x/c6/a0/c9/c6a0c91bef49798ff7d3fcc8b3797677.jpg",
  },
  {
    title: "HealthTrack Pro",
    desc: "AI-powered health monitoring and wellness tracking application",
    tags: ["React Native", "TensorFlow", "Healthcare"],
    category: "mobile",
    img: "https://i.pinimg.com/1200x/0c/03/a0/0c03a07752e799f53e96f5dcb1b03ee4.jpg",
  },
  {
    title: "Law Firm Website",
    desc: "Professional legal services website with case management portal",
    tags: ["React", "Tailwind", "CMS"],
    category: "website",
    img: "https://i.pinimg.com/736x/35/6f/ec/356fec73107c338621fccd551be9b0b9.jpg",
  },
  {
    title: "SalesFlow Pro",
    desc: "Predictive CRM dashboard with AI-powered sales forecasting",
    tags: ["React", "AI", "CRM", "Analytics"],
    category: "dashboard",
    img: "https://i.pinimg.com/1200x/95/30/ce/9530ce5a394d26c2154be5edd6b5be95.jpg",
  },
  {
    title: "Studio X",
    desc: "Creative agency portfolio with immersive animations and interactions",
    tags: ["Astro", "GSAP", "WebGL"],
    category: "website",
    img: "https://i.pinimg.com/1200x/27/30/7c/27307c0ed4cb5500cd085ea06bc16b57.jpg",
  },
  {
    title: "EcomPulse",
    desc: "High-performance e-commerce platform with real-time inventory management",
    tags: ["Vite", "Vercel", "Stripe"],
    category: "website",
    img: "https://i.pinimg.com/736x/93/a3/fc/93a3fc5f4fe87125b6579784e9496c06.jpg",
  },
  {
    title: "AI Agent for Real Estate",
    desc: "AI-powered assistant for property search, valuation, and recommendations",
    tags: ["AI", "Machine Learning", "Real Estate"],
    category: "ai",
    img: "https://i.pinimg.com/736x/24/ef/71/24ef718713e696390b3e86e410ae431e.jpg",
  },
  {
    title: "IntelliAgent",
    desc: "Autonomous customer support agent with natural language processing",
    tags: ["N8N", "LangChain", "OpenAI"],
    category: "ai",
    img: "https://i.pinimg.com/736x/eb/fb/58/ebfb58e3fcb89005828bd2b25447f332.jpg",
  },
  {
    title: "ContentEngine",
    desc: "AI-powered marketing content generator for social media and blogs",
    tags: ["Llama 3", "FastAPI", "Marketing"],
    category: "ai",
    img: "https://i.pinimg.com/736x/66/12/48/66124840af89551a0cf89a25b9a9684b.jpg",
  },
];

const PortfolioPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loadingCard, setLoadingCard] = useState<string | null>(null);

  const filters = [
    {
      label: "All Projects",
      value: "all",
      icon: "apps",
      count: projects.length,
    },
    {
      label: "Dashboards",
      value: "dashboard",
      icon: "dashboard",
      count: projects.filter((p) => p.category === "dashboard").length,
    },
    {
      label: "Mobile Apps",
      value: "mobile",
      icon: "phone_android",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      label: "Websites",
      value: "website",
      icon: "web",
      count: projects.filter((p) => p.category === "website").length,
    },
    {
      label: "AI Agents",
      value: "ai",
      icon: "psychology",
      count: projects.filter((p) => p.category === "ai").length,
    },
  ];

  useEffect(() => {
    // Suppress NextAuth client errors during development
    const originalError = console.error;
    console.error = (...args) => {
      if (
        args[0]?.includes?.("CLIENT_FETCH_ERROR") ||
        args[0]?.includes?.("next-auth")
      ) {
        return; // Suppress NextAuth errors
      }
      originalError.apply(console, args);
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }

    return () => {
      console.error = originalError; // Restore original console.error
    };
  }, []);

  const filterProjects = useCallback((filter: string) => {
    const filtered =
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter);
    return filtered;
  }, []);

  useEffect(() => {
    setFilteredProjects(filterProjects(activeFilter));
  }, [activeFilter, filterProjects]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      dashboard: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      mobile: "bg-green-500/10 text-green-600 dark:text-green-400",
      website: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      ai: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-gray-500/10 text-gray-600 dark:text-gray-400"
    );
  };

  const handleImageError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement;
      target.src = "/images/projects/placeholder.svg";
    },
    [],
  );

  const handleCardClick = useCallback((projectTitle: string) => {
    setLoadingCard(projectTitle);

    // Simulate navigation delay
    setTimeout(() => {
      setLoadingCard(null);
      // Here you would typically navigate to the project detail page
      console.log(`Navigating to project: ${projectTitle}`);
    }, 2000);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-darkmode transition-colors duration-500 font-sans">
        {/* Floating Particles */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute w-2 h-2 bg-primary/20 rounded-full top-20 left-10 animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-3 h-3 bg-success/20 rounded-full top-40 right-20 animate-bounce"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-secondary/30 rounded-full bottom-32 left-1/4 animate-bounce"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-primary/15 rounded-full top-1/2 right-1/3 animate-bounce"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Professional Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary dark:bg-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl">
                    code
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-quicksand font-bold text-gray-900 dark:text-white">
                    Portfolio Showcase
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Creative Developer
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                {/* Home Button */}
                <Link
                  href="/"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl transition-all duration-300"
                  aria-label="Go to homepage"
                >
                  <span className="material-symbols-outlined">home</span>
                  <span className="hidden sm:inline">Home</span>
                </Link>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl transition-all duration-300"
                  aria-label="Toggle dark mode"
                >
                  <span
                    className={`material-symbols-outlined text-gray-900 dark:text-white ${isDark ? "block" : "hidden"}`}
                  >
                    light_mode
                  </span>
                  <span
                    className={`material-symbols-outlined text-gray-900 dark:text-white ${isDark ? "hidden" : "block"}`}
                  >
                    dark_mode
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-gray-50 dark:bg-gray-800 px-6 py-20 text-center">
            <div className="container mx-auto max-w-4xl">
              <div className="animate-fade-in">
                <h2 className="text-5xl md:text-6xl font-quicksand font-bold mb-6 leading-tight text-gray-900 dark:text-white">
                  My Creative
                  <span className="text-primary ml-4">Portfolio</span>
                </h2>
                <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Explore my latest projects spanning AI development, modern web
                  applications, and innovative digital solutions.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                  <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {projects.length}+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-primary mb-2">
                      4
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Categories
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700">
                    <div className="text-3xl font-bold text-primary mb-2">
                      2024
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Latest
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Filter Section */}
        <section className="px-6 py-8 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            {/* Last Updated */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 dark:bg-success/20 rounded-full">
                <span className="material-symbols-outlined text-success text-sm">
                  schedule
                </span>
                <span className="text-sm font-medium text-success">
                  Last updated:{" "}
                  <strong>November 18, 2024 • 12:15 AM EAT</strong>
                </span>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm sm:text-base ${
                    activeFilter === filter.value
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md border border-gray-200 dark:border-gray-700"
                  }`}
                  aria-pressed={activeFilter === filter.value}
                >
                  <span className="flex items-center space-x-1 sm:space-x-2">
                    <span className="material-symbols-outlined text-sm sm:text-base">
                      {filter.icon}
                    </span>
                    <span className="hidden sm:inline">{filter.label}</span>
                    <span className="sm:hidden font-semibold">
                      {filter.label.split(" ")[0]}
                    </span>
                    <span
                      className={`ml-1 sm:ml-2 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-xs ${
                        activeFilter === filter.value
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {filter.count}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <main className="flex-1 px-6 pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`group flex flex-col h-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:scale-105 opacity-0 translate-y-10 animate-fade-in ${
                    loadingCard === project.title ? "pointer-events-none" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 120}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {loadingCard === project.title && (
                    <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm z-10 flex items-center justify-center rounded-3xl">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                        <p className="text-primary font-semibold">
                          Loading project...
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 dark:bg-gray-900">
                    <Image
                      src={project.img}
                      alt={`Screenshot of ${project.title} project`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={handleImageError}
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium ${getCategoryColor(project.category)} backdrop-blur-sm bg-white/80 dark:bg-gray-900/80`}
                    >
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </div>

                    {/* View Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <span className="material-symbols-outlined text-white text-2xl">
                          visibility
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-quicksand font-bold text-gray-800 dark:text-white line-clamp-2 leading-tight group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleCardClick(project.title)}
                      disabled={loadingCard === project.title}
                      className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-quicksand font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group/button focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:scale-100"
                      aria-label={`View case study for ${project.title}`}
                    >
                      {loadingCard === project.title ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>View Case Study</span>
                          <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/button:translate-x-1">
                            arrow_forward
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-400 text-3xl">
                    search_off
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Try selecting a different filter to see more projects.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-800 dark:bg-darklight border-t border-gray-200 dark:border-dark_border">
          <div className="container mx-auto max-w-6xl px-6 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">
                  code
                </span>
                <span className="text-xl font-quicksand font-bold text-white">
                  Portfolio Showcase
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Crafted with passion and modern technology
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Portfolio link"
                >
                  <span className="material-symbols-outlined text-white">
                    link
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Email contact"
                >
                  <span className="material-symbols-outlined text-white">
                    mail
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Share portfolio"
                >
                  <span className="material-symbols-outlined text-white">
                    share
                  </span>
                </a>
              </div>

              <p className="text-sm text-gray-500">
                © 2024 All rights reserved • Made with Figtree & Quicksand
                fonts
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PortfolioPage;
