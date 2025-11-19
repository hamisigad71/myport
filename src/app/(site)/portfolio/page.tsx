"use client";
import React, { useEffect, useState } from "react";

const PortfolioPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#101622";
      document.body.style.color = "#d1d5db";
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#F8F9FA";
      document.body.style.color = "#495057";
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#101622";
      document.body.style.color = "#d1d5db";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#F8F9FA";
      document.body.style.color = "#495057";
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    // Add external stylesheets
    const addStylesheet = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    };

    addStylesheet("https://cdn.tailwindcss.com");
    addStylesheet(
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    );
    addStylesheet(
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
    );

    // Configure Tailwind
    const script = document.createElement("script");
    script.innerHTML = `
      if (window.tailwind) {
        window.tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                primary: "#0D47A1",
                secondary: "#4285F4",
                "text-heading": "#212529",
                "text-body": "#495057",
                "background-light": "#F8F9FA",
                "background-dark": "#101622",
              },
              fontFamily: { display: ["Inter", "sans-serif"] },
            },
          },
        };
      }
    `;
    document.head.appendChild(script);

    // Projects data
    const projects = [
      {
        title: "Aura Finance Dashboard",
        desc: "Real-time financial analytics platform",
        tags: ["React", "D3.js"],
        category: "dashboard",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiqNRkzNxkFO0WjJJEadLZ9yCC3v6zejqskpwjvmxzt3bEgEvYHo6FSGq2tWgXh_MMA1YwwmwhqkJiaTnmK6zu6pFgTBPGOhTLpbpSAQy1BZeYpSyqbRR9sOeGuwch2yBnAHuCgz5_ndCBA0Ew85m0KmCN_v65kHAL-UedneqBIQvRTXeKYugZSzgP4PKXYWLO-kQlrhCWpytbN8eGsBfO8yJhXaCTPlqAiri-ISiWLWmPxZzW5YLZIPVre0Lu1RJ9-w43Kp4-AM",
      },
      {
        title: "Quantum Analytics",
        desc: "Scientific data visualization",
        tags: ["Vue.js", "WebGL"],
        category: "dashboard",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
      {
        title: "SalesFlow Pro",
        desc: "Predictive CRM dashboard",
        tags: ["Next.js", "Chart.js"],
        category: "dashboard",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      },
      {
        title: "ConnectSphere",
        desc: "Professional networking app",
        tags: ["SwiftUI", "Firebase"],
        category: "mobile",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4N0wASVSreca7uVqmI9Z94GQfUcQzmdZ8LEmp5Vc_a7wE1jEiaq2p1WNFtokHU1ruI1dtnZ6BJ9_9rJzOUle8F7OknEVzBD2zEthGSuW1PoX_9D2Lqzvvf2Nl_Cnk0OUqBMIS5PhA2xBuKDx0gZagZ7VhWSeeIQTV-TmDmku_xr2K5MAUN5Y9zEUMyS3gIuvqXSvBvCvZnPb-1lX3ChGigv-w7RhZ3YuaAeaUDVzb9LykFecAE_nH-NAYnuO1WM6Ol45hdeDhn8",
      },
      {
        title: "HealthTrack Pro",
        desc: "AI health monitoring",
        tags: ["React Native"],
        category: "mobile",
        img: "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
      },
      {
        title: "TaskFlow",
        desc: "Smart productivity app",
        tags: ["Flutter"],
        category: "mobile",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      },
      {
        title: "Nexus Corporate",
        desc: "Enterprise site with 3D",
        tags: ["Next.js", "Framer"],
        category: "website",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      },
      {
        title: "Studio X",
        desc: "Creative agency portfolio",
        tags: ["Astro", "GSAP"],
        category: "website",
        img: "https://images.unsplash.com/photo-1547658719-da2bb9504ded?w=800&q=80",
      },
      {
        title: "EcomPulse",
        desc: "Blazing-fast e-commerce",
        tags: ["Shopify", "Vercel"],
        category: "website",
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      },
      {
        title: "LearnFlow",
        desc: "Interactive learning platform",
        tags: ["Remix", "Stripe"],
        category: "website",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      },
      {
        title: "IntelliAgent",
        desc: "Autonomous support agent",
        tags: ["N8N", "LangChain"],
        category: "ai",
        img: "https://i.pinimg.com/736x/55/3a/8c/553a8cf3426a3414dd4447bfcaf931cd.jpg",
      },
      {
        title: "CodeBot",
        desc: "AI pair programmer",
        tags: ["Node.js", "Claude"],
        category: "ai",
        img: "https://images.unsplash.com/photo-1518432031352-d65fc8c30204?w=800&q=80",
      },
      {
        title: "ContentEngine",
        desc: "AI marketing content",
        tags: ["Llama 3", "FastAPI"],
        category: "ai",
        img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      },
    ];

    const renderProjects = (filter = "all") => {
      const container = document.getElementById("projects-container");
      if (!container) return;

      container.innerHTML = "";
      const filtered =
        filter === "all"
          ? projects
          : projects.filter((p) => p.category === filter);
      const limit = filter === "website" ? 4 : 13;
      const toShow = filtered.slice(0, limit);

      // Adjust grid for different filters
      container.className =
        filter === "website"
          ? "grid grid-cols-2 gap-7 md:gap-8 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr"
          : "grid grid-cols-2 gap-7 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr";

      toShow.forEach((proj, i) => {
        const card = document.createElement("div");
        card.className =
          "opacity-0 translate-y-10 transition-all duration-700 ease-out";
        card.style.transitionDelay = `${i * 120}ms`;

        card.innerHTML = `
          <div class="group flex flex-col h-full bg-white dark:bg-gray-800/60 rounded-3xl overflow-hidden shadow-xl border border-gray-200/70 dark:border-gray-700/70 hover:shadow-2xl hover:-translate-y-3 transition-all duration-400">
            <div class="aspect-[4/3] bg-cover bg-center" style="background-image: url('${proj.img}')"></div>
            <div class="p-5 md:p-6 flex flex-col flex-1 justify-between gap-4">
              <div>
                <h3 class="text-lg md:text-xl font-bold text-text-heading dark:text-white line-clamp-2 leading-tight">
                  ${proj.title}
                </h3>
                <p class="mt-3 text-sm md:text-base text-text-body dark:text-gray-400 line-clamp-2 leading-relaxed">
                  ${proj.desc}
                </p>
              </div>
              <div class="flex flex-wrap gap-2 mt-3">
                ${proj.tags
                  .map(
                    (t) =>
                      `<span class="px-3 py-1.5 text-xs md:text-sm font-medium rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-blue-300">
                    ${t}
                  </span>`,
                  )
                  .join("")}
              </div>
              <button class="mt-5 w-full py-3.5 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/90 transition-all shadow-md text-sm md:text-base">
                View Case Study
              </button>
            </div>
          </div>
        `;

        container.appendChild(card);
        setTimeout(() => {
          card.classList.replace("opacity-0", "opacity-100");
          card.classList.replace("translate-y-10", "translate-y-0");
        }, 100);
      });
    };

    // Initialize after a short delay to ensure Tailwind is loaded
    setTimeout(() => renderProjects(), 1000);
  }, []);

  return (
    <div>
      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings:
            "FILL" 0,
            "wght" 400,
            "GRAD" 0,
            "opsz" 24;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        body {
          font-family: "Inter", sans-serif;
          background-color: #f8f9fa !important;
          color: #495057;
          min-height: 100vh;
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
        }
        html.dark body {
          background-color: #101622 !important;
          color: #d1d5db;
        }
        html.dark {
          background-color: #101622 !important;
        }
        .dark-header {
          background-color: #101622;
          border-color: rgba(75, 85, 99, 0.8);
        }
        .dark-text {
          color: #f9fafb;
        }
      `}</style>

      <div
        className={`flex flex-col min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900 text-gray-300" : "bg-gray-50 text-gray-700"
        }`}
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: isDark ? "#101622" : "#F8F9FA",
          color: isDark ? "#d1d5db" : "#495057",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <header
          className={`sticky top-0 z-50 border-b px-5 py-4 flex items-center justify-between transition-colors duration-300 ${
            isDark ? "dark-header" : ""
          }`}
          style={{
            backgroundColor: isDark ? "#101622" : "#F8F9FA",
            borderColor: isDark
              ? "rgba(75, 85, 99, 0.8)"
              : "rgba(229, 231, 235, 0.8)",
          }}
        >
          <h1
            className={`text-2xl font-bold ${isDark ? "dark-text" : ""}`}
            style={{ color: isDark ? "#f9fafb" : "#212529" }}
          >
            My Work
          </h1>
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#fbbf24" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ color: "#374151" }}
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <span
              className="text-3xl cursor-pointer"
              style={{ fontFamily: "Material Symbols Outlined" }}
            >
              menu
            </span>
          </div>
        </header>

        {/* Date */}
        <div className="px-6 mb-6">
          <p
            className="text-xs"
            style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
          >
            Last updated: <strong>November 18, 2025 12:15 AM EAT</strong>
          </p>
        </div>

        {/* Projects Grid */}
        <main className="flex-1 px-5 pb-10">
          <div
            id="projects-container"
            className="grid grid-cols-2 gap-7 md:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            style={{ gridAutoRows: "1fr" }}
          >
            {/* Cards will be injected here by JavaScript */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortfolioPage;
