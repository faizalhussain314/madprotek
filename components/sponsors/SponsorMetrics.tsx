import React from "react";
import Container from "../ui/Container";

export default function SponsorMetrics() {
  const metrics = [
    { value: "10K+", label: "Participants Reached", comment: "Editable placeholder metric" },
    { value: "50+", label: "Events & Experiences", comment: "Editable placeholder metric" },
    { value: "25+", label: "Brand Partners", comment: "Editable placeholder metric" },
    { value: "10+", label: "Host Cities & Regions", comment: "Editable placeholder metric" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-y border-brand-border">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y-0 md:divide-x divide-brand-border">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 first:pl-0">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-yellow-dark tracking-tight">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-brand-black uppercase tracking-wider mt-2">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
