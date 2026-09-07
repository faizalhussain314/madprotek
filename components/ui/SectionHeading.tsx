"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const displayLabel = eyebrow || badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "flex flex-col mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        className
      )}
    >
      {displayLabel && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-yellow mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          <span>{displayLabel}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05]",
          theme === "light" ? "text-brand-black" : "text-white"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-4 text-base sm:text-lg font-normal leading-relaxed max-w-2xl",
            theme === "light" ? "text-brand-gray" : "text-brand-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
