import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

export default function SponsorTestimonial() {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-white relative overflow-hidden border-b border-brand-black-gray">
      {/* Background Event Photography Overlay */}
      <Image
        src="/images/sponsors/event-gallery-03.jpg"
        alt="MadProTek Event Atmosphere"
        fill
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-brand-black z-10" />

      <Container className="max-w-4xl relative z-20 text-center">
        <div className="bg-brand-black-dark/90 rounded-3xl border border-brand-black-gray p-8 sm:p-14 relative backdrop-blur-md">
          <span className="text-7xl font-black text-brand-yellow leading-none block select-none mb-2">
            “
          </span>
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug max-w-2xl mx-auto">
            MadProTek gave us more than event visibility. It gave our brand a genuine connection with the people we wanted to reach.
          </blockquote>
          <div className="mt-8 pt-6 border-t border-brand-black-gray inline-block px-8">
            <p className="text-sm font-extrabold text-white">Sponsor Marketing Director</p>
            <p className="text-xs font-semibold text-brand-yellow uppercase tracking-wider mt-0.5">
              Title Sponsor Partner • (Editable Placeholder Testimonial)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
