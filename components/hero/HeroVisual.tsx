"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[700px] flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 select-none">
      {/* BACKGROUND DECORATIONS (Radial gradient blur + dotted grid) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Glow blob */}
        <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-brand-blue via-brand-indigo to-brand-violet rounded-full opacity-[0.12] blur-[100px] animate-pulse-slow" />
        
        {/* Dotted grid */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-20"
          style={{
            maskImage: "radial-gradient(circle at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 70%)"
          }}
        />

        {/* Faint decorative circles */}
        <div className="absolute w-80 h-80 rounded-full border border-brand-indigo/10 border-dashed animate-spin-slow" />
        <div className="absolute w-64 h-64 rounded-full border border-brand-blue/5 border-dashed" style={{ animationDirection: "reverse", animationDuration: "12s" }} />

        {/* Floating small glow dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-brand-blue animate-ping" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-brand-violet opacity-60 animate-ping" style={{ animationDelay: "1s" }} />
      </div>

      {/* FLOATING IMAGE WRAPPER (subtle vertical translation animation) */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <Image
          src="/images/hero-madprotek.png"
          alt="MadProTek digital technology and business solutions"
          width={700}
          height={700}
          priority
          className="object-contain w-full h-full max-h-[600px] lg:max-h-[700px] drop-shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
        />
      </motion.div>
    </div>
  );
}
