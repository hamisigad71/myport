"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Mobile Apps",
  "Dashboards",
  "Websites",
  "AI Agents",
];

type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  href: string;
  category: (typeof categories)[number];
};

const projects: Project[] = [
  {
    title: "Aura Finance Dashboard",
    description:
      "A comprehensive data analytics platform designed for enterprise clients to visualize financial trends.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiqNRkzNxkFO0WjJJEadLZ9yCC3v6zejqskpwjvmxzt3bEgEvYHo6FSGq2tWgXh_MMA1YwwmwhqkJiaTnmK6zu6pFgTBPGOhTLpbpSAQy1BZeYpSyqbRR9sOeGuwch2yBnAHuCgz5_ndCBA0Ew85m0KmCN_v65kHAL-UedneqBIQvRTXeKYugZSzgP4PKXYWLO-kQlrhCWpytbN8eGsBfO8yJhXaCTPlqAiri-ISiWLWmPxZzW5YLZIPVre0Lu1RJ9-w43Kp4-AM",
    alt: "Screenshot of a financial analytics dashboard",
    tags: ["React", "Python", "D3.js"],
    href: "/",
    category: "Dashboards",
  },
  {
    title: "ConnectSphere Mobile App",
    description:
      "A social networking application for professionals to connect and collaborate on projects.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4N0wASVSreca7uVqmI9Z94GQfUcQzmdZ8LEmp5Vc_a7wE1jEiaq2p1WNFtokHU1ruI1dtnZ6BJ9_9rJzOUle8F7OknEVzBD2zEthGSuW1PoX_9D2Lqzvvf2Nl_Cnk0OUqBMIS5PhA2xBuKDx0gZagZ7VhWSeeIQTV-TmDmku_xr2K5MAUN5Y9zEUMyS3gIuvqXSvBvCvZnPb-1lX3ChGigv-w7RhZ3YuaAeaUDVzb9LykFecAE_nH-NAYnuO1WM6Ol45hdeDhn8",
    alt: "UI of a professional social networking mobile app",
    tags: ["SwiftUI", "Firebase", "Node.js"],
    href: "/",
    category: "Mobile Apps",
  },
  {
    title: "IntelliAgent Workflow",
    description:
      "An autonomous AI agent designed to automate customer support inquiries and ticket routing.",
    image:
      "https://i.pinimg.com/1200x/4a/60/a3/4a60a3cbcd2b59cd619193ca6b25cde2.jpg",
    alt: "Abstract visualization of an AI agent workflow",
    tags: ["Python", "TensorFlow", "LangChain"],
    href: "/",
    category: "AI Agents",
  },
  {
    title: "Eclipse Commerce Platform",
    description:
      "Headless e-commerce storefront optimized for high-volume brands with personalized merchandising.",
    image:
      "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
    alt: "Modern e-commerce dashboard mockup",
    tags: ["Next.js", "Shopify", "TailwindCSS"],
    href: "/",
    category: "Websites",
  },
  {
    title: "PulseCare Telemedicine",
    description:
      "A HIPAA-compliant telemedicine suite connecting clinicians with patients through secure video consults.",
    image:
      "https://i.pinimg.com/736x/49/74/92/4974923484daa921b5b275e22cc90805.jpg",
    alt: "Telemedicine application interface",
    tags: ["React Native", "GraphQL", "AWS"],
    href: "/",
    category: "Mobile Apps",
  },
  {
    title: "Atlas Ops Portal",
    description:
      "A mission control experience giving operations teams real-time visibility into logistics pipelines.",
    image:
      "https://i.pinimg.com/1200x/b9/58/a2/b958a22119cf8e415e42b275f712c77e.jpg",
    alt: "Operations analytics UI",
    tags: ["Vue", "Rust", "PostgreSQL"],
    href: "/",
    category: "Dashboards",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="bg-[#F8F9FA] dark:bg-[#101622] border-t border-b border-white/10 py-16 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 lg:px-8">
        <header className="flex flex-col gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
            <span className="h-3 w-3 rounded-full bg-success" />
            build everything
          </div>
          <h2 className="text-3xl font-bold text-[#212529] dark:text-white md:text-4xl">
            Explore My Portfolio Showcase
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#495057] dark:text-white/70">
            A curated look at dashboards, mobile experiences, websites, and AI
            automations I’ve delivered across industries.
          </p>
        </header>

        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`h-9 shrink-0 rounded-full px-5 text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-[#495057] dark:bg-gray-700 dark:text-white/70"
              }`}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-lg dark:border-gray-800/80 dark:bg-gray-900/60"
            >
              <div
                role="img"
                aria-label={project.alt}
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="flex grow flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#212529] dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#495057] dark:text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-primary dark:bg-blue-500/10 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  className="mt-2 flex h-11 w-full items-center justify-center rounded-lg bg-primary text-base font-medium text-white shadow-md transition hover:bg-primary/90"
                >
                  View Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
