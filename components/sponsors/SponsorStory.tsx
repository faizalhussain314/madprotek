import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function SponsorStory() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Large Editorial Photograph (7 Cols) */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden border border-brand-border shadow-lg group bg-brand-black">
            <Image
              src="/images/sponsors/story-activation.jpg"
              alt="MadProTek Participant Brand Activation"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
              REAL BRAND PRESENCE
            </div>
          </div>

          {/* Asymmetric Editorial Story (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-yellow-dark">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>THE SPONSOR EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-[-0.04em] leading-[1.05]">
              More Than A Logo <br />
              <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">On A Banner.</span>
            </h2>

            <p className="text-base sm:text-lg font-bold text-brand-black leading-relaxed">
              Your brand doesn't just appear at our events. It becomes part of the experience.
            </p>

            <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
              MadProTek events are designed as active brand activation environments. From sampling booths at marathon finish villages to co-branded off-road Jeep convoys, we connect your product directly with active participants.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
