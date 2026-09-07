import { eventsData, EventData } from "@/data/events";

export interface DBAdminUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
}

export interface DBLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "New" | "Contacted" | "In Progress" | "Closed";
  createdAt: string;
}

export interface DBRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  emergencyPhone: string;
  categorySelected: string;
  tshirtSize: string;
  bibNumber: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  createdAt: string;
}

// Initial In-Memory / Fallback Data
let adminUsersStore: DBAdminUser[] = [
  {
    id: "admin-1",
    email: "admin@madprotek.com",
    password: "admin123",
    name: "MadProTek Admin",
    role: "SUPER_ADMIN",
    createdAt: new Date().toISOString(),
  },
];

let eventsStore: EventData[] = [...eventsData];

let leadsStore: DBLead[] = [
  {
    id: "lead-101",
    name: "Vikram Sharma",
    email: "vikram@techcorp.in",
    phone: "+91 98765 43210",
    service: "Web & Mobile Applications",
    message: "We need a SaaS web dashboard built with real-time analytics for our logistics enterprise.",
    status: "New",
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: "lead-102",
    name: "Priya Sundaram",
    email: "priya@greenleaf.com",
    phone: "+91 94432 11223",
    service: "Branding & Creative",
    message: "Looking for complete visual brand identity and corporate packaging redesign.",
    status: "Contacted",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: "lead-103",
    name: "Rajesh Kumar",
    email: "rajesh@motorsport.org",
    phone: "+91 98980 12345",
    service: "Video Production",
    message: "Requesting quote for 4K video shoot and 3D motion graphics aftermovie for our upcoming rally.",
    status: "In Progress",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
  },
];

let registrationsStore: DBRegistration[] = [
  {
    id: "reg-501",
    eventId: "hosur-half-marathon-2026",
    eventTitle: "Hosur Half Marathon 2026",
    name: "Arun Prakash",
    email: "arun.prakash@gmail.com",
    phone: "+91 98450 11223",
    emergencyPhone: "+91 98450 99887",
    categorySelected: "21K Half Marathon",
    tshirtSize: "L",
    bibNumber: "HM-2104",
    status: "Confirmed",
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
  },
  {
    id: "reg-502",
    eventId: "hosur-half-marathon-2026",
    eventTitle: "Hosur Half Marathon 2026",
    name: "Deepa R",
    email: "deepa.r@outlook.com",
    phone: "+91 97654 33221",
    emergencyPhone: "+91 97654 00000",
    categorySelected: "10K Run",
    tshirtSize: "M",
    bibNumber: "HM-1088",
    status: "Confirmed",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
  {
    id: "reg-503",
    eventId: "western-ghats-off-road-challenge-2026",
    eventTitle: "Western Ghats Off-Road Challenge",
    name: "Karthik Subramanian",
    email: "karthik.4x4@expedition.in",
    phone: "+91 99001 55443",
    emergencyPhone: "+91 99001 77665",
    categorySelected: "Pro 4x4 Crew",
    tshirtSize: "XL",
    bibNumber: "OR-044",
    status: "Confirmed",
    createdAt: new Date(Date.now() - 3600000 * 30).toISOString(),
  },
];

// Helper Data Operations
export const dbStore = {
  // Admin Users
  getAdminUsers: () => adminUsersStore,
  getAdminByEmail: (email: string) => adminUsersStore.find((u) => u.email.toLowerCase() === email.toLowerCase()),

  // Events CRUD
  getEvents: () => eventsStore,
  getEventBySlug: (slug: string) => eventsStore.find((e) => e.slug === slug || e.id === slug),
  addEvent: (newEvent: EventData) => {
    eventsStore = [newEvent, ...eventsStore];
    return newEvent;
  },
  updateEvent: (slugOrId: string, updatedFields: Partial<EventData>) => {
    eventsStore = eventsStore.map((e) => (e.slug === slugOrId || e.id === slugOrId ? { ...e, ...updatedFields } : e));
    return eventsStore.find((e) => e.slug === slugOrId || e.id === slugOrId);
  },
  deleteEvent: (slugOrId: string) => {
    const target = (slugOrId || "").trim().toLowerCase();
    eventsStore = eventsStore.filter(
      (e) => e.slug.toLowerCase() !== target && e.id.toLowerCase() !== target
    );
    return true;
  },

  // Leads CRUD
  getLeads: () => leadsStore,
  addLead: (newLead: Omit<DBLead, "id" | "createdAt" | "status">) => {
    const leadObj: DBLead = {
      ...newLead,
      id: `lead-${Date.now().toString().slice(-5)}`,
      status: "New",
      createdAt: new Date().toISOString(),
    };
    leadsStore = [leadObj, ...leadsStore];
    return leadObj;
  },
  updateLeadStatus: (id: string, status: DBLead["status"]) => {
    leadsStore = leadsStore.map((l) => (l.id === id ? { ...l, status } : l));
    return leadsStore.find((l) => l.id === id);
  },
  deleteLead: (id: string) => {
    leadsStore = leadsStore.filter((l) => l.id !== id);
    return true;
  },

  // Registrations CRUD
  getRegistrations: () => registrationsStore,
  addRegistration: (newReg: Omit<DBRegistration, "id" | "createdAt" | "bibNumber" | "status">) => {
    const randomBib = `${newReg.eventId.slice(0, 2).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const regObj: DBRegistration = {
      ...newReg,
      id: `reg-${Date.now().toString().slice(-5)}`,
      bibNumber: randomBib,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };
    registrationsStore = [regObj, ...registrationsStore];
    return regObj;
  },
  updateRegistrationStatus: (id: string, status: DBRegistration["status"]) => {
    registrationsStore = registrationsStore.map((r) => (r.id === id ? { ...r, status } : r));
    return registrationsStore.find((r) => r.id === id);
  },
  deleteRegistration: (id: string) => {
    registrationsStore = registrationsStore.filter((r) => r.id !== id);
    return true;
  },
};
