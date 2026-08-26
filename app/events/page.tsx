"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "@/data/events";
import { Calendar, MapPin, Search, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function EventsPage() {
  const categories = ["All", "Marathons", "Adventure", "Off-Road", "Cricket", "Community", "Corporate"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
      {/* Hero Header */}
      <section className="py-20 lg:py-28 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-black bg-brand-yellow px-3 py-1 rounded-full">
            MADPROTEK EVENTS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mt-4">
            Events That Create <br />
            <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Connections</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed mt-4">
            From city-wide marathons and trail runs to corporate sports leagues and business summits, we manage registrations, timing tech, and logistics.
          </p>
        </Container>
      </section>

      {/* Controls & Filters */}
      <section className="py-6 bg-white border-b border-brand-border">
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

      {/* Events Grid */}
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
                  className="group bg-white rounded-3xl border border-brand-border p-6 flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm"
                >
                  <div>
                    {/* Yellow Date Badge */}
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-brand-yellow font-black text-brand-black text-xs uppercase tracking-wider mb-4">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-brand-black mb-3 group-hover:text-brand-yellow-dark transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-gray line-clamp-3 leading-relaxed mb-6">
                      {event.shortDescription}
                    </p>

                    <div className="flex items-center space-x-2 text-xs font-semibold text-brand-muted pt-4 border-t border-brand-border">
                      <MapPin className="h-4 w-4 text-brand-yellow shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/events/${event.slug}`}
                      className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold"
                    >
                      <span>View Details & Register</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
