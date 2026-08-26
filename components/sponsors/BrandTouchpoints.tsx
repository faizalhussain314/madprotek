import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function BrandTouchpoints() {
  const touchpoints = [
    { title: "Event Naming", desc: "Title integration across press, TV, and web portals." },
    { title: "Start / Finish Arch", desc: "High-impact photo backdrop captured by every participant." },
    { title: "Banners & Signage", desc: "Perimeter and course route visibility." },
    { title: "Participant Kits", desc: "Branded bib tags, t-shirts, and finisher gear." },
    { title: "Activation Zones", desc: "Dedicated spaces for live audience interaction." },
    { title: "Social Media", desc: "Targeted organic & paid pre/post-event campaign reach." },
    { title: "Digital Campaigns", desc: "Co-branded email blasts and registration website banners." },
    { title: "Photo & Video Content", desc: "High-res commercial footage for your brand library." },
    { title: "PR & Local Media", desc: "Press release inclusion and regional newspaper features." },
    { title: "Product Sampling", desc: "Direct hand-to-hand distribution to participants." },
    { title: "VIP Experiences", desc: "Hospitality passes and executive networking access." },
    { title: "Community Engagement", desc: "Grassroots sports and wellness program linkage." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="BRAND TOUCHPOINTS"
          title="Your Brand. Everywhere It Matters."
          subtitle="A comprehensive visual activation matrix spanning physical event spaces, digital media, and post-event campaigns."
          align="left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {touchpoints.map((tp, idx) => (
            <div
              key={tp.title}
              className="p-6 rounded-2xl border border-brand-border bg-brand-off-white hover:border-brand-black transition-all duration-300 relative group overflow-hidden"
            >
              {/* Yellow Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-yellow-dark">
                  TOUCHPOINT {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              </div>

              <h3 className="text-lg font-extrabold text-brand-black mb-2">{tp.title}</h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">{tp.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
