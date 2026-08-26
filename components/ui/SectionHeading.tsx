import React from "react";
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
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center items-center",
        align === "left" && "text-left items-start",
        className
      )}
    >
      {displayLabel && (
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-yellow mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-yellow" />
          <span>{displayLabel}</span>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[1.05]",
          theme === "light" ? "text-brand-black" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg font-normal leading-relaxed max-w-2xl",
            theme === "light" ? "text-brand-gray" : "text-brand-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
