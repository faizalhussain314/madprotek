import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { eventsData } from "@/data/events";
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
              className="group bg-white rounded-3xl border border-brand-border p-6 sm:p-8 flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Yellow Date Treatment */}
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
                  <span>View Details</span>
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
