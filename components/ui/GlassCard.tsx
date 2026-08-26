import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-brand-border bg-white/90 shadow-[0_10px_40px_rgba(8,8,8,0.04)] backdrop-blur-[12px] p-6 overflow-hidden transition-all duration-300",
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/10 rounded-bl-full blur-xl pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
