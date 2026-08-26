"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/90 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center space-y-6"
      >
        {/* Animated Brand Logo Pulsing */}
        <div className="relative h-14 w-48 flex items-center justify-center">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/logo-black.png"
              alt="MadProTek Loading Logo"
              width={180}
              height={50}
              priority
              className="h-12 w-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Sleek Animated Progress Bar */}
        <div className="w-48 h-1 bg-brand-border rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 bottom-0 bg-brand-yellow rounded-full"
            initial={{ left: "-100%", right: "100%" }}
            animate={{
              left: ["-100%", "0%", "100%"],
              right: ["100%", "0%", "-100%"],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <span className="text-xs font-bold text-brand-gray uppercase tracking-widest animate-pulse">
          Loading Experience...
        </span>
      </motion.div>
    </div>
  );
}
