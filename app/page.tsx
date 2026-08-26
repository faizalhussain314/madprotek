import React from "react";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import Intro from "@/components/home/Intro";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutPreview from "@/components/home/AboutPreview";
import WhyMadprotek from "@/components/home/WhyMadprotek";
import Industries from "@/components/home/Industries";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import EventsPreview from "@/components/home/EventsPreview";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Metrics */}
      <StatsStrip />

      {/* 3. Introduction Statement */}
      <Intro />

      {/* 4. Editorial Services Preview */}
      <ServicesPreview />

      {/* 5. Philosophy & About Preview */}
      <AboutPreview />

      {/* 6. Why MadProTek */}
      <WhyMadprotek />

      {/* 7. Tabbed Industry Solutions */}
      <Industries />

      {/* 8. Selected Work Portfolio */}
      <PortfolioPreview />

      {/* 9. Events Preview */}
      <EventsPreview />

      {/* 10. Methodology & Process */}
      <Process />

      {/* 11. Testimonials */}
      <Testimonials />

      {/* 12. Full-Width Yellow CTA */}
      <FinalCTA />
    </div>
  );
}
