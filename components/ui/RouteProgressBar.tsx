"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When pathname finishes changing, complete and hide
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only trigger for internal links that are different from current pathname
      const isInternal =
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        href !== pathname;

      if (isInternal && !target.hasAttribute("download") && target.target !== "_blank") {
        setLoading(true);
        setProgress(30);

        // Advance to 75% while waiting for page compile/render
        setTimeout(() => {
          setProgress((prev) => (prev < 75 ? 75 : prev));
        }, 150);

        setTimeout(() => {
          setProgress((prev) => (prev < 90 ? 90 : prev));
        }, 350);
      }
    };

    document.addEventListener("click", handleAnchorClick, true);
    return () => {
      document.removeEventListener("click", handleAnchorClick, true);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99998] pointer-events-none h-[3px] overflow-hidden bg-transparent">
      {/* Animated Top Laser Bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-brand-yellow-dark via-brand-yellow to-white relative"
        style={{
          width: `${progress}%`,
          transition: progress === 100 ? "width 0.2s ease-out" : "width 0.35s ease-in-out",
          boxShadow: "0 0 14px #FFC400, 0 0 28px rgba(249, 185, 0, 0.8)",
        }}
      >
        {/* Leading glowing pulse beacon */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#FFFFFF]" />
      </motion.div>
    </div>
  );
}
