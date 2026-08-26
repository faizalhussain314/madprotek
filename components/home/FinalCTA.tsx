"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-brand-yellow text-brand-black">
      {/* Subtle black geometric line art */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 border-4 border-brand-black/10 rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 border border-brand-black/15 rounded-full pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="text-xs font-black uppercase tracking-widest bg-brand-black text-brand-yellow px-4 py-1.5 rounded-full">
            LET'S COLLABORATE
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.98] text-brand-black">
            Have an idea?<br />
            Let's build it.
          </h2>

          <p className="text-base sm:text-lg text-brand-black/80 leading-relaxed max-w-2xl mx-auto font-medium">
            From technology and branding to digital growth and events, let's turn your next idea into something people remember.
          </p>

          <div className="pt-4 flex justify-center">
            <Button href="/contact" variant="dark" size="lg" showArrow>
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
