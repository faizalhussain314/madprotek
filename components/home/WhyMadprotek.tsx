"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Award, Compass, Zap } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/ScrollReveal";

export default function WhyMadprotek() {
  const pillars = [
    {
      num: "01",
      title: "Innovation",
      icon: Lightbulb,
      description: "We deploy modern Next.js frameworks, video motion VFX, cloud microservices, and GEO AI optimizations before they become mainstream."
    },
    {
      num: "02",
      title: "Expertise",
      icon: Award,
      description: "Our software engineers, brand designers, video producers, and event marshals bring years of production experience across enterprise sectors."
    },
    {
      num: "03",
      title: "Strategy",
      icon: Compass,
      description: "Every line of code, ad campaign, and video story is evaluated against bottom-line customer acquisition costs and audience engagement."
    },
    {
      num: "04",
      title: "Execution",
      icon: Zap,
      description: "Direct access to execution leads with zero account-manager layers. We deliver predictably on timeline."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border relative overflow-hidden">
      <Container>
        <ScrollReveal direction="up">
          <SectionHeading
            eyebrow="WHY MADPROTEK"
            title="Engineered for Business Impact"
            subtitle="Four core capabilities that define our multi-disciplinary execution model."
            align="center"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.num} direction="up" distance={35}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col space-y-4 p-6 rounded-3xl border border-brand-border hover:border-brand-black bg-brand-off-white hover:bg-white transition-all duration-300 group shadow-2xs hover:shadow-lg h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-yellow-subtle text-brand-black flex items-center justify-center group-hover:bg-brand-yellow transition-colors shadow-2xs">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-black text-brand-muted tracking-wider">
                      {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-black pt-2 group-hover:text-brand-yellow-dark transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
