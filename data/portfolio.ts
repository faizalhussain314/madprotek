export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  year: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "enterprise-crm-platform",
    slug: "enterprise-crm-platform",
    title: "Enterprise Operations & CRM Automation",
    category: "Software Development",
    description: "A custom high-concurrency CRM system with automated sales pipeline tracking, inventory syncing, and real-time operational analytics for industrial enterprises.",
    client: "Nexus Global Industries",
    year: "2026",
    image: "/images/work/project-01.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true
  },
  {
    id: "fintech-mobile-experience",
    slug: "fintech-mobile-experience",
    title: "Seamless Digital Banking & Mobile App",
    category: "Web & Mobile Applications",
    description: "Cross-platform mobile application delivering real-time micro-investment tracking, instant biometric authentication, and frictionless payment flows.",
    client: "Apex Financial Corp",
    year: "2026",
    image: "/images/work/project-02.jpg",
    tags: ["React Native", "Node.js", "UI/UX Architecture"],
    featured: true
  },
  {
    id: "luxury-brand-identity",
    slug: "luxury-brand-identity",
    title: "Strategic Brand Identity & Design System",
    category: "Branding & Creative",
    description: "Complete visual positioning, logo architecture, packaging guidelines, and digital brand voice for an upcoming premium lifestyle brand.",
    client: "Vanguard Atelier",
    year: "2025",
    image: "/images/work/project-03.jpg",
    tags: ["Brand Strategy", "Visual Identity", "Typography"],
    featured: true
  },
  {
    id: "global-marathon-campaign",
    slug: "global-marathon-campaign",
    title: "Hosur City Marathon Production & Promotion",
    category: "Event Management & Digital",
    description: "End-to-end event execution including 4,000+ runner registration portals, timing bib tag infrastructure, press promotion, and on-ground logistics.",
    client: "Hosur Sports Foundation",
    year: "2026",
    image: "/images/work/project-04.jpg",
    tags: ["Events Management", "Digital Marketing", "Logistics"],
    featured: true
  }
];
