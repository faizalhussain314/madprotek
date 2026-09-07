export interface ServiceItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  capabilities: string[];
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-dev",
    number: "01",
    slug: "software-development",
    title: "Software Development",
    description: "Custom web systems, enterprise software, APIs, and scalable cloud architectures built for high-concurrency business operations.",
    longDescription: "We build custom software solutions engineered from the ground up to solve your unique operational challenges. Our development team focuses on clean code, secure backend systems, and performance execution.",
    iconName: "Code2",
    capabilities: [
      "Enterprise Backend Architecture",
      "API Development & System Integrations",
      "Custom Workflow Automation",
      "Cloud Infrastructure & Microservices"
    ],
    features: [
      "High concurrency & scalability",
      "Strict data security & encryption",
      "Automated CI/CD pipelines",
      "Comprehensive system logging"
    ]
  },
  {
    id: "web-mobile-apps",
    number: "02",
    slug: "web-mobile-applications",
    title: "Web & Mobile Applications",
    description: "Feature-rich web applications and cross-platform iOS & Android mobile apps with slick user interfaces.",
    longDescription: "Transform complex business logic into intuitive web portals and mobile experiences. We deploy fast single-page apps (SPAs) and native hybrid mobile products.",
    iconName: "Smartphone",
    capabilities: [
      "SaaS Product Engineering",
      "iOS & Android Mobile Applications",
      "Progressive Web Apps (PWAs)",
      "Real-time Analytics Portals"
    ],
    features: [
      "Responsive & adaptive UI",
      "Offline-first mobile capabilities",
      "Biometric security integration",
      "Fast render times & state management"
    ]
  },
  {
    id: "branding-creative",
    number: "03",
    slug: "branding-creative",
    title: "Branding & Creative",
    description: "Strategic visual identities, logo architecture, brand guidelines, and corporate packaging that demand market attention.",
    longDescription: "We build unforgettable brands. From visual logo systems and color palettes to messaging frameworks, we help businesses establish an expensive, bold market presence.",
    iconName: "Palette",
    capabilities: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Systems",
      "Corporate Style & Brand Guidelines",
      "Marketing Collateral & Assets"
    ],
    features: [
      "Distinct editorial design language",
      "Comprehensive typography standards",
      "Cross-channel consistency assets",
      "Vector & print-ready packaging kits"
    ]
  },
  {
    id: "digital-marketing",
    number: "04",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven PPC advertising campaigns, SEO optimization, content creation, and search conversion funnels.",
    longDescription: "Get your business in front of high-intent buyers. We design and launch digital acquisition campaigns blending sharp copywriting with audience analytics.",
    iconName: "Megaphone",
    capabilities: [
      "Search Engine Optimization (SEO & GEO)",
      "Paid PPC Campaigns (Google, Meta, LinkedIn)",
      "Conversion Rate Optimization (CRO)",
      "Content Strategy & Copywriting"
    ],
    features: [
      "CPA-focused budget management",
      "Custom high-converting landing pages",
      "Real-time campaign analytics",
      "A/B messaging optimization"
    ]
  },
  {
    id: "video-production",
    number: "05",
    slug: "video-production",
    title: "Video Production",
    description: "Cinematic brand films, commercial ads, 3D motion graphics, product showcases, and high-impact event aftermovies.",
    longDescription: "We bring stories to life through high-end video production. From visual concept scripting and 4K location shoots to 3D motion animation, color grading, and sound mastering, we produce video assets that captivate audiences.",
    iconName: "Video",
    capabilities: [
      "Corporate Brand & Ad Films",
      "3D Motion Graphics & VFX",
      "Product Showcase Videos",
      "Cinematic Event Aftermovies"
    ],
    features: [
      "4K Ultra-HD multicam filming",
      "Professional scriptwriting & storyboards",
      "Post-production color grading & sound mix",
      "Multi-channel video ad formatting"
    ]
  },
  {
    id: "event-management",
    number: "06",
    slug: "event-management",
    title: "Event Management",
    description: "End-to-end planning, digital promotion, registration portals, and on-ground production for public marathons and corporate galas.",
    longDescription: "We bring people together. MadProTek Corp manages public sports events, city marathons, adventure trails, cricket tournaments, and corporate launches.",
    iconName: "Calendar",
    capabilities: [
      "City Marathons & Trail Runs",
      "Corporate Sports Tournaments",
      "Digital Registration & Bib Systems",
      "On-Ground Logistics & Safety"
    ],
    features: [
      "Electronic timing bib integration",
      "Medical & safety station logistics",
      "High-impact local media outreach",
      "Post-event media productions"
    ]
  }
];
