"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Globe, Sparkles, Search, Grid, List, X, Play, Tag } from "lucide-react";
import { portfolioData, PortfolioItem } from "@/data/portfolio";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [quickViewProject, setQuickViewProject] = useState<PortfolioItem | null>(null);

  const categories = [
    "All",
    "Video & Motion",
    "Fintech",
    "Real Estate",
    "Healthcare",
    "EdTech",
    "Non-Profit",
    "Enterprise",
  ];

  // Dynamic filter and search computation
  const filteredProjects = useMemo(() => {
    return portfolioData.filter((project) => {
      // Category check
      let categoryMatch = true;
      if (activeCategory === "Video & Motion") categoryMatch = project.category.includes("Video") || project.category.includes("Motion");
      else if (activeCategory === "Fintech") categoryMatch = project.category.includes("Fintech");
      else if (activeCategory === "Real Estate") categoryMatch = project.category.includes("Real Estate");
      else if (activeCategory === "Healthcare") categoryMatch = project.category.includes("Healthcare");
      else if (activeCategory === "EdTech") categoryMatch = project.category.includes("EdTech");
      else if (activeCategory === "Non-Profit") categoryMatch = project.category.includes("Non-Profit");
      else if (activeCategory === "Enterprise") categoryMatch = project.category.includes("Enterprise") || project.category.includes("Legal") || project.category.includes("Technology");

      // Search query check
      let searchMatch = true;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        searchMatch =
          project.title.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query));
      }

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  const featuredProject = portfolioData[0]; // Fintech Financial Solution

  return (
    <section className="py-20 sm:py-28 bg-white text-brand-black relative overflow-hidden border-b border-brand-border">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-brand-yellow-subtle/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-warm-white rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-subtle border border-brand-yellow/30 text-brand-black text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 text-brand-black" />
              <span>LIVE CLIENT ENGAGEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
              Featured Client <span className="bg-brand-yellow px-2 py-0.5 rounded-lg">Deployments</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-gray mt-3 max-w-xl font-normal leading-relaxed">
              Real-world digital banking engines, video productions, real estate portals, and cloud ERP systems built by MadProTek.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="hidden sm:flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-brand-off-white border border-brand-border text-xs font-bold text-brand-black">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{portfolioData.length} Live Work Projects</span>
            </div>
            <Button href="/work" variant="primary" showArrow size="md">
              View Full Work
            </Button>
          </div>
        </div>

        {/* Dynamic Controls Bar: Category Tabs, Search Bar, View Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-border">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto scrollbar-none py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-brand-black text-white shadow-md font-extrabold scale-[1.02]"
                    : "bg-brand-off-white text-brand-gray hover:bg-brand-yellow/30 hover:text-brand-black border border-brand-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input & View Toggle */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Dynamic Search Box */}
            <div className="relative flex-1 md:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-muted" />
              <input
                type="text"
                placeholder="Search projects or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-brand-border bg-brand-off-white text-xs text-brand-black placeholder:text-brand-muted focus:bg-white focus:border-brand-black focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-black cursor-pointer"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-brand-off-white border border-brand-border rounded-xl">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid" ? "bg-brand-black text-white" : "text-brand-muted hover:text-brand-black"
                }`}
                title="Grid View"
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "list" ? "bg-brand-black text-white" : "text-brand-muted hover:text-brand-black"
                }`}
                title="List View"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        {(searchQuery || activeCategory !== "All") && (
          <div className="mb-6 flex items-center justify-between text-xs text-brand-gray font-medium">
            <span>
              Showing <strong className="text-brand-black font-extrabold">{filteredProjects.length}</strong> of {portfolioData.length} projects
            </span>
            {(searchQuery || activeCategory !== "All") && (
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="text-brand-yellow-dark font-bold hover:underline cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        )}

        {/* Dynamic Project Showcase (Grid vs List View) */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-brand-border rounded-3xl bg-brand-off-white/50">
            <p className="text-sm font-bold text-brand-gray">No projects match your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-brand-black text-white text-xs font-bold hover:bg-brand-yellow hover:text-brand-black transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}-${viewMode}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "flex flex-col space-y-4"
              }
            >
              {filteredProjects.map((project, idx) => {
                const domainName = project.url.replace("https://", "").replace("http://", "").replace("www.", "").replace("/", "");

                if (viewMode === "list") {
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="group flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl border border-brand-border bg-brand-off-white hover:bg-white hover:border-brand-black transition-all duration-300 shadow-2xs gap-4"
                    >
                      <div className="flex items-center space-x-4 w-full sm:w-auto">
                        <div className="w-16 h-16 rounded-xl bg-brand-black relative overflow-hidden shrink-0">
                          <Image src={project.image} alt={project.title} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-brand-yellow-dark tracking-wider">
                            {project.client} • {project.year}
                          </span>
                          <h4 className="text-base font-extrabold text-brand-black group-hover:text-brand-yellow-dark transition-colors line-clamp-1">
                            {project.title}
                          </h4>
                          <p className="text-xs text-brand-gray line-clamp-1 font-normal">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-brand-border pt-3 sm:pt-0">
                        <button
                          onClick={() => setQuickViewProject(project)}
                          className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white border border-brand-border hover:bg-brand-black hover:text-white transition-colors cursor-pointer"
                        >
                          Quick View
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg text-xs font-extrabold bg-brand-yellow text-brand-black hover:bg-brand-yellow-bright transition-colors flex items-center space-x-1"
                        >
                          <span>Visit</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </motion.div>
                  );
                }

                // Grid View Card
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group flex flex-col justify-between rounded-3xl border border-brand-border bg-brand-off-white p-6 hover:border-brand-black hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      {/* Real Banner Showcase */}
                      <div
                        onClick={() => setQuickViewProject(project)}
                        className="block h-52 w-full rounded-2xl bg-brand-black relative overflow-hidden border border-brand-border group/img shadow-2xs cursor-pointer"
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

                        <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <span className="px-3 py-1.5 rounded-xl bg-brand-black text-white text-xs font-extrabold inline-flex items-center space-x-1.5 shadow-lg">
                            <span>Quick View</span>
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-brand-yellow-dark mb-1">
                          <span>{project.client}</span>
                          <span className="text-brand-gray">{project.year}</span>
                        </div>

                        <h4 className="text-xl font-extrabold text-brand-black line-clamp-1 group-hover:text-brand-yellow-dark transition-colors">
                          <button
                            onClick={() => setQuickViewProject(project)}
                            className="hover:underline text-left cursor-pointer"
                          >
                            {project.title}
                          </button>
                        </h4>

                        <p className="text-xs text-brand-gray line-clamp-2 leading-relaxed mt-2 font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 flex items-center justify-between border-t border-brand-border mt-5">
                      <div className="flex flex-wrap gap-1.5 max-w-[170px]">
                        {project.tags.slice(0, 2).map((t) => (
                          <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-brand-border text-brand-gray">
                            {t}
                          </span>
                        ))}
                      </div>

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
        )}
      </Container>

      {/* QUICK VIEW PROJECT MODAL */}
      <AnimatePresence>
        {quickViewProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuickViewProject(null)}
              className="fixed inset-0 bg-brand-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-brand-border shadow-2xl overflow-hidden z-10 my-auto p-6 sm:p-8"
            >
              <button
                onClick={() => setQuickViewProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-off-white text-brand-black hover:bg-brand-black hover:text-white transition-colors cursor-pointer z-20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                <div className="h-60 sm:h-72 w-full rounded-2xl bg-brand-black relative overflow-hidden shadow-md">
                  <Image
                    src={quickViewProject.image}
                    alt={quickViewProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
                    {quickViewProject.category}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-brand-yellow-dark uppercase tracking-widest">
                    <span>{quickViewProject.client}</span>
                    <span>•</span>
                    <span>Year {quickViewProject.year}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-brand-black mt-1">
                    {quickViewProject.title}
                  </h3>

                  <p className="text-sm text-brand-gray mt-3 leading-relaxed">
                    {quickViewProject.description}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {quickViewProject.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-lg bg-brand-off-white border border-brand-border text-brand-black">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center justify-end space-x-3 border-t border-brand-border mt-6">
                    <button
                      onClick={() => setQuickViewProject(null)}
                      className="px-5 py-2.5 rounded-xl border border-brand-border text-xs font-bold text-brand-gray hover:text-brand-black"
                    >
                      Close Window
                    </button>
                    <a
                      href={quickViewProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-brand-yellow text-brand-black text-xs font-extrabold hover:bg-brand-yellow-bright transition-colors inline-flex items-center space-x-2 shadow-sm"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
