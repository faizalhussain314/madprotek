import React from "react";
import Container from "../ui/Container";

export default function PartnerLogos() {
  const partners = [
    { name: "PARTNER 01", label: "Automotive & Energy" },
    { name: "PARTNER 02", label: "Sports & Nutrition" },
    { name: "PARTNER 03", label: "Banking & Financial" },
    { name: "PARTNER 04", label: "Tech & Telecommunications" },
    { name: "PARTNER 05", label: "Healthcare & Wellness" },
    { name: "PARTNER 06", label: "Media & Consumer Goods" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-off-white border-b border-brand-border">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-muted">
            TRUSTED BRAND COLLABORATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-black mt-2">
            Built For Brands That Want To Be Remembered.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="h-24 rounded-2xl bg-white border border-brand-border flex flex-col items-center justify-center p-4 text-center hover:border-brand-black transition-colors"
            >
              <span className="text-sm font-black text-brand-black tracking-wider">
                {p.name}
              </span>
              <span className="text-[9px] font-bold text-brand-muted uppercase mt-1">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
