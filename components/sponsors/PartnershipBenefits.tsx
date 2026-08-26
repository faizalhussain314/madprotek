import React from "react";
import { Users, Target, Camera, Award } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function PartnershipBenefits() {
  const benefits = [
    {
      num: "01",
      title: "Reach Real Communities",
      description: "Connect with active, engaged audiences through memorable physical experiences and outdoor activities.",
      icon: Users,
    },
    {
      num: "02",
      title: "Own The Experience",
      description: "Create meaningful brand touchpoints through custom event activations, live sampling, and interactive zones.",
      icon: Target,
    },
    {
      num: "03",
      title: "Create Content That Travels",
      description: "Generate authentic event photo/video content, viral social moments, and visual stories centered on your brand.",
      icon: Camera,
    },
    {
      num: "04",
      title: "Build Long-Term Association",
      description: "Associate your brand with outdoor adventure, athletic health, community leadership, and unforgettable memories.",
      icon: Award,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="WHY PARTNER WITH US"
          title="More Than Visibility. Real Brand Presence."
          subtitle="Your brand doesn't just appear at our events. It becomes part of the experience."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.num}
                className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-all duration-300 shadow-sm group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-yellow-subtle text-brand-black flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-black text-brand-muted tracking-widest">{b.num}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-black">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
