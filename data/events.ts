export interface EventScheduleItem {
  time: string;
  activity: string;
}

export interface EventHighlight {
  title: string;
  value: string;
}

export interface EventGalleryImage {
  src: string;
  alt: string;
  caption: string;
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
  status: "Upcoming" | "REGISTRATION OPEN" | "SOLD OUT" | "COMPLETED";
  registrationEnabled: boolean;
  featured?: boolean;
  schedule: EventScheduleItem[];
  highlights: EventHighlight[];
  gallery: EventGalleryImage[];
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
    image: "/images/events/marathon/hero.svg",
    shortDescription: "Join 3,500+ runners in the region's largest road running event featuring electronic bib timing, spectator zones, and finisher rewards.",
    description: "The Hosur Half Marathon is the region's largest road running event, bringing together professional athletes, fitness enthusiasts, and corporate teams. Running through scenic routes with cheering crowds, this marathon features multiple race categories: 21K Half Marathon, 10K Run, and 5K Fun Run.",
    status: "REGISTRATION OPEN",
    registrationEnabled: true,
    featured: true,
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
    gallery: [
      { src: "/images/events/marathon/start-line.svg", alt: "Marathon Starting Line", caption: "01 — Starting line & flag off" },
      { src: "/images/events/marathon/runners.svg", alt: "Marathon Elite Runners", caption: "02 — Elite runner convoy" },
      { src: "/images/events/marathon/crowd.svg", alt: "Marathon Cheering Crowd", caption: "03 — Cheering spectator zone" },
      { src: "/images/events/marathon/finish.svg", alt: "Marathon Finish Ceremony", caption: "04 — Finisher medal ceremony" }
    ],
    venue: "Hosur Stadium Grounds",
    address: "Inner Ring Road, Hosur, Tamil Nadu 635109",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4282367469343!2d77.82862831535905!3d12.729188991016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713e7ffffff%3A0x8ba6e8b4e7ffffff!2sHosur%20Stadium!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
  },
  {
    id: "western-ghats-off-road-challenge-2026",
    slug: "western-ghats-off-road-challenge-2026",
    title: "Western Ghats Off-Road Challenge",
    category: "Off-Road",
    date: "January 22-24, 2027",
    location: "Western Ghats Circuit",
    image: "/images/events/offroad/hero.svg",
    shortDescription: "A 3-day rugged 4x4 Jeep expedition conquering rocky mountain passes, mud trails, and remote forest routes.",
    description: "Experience the ultimate off-road adventure through the Western Ghats. Over three adrenaline-packed days, 4x4 Jeep crews navigate steep inclines, natural river beds, and technical rock crawls with professional trail marshals.",
    status: "REGISTRATION OPEN",
    registrationEnabled: true,
    schedule: [
      { time: "DAY 1 - 07:00 AM", activity: "Vehicle Scrutineering & Marshal Briefing" },
      { time: "DAY 1 - 09:00 AM", activity: "Stage 1 Mountain Trail Expedition" },
      { time: "DAY 2 - 08:00 AM", activity: "Stage 2 Mud & Obstacle Circuit" },
      { time: "DAY 3 - 04:00 PM", activity: "Trophy Presentation & Campfire Gala" }
    ],
    highlights: [
      { title: "Participating Vehicles", value: "80 Off-Road 4x4 Jeeps" },
      { title: "Trail Terrain", value: "Mud, Rocks & Elevation Gains" },
      { title: "Marshal Support", value: "GPS Tracking & Winch Crew" },
      { title: "Overnight Stay", value: "Luxury Jungle Camping" }
    ],
    gallery: [
      { src: "/images/events/offroad/jeep-convoy.svg", alt: "4x4 Convoy Trail", caption: "01 — 4x4 Trail expedition" },
      { src: "/images/events/offroad/terrain.svg", alt: "Mountain River Crossing", caption: "02 — Mud & mountain crossing" },
      { src: "/images/events/offroad/participants.svg", alt: "Jeep Crew & Marshals", caption: "03 — Jeep crew & marshals" }
    ],
    venue: "Western Ghats Basecamp",
    address: "Valparai Forest Route, Tamil Nadu",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4282367469343!2d77.82862831535905!3d12.729188991016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713e7ffffff%3A0x8ba6e8b4e7ffffff!2sHosur%20Stadium!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
  },
  {
    id: "yelagiri-adventure-trail-2026",
    slug: "yelagiri-adventure-trail-2026",
    title: "Yelagiri Adventure Trail",
    category: "Adventure",
    date: "December 06, 2026",
    location: "Yelagiri Hills, Vellore",
    image: "/images/events/adventure/hero.svg",
    shortDescription: "A 15km mountain trail run and nature trek through scenic pine forests and hill summits.",
    description: "Escape the city and challenge your limits at the Yelagiri Adventure Trail. Navigating rocky paths and elevation gains of over 600m, this event is designed for nature lovers and trail runners.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "06:00 AM", activity: "Assembly & Trail Briefing" },
      { time: "06:30 AM", activity: "15K Trail Flag Off" },
      { time: "11:00 AM", activity: "Summit Breakfast & Medals" }
    ],
    highlights: [
      { title: "Trail Length", value: "15KM Mountain Route" },
      { title: "Elevation Gain", value: "600M Forest Climb" }
    ],
    gallery: [
      { src: "/images/events/adventure/group.svg", alt: "Mountain Trek Group", caption: "01 — Mountain trek group" },
      { src: "/images/events/adventure/activity.svg", alt: "Summit Activation", caption: "02 — Summit trail activation" }
    ],
    venue: "Yelagiri Hill Park",
    address: "Mangalam Road, Yelagiri Hills 635853",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4282367469343!2d77.82862831535905!3d12.729188991016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713e7ffffff%3A0x8ba6e8b4e7ffffff!2sHosur%20Stadium!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
  },
  {
    id: "madprotek-corporate-cricket-clash-2026",
    slug: "madprotek-corporate-cricket-clash-2026",
    title: "Corporate Cricket Clash 2026",
    category: "Cricket",
    date: "November 14-15, 2026",
    location: "Hosur Sports Complex",
    image: "/images/events/cricket/hero.svg",
    shortDescription: "A weekend T10 leather-ball cricket tournament featuring 32 corporate enterprise teams.",
    description: "The premier corporate sports showdown in the industrial hub of Hosur. 32 enterprise teams battle in T10 knockout rounds with professional turf pitches and live digital scoring.",
    status: "Upcoming",
    registrationEnabled: true,
    schedule: [
      { time: "SAT 08:00 AM", activity: "Group Stage League Matches" },
      { time: "SUN 03:00 PM", activity: "Final Championship Match" }
    ],
    highlights: [
      { title: "Corporate Teams", value: "32 Enterprise Squads" },
      { title: "Match Format", value: "T10 Leather-Ball Knockouts" }
    ],
    gallery: [
      { src: "/images/events/cricket/action.svg", alt: "Championship Cricket Match", caption: "01 — Championship match" }
    ],
    venue: "Hosur Sports Complex",
    address: "Mathigiri Road, Hosur 635109",
    mapEmbedUrlPlaceholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4282367469343!2d77.82862831535905!3d12.729188991016845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713e7ffffff%3A0x8ba6e8b4e7ffffff!2sHosur%20Stadium!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
  }
];
