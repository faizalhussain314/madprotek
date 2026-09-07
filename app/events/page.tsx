"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData, EventData } from "@/data/events";
import { Calendar, MapPin, Search, ArrowRight, Sparkles, Trophy, Globe, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SkeletonEvent } from "@/components/ui/LoadingKit";

export default function EventsPage() {
  const categories = ["All", "Marathons", "Adventure", "Off-Road", "Cricket", "Community", "Corporate"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [eventsList, setEventsList] = useState<EventData[]>(eventsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDynamicEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/events?t=${Date.now()}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache" },
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setEventsList(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch dynamic events", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDynamicEvents();
  }, []);

  const featuredEvent = eventsList.find((e) => e.featured) || eventsList[0] || eventsData[0];

  const filteredEvents = eventsList.filter((event) => {
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
          src={featuredEvent?.image || "/images/events/marathon/hero.png"}
          alt="MadProTek Outdoor Event Hero"
          fill
          priority
          className="object-cover object-center opacity-40"
        />

        {/* Dark Vignette + Yellow Glow Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[140px] pointer-events-none z-10" />

        <Container className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-yellow text-brand-black text-xs font-black uppercase tracking-widest shadow-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>MADPROTEK LIVE EXPERIENCES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.02] text-white">
              Events That Move <br />
              <span className="text-yellow-gradient">Communities & Athletes</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
              From sanctioned physical marathons and high-altitude trail expeditions to corporate sports leagues and city summits.
            </p>

            {/* Quick Action Links */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button href="#event-grid" variant="primary" size="lg" showArrow>
                Explore All Events
              </Button>
              <Button href="/sponsors" variant="dark" size="lg">
                Sponsor An Event
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. FEATURED SPOTLIGHT BANNER */}
      {featuredEvent && (
        <section className="py-12 bg-white border-b border-brand-border">
          <Container>
            <div className="relative rounded-3xl bg-brand-off-white border border-brand-border p-6 sm:p-10 lg:p-12 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
                    FEATURED HEADLINE EVENT
                  </span>
                  <span className="text-xs font-extrabold text-brand-yellow-dark">
                    {featuredEvent.category}
                  </span>
                  {featuredEvent.externalUrl && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold">
                      <Globe className="h-2.5 w-2.5" />
                      <span>Live Subdomain</span>
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-black leading-tight">
                  {featuredEvent.title}
                </h2>

                <p className="text-sm sm:text-base text-brand-gray max-w-xl leading-relaxed">
                  {featuredEvent.shortDescription}
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-brand-black">
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-brand-border">
                    <Calendar className="h-4 w-4 text-brand-yellow-dark" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 bg-white px-3 py-1.5 rounded-lg border border-brand-border">
                    <MapPin className="h-4 w-4 text-brand-yellow-dark" />
                    <span>{featuredEvent.venue || featuredEvent.location}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-md group">
                  <Image
                    src={featuredEvent.image || "/images/events/marathon/hero.png"}
                    alt={featuredEvent.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-black text-brand-yellow text-xs font-black uppercase tracking-wider shadow-sm">
                    {featuredEvent.status}
                  </div>
                </div>

                <div>
                  <Button
                    href={featuredEvent.externalUrl || `/events/${featuredEvent.slug}`}
                    target={featuredEvent.externalUrl ? "_blank" : undefined}
                    rel={featuredEvent.externalUrl ? "noopener noreferrer" : undefined}
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full"
                  >
                    {featuredEvent.externalUrl ? "Visit Event Website ↗" : "Register Now"}
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

      {/* 4. EVENTS GRID WITH SKELETON LOADER */}
      <section className="py-16 bg-white flex-grow">
        <Container>
          {loading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <SkeletonEvent key={idx} />
              ))}
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="py-20 text-center border-2 border-dashed border-brand-border rounded-3xl bg-brand-off-white/50">
              <p className="text-base font-bold text-brand-gray">No events found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-brand-black text-white text-xs font-bold hover:bg-brand-yellow hover:text-brand-black transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event) => {
                  const isExternal = Boolean(event.externalUrl);
                  const targetHref = isExternal ? event.externalUrl! : `/events/${event.slug}`;

                  return (
                    <motion.div
                      layout
                      key={event.id || event.slug}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group bg-white rounded-3xl border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                      {/* Image Banner */}
                      <a
                        href={targetHref}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="block relative h-64 sm:h-72 w-full bg-brand-black overflow-hidden cursor-pointer"
                      >
                        <Image
                          src={event.image || "/images/events/marathon/hero.png"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-black animate-ping" />
                            <span>{event.status}</span>
                          </div>

                          {isExternal && (
                            <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-brand-black/80 backdrop-blur-md text-brand-yellow text-[10px] font-extrabold uppercase tracking-wider border border-brand-yellow/30 shadow-sm">
                              <Globe className="h-3 w-3" />
                              <span>Separate Domain</span>
                            </div>
                          )}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block">
                            {event.category}
                          </span>
                          <h3 className="text-xl font-extrabold text-white line-clamp-1 group-hover:text-brand-yellow transition-colors">
                            {event.title}
                          </h3>
                        </div>
                      </a>

                      {/* Content Card Body */}
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
                          {isExternal ? (
                            <a
                              href={targetHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold group/btn shadow-sm"
                            >
                              <span>Visit Event Website</span>
                              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </a>
                          ) : (
                            <Link
                              href={targetHref}
                              className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold group/btn shadow-sm"
                            >
                              <span>Explore Event Details</span>
                              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
