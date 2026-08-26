import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-20 lg:py-28 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-black bg-brand-yellow px-3 py-1 rounded-full">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mt-4">
            Selected Client <br />
            <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Engagements</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed mt-4">
            Explore our featured client work spanning software engineering, mobile platforms, visual brand design, and city-wide public event production.
          </p>
        </Container>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl border border-brand-border p-6 sm:p-8 hover:border-brand-black transition-all duration-300 bg-brand-off-white"
              >
                <div className="space-y-4">
                  {/* Thumbnail Banner */}
                  <div className="h-64 w-full rounded-2xl bg-brand-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern-dark opacity-10" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow relative z-10 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center relative z-10">
                      {project.title}
                    </h3>
                  </div>

                  {/* Copy Details */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-dark">
                      {project.client} • {project.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-black mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex justify-between items-center border-t border-brand-border mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-white border border-brand-border text-brand-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors shrink-0"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-black text-white">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold mb-3">Have a Project in Mind?</h2>
          <p className="text-sm text-brand-muted mb-6">
            Let's discuss how our technical engineering and brand strategy units can accelerate your business.
          </p>
          <Button href="/contact" variant="primary" showArrow>
            Start Your Project
          </Button>
        </Container>
      </section>
    </div>
  );
}
