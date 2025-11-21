export type PortfolioCategorySlug =
  | "all"
  | "mobile-apps"
  | "dashboards"
  | "websites"
  | "ai-agents";

export type PortfolioCategory = {
  label: string;
  slug: PortfolioCategorySlug;
};

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  href: string;
  category: Exclude<PortfolioCategorySlug, "all">;
};

const caseStudyPath = "/projects/index.html";

export const portfolioCategories: PortfolioCategory[] = [
  { label: "All", slug: "all" },
  { label: "Mobile Apps", slug: "mobile-apps" },
  { label: "Dashboards", slug: "dashboards" },
  { label: "Websites", slug: "websites" },
  { label: "AI Agents", slug: "ai-agents" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "HealthTrack Pro",
    description: "AI health monitoring",
    image:
      "https://i.pinimg.com/1200x/a3/5c/33/a35c33e8813ed8b6bfe1ec40e9d03ddf.jpg",
    alt: "Health monitoring UI",
    tags: ["React Native"],
    href: caseStudyPath,
    category: "mobile-apps",
  },
  {
    title: "Law Firm website",
    description: "Smart productivity app",
    image:
      "https://i.pinimg.com/736x/37/29/95/372995bdd8c28323c991a490af676b6a.jpg",
    alt: "Law firm website UI",
    tags: ["React ", "Next.js"],
    href: caseStudyPath,
    category: "websites",
  },
  {
    title: "Restaurant Website",
    description: "Enterprise site with 3D",
    image:
      "https://i.pinimg.com/736x/21/fa/77/21fa77e1f868a4c618f9ea80ab796be6.jpg",
    alt: "Restaurant website UI",
    tags: ["Next.js", "Framer"],
    href: caseStudyPath,
    category: "websites",
  },
  {
    title: "Aura Finance Dashboard",
    description:
      "Real-time financial analytics platform for enterprise reporting.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmiqNRkzNxkFO0WjJJEadLZ9yCC3v6zejqskpwjvmxzt3bEgEvYHo6FSGq2tWgXh_MMA1YwwmwhqkJiaTnmK6zu6pFgTBPGOhTLpbpSAQy1BZeYpSyqbRR9sOeGuwch2yBnAHuCgz5_ndCBA0Ew85m0KmCN_v65kHAL-UedneqBIQvRTXeKYugZSzgP4PKXYWLO-kQlrhCWpytbN8eGsBfO8yJhXaCTPlqAiri-ISiWLWmPxZzW5YLZIPVre0Lu1RJ9-w43Kp4-AM",
    alt: "Financial analytics dashboard UI",
    tags: ["React", "D3.js"],
    href: caseStudyPath,
    category: "dashboards",
  },
  {
    title: "Quantum Analytics",
    description: "Scientific data visualization suite for research teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    alt: "Scientific data charts",
    tags: ["Vue.js", "WebGL"],
    href: caseStudyPath,
    category: "dashboards",
  },
  {
    title: "AI agent for Real estate",
    description:
      "automatically responds to client inquiries, schedules property viewings",
    image:
      "https://i.pinimg.com/736x/53/96/5d/53965d3866ac2ba4a22f1eba65e8b1f9.jpg",
    alt: "CRM dashboard mock",
    tags: ["Next.js", "Chart.js"],
    href: caseStudyPath,
    category: "ai-agents",
  },
  {
    title: "ConnectSphere",
    description: "Professional networking mobile experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDn4N0wASVSreca7uVqmI9Z94GQfUcQzmdZ8LEmp5Vc_a7wE1jEiaq2p1WNFtokHU1ruI1dtnZ6BJ9_9rJzOUle8F7OknEVzBD2zEthGSuW1PoX_9D2Lqzvvf2Nl_Cnk0OUqBMIS5PhA2xBuKDx0gZagZ7VhWSeeIQTV-TmDmku_xr2K5MAUN5Y9zEUMyS3gIuvqXSvBvCvZnPb-1lX3ChGigv-w7RhZ3YuaAeaUDVzb9LykFecAE_nH-NAYnuO1WM6Ol45hdeDhn8",
    alt: "Networking mobile UI",
    tags: ["SwiftUI", "Firebase"],
    href: caseStudyPath,
    category: "mobile-apps",
  },
  {
    title: "TaskFlow",
    description: "Productivity assistant with smart reminders.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    alt: "Productivity dashboard",
    tags: ["Flutter"],
    href: caseStudyPath,
    category: "mobile-apps",
  },
  {
    title: "Hotel Ai Agent",
    description:
      "automated virtual assistant that instantly handles guest inquiries, bookings, and support across platforms to improve customer experience.",
    image:
      "https://i.pinimg.com/736x/74/12/3c/74123c70e165451107cafc0450f8ae8e.jpg",
    alt: "Enterprise landing page",
    tags: ["Next.js", "Framer"],
    href: caseStudyPath,
    category: "ai-agents",
  },
  {
    title: "Studio X",
    description: "Creative studio portfolio with cinematic motion.",
    image:
      "https://i.pinimg.com/736x/c2/06/0c/c2060c2609f6e33b5d839086434c771c.jpg",
    alt: "Creative agency site",
    tags: ["Astro", "GSAP"],
    href: caseStudyPath,
    category: "websites",
  },
  {
    title: "EcomPulse",
    description: "Fast headless commerce experience for DTC brands.",
    image:
      "https://i.pinimg.com/736x/93/a3/fc/93a3fc5f4fe87125b6579784e9496c06.jpg",
    alt: "Ecommerce storefront UI",
    tags: ["Shopify", "Vercel"],
    href: caseStudyPath,
    category: "websites",
  },
  {
    title: "LearnFlow",
    description: "Interactive learning platform with cohort tools.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    alt: "Edtech experience",
    tags: ["Remix", "Stripe"],
    href: caseStudyPath,
    category: "websites",
  },
  {
    title: "IntelliAgent",
    description: "Autonomous support agent for customer operations.",
    image:
      "https://i.pinimg.com/736x/55/3a/8c/553a8cf3426a3414dd4447bfcaf931cd.jpg",
    alt: "AI agent dashboard",
    tags: ["N8N", "LangChain"],
    href: caseStudyPath,
    category: "ai-agents",
  },
  {
    title: "ContentEngine",
    description: "AI content automation for marketing teams.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    alt: "AI marketing visuals",
    tags: ["Llama 3", "FastAPI"],
    href: caseStudyPath,
    category: "ai-agents",
  },
];
