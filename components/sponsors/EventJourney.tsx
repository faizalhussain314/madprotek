import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function EventJourney() {
  const phases = [
    {
      stage: "BEFORE EVENT",
      step: "01",
      title: "Discover & Register",
      desc: "Co-branded social media teasers, digital ad campaigns, and prominent logo placement on registration web portals.",
      tag: "Digital Touchpoints",
    },
    {
      stage: "DURING EVENT",
      step: "02",
      title: "Experience & Engage",
      desc: "Start/finish arch branding, bib tag logos, sampling booths, live announcers, and experiential brand zones.",
      tag: "On-Ground Touchpoints",
    },
    {
      stage: "AFTER EVENT",
      step: "03",
      title: "Share & Remember",
      desc: "Finisher photo galleries, post-event video edits, social media recaps, and co-branded email thank-you blasts.",
      tag: "Post-Event Amplification",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="SPONSOR INTEGRATION JOURNEY"
          title="Presence Across The Full Participant Journey"
          subtitle="Your sponsorship spans before, during, and long after event day."
          align="center"
        />

        {/* Timeline Header Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 my-8 text-xs font-black text-brand-black uppercase tracking-widest">
          {["DISCOVER", "REGISTER", "EXPERIENCE", "ENGAGE", "SHARE", "REMEMBER"].map((st, i) => (
            <React.Fragment key={st}>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-brand-border">{st}</span>
              {i < 5 && <span className="text-brand-yellow font-black">→</span>}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-colors shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
                    {phase.stage}
                  </span>
                  <span className="text-xs font-black text-brand-muted">{phase.step}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-brand-black">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <span className="text-xs font-bold text-brand-yellow-dark uppercase tracking-wider">
                  {phase.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
