"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";

interface StatItemProps {
  numericValue: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatCounter({ numericValue, suffix, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const increment = Math.max(1, Math.floor(numericValue / (duration / 20)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex flex-col items-center text-center px-4 py-3 rounded-2xl transition-all duration-300 hover:bg-white/5 cursor-pointer group"
    >
      <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-yellow tracking-tight group-hover:text-white transition-colors">
        {count}
        {suffix}
      </span>
      <span className="text-xs sm:text-sm font-bold text-brand-muted uppercase tracking-widest mt-2 group-hover:text-brand-yellow transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

export default function StatsStrip() {
  const stats = [
    { numericValue: 500, suffix: "+", label: "Projects Delivered" },
    { numericValue: 50, suffix: "+", label: "Expert Professionals" },
    { numericValue: 98, suffix: "%", label: "Client Satisfaction" },
    { numericValue: 100, suffix: "+", label: "Businesses Supported" },
  ];

  return (
    <section className="bg-brand-black text-white py-12 md:py-16 border-y border-brand-black-gray relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-0 md:divide-x divide-brand-black-gray/60">
          {stats.map((stat, idx) => (
            <StatCounter
              key={idx}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              delay={idx * 0.15}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
