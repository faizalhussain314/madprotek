import React from "react";
import { Code, Smartphone, Megaphone, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroServices() {
  const items = [
    { icon: Code, title: "Software Development" },
    { icon: Smartphone, title: "Web & Mobile Apps" },
    { icon: Megaphone, title: "Branding & Marketing" },
    { icon: Calendar, title: "Event Management" }
  ];

  return (
    <div className="w-full">
      {/* SVG Gradient definition for Lucide icons */}
      <svg className="w-0 h-0 absolute pointer-events-none" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="hero-icon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>

      {/* Quick Links Floating Glass Card */}
      <div 
        className="glass-card rounded-[18px] border border-brand-border bg-white/85 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-[12px] p-5 sm:p-6"
      >
        <div className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-4 md:gap-0 divide-y-0 md:divide-x divide-brand-border/40">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={cn(
                  "flex items-center space-x-3 md:px-4 first:pl-0 last:pr-0 transition-transform duration-300 hover:-translate-y-0.5",
                  // Divider handling
                  "py-1 md:py-0"
                )}
              >
                <div className="p-2 rounded-xl bg-brand-soft-blue text-brand-blue flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" style={{ stroke: "url(#hero-icon-grad)" }} />
                </div>
                <span className="text-[13px] sm:text-[14px] font-semibold text-brand-navy leading-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
