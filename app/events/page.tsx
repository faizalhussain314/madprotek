"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "@/data/events";
import { Calendar, MapPin, Search, ArrowRight, Sparkles, Trophy } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function EventsPage() {
  const categories = ["All", "Marathons", "Adventure", "Off-Road", "Cricket", "Community", "Corporate"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredEvent = eventsData.find((e) => e.featured) || eventsData[0];

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC FULL-WIDTH HERO */}
      <section className="relative min-h-[60vh] lg:min-h-[550px] flex items-center justify-center overflow-hidden bg-brand-black text-white pt-8 lg:pt-12 pb-12 lg:pb-16">
        <Image
          src={featuredEvent.image}
          alt="MadProTek Outdoor Event Hero"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        {/* Dark Vignette + Yellow Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none z-10" />

        <Container className="relative z-20 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-black text-xs font-black uppercase tracking-widest mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              <span>MADPROTEK EXPERIENTIAL EVENTS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
              Experiences Worth <br />
              <span className="text-brand-yellow">Showing Up For.</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed font-normal">
              From city marathons to off-road expeditions, discover the high-energy physical experiences we're building next.
            </p>

            <div className="pt-2 flex justify-center">
              <Button href="#event-grid" variant="primary" size="lg" showArrow>
                Explore Events
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. FEATURED EVENT BANNER (Asymmetric split) */}
      {featuredEvent && (
        <section className="py-16 sm:py-20 bg-brand-off-white border-b border-brand-border">
          <Container>
            <div className="bg-brand-black text-white rounded-3xl border-2 border-brand-yellow overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
              {/* Image Side (60%) */}
              <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[450px] overflow-hidden group">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-black/90 hidden lg:block" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-black uppercase tracking-wider">
                  FEATURED EVENT
                </div>
              </div>

              {/* Info Side (40%) */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-yellow">
                    <Trophy className="h-4 w-4" />
                    <span>{featuredEvent.category}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    {featuredEvent.title}
                  </h2>

                  <p className="text-sm text-brand-muted leading-relaxed">
                    {featuredEvent.shortDescription}
                  </p>

                  <div className="space-y-2 text-xs font-bold text-gray-300 pt-2 border-t border-brand-black-gray">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-brand-yellow" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-brand-yellow" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Button href={`/events/${featuredEvent.slug}`} variant="primary" size="lg" showArrow className="w-full">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 3. CONTROLS & CATEGORY FILTER */}
      <section className="py-6 bg-white border-b border-brand-border sticky top-[76px] z-30 shadow-xs" id="event-grid">
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
                        ? "bg-brand-black text-brand-yellow shadow-sm"
                        : "bg-brand-off-white text-brand-gray hover:text-brand-black border border-brand-border"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
              <input
                type="text"
                placeholder="Search event title or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-brand-off-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. VISUAL-FIRST PHOTOGRAPHY GRID */}
      <section className="py-16 bg-white flex-grow">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm"
                >
                  {/* Large Photography Banner (65% Card Area) */}
                  <div className="relative h-64 sm:h-72 w-full bg-brand-black overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-black animate-ping" />
                      <span>{event.status}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-white line-clamp-1">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Copy & Details */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <p className="text-xs sm:text-sm text-brand-gray line-clamp-2 leading-relaxed">
                      {event.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-brand-border text-xs font-bold text-brand-muted">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3.5 w-3.5 text-brand-yellow-dark shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3.5 w-3.5 text-brand-yellow-dark shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/events/${event.slug}`}
                        className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold group/btn"
                      >
                        <span>Explore Event Details</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </div>
  );
}
