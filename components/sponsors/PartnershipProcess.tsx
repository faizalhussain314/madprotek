import React from "react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function PartnershipProcess() {
  const steps = [
    { num: "01", title: "Tell Us About Your Brand", desc: "Share your target audience, marketing objectives, and campaign timeline." },
    { num: "02", title: "Choose Your Event", desc: "Select from upcoming marathons, off-road expeditions, or community challenges." },
    { num: "03", title: "Build Your Activation", desc: "Collaborate with our team to design custom on-ground touchpoints and sampling." },
    { num: "04", title: "Bring It To Life", desc: "Flawless event execution, live audience engagement, and post-event media deliverables." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="ONBOARDING PROCESS"
          title="Let's Build Something People Remember."
          subtitle="Four simple steps to launch your brand sponsorship activation."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-3xl border border-brand-border p-6 sm:p-8 flex flex-col space-y-4 hover:border-brand-black transition-colors shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-black text-brand-yellow font-extrabold text-lg flex items-center justify-center">
                {s.num}
              </div>
              <h3 className="text-xl font-extrabold text-brand-black pt-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
