import React from "react";
import Container from "../ui/Container";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-black">
              <span className="w-2 h-2 rounded-full bg-brand-yellow" />
              <span>THE MADPROTEK PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-black tracking-[-0.04em] leading-[1.05]">
              Technology is what we build.<br />
              <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Impact</span> is why we build it.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 space-y-6 border-l-4 border-brand-yellow pl-6 sm:pl-8">
            <p className="text-base sm:text-lg text-brand-black font-semibold leading-relaxed">
              MadProTek Corp acts as a single partner for technical engineering, design branding, performance acquisition, and physical sports event production.
            </p>
            <p className="text-sm sm:text-base text-brand-gray leading-relaxed">
              Founded to eliminate agency friction, our team aligns software architectures and visual assets directly with enterprise revenue metrics.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">5+</span>
                <span className="text-xs font-bold text-brand-muted uppercase">Years Active</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">500+</span>
                <span className="text-xs font-bold text-brand-muted uppercase">Projects</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-black block">100%</span>
                <span className="text-xs font-bold text-brand-muted uppercase">In-House</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
