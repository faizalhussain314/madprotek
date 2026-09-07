"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CyberEqualizer } from "@/components/ui/LoadingKit";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]/95 backdrop-blur-xl select-none font-sans overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* Ambient Golden Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex flex-col items-center space-y-8 px-6 text-center"
      >
        {/* Kinetic Orbital Ring Framing Logo */}
        <div className="relative w-56 h-56 flex items-center justify-center">
          {/* Outer Gyro Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-brand-yellow/30 flex items-center justify-center"
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_#F9B900]" />
          </motion.div>

          {/* Counter Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-brand-yellow/40 border-t-transparent border-b-transparent"
          />

          {/* Inner Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-7 rounded-full border-[1.5px] border-brand-yellow-bright/60 border-l-transparent border-r-transparent shadow-[0_0_12px_rgba(249,185,0,0.35)]"
          />

          {/* Centered Brand Emblem with Light Sweep */}
          <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden">
            <motion.div
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/images/m-word-logo-white.png"
                alt="MadProTek Loading"
                width={80}
                height={80}
                priority
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_0_20px_rgba(249,185,0,0.45)]"
              />
              {/* Metallic Shine Sweep */}
              <div className="absolute inset-0 pointer-events-none -translate-x-full animate-shine-sweep bg-gradient-to-r from-transparent via-brand-yellow/30 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Full Brand Logo Under Rings */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/full-logo-white.png"
            alt="MadProTek Corp"
            width={180}
            height={72}
            className="w-40 sm:w-48 h-auto object-contain drop-shadow-[0_0_15px_rgba(249,185,0,0.3)]"
          />
        </div>

        {/* Dynamic Cyber Soundwave Equalizer */}
        <div className="flex flex-col items-center space-y-4">
          <CyberEqualizer height="h-6" />

          {/* High-Tech Terminal Status Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 backdrop-blur-md shadow-[0_0_15px_rgba(249,185,0,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-brand-yellow uppercase">
              CALIBRATING INTERFACE...
            </span>
          </div>

          <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            MADPROTEK DIGITAL ARCHITECTURE
          </p>
        </div>
      </motion.div>
    </div>
  );
}
