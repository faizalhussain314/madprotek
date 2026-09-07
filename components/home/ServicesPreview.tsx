"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Video, Code, Smartphone, Megaphone, Palette, Calendar } from "lucide-react";
import { servicesData } from "@/data/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ServicesPreview() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for dynamic scrolling depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const decorY = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-brand-off-white border-b border-brand-border relative overflow-hidden select-none"
    >
      {/* Dynamic Parallax Background Graphic Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-10 right-[-10%] w-[550px] h-[550px] bg-brand-yellow/15 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        style={{ y: decorY }}
        className="absolute bottom-10 left-[-5%] w-[450px] h-[450px] bg-brand-black/5 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Floating Parallax Badge */}
      <motion.div
        style={{ y: decorY }}
        className="absolute top-20 right-12 hidden lg:flex items-center space-x-2 px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-brand-border shadow-lg text-xs font-extrabold text-brand-black z-10"
      >
        <Sparkles className="h-4 w-4 text-brand-yellow-dark animate-pulse" />
        <span>Full-Stack & Digital Studio</span>
      </motion.div>

      <Container className="relative z-10">
        <motion.div style={{ y: headingY }}>
          <SectionHeading
            eyebrow="OUR CAPABILITIES"
            title="What We Do"
            subtitle="We turn ambitious ideas into high-performing digital products, cinematic videos, memorable brands and measurable growth."
            align="left"
          />
        </motion.div>

        {/* Editorial Parallax Service Rows */}
        <div className="mt-14 divide-y divide-brand-border border-y border-brand-border bg-white/60 backdrop-blur-sm rounded-3xl shadow-sm overflow-hidden">
          {servicesData.map((service, idx) => {
            // Calculate item-specific parallax translation based on index
            const isOdd = idx % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group flex flex-col md:flex-row md:items-center justify-between p-6 sm:p-8 transition-all duration-500 relative cursor-pointer ${
                    hoveredIdx === idx
                      ? "bg-brand-yellow-subtle/70 pl-8 sm:pl-12"
                      : "bg-transparent"
                  }`}
                >
                  {/* Left yellow highlight indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-2 bg-brand-yellow transition-all duration-300 ${
                      hoveredIdx === idx ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                  />

                  <div className="flex items-start md:items-center space-x-6 md:space-x-10 max-w-xl">
                    <span className="text-sm font-black text-brand-black/40 group-hover:text-brand-black tracking-widest pt-1 md:pt-0 transition-colors">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-black group-hover:text-brand-yellow-dark transition-colors flex items-center space-x-3">
                      <span>{service.title}</span>
                      {service.id === "video-production" && (
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-yellow text-[10px] font-black uppercase text-brand-black tracking-wider shadow-2xs">
                          NEW
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="mt-4 md:mt-0 md:max-w-md lg:max-w-xl flex items-center justify-between space-x-6">
                    <p className="text-xs sm:text-sm text-brand-gray group-hover:text-brand-black leading-relaxed transition-colors font-normal">
                      {service.description}
                    </p>
                    <div className="w-11 h-11 rounded-full border border-brand-border group-hover:border-brand-black group-hover:bg-brand-black group-hover:text-brand-yellow flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-2xs">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
