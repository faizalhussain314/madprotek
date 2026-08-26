"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Megaphone, Calendar, Star, CheckCircle2, ShieldCheck } from "lucide-react";
import HighlightText from "../ui/HighlightText";
import Button from "../ui/Button";

export default function Hero() {
  const serviceFeatures = [
    { icon: Code, title: "Software Development" },
    { icon: Smartphone, title: "Web & Mobile Apps" },
    { icon: Megaphone, title: "Branding & Marketing" },
    { icon: Calendar, title: "Event Management" },
  ];

  return (
    <section className="relative min-h-[70vh] lg:min-h-[680px] flex items-center justify-center overflow-hidden pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-12 lg:pb-16 bg-white">
      {/* DECORATIVE BACKGROUND GLOWS */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-brand-yellow-subtle/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-warm-white rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* CONTAINER */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* LEFT COLUMN: CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-yellow-subtle text-brand-black text-[13px] font-bold tracking-wider uppercase border border-brand-yellow/30">
            <span>TECHNOLOGY</span>
            <span className="mx-2 text-brand-yellow font-black">•</span>
            <span>BRANDING</span>
            <span className="mx-2 text-brand-yellow font-black">•</span>
            <span>DIGITAL</span>
            <span className="mx-2 text-brand-yellow font-black">•</span>
            <span>EVENTS</span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-[40px] sm:text-[54px] md:text-[68px] lg:text-[76px] font-extrabold text-brand-black leading-[0.98] tracking-[-0.04em]">
            Building <HighlightText delay={0.4}>Ideas.</HighlightText><br />
            Creating <span className="text-brand-yellow-dark">Digital Impact.</span>
          </h1>

          {/* Description */}
          <p className="text-[16px] sm:text-[17px] text-brand-gray leading-[1.7] max-w-[600px] font-normal">
            MadProTek Corp is a technology, branding and marketing company helping businesses turn ideas into digital products, strong brands and measurable growth.
          </p>

          {/* Service Feature Card */}
          <div className="w-full glass-card rounded-[18px] border border-brand-border bg-white/90 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-[12px] p-4 sm:p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2.5 text-left">
                    <div className="p-2 rounded-lg bg-brand-yellow/20 text-brand-black shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-bold text-brand-black leading-tight">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-1">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Start Your Project
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              Explore Our Work
            </Button>
          </div>

          {/* Clean Modern Trust Badge */}
          <div className="flex items-center space-x-4 pt-2">
            <div className="flex -space-x-2.5 overflow-hidden">
              <div className="w-9 h-9 rounded-full bg-brand-yellow text-brand-black border-2 border-white shadow-sm flex items-center justify-center font-extrabold text-xs">
                MP
              </div>
              <div className="w-9 h-9 rounded-full bg-brand-black text-white border-2 border-white shadow-sm flex items-center justify-center font-bold text-xs">
                <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
              </div>
              <div className="w-9 h-9 rounded-full bg-brand-black-gray text-white border-2 border-white shadow-sm flex items-center justify-center font-bold text-xs">
                <ShieldCheck className="h-4 w-4 text-brand-yellow" />
              </div>
            </div>

            <div className="flex flex-col text-left">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow" />
                ))}
                <span className="text-xs font-extrabold text-brand-black ml-1">5.0</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-brand-gray mt-0.5">
                Trusted by 150+ businesses across industries
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: HERO VISUAL */}
        <div className="lg:col-span-6 relative w-full aspect-square max-w-[600px] lg:max-w-[700px] flex items-center justify-center mx-auto lg:ml-auto select-none">
          {/* Subtle background graphics */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-[450px] h-[450px] bg-brand-yellow/15 rounded-full blur-[100px]" />
            <div className="absolute w-80 h-80 rounded-full border border-brand-yellow/30 border-dashed animate-spin-slow" />
          </div>

          {/* Floating Hero Image Asset */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <Image
              src="/images/madprotek-hero.png"
              alt="MadProTek digital technology and business solutions"
              width={700}
              height={700}
              priority
              className="object-contain w-full h-full max-h-[600px] lg:max-h-[700px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
