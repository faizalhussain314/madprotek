import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function PortfolioPreview() {
  const featured = portfolioData.slice(0, 3);
  const mainProject = featured[0];
  const sideProjects = featured.slice(1, 3);

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Recent Client Engagements"
            subtitle="Explore how we integrate custom software, brand identity design, and acquisition marketing."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/work" variant="secondary" showArrow>
              View All Work
            </Button>
          </div>
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Large Project (60%) */}
          {mainProject && (
            <div className="lg:col-span-7 group flex flex-col justify-between rounded-3xl border border-brand-border p-6 sm:p-8 hover:border-brand-black transition-all duration-300 bg-brand-off-white">
              <div className="space-y-4">
                {/* Real Image Banner Showcase */}
                <div className="h-64 sm:h-80 w-full rounded-2xl bg-brand-black relative overflow-hidden shadow-sm">
                  <Image
                    src={mainProject.image}
                    alt={mainProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider z-10 shadow-sm">
                    {mainProject.category}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-brand-yellow-dark">
                    {mainProject.client} • {mainProject.year}
                  </span>
                  <h3 className="text-2xl font-extrabold text-brand-black mt-1 mb-2">
                    {mainProject.title}
                  </h3>
                  <p className="text-sm text-brand-gray leading-relaxed font-normal">
                    {mainProject.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 flex justify-between items-center border-t border-brand-border mt-6">
                <div className="flex flex-wrap gap-2">
                  {mainProject.tags.map((tag) => (
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
          )}

          {/* Side Projects (40%) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sideProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl border border-brand-border p-6 hover:border-brand-black transition-all duration-300 bg-brand-off-white flex-1"
              >
                <div className="space-y-3">
                  {/* Real Image Banner Showcase */}
                  <div className="h-44 w-full rounded-2xl bg-brand-black relative overflow-hidden shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-yellow text-brand-black text-[9px] font-black uppercase tracking-wider z-10 shadow-sm">
                      {project.category}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-yellow-dark">
                      {project.client}
                    </span>
                    <h4 className="text-lg font-extrabold text-brand-black mt-0.5 line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-brand-gray line-clamp-2 leading-relaxed mt-1 font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center border-t border-brand-border mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-brand-border text-brand-gray">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors shrink-0"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
