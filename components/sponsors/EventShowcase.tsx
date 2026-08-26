import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function EventShowcase() {
  const showcaseEvents = [
    {
      title: "Hosur Half Marathon 2026",
      category: "City Marathon",
      date: "October 18, 2026",
      location: "Hosur, Tamil Nadu",
      participants: "3,500+ Runners",
      partnerRole: "Title & Powered By Opportunities Available",
    },
    {
      title: "Yelagiri Adventure Trail Run",
      category: "Trail & Nature",
      date: "December 06, 2026",
      location: "Yelagiri Hills",
      participants: "1,200+ Hikers & Trail Runners",
      partnerRole: "Experience & Sampling Opportunities",
    },
    {
      title: "Corporate Cricket Clash 2026",
      category: "Corporate Sports",
      date: "November 14-15, 2026",
      location: "Hosur Sports Complex",
      participants: "32 Corporate Teams",
      partnerRole: "Team & Trophy Sponsorship Opportunities",
    },
    {
      title: "Western Ghats Off-Road Challenge",
      category: "Off-Road Expedition",
      date: "January 22-24, 2027",
      location: "Western Ghats Circuit",
      participants: "80 Off-Road Jeeps & Crew",
      partnerRole: "Automotive & Gear Partner Opportunities",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="EVENT PORTFOLIO"
          title="Where Brands Come To Life."
          subtitle="Explore upcoming event properties open for corporate sponsorship activations."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {showcaseEvents.map((evt) => (
            <div
              key={evt.title}
              className="bg-brand-off-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between hover:border-brand-black transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase bg-brand-yellow text-brand-black">
                    {evt.category}
                  </span>
                  <span className="text-xs font-semibold text-brand-muted">{evt.participants}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-brand-black group-hover:text-brand-yellow-dark transition-colors">
                  {evt.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-gray pt-1">
                  <span className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 text-brand-yellow-dark mr-1" />
                    {evt.date}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 text-brand-yellow-dark mr-1" />
                    {evt.location}
                  </span>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-border mt-6 flex justify-between items-center">
                <span className="text-xs font-bold text-brand-black">
                  {evt.partnerRole}
                </span>
                <Link
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors shrink-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
