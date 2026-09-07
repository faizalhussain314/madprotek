"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { ScrollReveal } from "../ui/ScrollReveal";

export default function Intro() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Editorial Statement with on-appear animation */}
          <ScrollReveal direction="right" distance={40} className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-black">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-[-0.04em] leading-[1.05]">
              We combine <span className="bg-brand-yellow px-1.5 py-0.5">technology,</span>{" "}
              <span className="underline decoration-brand-yellow decoration-4">creativity</span>{" "}
              and <span className="bg-brand-yellow-subtle px-1.5 py-0.5">strategy</span> to build things that matter.
            </h2>
          </ScrollReveal>

          {/* RIGHT: Description & CTA with on-appear animation */}
          <ScrollReveal direction="left" distance={40} delay={0.15} className="lg:col-span-5 space-y-6 text-left border-l-0 lg:border-l border-brand-border lg:pl-10">
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed font-normal">
              MadProTek Corp brings engineers, visual designers, media strategists, and event managers into a single unified execution unit.
            </p>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              We eliminate the friction of managing separate software vendors, branding agencies, and marketing consultants by engineering cohesive growth ecosystems for ambitious enterprises.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center text-base font-extrabold text-brand-black hover:text-brand-yellow-dark group transition-colors"
              >
                <span>Discover MadProTek</span>
                <ArrowRight className="ml-2 h-5 w-5 text-brand-yellow transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
