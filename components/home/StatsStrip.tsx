import React from "react";
import Container from "../ui/Container";

export default function StatsStrip() {
  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Expert Professionals" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "100+", label: "Businesses Supported" },
  ];

  return (
    <section className="bg-brand-black text-white py-12 md:py-16 border-y border-brand-black-gray relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 md:divide-x divide-brand-black-gray/60">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 first:pl-0">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-yellow tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-brand-muted uppercase tracking-widest mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
