import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventsData } from "@/data/events";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import RegistrationForm from "@/components/events/RegistrationForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventRegisterPage({ params }: PageProps) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-brand-navy py-12">
      <Container className="max-w-3xl">
        {/* Back Link */}
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-555 hover:text-brand-navy dark:hover:text-white mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to Event Details</span>
        </Link>

        {/* Client side Form Component */}
        <RegistrationForm event={event} />
      </Container>
    </div>
  );
}
