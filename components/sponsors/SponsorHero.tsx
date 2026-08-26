"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trophy, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";

export default function SponsorHero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[850px] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-white">
      {/* Atmosphere Background */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-brand-yellow-subtle/70 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-warm-white rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0"
        >
          {/* Floating Pill */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-black text-brand-yellow text-xs font-black uppercase tracking-widest border border-brand-black">
            <Sparkles className="h-3.5 w-3.5" />
            <span>SPONSORSHIP 2026</span>
          </div>

          {/* Headline */}
          <h1 className="text-[44px] sm:text-[58px] md:text-[72px] lg:text-[82px] font-extrabold text-brand-black leading-[0.98] tracking-[-0.04em]">
            Put Your Brand <br />
            <span className="bg-brand-yellow px-2 py-0.5 text-brand-black rounded-xl inline-block">In The Experience.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-[16px] sm:text-[18px] text-brand-gray leading-[1.7] max-w-[600px] font-normal">
            Partner with MadProTek to connect your brand with unforgettable marathons, off-road adventures and high-energy experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2">
            <Button href="#contact" variant="primary" size="lg" showArrow>
              Become a Sponsor
            </Button>
            <Button href="#opportunities" variant="secondary" size="lg">
              Explore Opportunities
            </Button>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-extrabold text-brand-black border-t border-brand-border/60 w-full">
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-brand-yellow-dark shrink-0" />
              <span>High-Impact Brand Activations</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4 w-4 text-brand-yellow-dark shrink-0" />
              <span>Turnkey Event Production</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: LARGE CINEMATIC SPONSOR PHOTOGRAPH */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-brand-black shadow-2xl group bg-brand-black"
        >
          <Image
            src="/images/sponsors/sponsor-hero.jpg"
            alt="MadProTek Event Sponsorship Photography"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
            <div>
              <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block mb-1">
                EXPERIENTIAL EVENT ACTIVATION
              </span>
              <p className="text-lg font-extrabold text-white leading-tight">
                Marathons • Jeep Expeditions • Community Challenges
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-brand-yellow text-brand-black text-xs font-black uppercase">
              10K+ REACH
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
