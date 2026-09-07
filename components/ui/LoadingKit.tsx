"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// 1. Kinetic Orbital Spinner
interface OrbitalSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

export function OrbitalSpinner({
  size = "md",
  className = "",
  glow = true,
}: OrbitalSpinnerProps) {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const ringWidthMap = {
    sm: "border-[2px]",
    md: "border-[2.5px]",
    lg: "border-[3px]",
    xl: "border-[4px]",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeMap[size],
        className
      )}
    >
      {/* Outer ambient glow */}
      {glow && (
        <div className="absolute inset-0 rounded-full bg-brand-yellow/20 blur-md animate-pulse" />
      )}

      {/* Outer Gyro Ring (Clockwise) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        className={cn(
          "absolute inset-0 rounded-full border-t-brand-yellow border-r-brand-yellow-bright border-b-transparent border-l-transparent",
          ringWidthMap[size]
        )}
      />

      {/* Middle Counter-Rotating Ring (Counter-Clockwise) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        className={cn(
          "absolute inset-1.5 rounded-full border-b-brand-yellow border-l-brand-yellow-subtle/60 border-t-transparent border-r-transparent",
          ringWidthMap[size]
        )}
      />

      {/* Center Pulsing Core */}
      <motion.div
        animate={{ scale: [0.75, 1.25, 0.75], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="w-2 h-2 rounded-full bg-brand-yellow shadow-[0_0_8px_#F9B900]"
      />
    </div>
  );
}

// 2. Cyber Soundwave Equalizer
interface CyberEqualizerProps {
  className?: string;
  barColor?: string;
  height?: string;
}

export function CyberEqualizer({
  className = "",
  barColor = "bg-brand-yellow",
  height = "h-7",
}: CyberEqualizerProps) {
  return (
    <div className={cn("flex items-center space-x-1.5", height, className)}>
      <span className={cn("w-1 h-full rounded-full animate-soundwave-1 origin-bottom", barColor)} />
      <span className={cn("w-1 h-full rounded-full animate-soundwave-2 origin-bottom", barColor)} />
      <span className={cn("w-1.5 h-full rounded-full animate-soundwave-3 origin-bottom bg-brand-yellow-bright shadow-[0_0_8px_#FFC400]", barColor)} />
      <span className={cn("w-1 h-full rounded-full animate-soundwave-4 origin-bottom", barColor)} />
      <span className={cn("w-1 h-full rounded-full animate-soundwave-5 origin-bottom", barColor)} />
    </div>
  );
}

// 3. Magnetic Button Spinner
interface ButtonSpinnerProps {
  className?: string;
  size?: "sm" | "md";
  color?: string;
}

export function ButtonSpinner({
  className = "",
  size = "md",
  color = "border-current",
}: ButtonSpinnerProps) {
  const dimension = size === "sm" ? "w-3.5 h-3.5 border-2" : "w-4 h-4 border-2";
  return (
    <span
      className={cn(
        "inline-block rounded-full border-t-transparent animate-spin",
        dimension,
        color,
        className
      )}
      style={{ borderTopColor: "transparent" }}
    />
  );
}

// 4. Luxury Skeleton Shimmer Card
export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-brand-border bg-brand-off-white/60 p-6 shadow-sm",
        className
      )}
    >
      {/* Moving gold sheen beam */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-brand-yellow/15 to-transparent" />

      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-border/60" />
        <div className="space-y-2 flex-1">
          <div className="h-4 w-1/2 rounded bg-brand-border/60" />
          <div className="h-3 w-1/3 rounded bg-brand-border/40" />
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="h-3 w-full rounded bg-brand-border/50" />
        <div className="h-3 w-5/6 rounded bg-brand-border/40" />
        <div className="h-3 w-3/4 rounded bg-brand-border/30" />
      </div>

      <div className="mt-6 flex justify-between items-center pt-4 border-t border-brand-border/50">
        <div className="h-3 w-20 rounded bg-brand-border/40" />
        <div className="h-8 w-24 rounded-lg bg-brand-border/50" />
      </div>
    </div>
  );
}

// 5. Luxury Skeleton Event Card
export function SkeletonEvent({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-brand-border bg-white shadow-sm flex flex-col",
        className
      )}
    >
      {/* Moving gold sheen beam */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-brand-yellow/15 to-transparent" />

      {/* Banner Placeholder */}
      <div className="h-48 w-full bg-brand-border/50 relative">
        <div className="absolute top-4 left-4 h-6 w-24 rounded-full bg-brand-border/80" />
      </div>

      {/* Content Placeholder */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="h-3 w-28 rounded bg-brand-yellow/40" />
          <div className="h-5 w-4/5 rounded bg-brand-border/70" />
          <div className="h-3 w-full rounded bg-brand-border/40 pt-1" />
          <div className="h-3 w-2/3 rounded bg-brand-border/30" />
        </div>

        <div className="pt-4 border-t border-brand-border/50 flex items-center justify-between">
          <div className="h-4 w-32 rounded bg-brand-border/50" />
          <div className="h-10 w-28 rounded-xl bg-brand-border/60" />
        </div>
      </div>
    </div>
  );
}
