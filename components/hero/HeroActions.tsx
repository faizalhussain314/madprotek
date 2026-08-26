"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, MessageSquare } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
      {/* PRIMARY CTA */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/contact"
          className="h-[50px] px-7 rounded-full inline-flex items-center justify-center bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet text-white text-[14px] sm:text-[15px] font-semibold shadow-[0_10px_25px_rgba(79,70,229,0.2)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.35)] transition-all duration-300 w-full sm:w-auto group relative overflow-hidden"
        >
          {/* Subtle overlay glow */}
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center justify-center">
            <span>Start Your Project</span>
            <Rocket className="ml-2 h-4.5 w-4.5 animate-pulse" />
          </span>
        </Link>
      </motion.div>

      {/* SECONDARY CTA */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="/about"
          className="h-[50px] px-7 rounded-full inline-flex items-center justify-center bg-white text-brand-navy border border-[#CBD5E1] text-[14px] sm:text-[15px] font-semibold hover:border-brand-blue hover:bg-brand-soft-blue/20 transition-all duration-300 w-full sm:w-auto"
        >
          <span>Talk to Our Team</span>
          <MessageSquare className="ml-2 h-4.5 w-4.5 text-brand-blue" />
        </Link>
      </motion.div>
    </div>
  );
}
