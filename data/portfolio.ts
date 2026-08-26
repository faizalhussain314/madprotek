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
    id: "fintech-solution",
    slug: "fintech-solution",
    title: "Fintech Solution Platform",
    category: "Web & Mobile Applications",
    description: "Next-generation digital banking platform engineered for secure real-time micro-investments, digital wallets, and automated financial transaction processing.",
    client: "Fintech Solution",
    year: "2026",
    image: "/images/portfolio/fintech-solution.png",
    tags: ["Next.js", "TypeScript", "Fintech Engine", "Security"],
    featured: true
  },
  {
    id: "sreenivasa-speciality-hospital",
    slug: "sreenivasa-speciality-hospital",
    title: "Sreenivasa Speciality Hospital Portal",
    category: "Healthcare & Software",
    description: "Comprehensive multi-specialty hospital management portal featuring online OPD appointment booking, patient health records, and emergency bed tracking.",
    client: "Sreenivasa Speciality Hospital",
    year: "2026",
    image: "/images/portfolio/sreenivasa-hospital.png",
    tags: ["Hospital Management", "Patient Portal", "Telemedicine"],
    featured: true
  },
  {
    id: "dr-dharani-skin-clinic",
    slug: "dr-dharani-skin-clinic",
    title: "Dr.Dharani Skin Clinic Brand & Booking App",
    category: "Branding & Web Development",
    description: "Premium dermatology clinic website and appointment scheduling platform designed to enhance patient experience and treatment booking.",
    client: "Dr.Dharani Skin Clinic",
    year: "2025",
    image: "/images/portfolio/dr-dharani-skin-clinic.png",
    tags: ["Dermatology", "UI/UX Architecture", "Online Booking"],
    featured: true
  },
  {
    id: "bright-financial-solution",
    slug: "bright-financial-solution",
    title: "Bright Financial Solution Portal",
    category: "Financial Tech & Branding",
    description: "Corporate financial advisory platform delivering automated loan processing, portfolio analytics, and digital client onboarding tools.",
    client: "Bright Financial Solution",
    year: "2026",
    image: "/images/portfolio/bright-financial.png",
    tags: ["Financial Advisory", "Loan Portal", "Dashboard Analytics"],
    featured: true
  },
  {
    id: "care-of-humanity-trust",
    slug: "care-of-humanity-trust",
    title: "Care of Humanity Trust Non-Profit Platform",
    category: "Non-Profit & Web Portal",
    description: "Community trust and non-profit foundation web platform supporting donor transparent tracking, volunteer management, and social relief campaigns.",
    client: "Care of Humanity Trust",
    year: "2025",
    image: "/images/portfolio/care-of-humanity-trust.png",
    tags: ["Non-Profit", "Donation Engine", "Community Trust"],
    featured: true
  },
  {
    id: "new-hope-infertility-hospital",
    slug: "new-hope-infertility-hospital",
    title: "New Hope Infertility Hospital Portal",
    category: "Healthcare & Patient Portal",
    description: "Specialized reproductive healthcare portal offering patient counseling tools, fertility treatment schedules, and confidential doctor consultations.",
    client: "New Hope Infertility Hospital",
    year: "2026",
    image: "/images/portfolio/new-hope-hospital.png",
    tags: ["Healthcare Portal", "Reproductive Medicine", "Patient Security"],
    featured: true
  }
];
