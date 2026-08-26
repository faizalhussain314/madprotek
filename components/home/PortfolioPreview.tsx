"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Globe, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Fintech", "Real Estate", "Healthcare", "EdTech", "Non-Profit", "Enterprise"];

  const filteredProjects = portfolioData.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Fintech") return project.category.includes("Fintech");
    if (activeCategory === "Real Estate") return project.category.includes("Real Estate");
    if (activeCategory === "Healthcare") return project.category.includes("Healthcare");
    if (activeCategory === "EdTech") return project.category.includes("EdTech");
    if (activeCategory === "Non-Profit") return project.category.includes("Non-Profit");
    if (activeCategory === "Enterprise") return project.category.includes("Legal") || project.category.includes("Enterprise");
    return true;
  });

  const featuredProject = portfolioData[0]; // Fintech Financial Solution
  const secondaryProjects = filteredProjects;

  return (
    <section className="py-20 sm:py-28 bg-white text-brand-black relative overflow-hidden border-b border-brand-border">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-brand-yellow-subtle/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-warm-white rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-subtle border border-brand-yellow/30 text-brand-black text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 text-brand-black" />
              <span>LIVE CLIENT ENGAGEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Featured Client <span className="bg-brand-yellow px-2 py-0.5 rounded-lg">Deployments</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-gray mt-3 max-w-xl font-normal leading-relaxed">
              Real-world digital banking engines, real estate portals, hospital portals, and cloud ERP systems built by MadProTek.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-off-white border border-brand-border text-xs font-bold text-brand-black">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>7 Verified Client Sites Live</span>
            </div>
            <Button href="/work" variant="primary" showArrow size="md">
              View All Projects
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-brand-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-black text-white shadow-md font-extrabold scale-[1.02]"
                  : "bg-brand-off-white text-brand-gray hover:bg-brand-yellow/20 hover:text-brand-black border border-brand-border/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Main Spotlight Project (when 'All' is selected) */}
        {activeCategory === "All" && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-3xl border-2 border-brand-border bg-gradient-to-br from-brand-off-white via-white to-brand-yellow-subtle/30 p-6 sm:p-10 hover:border-brand-black transition-all duration-500 group shadow-xl relative overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-brand-yellow" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-md bg-brand-black text-white text-[10px] font-black uppercase tracking-wider">
                    FEATURED CASE STUDY
                  </span>
                  <span className="text-xs font-extrabold text-brand-yellow-dark flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{featuredProject.client}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight group-hover:text-brand-yellow-dark transition-colors">
                  <a href={featuredProject.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {featuredProject.title}
                  </a>
                </h3>

                <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                  {featuredProject.description}
                </p>

                {/* Domain & Tech Stack */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold shadow-sm"
                  >
                    <Globe className="h-3.5 w-3.5 text-brand-yellow group-hover:text-brand-black" />
                    <span>fintechfinancialsolution.com</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>

                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-white border border-brand-border text-brand-gray shadow-2xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-brand-yellow text-brand-black font-extrabold text-sm hover:bg-brand-yellow-bright transition-all shadow-md hover:scale-[1.02]"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <Link
                    href="/work"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white text-brand-black font-bold text-sm hover:bg-brand-black hover:text-white transition-colors border border-brand-black"
                  >
                    <span>Explore All Engagements</span>
                    <ArrowRight className="h-4 w-4 text-brand-yellow" />
                  </Link>
                </div>
              </div>

              {/* Right Interactive Image Frame */}
              <div className="lg:col-span-6 relative">
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-72 sm:h-96 w-full rounded-2xl bg-brand-black relative overflow-hidden border border-brand-border shadow-lg group/img"
                >
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/75 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-brand-black text-xs font-bold inline-flex items-center space-x-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Verified Production</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block">
                        LIVE URL
                      </span>
                      <p className="text-sm font-extrabold text-white">
                        www.fintechfinancialsolution.com
                      </p>
                    </div>
                    <span className="p-3 rounded-full bg-brand-yellow text-brand-black group-hover/img:scale-110 transition-transform shadow-md">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {secondaryProjects
              .filter((p) => activeCategory !== "All" || p.id !== featuredProject?.id)
              .map((project, idx) => {
                const domainName = project.url.replace("https://", "").replace("www.", "").replace("/", "");
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group flex flex-col justify-between rounded-3xl border border-brand-border bg-brand-off-white p-6 hover:border-brand-black hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Real Banner Showcase */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-52 w-full rounded-2xl bg-brand-black relative overflow-hidden border border-brand-border group/img shadow-2xs"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-brand-yellow text-brand-black text-[9px] font-black uppercase tracking-wider z-10 shadow-sm">
                          {project.category}
                        </div>

                        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-brand-black text-white text-xs font-extrabold inline-flex items-center space-x-1.5 shadow-lg">
                            <span>Visit Website</span>
                            <ExternalLink className="h-3.5 w-3.5 text-brand-yellow" />
                          </span>
                        </div>
                      </a>

                      <div>
                        <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-brand-yellow-dark mb-1">
                          <span>{project.client}</span>
                          <span className="text-brand-gray">{project.year}</span>
                        </div>

                        <h4 className="text-xl font-extrabold text-brand-black line-clamp-1 group-hover:text-brand-yellow-dark transition-colors">
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {project.title}
                          </a>
                        </h4>

                        <p className="text-xs text-brand-gray line-clamp-2 leading-relaxed mt-2 font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 flex items-center justify-between border-t border-brand-border mt-5">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-gray hover:text-brand-black transition-colors"
                      >
                        <Globe className="h-3.5 w-3.5 text-brand-yellow-dark" />
                        <span className="truncate max-w-[160px] font-semibold">{domainName}</span>
                      </a>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-brand-black text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all shrink-0 shadow-sm"
                        title={`Visit ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
