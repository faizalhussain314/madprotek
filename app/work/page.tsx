import React from "react";
import Link from "next/link";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HighlightText from "@/components/ui/HighlightText";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <span className="text-xs font-black uppercase tracking-widest text-brand-black bg-brand-yellow px-4 py-1.5 rounded-full inline-block mb-3">
            PORTFOLIO SHOWCASE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight">
            Selected Client <br />
            <HighlightText delay={0.3}>Engagements</HighlightText>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed mt-4 font-normal">
            Explore live digital products, real estate platforms, hospital portals, and cloud solutions engineered by MadProTek Corp.
          </p>
        </Container>
      </section>

      {/* Portfolio Showcase Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {portfolioData.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl border border-brand-border p-6 sm:p-8 hover:border-brand-black transition-all duration-300 bg-brand-off-white shadow-sm"
              >
                <div className="space-y-4">
                  {/* Real Image Banner Showcase */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-64 sm:h-72 w-full rounded-2xl bg-brand-black relative overflow-hidden shadow-sm group/img"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider z-10 shadow-sm">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-xl bg-brand-black text-white text-xs font-bold inline-flex items-center space-x-1.5 shadow-lg">
                        <span>Visit Site</span>
                        <ExternalLink className="h-3.5 w-3.5 text-brand-yellow" />
                      </span>
                    </div>
                  </a>

                  {/* Copy Details */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow-dark">
                        {project.client} • {project.year}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-brand-black mt-1 mb-2 group-hover:text-brand-yellow-dark transition-colors">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4 items-center justify-between border-t border-brand-border mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-white border border-brand-border text-brand-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-black hover:bg-brand-yellow hover:text-brand-black transition-colors shrink-0"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
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
