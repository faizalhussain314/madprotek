export interface EventScheduleItem {
  time: string;
  activity: string;
}

export interface EventHighlight {
  title: string;
  value: string;
}

export interface EventData {
  id: string;
  slug: string;
  title: string;
  category: "Marathons" | "Adventure" | "Off-Road" | "Cricket" | "Community" | "Corporate";
  date: string;
  location: string;
  image: string;
  shortDescription: string;
  description: string;
  status: "Upcoming" | "Active" | "Completed";
  registrationEnabled: boolean;
  schedule: EventScheduleItem[];
  highlights: EventHighlight[];
  venue: string;
  address: string;
  mapEmbedUrlPlaceholder: string;
}

export const eventsData: EventData[] = [
  {
    id: "hosur-half-marathon-2026",
    slug: "hosur-half-marathon-2026",
    title: "Hosur Half Marathon 2026",
    category: "Marathons",
    date: "October 18, 2026",
    location: "Hosur, Tamil Nadu",
    image: "/events/marathon.png",
    shortDescription: "Join thousands of runners in the annual Hosur Half Marathon to promote healthy living and community wellness.",
    description: "The Hosur Half Marathon is the region's largest road running event, bringing together professional athletes, fitness enthusiasts, and corporate teams. Running through scenic routes with cheering crowds, this marathon features multiple race categories: a 21K Half Marathon, a 10K Run, and a 5K Fun Run. Professionally timed using electronic bib tags, it provides water stations every 2km, emergency medical support, and a grand finisher's medal for all participants.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "05:00 AM", activity: "Assembling & Warm-up Session" },
      { time: "05:30 AM", activity: "21K Half Marathon Flag Off" },
      { time: "06:00 AM", activity: "10K Run Flag Off" },
      { time: "06:30 AM", activity: "5K Fun Run Flag Off" },
      { time: "08:30 AM", activity: "Breakfast & Refreshments" },
      { time: "09:00 AM", activity: "Award Ceremony & Closing Speech" }
    ],
    highlights: [
      { title: "Expected Runners", value: "3,500+ Participants" },
      { title: "Scenic Route", value: "Flat & Fast Highway Path" },
      { title: "Safety First", value: "4 Ambulances & 6 Medical Stations" },
      { title: "Goodies & Swag", value: "Dry-fit T-shirt & Timing Bib" }
    ],
    venue: "Hosur Stadium Grounds",
    address: "Inner Ring Road, Hosur, Tamil Nadu 635109",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4282367469343!2d77.82862831535905!3d12.729188991016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713e7ffffff%3A0x8ba6e8b4e7ffffff!2sHosur%20Stadium!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
  },
  {
    id: "yelagiri-adventure-trail-2026",
    slug: "yelagiri-adventure-trail-2026",
    title: "Yelagiri Adventure Trail",
    category: "Adventure",
    date: "November 14, 2026",
    location: "Yelagiri Hills, Vellore",
    image: "/events/adventure.png",
    shortDescription: "A challenging 15km mountain trail run and hike through the rugged and beautiful Yelagiri Hills.",
    description: "Escape the city and challenge your limits at the Yelagiri Adventure Trail. Navigating rocky paths, dense forest pathways, and elevation gains of over 600m, this event is designed for nature lovers and trail runners who crave adventure. Every participant gets GPS maps, emergency support, and trail guidance checkpoints throughout the course.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "06:00 AM", activity: "Report at Base Camp & Gear Check" },
      { time: "06:30 AM", activity: "Trail Briefing & Guidelines" },
      { time: "07:00 AM", activity: "Adventure Trail Start" },
      { time: "11:30 AM", activity: "Finish Line Gathering & Lunch" },
      { time: "01:00 PM", activity: "Distribution of Certificates & Badges" }
    ],
    highlights: [
      { title: "Distance", value: "15 Kilometers Hike & Run" },
      { title: "Terrain", value: "Forest Paths, Streams, & Rocks" },
      { title: "Altitude Gain", value: "+600 Meters Elevation" },
      { title: "Logistics", value: "Hydration Stations & Spotters" }
    ],
    venue: "Yelagiri Hills Base Camp",
    address: "Athanavur Main Road, Yelagiri Hills, Tamil Nadu 635853",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.476483584857!2d78.63604085!3d12.57467645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac5443a0d9e7d9%3A0xe54e601c40ab212b!2sYelagiri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655000000001!5m2!1sen!2sin"
  },
  {
    id: "madprotek-corporate-cricket-clash-2026",
    slug: "madprotek-corporate-cricket-clash-2026",
    title: "Corporate Cricket Clash",
    category: "Cricket",
    date: "December 05-06, 2026",
    location: "Hosur, Tamil Nadu",
    image: "/events/cricket.png",
    shortDescription: "A premium 2-day cricket tournament bringing corporate teams together for networking and healthy sportsmanship.",
    description: "The MadProTek Corporate Cricket Clash is a standard 10-over tennis ball cricket tournament. Gathering leading technology, industrial, and branding corporations from Bangalore and Hosur, it is the perfect platform to blend corporate networking, competition, and sportsmanship. Food stalls, DJ setups, and family areas are available for spectators.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "08:00 AM (Day 1)", activity: "Inauguration Ceremony & Team Photos" },
      { time: "09:00 AM (Day 1)", activity: "League Stage Matches Begin" },
      { time: "01:00 PM (Day 1)", activity: "Lunch Break & Network Mixers" },
      { time: "09:00 AM (Day 2)", activity: "Quarter-Finals & Semi-Finals" },
      { time: "03:00 PM (Day 2)", activity: "Grand Finale Match" },
      { time: "05:00 PM (Day 2)", activity: "Presentation Ceremony & Cocktail Hour" }
    ],
    highlights: [
      { title: "Team Slots", value: "16 Corporate Teams" },
      { title: "Format", value: "10-Overs Knockout & League" },
      { title: "Prizes", value: "INR 1,00,000 Cash + Trophies" },
      { title: "Media Coverage", value: "Live stream on YouTube" }
    ],
    venue: "MadProTek Sports Arena",
    address: "SIPCOT Phase II, Hosur, Tamil Nadu 635109",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15589.654877964432!2d77.818456!3d12.723145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQzJzIzLjMiTiA3N8KwNDknMDYuNSJF!5e0!3m2!1sen!2sin!4v1655000000002!5m2!1sen!2sin"
  },
  {
    id: "western-ghats-off-road-challenge-2026",
    slug: "western-ghats-off-road-challenge-2026",
    title: "Western Ghats Off-Road Challenge",
    category: "Off-Road",
    date: "January 23, 2027",
    location: "Western Ghats Trails",
    image: "/events/offroad.png",
    shortDescription: "An extreme 4x4 off-road adventure challenge testing driver navigation and vehicle capability through mud and rock.",
    description: "The Western Ghats Off-Road Challenge tests driver focus, team communication, and mechanical configuration. Set across private estate trails, vehicles must tackle slippery mud trails, vertical climbs, and river crossing obstacles. Safety marshals, support winches, and tracking systems are stationed throughout.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "07:00 AM", activity: "Vehicle Scrutiny & Safety Check" },
      { time: "08:00 AM", activity: "Driver Briefing & Trail Mapping" },
      { time: "09:00 AM", activity: "First Vehicle Flag Off" },
      { time: "04:00 PM", activity: "Course Cut-off & Recovery" },
      { time: "06:00 PM", activity: "Award Gala Dinner & Driver Stories" }
    ],
    highlights: [
      { title: "Classes", value: "Stock and Modified 4x4 Classes" },
      { title: "Obstacles", value: "Mud Pit, Rock Crawl, River Crossing" },
      { title: "Safety", value: "Winches & Recovery Teams at each stage" },
      { title: "Logistics", value: "Camping Site Access Included" }
    ],
    venue: "Valley View Estate Trails",
    address: "Ghat Road, Western Ghats Region, Tamil Nadu",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125345.98754!2d76.9248!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1655000000003!5m2!1sen!2sin"
  }
];
