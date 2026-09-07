"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STATUS_MESSAGES = [
  { threshold: 0, text: "INITIALIZING MADPROTEK CORE" },
  { threshold: 24, text: "CALIBRATING DESIGN & ARCHITECTURE ENGINE" },
  { threshold: 52, text: "SYNCHRONIZING DIGITAL INTELLIGENCE" },
  { threshold: 78, text: "FINALIZING IMMERSIVE EXPERIENCE" },
  { threshold: 96, text: "SYSTEMS SYNCHRONIZED // ELEVATED" },
];

export default function CinematicPreloader() {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(STATUS_MESSAGES[0].text);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissing, setIsDismissing] = useState(false);

  // Function to run the preloader counter
  const runPreloader = () => {
    setIsVisible(true);
    setIsDismissing(false);
    setProgress(0);

    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds for smooth, impressive sequence

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const rawPct = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Ease progress slightly for cinematic effect
      const easedPct = Math.min(
        100,
        Math.floor(Math.sin((rawPct / 100) * (Math.PI / 2)) * 100)
      );

      setProgress(easedPct);

      // Update terminal status log
      const currentStatus = [...STATUS_MESSAGES]
        .reverse()
        .find((m) => easedPct >= m.threshold);
      if (currentStatus) {
        setStatusText(currentStatus.text);
      }

      if (rawPct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDismissing(true);
          setTimeout(() => {
            setIsVisible(false);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("hasSeenMadProTekPreloader", "true");
            }
          }, 850); // curtain transition duration
        }, 300);
      }
    }, 28);
  };

  useEffect(() => {
    // Check if user has already seen preloader in this session
    const hasSeen = typeof window !== "undefined" && sessionStorage.getItem("hasSeenMadProTekPreloader");
    
    // Auto-run on page load
    runPreloader();

    // Listen for custom replay event (e.g. from footer or header button)
    const handleReplay = () => {
      runPreloader();
    };

    window.addEventListener("replay-madprotek-preloader", handleReplay);
    return () => {
      window.removeEventListener("replay-madprotek-preloader", handleReplay);
    };
  }, []);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("hasSeenMadProTekPreloader", "true");
      }
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden font-sans">
      {/* Top Split Shutter Curtain */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isDismissing ? "-100%" : "0%" }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#080808] border-b border-brand-yellow/20 z-10"
      />

      {/* Bottom Split Shutter Curtain */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isDismissing ? "100%" : "0%" }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#080808] border-t border-brand-yellow/20 z-10"
      />

      {/* Center Cinematic Content Layer */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isDismissing ? 0 : 1,
          scale: isDismissing ? 1.06 : 1,
          filter: isDismissing ? "blur(8px)" : "blur(0px)",
        }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-between py-12 px-6 bg-[#080808]/95"
      >
        {/* Subtle Cyber Matrix / Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

        {/* Ambient Golden Radial Nebula */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Information & Skip Button */}
        <div className="relative w-full max-w-4xl flex items-center justify-between text-xs tracking-wider">
          <div className="flex items-center space-x-2 text-white/50 font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-[11px] uppercase tracking-widest text-brand-yellow">
              MADPROTEK CORP
            </span>
            <span className="text-white/30">•</span>
            <span className="text-[10px] uppercase text-white/40 tracking-wider">
              EST. 2026
            </span>
          </div>

          <button
            onClick={handleSkip}
            className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-brand-yellow hover:border-brand-yellow/40 hover:bg-white/10 transition-all text-[11px] font-mono tracking-wider cursor-pointer"
          >
            <span>SKIP INTRO</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>

        {/* Centerpiece: Kinetic 3D Gyroscope & Emblem */}
        <div className="relative flex flex-col items-center justify-center my-auto">
          {/* Kinetic Gyroscope Orbital Rings */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
            {/* Outer Tech Ring (Slow Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-brand-yellow/25 flex items-center justify-center"
            >
              {/* Coordinates node bead */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_10px_#F9B900]" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-yellow/60" />
            </motion.div>

            {/* Middle Laser Ring (Counter-Clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-brand-yellow/35 border-t-transparent border-b-transparent"
            />

            {/* Inner Fast Kinetic Orbital (Clockwise) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border-[1.5px] border-brand-yellow-bright/60 border-l-transparent border-r-transparent shadow-[0_0_15px_rgba(249,185,0,0.3)]"
            />

            {/* Center Brand Emblem with Metallic Light Sweep */}
            <motion.div
              animate={{
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 flex flex-col items-center justify-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/m-word-logo-white.png"
                  alt="MadProTek Emblem"
                  width={110}
                  height={110}
                  priority
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_25px_rgba(249,185,0,0.5)]"
                />

                {/* Animated Diagonal Metallic Light Beam Sweep */}
                <div className="absolute inset-0 pointer-events-none -translate-x-full animate-shine-sweep bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Full Brand Logo Under Kinetic Gyroscope */}
          <div className="mt-5 flex flex-col items-center">
            <Image
              src="/images/full-logo-white.png"
              alt="MadProTek Corp"
              width={220}
              height={88}
              priority
              className="w-48 sm:w-56 h-auto object-contain drop-shadow-[0_0_20px_rgba(249,185,0,0.3)]"
            />
          </div>

          {/* Digital HUD Percentage Display */}
          <div className="mt-8 flex flex-col items-center space-y-2">
            <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center space-x-2">
              <span className="text-brand-yellow/50 text-xl">[</span>
              <span className="text-white font-mono min-w-[3.5ch] text-center">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="text-brand-yellow text-xl">%</span>
              <span className="text-brand-yellow/50 text-xl">]</span>
            </div>

            {/* Dynamic Cyber Terminal Status */}
            <div className="flex items-center space-x-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-yellow animate-ping" />
              <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase text-center min-h-[18px]">
                {statusText}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Precision Laser Progress Bar */}
        <div className="relative w-full max-w-md flex flex-col items-center space-y-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            {/* Active Neon Laser Beam */}
            <motion.div
              className="h-full bg-gradient-to-r from-brand-yellow-dark via-brand-yellow to-brand-yellow-bright rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing Comet Head Tip */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#FFC400]" />
            </motion.div>
          </div>

          <div className="w-full flex items-center justify-between text-[10px] font-mono text-white/30 uppercase tracking-widest">
            <span>CORE V2.4</span>
            <span className="text-brand-yellow/70">
              {progress === 100 ? "READY" : "LOADING"}
            </span>
            <span>SYSTEMS ONLINE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
