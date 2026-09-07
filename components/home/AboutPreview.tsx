"use client";

import React from "react";
import Container from "../ui/Container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/ScrollReveal";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT with on-appear animation */}
          <ScrollReveal direction="right" distance={35} className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-black">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>THE MADPROTEK PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-[-0.04em] leading-[1.05]">
              Technology is what we build.<br />
              <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Impact</span> is why we build it.
            </h2>
          </ScrollReveal>

          {/* RIGHT with on-appear animation */}
          <ScrollReveal direction="left" distance={35} delay={0.15} className="lg:col-span-6 space-y-6 border-l-4 border-brand-yellow pl-6 sm:pl-8">
            <p className="text-base sm:text-lg text-brand-black font-semibold leading-relaxed">
              MadProTek Corp acts as a single partner for technical engineering, design branding, performance acquisition, and physical sports event production.
            </p>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              Founded to eliminate agency friction, our team aligns software architectures and visual assets directly with enterprise revenue metrics.
            </p>

            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border">
              <StaggerItem direction="up" distance={20} className="p-2 rounded-xl hover:bg-black/5 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">5+</span>
                <span className="text-xs font-bold text-brand-muted uppercase">Years Active</span>
              </StaggerItem>
              <StaggerItem direction="up" distance={20} className="p-2 rounded-xl hover:bg-black/5 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">500+</span>
                <span className="text-xs font-bold text-brand-muted uppercase">Projects</span>
              </StaggerItem>
              <StaggerItem direction="up" distance={20} className="p-2 rounded-xl hover:bg-black/5 transition-colors">
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">100%</span>
                <span className="text-xs font-bold text-brand-muted uppercase">In-House</span>
              </StaggerItem>
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
