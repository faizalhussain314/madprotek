import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventsData } from "@/data/events";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function EventsPreview() {
  const featured = eventsData.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="MADPROTEK EVENTS"
            title="Events That Bring Ideas Together"
            subtitle="From technology sessions to business gatherings, our events create spaces for learning, collaboration and meaningful connections."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <div className="mt-6 md:mt-0">
            <Button href="/events" variant="primary" showArrow>
              View All Events
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-3xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Event Photo Banner */}
                <Link href={`/events/${event.slug}`} className="block h-48 w-full rounded-2xl bg-brand-black relative overflow-hidden mb-5 shadow-2xs group/img">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider z-10 shadow-sm">
                    {event.category}
                  </div>
                </Link>

                {/* Yellow Date Treatment */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-brand-yellow/20 text-brand-black font-black text-xs uppercase tracking-wider mb-3">
                  <Calendar className="h-3.5 w-3.5 text-brand-black" />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-brand-black mb-2 group-hover:text-brand-yellow-dark transition-colors line-clamp-1">
                  <Link href={`/events/${event.slug}`}>
                    {event.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray line-clamp-2 leading-relaxed mb-4">
                  {event.shortDescription}
                </p>

                <div className="flex items-center space-x-2 text-xs font-semibold text-brand-muted pt-3 border-t border-brand-border">
                  <MapPin className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="pt-5">
                <Link
                  href={`/events/${event.slug}`}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold"
                >
                  <span>View Event Details</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
