import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function ActivationSection() {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white border-y border-brand-black-gray relative overflow-hidden">
      {/* Atmosphere Grids */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 space-y-12">
        <div className="max-w-3xl">
          <span className="text-xs font-black uppercase tracking-widest text-brand-yellow bg-brand-black-dark px-3.5 py-1.5 rounded-full border border-brand-black-gray inline-block mb-4">
            BRAND ACTIVATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.04em] leading-[1.05]">
            Don't Just Sponsor.<br />
            <span className="text-brand-yellow">Own The Moment.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed font-normal">
            From immersive sampling booths to interactive challenges, we help brands become part of the moments people remember.
          </p>
        </div>

        {/* Large Full-Width Activation Photography Banner */}
        <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden border-2 border-brand-yellow shadow-2xl group bg-brand-black-dark">
          <Image
            src="/images/sponsors/brand-activation.jpg"
            alt="MadProTek Full-Width Brand Activation Booth"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block mb-1">
                EXPERIENTIAL ACTIVATION HUB
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Live Participant Product Sampling & Interactive Challenges
              </h3>
            </div>
            <div className="px-4 py-2 rounded-xl bg-brand-yellow text-brand-black text-xs font-black uppercase shrink-0">
              TURNKEY BRAND ACTIVATION
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
