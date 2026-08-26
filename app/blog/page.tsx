"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { blogPostsData, BlogPost } from "@/data/blog";
import { Clock, User, Search, ArrowRight, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function BlogPage() {
  const categories = ["All", "Technology", "SEO", "Digital Marketing", "Branding", "AI & Modern Search", "Events"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured article (first one in general)
  const featuredPost = blogPostsData[0];
  const latestPosts = filteredPosts.filter((p) => p.id !== featuredPost.id || selectedCategory !== "All");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50 dark:bg-brand-navy border-b border-gray-150 dark:border-slate-800/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />
        <Container className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-indigo bg-brand-indigo/10 px-3 py-1 rounded-full">
              MadProTek Journal
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-navy dark:text-white leading-tight tracking-tight">
              Ideas, Insights & Practical Knowledge<br />
              <span className="text-gradient">For Modern Businesses</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover articles exploring software architectures, brand design, paid acquisition channels, SEO strategies, and event logistics.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Featured Article Section - Only shown when category is "All" and no search */}
      {selectedCategory === "All" && !searchQuery && featuredPost && (
        <section className="py-16 bg-white dark:bg-brand-navy border-b border-gray-100 dark:border-slate-850">
          <Container>
            <span className="text-xs font-black uppercase tracking-widest text-brand-indigo block mb-4">
              Featured Article
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Cover placeholder */}
              <div className="lg:col-span-7 h-80 rounded-3xl bg-gradient-to-tr from-brand-blue/30 via-brand-indigo/30 to-brand-violet/30 flex flex-col justify-center items-center relative overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm">
                <div className="absolute inset-0 bg-slate-950/20 z-10" />
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <span className="text-xs font-bold uppercase tracking-widest text-white/80 relative z-10">
                  MadProTek Strategic Article
                </span>
                <span className="text-3xl font-black text-white relative z-10 mt-2">FEATURED READ</span>
              </div>

              {/* Copy details */}
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase bg-brand-blue text-white shadow-sm">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-normal">
                  {featuredPost.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center space-x-4 text-xs text-gray-400 pt-2 pb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>

                <Button href={`/blog/${featuredPost.slug}`} variant="primary" showArrow>
                  Read Full Article
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Controls & Filters */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900/10 border-b border-gray-150 dark:border-slate-800/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-row overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = cat === selectedCategory;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "bg-brand-blue text-white shadow-sm"
                        : "bg-white dark:bg-slate-850 text-gray-505 dark:text-slate-400 border border-gray-150 dark:border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-850 border border-gray-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/30 text-brand-navy dark:text-white"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Grid list */}
      <section className="py-16 bg-white dark:bg-brand-navy flex-grow">
        <Container>
          {latestPosts.length === 0 ? (
            <div className="text-center py-16 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-gray-55/50 flex items-center justify-center text-gray-400 mx-auto mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">No Articles Found</h3>
              <p className="text-xs text-gray-500">
                Try revising your keywords or selecting another category filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {latestPosts.map((post) => (
                  <motion.article
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white dark:bg-brand-navy-light rounded-3xl border border-gray-150 dark:border-slate-800/80 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* Cover visual placeholder */}
                      <div className="relative h-44 w-full bg-gradient-to-br from-brand-indigo/25 via-brand-violet/25 to-brand-blue/25 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-slate-950/10 z-10" />
                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                        {/* Category badge */}
                        <span className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[9px] font-black uppercase bg-brand-blue text-white shadow-sm">
                          {post.category}
                        </span>

                        <div className="flex flex-col items-center justify-center text-white relative z-10">
                          <span className="text-sm font-black italic tracking-wide">JOURNAL</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                          </span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy dark:text-white mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-6 pt-0 mt-auto border-t border-gray-55 dark:border-slate-850 flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-gray-100 dark:border-slate-750">
                          <User className="h-4 w-4 text-gray-450" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-brand-navy dark:text-white leading-tight">
                            {post.author.name}
                          </p>
                          <p className="text-[9px] text-gray-405 leading-none">
                            {post.author.role}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-xs font-bold text-brand-blue hover:text-brand-indigo group/link"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
