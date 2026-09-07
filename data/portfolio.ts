export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  client: string;
  year: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "fintech-solution",
    slug: "fintech-solution",
    title: "Fintech Financial Solution Platform",
    category: "Fintech & Web Applications",
    description: "Next-generation digital financial platform engineered for loan applications, micro-investments, secure digital transactions, and automated portfolio management.",
    client: "Fintech Financial Solution",
    year: "2026",
    image: "/images/portfolio/fintech-solution.png",
    url: "https://www.fintechfinancialsolution.com/",
    tags: ["Fintech", "Loan Engine", "Digital Banking", "Security"],
    featured: true
  },
  {
    id: "apex-video-commercial",
    slug: "apex-video-commercial",
    title: "Apex Motors Cinematic Commercial & 3D Reel",
    category: "Video Production & Motion",
    description: "High-octane 4K commercial ad film featuring custom 3D vehicle animation, visual graphics, sound design, and broadcast video masters.",
    client: "Apex Electric Vehicles",
    year: "2026",
    image: "/images/portfolio/optimus-infinity.png",
    url: "https://www.madprotek.com/work",
    tags: ["Video Production", "Commercial Ad", "3D Motion", "VFX"],
    featured: true
  },
  {
    id: "kadai2manai",
    slug: "kadai2manai",
    title: "Kadai2Manai Real Estate Marketplace",
    category: "Real Estate & Web Portal",
    description: "Comprehensive real estate and commercial property listing portal connecting plot developers, land buyers, and commercial space owners across South India.",
    client: "Kadai2Manai",
    year: "2025",
    image: "/images/portfolio/kadai2manai.png",
    url: "https://kadai2manai.com/",
    tags: ["Real Estate", "Property Hub", "Web Application", "Geolocator"],
    featured: true
  },
  {
    id: "clobas",
    slug: "clobas",
    title: "Clobas Campus Management ERP",
    category: "EdTech & Enterprise ERP",
    description: "Cloud-based school and campus management platform streamlining academic administration, student information systems, fee automation, and parent portals.",
    client: "Clobas Solutions",
    year: "2025",
    image: "/images/portfolio/clobas.png",
    url: "https://www.clobas.com/",
    tags: ["EdTech ERP", "Cloud Platform", "School Management", "SaaS"],
    featured: true
  },
  {
    id: "new-hope-infertility-hospital",
    slug: "new-hope-infertility-hospital",
    title: "New Hope Infertility Hospital Portal",
    category: "Healthcare & Patient Portal",
    description: "Specialized reproductive healthcare portal offering patient counseling tools, fertility treatment schedules, online doctor booking, and medical resource guides.",
    client: "New Hope Infertility Hospital",
    year: "2026",
    image: "/images/portfolio/new-hope-hospital.png",
    url: "https://newhopeinfertility.com/",
    tags: ["Healthcare", "Hospital Portal", "Online Booking", "Reproductive Medicine"],
    featured: true
  },
  {
    id: "samson-associates",
    slug: "samson-associates",
    title: "Samson & Associates Corporate Advisory",
    category: "Legal & Corporate Consulting",
    description: "Corporate advisory, financial auditing, tax compliance, and legal consulting platform engineered for enterprise accounting and corporate governance.",
    client: "Samson & Associates",
    year: "2025",
    image: "/images/portfolio/samson-associates.png",
    url: "https://samsonandassociates.in/",
    tags: ["Corporate Advisory", "Legal Consulting", "Financial Audit", "Compliance"],
    featured: true
  },
  {
    id: "care-of-humanity-trust",
    slug: "care-of-humanity-trust",
    title: "Care of Humanity Non-Profit Trust",
    category: "Non-Profit & Community Foundation",
    description: "Community trust and NGO web platform supporting transparent donation tracking, disaster relief drives, volunteer management, and social welfare programs.",
    client: "Care of Humanity Trust",
    year: "2025",
    image: "/images/portfolio/care-of-humanity-trust.png",
    url: "https://careofhumanity.com/",
    tags: ["Non-Profit", "Donation Engine", "Community Trust", "Social Relief"],
    featured: true
  },
  {
    id: "optimus-infinity",
    slug: "optimus-infinity",
    title: "Optimus Infinity Enterprise IT",
    category: "Technology & Digital Transformation",
    description: "Enterprise IT consulting and digital transformation company platform showcasing custom cloud architectures, AI automation, and software engineering capabilities.",
    client: "Optimus Infinity",
    year: "2026",
    image: "/images/portfolio/optimus-infinity.png",
    url: "https://optimusinfinity.com/",
    tags: ["Enterprise IT", "Cloud Architecture", "Digital Transformation", "Software Systems"],
    featured: true
  }
];
