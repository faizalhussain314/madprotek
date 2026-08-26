import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { eventsData } from "@/data/events";
import { Calendar, MapPin, ArrowLeft, Shield, Users, Compass, Trophy } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC EVENT HERO PHOTOGRAPHY */}
      <section className="relative min-h-[65vh] lg:min-h-[550px] flex items-end pb-16 bg-brand-black text-white overflow-hidden border-b border-brand-black-gray">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent z-10" />

        <Container className="relative z-20 w-full">
          <Link
            href="/events"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-muted hover:text-brand-yellow mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to All Events</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-[10px] font-black uppercase bg-brand-yellow text-brand-black">
                <Trophy className="h-3.5 w-3.5" />
                <span>{event.category}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-brand-muted pt-1 font-bold">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-brand-yellow shrink-0" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end pt-4 lg:pt-0">
              {event.registrationEnabled ? (
                <Button href={`/events/${event.slug}/register`} variant="primary" size="lg" showArrow>
                  Register Now
                </Button>
              ) : (
                <div className="px-6 py-3 rounded-xl bg-brand-black-gray text-sm font-bold text-brand-muted border border-brand-black-gray">
                  Registration Closed
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 2. MAIN CONTENT + MASONRY EVENT GALLERY */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-black pb-3 border-b border-brand-border">
                  About The Event
                </h2>
                <p className="text-sm sm:text-base text-brand-gray leading-relaxed font-normal">
                  {event.description}
                </p>
              </div>

              {/* MASONRY / EDITORIAL PHOTOGRAPHY GALLERY */}
              {event.gallery && event.gallery.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-brand-black">
                      Event Photography & Action Moments
                    </h2>
                    <span className="text-xs font-black text-brand-yellow-dark uppercase tracking-widest">
                      LIVE MEDIA
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className={`group relative rounded-2xl overflow-hidden bg-brand-black border border-brand-border h-64 ${
                          idx === 0 ? "sm:col-span-2 h-80" : ""
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider">
                            {img.caption}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-black pb-3 border-b border-brand-border">
                  Event Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.highlights.map((hl) => (
                    <div key={hl.title} className="p-5 rounded-2xl border border-brand-border bg-brand-off-white shadow-sm flex flex-col justify-between">
                      <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">{hl.title}</span>
                      <span className="text-lg sm:text-xl font-extrabold text-brand-black mt-2 leading-none">{hl.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule */}
              <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-brand-black pb-3 border-b border-brand-border">
                  Event Schedule
                </h2>
                <div className="relative border-l-2 border-brand-yellow ml-4 pl-6 space-y-6">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-yellow border-4 border-white shadow-sm" />
                      <span className="text-xs font-black text-brand-black uppercase tracking-wider block">{item.time}</span>
                      <p className="text-sm font-bold text-brand-black mt-1 leading-snug">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-brand-off-white border border-brand-border rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-brand-black">Event Venue</h3>
                  <p className="text-xs text-brand-black font-extrabold uppercase tracking-widest mt-1">{event.venue}</p>
                  <p className="text-xs sm:text-sm text-brand-gray mt-2 leading-relaxed">{event.address}</p>
                </div>

                <div className="h-60 rounded-2xl overflow-hidden border border-brand-border relative bg-gray-200 flex items-center justify-center">
                  <iframe
                    src={event.mapEmbedUrlPlaceholder}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Google Map Placeholder"
                  />
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-brand-border bg-white space-y-4">
                <h4 className="text-xs font-bold text-brand-black uppercase tracking-wider">Safety & Support Standards</h4>
                <div className="space-y-3 text-xs text-brand-gray">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4.5 w-4.5 text-brand-yellow shrink-0" />
                    <span>Certified medical staff and ambulances stationed on-course.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-4.5 w-4.5 text-brand-yellow shrink-0" />
                    <span>Hydration, nutrition, and support marshals stationed throughout.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Compass className="h-4.5 w-4.5 text-brand-yellow shrink-0" />
                    <span>GPS route maps and timing sensor gates configured at checkpoint bounds.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
