"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  textColor?: string;
}

export default function HighlightText({
  children,
  className,
  delay = 0.35,
  textColor = "text-brand-black",
}: HighlightTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // 'once: true' ensures the animation runs strictly once when first viewed by the user
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  return (
    <span
      ref={ref}
      className={cn(
        "relative inline-block px-2 py-0.5 z-10 overflow-hidden rounded-lg align-baseline",
        textColor,
        className
      )}
    >
      {/* Left-to-Right Paint Sweep Background */}
      <motion.span
        className="absolute inset-0 bg-brand-yellow -z-10 rounded-lg origin-left pointer-events-none"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: shouldAnimate ? 1 : 0 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth paint stroke sweep ease
        }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
