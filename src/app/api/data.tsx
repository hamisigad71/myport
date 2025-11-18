import { getImgPath } from "@/utils/image";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.86",
    description: "Out of 5 stars from 3896 reviews on Google platform",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "364",
    description: "Client testimonials received in the year 2021",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "45M+",
    description: "Revenue generated through new projects & marketing",
  },
];

export const Progress = [
  { title: "Front-end development", Progress: 95 },
  { title: "AI agent development", Progress: 84 },
  { title: "UI & Visual Design", Progress: 90 },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Front-end development",
    description:
      "I build clean, fast, and responsive web interfaces using modern frameworks like React and advanced UI components. My focus is on performance, accessibility, and delivering smooth user experiences across all devices.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "AI agent development",
    description:
      "I create intuitive and user-centered interface designs that make products easy to navigate and enjoyable to use. My UI work blends functionality with modern design principles.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "UX & Products Design",
    description:
      "I specialize in crafting visually appealing digital assets—clean layouts, bold typography, and attention-grabbing visuals that elevate brand identity and create strong first impressions..",
  },
];

export const portfolioinfo = [
  {
    image: getImgPath("/images/portfolio/cozycasa.png"),
    alt: "Cozycasa – Home & Lifestyle Brand Identity",
    title: "Cozycasa",
    slug: "cozycasa",
    info: "Brand Identity • Packaging Design • Visual System",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/mars.png"),
    alt: "Mars – Space Exploration & Tech Branding",
    title: "Mars",
    slug: "mars",
    info: "Futuristic Logo • Motion Graphics • Brand Guidelines",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/humans.png"),
    alt: "Everyday Humans – Clean Beauty & Wellness",
    title: "Everyday Humans",
    slug: "everyday-humans",
    info: "Brand Strategy • Art Direction • E-commerce Design",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/roket-squred.png"),
    alt: "Rocket Squared – Startup Accelerator",
    title: "Rocket Squared",
    slug: "rocket-squared",
    info: "Logo Design • Pitch Deck • Investor Materials",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/panda-logo.png"),
    alt: "Panda – Playful Mascot & Merch Brand",
    title: "Panda",
    slug: "panda",
    info: "Character Design • Illustration • Merchandise",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/humans.png"),
    alt: "Fusion Dynamics – Tech Consulting Rebrand",
    title: "Fusion Dynamics",
    slug: "fusion-dynamics",
    info: "Corporate Identity • Website • Digital Assets",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/cozycasa.png"),
    alt: "Lush Haven – Premium Home Decor",
    title: "Lush Haven",
    slug: "lush-haven",
    info: "Luxury Branding • Packaging • Lookbook Design",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/mars.png"),
    alt: "Stellar Labs – Space-Tech Innovation",
    title: "Stellar Labs",
    slug: "stellar-labs",
    info: "3D Logo Animation • Brand System • UI Icons",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/panda-logo.png"),
    alt: "Bamboo Collective – Eco-Friendly Brand",
    title: "Bamboo Collective",
    slug: "bamboo-collective",
    info: "Sustainable Branding • Illustration • Packaging",
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/roket-squred.png"),
    alt: "Launchpad Ventures – VC & Startup Studio",
    title: "Launchpad Ventures",
    slug: "launchpad-ventures",
    info: "Brand Strategy • Website • Pitch Deck Design",
    Class: "md:mt-0",
  },
];
