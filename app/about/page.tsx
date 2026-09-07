"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Megaphone, Video, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import HighlightText from "@/components/ui/HighlightText";
import Button from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export default function AboutPage() {
  const pillars = [
    {
      icon: Code,
      title: "Software Development",
      desc: "Custom web systems, API microservices, and enterprise backend engineering.",
      badge: "TECH"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      desc: "Logo systems, typography guidelines, and editorial digital brand voice.",
      badge: "CREATIVE"
    },
    {
      icon: Megaphone,
      title: "Digital Growth",
      desc: "Targeted PPC acquisition, search engine optimization (SEO), and conversion strategy.",
      badge: "GROWTH"
    },
    {
      icon: Video,
      title: "Media Production",
      desc: "4K commercial ad films, 3D motion graphics, brand storytelling, and event coverage aftermovies.",
      badge: "NEW & FEATURED"
    },
    {
      icon: Calendar,
      title: "Event Management",
      desc: "Public sports marathons, city road runs, and corporate event logistics.",
      badge: "EVENTS"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-16 lg:py-20 bg-brand-off-white border-b border-brand-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[100px] pointer-events-none" />

        <Container className="text-center max-w-4xl relative z-10">
          <StaggerContainer staggerDelay={0.12} className="space-y-4 flex flex-col items-center">
            <StaggerItem direction="down" distance={15}>
              <span className="text-xs font-black uppercase tracking-widest text-brand-black bg-brand-yellow px-4 py-1.5 rounded-full inline-block shadow-2xs">
                ABOUT MADPROTEK CORP
              </span>
            </StaggerItem>
            <StaggerItem direction="up" distance={25}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight">
                Technology is what we build.<br />
                <HighlightText delay={0.3}>Impact</HighlightText> is why we build it.
              </h1>
            </StaggerItem>
            <StaggerItem direction="up" distance={20}>
              <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed font-normal">
                We consolidate software development, visual brand strategy, media & video production, paid marketing acquisition, and public event execution under a single partner.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Main Philosophy */}
      <section className="py-20 bg-white border-b border-brand-border overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right" distance={35} className="space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow-dark">
                OUR CORPORATE MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black leading-tight">
                Consolidating Execution. Eliminating Agency Friction.
              </h2>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                MadProTek Corp was established to solve a common enterprise bottleneck: managing fragmented software agencies, design boutiques, video production houses, and event planners creates broken customer journeys and wasted ad spend.
              </p>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                By housing developers, creative directors, 3D animators, video crews, media buyers, and on-ground event marshals in one unified team, we ensure every line of code, video frame, and brand asset directly drives growth.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" distance={35} delay={0.15}>
              <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-10 space-y-4 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full pointer-events-none" />
                <h3 className="text-xl font-extrabold text-brand-yellow flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span>MadProTek Core Commitments</span>
                </h3>
                <ul className="space-y-3 pt-2">
                  {[
                    "Unified Codebase & Campaign Alignment",
                    "Cinematic Media Production & Storytelling",
                    "Consistent Brand Voice Across All Digital & Video Channels",
                    "High-Speed Local Community & Event Activation",
                    "Predictable Performance-Driven Execution"
                  ].map((item) => (
                    <li key={item} className="flex items-start space-x-3 text-sm text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Five Pillars of Complete Integration */}
      <section className="py-20 bg-brand-off-white border-b border-brand-border overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="Pillars of Complete Integration"
            subtitle="Deep engineering capability balanced by creative design, cinematic video production, and event execution strategies."
            align="center"
          />

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isMediaProd = p.title === "Media Production";

              return (
                <StaggerItem key={p.title} direction="up" distance={30}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 rounded-3xl border transition-all duration-300 space-y-4 relative overflow-hidden h-full ${
                      isMediaProd
                        ? "bg-gradient-to-b from-brand-black to-neutral-900 text-white border-brand-yellow/40 shadow-xl"
                        : "bg-white border-brand-border text-brand-black shadow-sm hover:shadow-md hover:border-brand-black"
                    }`}
                  >
                    {/* Top Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold shadow-2xs ${
                          isMediaProd ? "bg-brand-yellow text-brand-black" : "bg-brand-yellow/20 text-brand-black"
                        }`}
                      >
                        <Icon className="h-5.5 w-5.5" />
                      </div>
                      {isMediaProd && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-yellow text-brand-black text-[9px] font-black uppercase tracking-wider">
                          NEW
                        </span>
                      )}
                    </div>

                    <h3 className={`font-extrabold text-lg leading-snug ${isMediaProd ? "text-brand-yellow" : "text-brand-black"}`}>
                      {p.title}
                    </h3>

                    <p className={`text-xs leading-relaxed font-normal ${isMediaProd ? "text-gray-300" : "text-brand-gray"}`}>
                      {p.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white overflow-hidden">
        <Container className="text-center max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="up" distance={30} className="space-y-6 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">
              Building Businesses That Are Ready for Tomorrow
            </h2>
            <p className="text-sm sm:text-base text-brand-gray max-w-2xl font-normal">
              Bridge the gap between your technical infrastructure, video production assets, visual brand elements, and public event outreach with MadProTek.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" showArrow size="lg">
                Work With Our Team
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
