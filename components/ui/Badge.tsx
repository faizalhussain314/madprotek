import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors",
        variant === "primary" && "bg-brand-yellow text-brand-black",
        variant === "secondary" && "bg-brand-yellow-subtle text-brand-black border border-brand-yellow/30",
        variant === "dark" && "bg-brand-black text-white",
        variant === "outline" && "bg-transparent text-brand-black border border-brand-border",
        className
      )}
    >
      {children}
    </span>
  );
}
