"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function Industries() {
  const industries = [
    {
      id: "technology",
      name: "Technology",
      title: "SaaS & Scale-up Infrastructure",
      description: "Custom cloud systems, high-concurrency database APIs, and investor-ready brand design kits.",
      points: ["Microservice Architecture", "API Modernization", "Brand Identity Systems"]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      title: "Secure Patient & Operational Platforms",
      description: "HIPAA-compliant data pipelines, appointment booking software, and local clinic search optimization.",
      points: ["Data Security Controls", "Patient Dashboards", "Local GEO SEO"]
    },
    {
      id: "finance",
      name: "Finance",
      title: "FinTech & Banking Portals",
      description: "High-security transaction management tools, mobile biometric app solutions, and compliance design.",
      points: ["Biometric Authentication", "Real-Time Analytics", "Audited Workflows"]
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      title: "High-Converting Storefronts",
      description: "Ultra-fast headless checkout experiences, CRM customer rewards, and performance PPC ad funnels.",
      points: ["Headless Checkout", "CRM Integration", "PPC Campaign Management"]
    },
    {
      id: "startups",
      name: "Startups",
      title: "MVP to Market Acceleration",
      description: "Rapid engineering sprints, initial product launches, and investor brand decks.",
      points: ["Rapid Prototyping", "Full-Stack Deployment", "Brand Launch Kit"]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      title: "Large-Scale Systems Integration",
      description: "Legacy code modernization, custom ERP connections, and corporate public event management.",
      points: ["Legacy Modernization", "Custom ERP Connectors", "Corporate Galas & Sports"]
    }
  ];

  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find((i) => i.id === activeTab) || industries[0];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="INDUSTRIES & SOLUTIONS"
          title="Built For Ambition"
          subtitle="Specialized technical and branding frameworks tailored to vertical industry demands."
          align="center"
        />

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {industries.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand-black text-brand-yellow shadow-md"
                    : "bg-white text-brand-gray hover:text-brand-black border border-brand-border"
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="glass-card bg-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-sm max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-dark">
                {activeIndustry.name} Solution
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-black leading-tight">
                {activeIndustry.title}
              </h3>
              <p className="text-sm text-brand-gray leading-relaxed">
                {activeIndustry.description}
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" showArrow size="sm">
                  Discuss {activeIndustry.name} Strategy
                </Button>
              </div>
            </div>

            <div className="md:col-span-5 bg-brand-black text-white rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Core Deliverables
              </h4>
              <ul className="space-y-3">
                {activeIndustry.points.map((pt) => (
                  <li key={pt} className="flex items-center space-x-2.5 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
