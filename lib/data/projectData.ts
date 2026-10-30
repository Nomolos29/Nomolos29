export interface ProjectItem {
  slug: string;
  name: string;
  company: string;
  category: string;
  image: string;
  gallery?: string[];
  description: string;
  longDescription: string;
  role: string;
  year: string;
  metrics?: string[];
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  featured?: boolean;
}

export const WEBPROJECTS: ProjectItem[] = [
  {
    slug: "acedboard-workspace",
    name: "Acedboard Workspace Platform",
    company: "Acedboard",
    category: "SaaS & Enterprise",
    image: "/homepage/acedboardShowcase.png",
    gallery: [
      "/homepage/acedboardShowcase.png",
      "/homepage/acedboardsectionmackup.png",
      "/homepage/acedboardsectionmockup2.png",
    ],
    description:
      "A centralized SaaS project management and team collaboration platform built for high-velocity teams.",
    longDescription:
      "Acedboard unifies task tracking, real-time team communication, customizable project views, and executive reporting into a single cohesive workspace. Designed and engineered the responsive marketing experience and interactive product showcase interfaces with a focus on speed, clarity, and conversion.",
    role: "Lead Frontend Developer",
    year: "2025",
    metrics: [
      "98+ Lighthouse Performance Score",
      "40% Faster Page Load Times",
      "Multi-view Kanban, Gantt & Table UI",
    ],
    highlights: [
      "Engineered responsive interactive workspace previews and modular component architecture with Next.js and Tailwind CSS.",
      "Implemented smooth category transitions, dynamic template showcases, and SEO-optimized landing pages.",
      "Collaborated closely with product designers to translate complex enterprise workflows into intuitive visual layouts.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://www.acedboard.com/",
    featured: true,
  },
  {
    slug: "proconomic-value-tracker",
    name: "Proconomic Value Tracker",
    company: "Proconomic",
    category: "FinTech & Analytics",
    image: "/homepage/acedboard-value-tracker-section-mockup.png",
    gallery: [
      "/homepage/acedboard-value-tracker-section-mockup.png",
      "/homepage/HardSavingsSection.png",
    ],
    description:
      "Financial savings and procurement value-tracking platform visualizing hard savings, cost avoidance, and ROI.",
    longDescription:
      "Built for enterprise procurement and finance leaders, Proconomic's Value Tracker transforms fragmented spreadsheet reporting into real-time visual dashboards for hard savings, cost avoidance, and commercial impact.",
    role: "Frontend Engineer",
    year: "2025",
    metrics: [
      "Real-time ROI & Hard Savings Visualization",
      "Enterprise-grade Responsive Tables & Charts",
      "100% Mobile & Tablet Compatibility",
    ],
    highlights: [
      "Crafted interactive financial metric cards, hard-savings breakdowns, and multi-stage approval workflow visuals.",
      "Optimized asset delivery and layout stability (zero CLS) across complex data-heavy sections.",
      "Structured reusable UI primitives for rapid rollout of new product modules.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://www.proconomic.com/value-tracker",
    featured: true,
  },
  {
    slug: "audiocreeb-studio",
    name: "Audiocreeb Creative Platform",
    company: "Audiocreeb",
    category: "Creative & Media",
    image: "/homepage/audiocreeb-about-page-desktop.jpeg",
    gallery: [
      "/homepage/audiocreeb-about-page-desktop.jpeg",
      "/homepage/audiocreeb-home-page-mobile.jpeg",
    ],
    description:
      "Modern digital home for an audio production and creative media brand with immersive mobile-first storytelling.",
    longDescription:
      "Audiocreeb connects artists, podcasters, and brands with studio-grade audio production services. The platform pairs bold visual storytelling with frictionless booking and portfolio exploration across desktop and mobile devices.",
    role: "Web Developer & UI Designer",
    year: "2024",
    metrics: [
      "Mobile-first Responsive Experience",
      "3x Increase in Booking Inquiries",
      "SEO-optimized Service Architecture",
    ],
    highlights: [
      "Designed and built both the desktop editorial layouts and custom mobile navigation flows.",
      "Integrated fast media previews, service inquiry funnels, and structured SEO metadata.",
      "Delivered a cohesive visual identity across landing, about, and studio booking pages.",
    ],
    technologies: ["WordPress", "Elementor", "JavaScript", "CSS3", "Figma"],
    liveUrl: "https://audiocreeb.com/",
    featured: true,
  },
  {
    slug: "schick-collections",
    name: "Schick Collections Storefront",
    company: "Schick Collections",
    category: "E-Commerce",
    image: "/homepage/schickcollection-homepage.png",
    gallery: ["/homepage/schickcollection-homepage.png"],
    description:
      "High-converting fashion and lifestyle e-commerce storefront with curated lookbooks and seamless checkout.",
    longDescription:
      "A bespoke e-commerce experience tailored for a modern fashion brand, featuring curated seasonal collections, quick-view product cards, and a streamlined mobile checkout flow designed to maximize customer retention.",
    role: "Full-Stack Web Developer",
    year: "2024",
    metrics: [
      "Streamlined 2-Step Checkout Flow",
      "Optimized Mobile Catalog Browsing",
      "Integrated Payment & Inventory Sync",
    ],
    highlights: [
      "Built high-impact hero campaigns, collection filters, and responsive product grids.",
      "Configured secure payment gateway integrations and automated order notifications.",
      "Tuned image compression and caching for fast catalog browsing on mobile networks.",
    ],
    technologies: ["WordPress", "WooCommerce", "Divi", "JavaScript", "Payment APIs"],
    liveUrl: "https://www.schickcollections.com/",
    featured: true,
  },
  
  {
    slug: "radiance-cookware",
    name: "Radiance Cookware Digital Store",
    company: "Radiance Cookware",
    category: "E-Commerce",
    image: "/homepage/chatgpt-mobile-mockup.png",
    gallery: ["/homepage/chatgpt-mobile-mockup.png"],
    description:
      "Direct-to-consumer kitchenware e-commerce experience focused on product storytelling and mobile conversion.",
    longDescription:
      "Designed a clean, trust-focused direct-to-consumer digital storefront for Radiance Cookware, highlighting product craftsmanship, customer reviews, and bundle promotions with a mobile-first shopping cart.",
    role: "Frontend & E-Commerce Developer",
    year: "2024",
    metrics: [
      "Mobile-optimized Product Pages",
      "High-converting Bundle & Upsell Flows",
      "Fast Core Web Vitals",
    ],
    highlights: [
      "Created mobile-first product showcase layouts with rich visual mockups and interactive comparison blocks.",
      "Implemented conversion-focused CTAs, customer review highlights, and streamlined cart interactions.",
      "Enhanced organic search visibility through semantic HTML and schema markup.",
    ],
    technologies: ["React", "Tailwind CSS", "WordPress", "Figma", "SEO"],
    liveUrl: "https://radiancecookware.com/",
    featured: true,
  },

  {
    slug: "acedboard-enterprise-suite",
    name: "Acedboard Analytics & Reporting",
    company: "Acedboard",
    category: "SaaS & Enterprise",
    image: "/homepage/acedboardsectionmockup2.png",
    gallery: [
      "/homepage/acedboardsectionmockup2.png",
      "/homepage/acedboardsectionmackup.png",
    ],
    description:
      "Interactive executive dashboards and departmental workflow templates for engineering, operations, and finance.",
    longDescription:
      "An extension of the Acedboard ecosystem tailored for cross-functional enterprise departments—enabling engineering, operations, marketing, and finance teams to spin up custom reporting dashboards in seconds.",
    role: "Frontend Engineer",
    year: "2025",
    metrics: [
      "6+ Industry Department Templates",
      "Interactive Real-Time Filter Transitions",
      "Accessible & Keyboard-Navigable UI",
    ],
    highlights: [
      "Built department-specific template switchers with spring-physics transitions and instant previews.",
      "Standardized design tokens and dark/light surface contrast for long-session readability.",
      "Reduced bundle overhead by modularizing visual showcase components.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Icons"],
    liveUrl: "https://www.acedboard.com/",
    featured: false,
  },
];
