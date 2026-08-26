import React from "react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-soft-blue text-brand-blue text-[13px] sm:text-[14px] font-medium border border-brand-blue/10 tracking-wide select-none">
      <span>Technology</span>
      <span className="mx-2 text-brand-blue/30">•</span>
      <span>Branding</span>
      <span className="mx-2 text-brand-blue/30">•</span>
      <span>Marketing</span>
      <span className="mx-2 text-brand-blue/30">•</span>
      <span>Events</span>
    </div>
  );
}
