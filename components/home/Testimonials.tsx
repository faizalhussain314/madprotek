"use client";

import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/ScrollReveal";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MadProTek delivered our enterprise CRM platform ahead of schedule. Their technical architecture and design standards are world-class.",
      author: "Vikram R.",
      role: "Chief Technology Officer",
      company: "Nexus Global"
    },
    {
      quote: "The brand identity and digital acquisition campaigns designed by MadProTek boosted our organic conversion by 140% in under six months.",
      author: "Deepa S.",
      role: "Head of Growth",
      company: "Vanguard Atelier"
    },
    {
      quote: "Managing a city marathon for 4,000+ runners requires seamless registration tech and on-ground logistics. MadProTek executed flawlessly.",
      author: "Karthik N.",
      role: "Executive Director",
      company: "Hosur Sports Foundation"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border overflow-hidden">
      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="What Our Clients Say"
            subtitle="Feedback from organizations that rely on MadProTek for software, branding, and events."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, idx) => (
            <StaggerItem key={idx} direction="up" distance={35}>
              <div className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 h-full">
                <div>
                  <span className="text-5xl font-black text-brand-yellow leading-none block mb-2">
                    “
                  </span>
                  <p className="text-sm sm:text-base text-brand-black leading-relaxed font-medium">
                    {item.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <p className="text-sm font-extrabold text-brand-black">{item.author}</p>
                  <p className="text-xs font-semibold text-brand-muted">
                    {item.role} • <span className="text-brand-black">{item.company}</span>
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
