"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Megaphone, Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const pillars = [
    { icon: Code, title: "Software Development", desc: "Custom web systems, API microservices, and enterprise backend engineering." },
    { icon: Palette, title: "Branding & Design", desc: "Logo systems, typography guidelines, and editorial digital brand voice." },
    { icon: Megaphone, title: "Digital Growth", desc: "Targeted PPC acquisition, search engine optimization (SEO), and conversion strategy." },
    { icon: Calendar, title: "Event Management", desc: "Public sports marathons, city road runs, and corporate event logistics." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-20 lg:py-28 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-black bg-brand-yellow px-3 py-1 rounded-full">
              ABOUT MADPROTEK
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight">
              Technology is what we build.<br />
              <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Impact</span> is why we build it.
            </h1>
            <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
              We consolidate software development, visual brand strategy, paid marketing acquisition, and public event execution under a single partner.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Philosophy */}
      <section className="py-20 bg-white border-b border-brand-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
                OUR CORPORATE MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Consolidating Execution. Eliminating Agency Friction.
              </h2>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
                MadProTek Corp was established to solve a common enterprise bottleneck: managing fragmented software agencies, design boutiques, search consultants, and event planners creates broken customer journeys and wasted ad spend.
              </p>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
                By housing developers, creative directors, media buyers, and on-ground event marshals in one unified team, we ensure every line of code and brand asset directly drives growth.
              </p>
            </div>

            <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full pointer-events-none" />
              <h3 className="text-xl font-extrabold text-brand-yellow">MadProTek Core Commitments</h3>
              <ul className="space-y-3 pt-2">
                {[
                  "Unified Codebase & Campaign Alignment",
                  "Consistent Brand Voice Across All Channels",
                  "High-Speed Local Community Activation",
                  "Predictable Performance-Driven Execution"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-sm text-gray-200">
                    <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-brand-off-white border-b border-brand-border">
        <Container>
          <SectionHeading
            eyebrow="CAPABILITIES"
            title="Four Pillars of Complete Integration"
            subtitle="Deep engineering capability balanced by creative design and performance marketing strategies."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="p-6 rounded-2xl border border-brand-border bg-white shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-extrabold text-brand-black text-lg">{p.title}</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center max-w-3xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black mb-4">
            Building Businesses That Are Ready for Tomorrow
          </h2>
          <p className="text-sm sm:text-base text-brand-gray max-w-2xl mb-8">
            Bridge the gap between your technical infrastructure, visual brand assets, and public event outreach with MadProTek.
          </p>
          <Button href="/contact" variant="primary" showArrow size="lg">
            Work With Our Team
          </Button>
        </Container>
      </section>
    </div>
  );
}
