"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function Process() {
  const steps = [
    { num: "01", title: "Discover", desc: "Audit business objectives, target audience, and existing technical architecture." },
    { num: "02", title: "Define", desc: "Formulate product specifications, brand messaging rules, and campaign targets." },
    { num: "03", title: "Design", desc: "Craft editorial UI/UX mockups, visual brand identity kits, and marketing funnels." },
    { num: "04", title: "Develop", desc: "Write clean Next.js/cloud code, configure security, and build APIs." },
    { num: "05", title: "Deliver", desc: "Zero-downtime deployment, SEO optimization, and live project launch." }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="OUR METHODOLOGY"
          title="How We Work"
          subtitle="A structured 5-stage execution process engineered for predictable project outcomes."
          align="center"
        />

        <div className="relative mt-16 pb-6">
          {/* Yellow progress line indicator for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-brand-yellow/30 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-black text-brand-yellow font-extrabold text-lg flex items-center justify-center mb-5 border-2 border-brand-yellow group-hover:scale-110 transition-transform shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-extrabold text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed max-w-xs lg:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
