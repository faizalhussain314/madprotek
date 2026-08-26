import React from "react";
import { Heart, Compass, Briefcase, Users } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AudienceSection() {
  const metrics = [
    { value: "10K+", label: "Participants Reached", note: "Editable placeholder metric" },
    { value: "50+", label: "Events & Experiences", note: "Editable placeholder metric" },
    { value: "25+", label: "Brand Partners", note: "Editable placeholder metric" },
    { value: "10+", label: "Host Cities & Regions", note: "Editable placeholder metric" },
  ];

  const segments = [
    { title: "Fitness Enthusiasts", desc: "Passionate marathoners and health-focused individuals with high disposable income.", icon: Heart },
    { title: "Adventure Seekers", desc: "Off-road Jeep drivers, outdoor explorers, and thrill-seekers looking for mountain terrain.", icon: Compass },
    { title: "Young Professionals", desc: "Corporate executives, tech founders, and urban leaders participating in weekend sports.", icon: Briefcase },
    { title: "Families & Communities", desc: "Local community members, spectator families, and sports supporters.", icon: Users },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="AUDIENCE & REACH"
          title="Reach People Where They Live The Experience."
          subtitle="Direct physical and digital access to highly engaged, active audience demographics."
          align="center"
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-brand-border p-6 text-center space-y-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-yellow-dark block">
                {m.value}
              </span>
              <span className="text-xs font-extrabold text-brand-black uppercase tracking-wider block pt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Demographic Segments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="bg-white p-6 rounded-2xl border border-brand-border space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold text-brand-black">{s.title}</h3>
                <p className="text-xs text-brand-gray leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
