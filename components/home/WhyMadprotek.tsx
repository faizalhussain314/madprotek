import React from "react";
import { Lightbulb, Award, Compass, Zap } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function WhyMadprotek() {
  const pillars = [
    {
      num: "01",
      title: "Innovation",
      icon: Lightbulb,
      description: "We deploy modern Next.js frameworks, cloud architectures, and GEO AI optimizations before they become mainstream."
    },
    {
      num: "02",
      title: "Expertise",
      icon: Award,
      description: "Our engineers, designers, and event marshals bring years of production experience across enterprise sectors."
    },
    {
      num: "03",
      title: "Strategy",
      icon: Compass,
      description: "Every line of code and marketing ad campaign is evaluated against bottom-line customer acquisition costs."
    },
    {
      num: "04",
      title: "Execution",
      icon: Zap,
      description: "Direct access to execution leads with zero account-manager layers. We deliver predictably on timeline."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="WHY MADPROTEK"
          title="Engineered for Business Impact"
          subtitle="Four core capabilities that define our multi-disciplinary execution model."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="flex flex-col space-y-4 p-6 rounded-2xl border border-brand-border hover:border-brand-yellow bg-white transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow-subtle text-brand-black flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-black text-brand-muted tracking-wider">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-brand-black pt-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
