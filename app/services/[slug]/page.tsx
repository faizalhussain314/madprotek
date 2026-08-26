import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconName = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-brand-off-white border-b border-brand-border">
        <Container className="relative z-10">
          <div className="flex items-center space-x-2 text-xs font-bold text-brand-muted mb-6 uppercase tracking-wider">
            <Link href="/services" className="hover:text-brand-black transition-colors">
              Services
            </Link>
            <Icons.ChevronRight className="h-3 w-3 text-brand-yellow" />
            <span className="text-brand-black font-extrabold">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex p-3 rounded-2xl bg-brand-yellow text-brand-black font-extrabold">
                <IconName className="h-6 w-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed max-w-3xl">
                {service.longDescription}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end pt-4 lg:pt-0">
              <Button href="/contact" variant="primary" showArrow size="lg">
                Request Strategy
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Breakdown */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow-dark">
                  CAPABILITY MATRIX
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-black">
                  What We Deliver in {service.title}
                </h2>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="p-5 rounded-2xl border border-brand-border bg-brand-off-white flex items-center space-x-3">
                      <Icons.CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0" />
                      <span className="text-sm font-bold text-brand-black">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-brand-black text-white rounded-3xl p-8 space-y-4">
                <h3 className="text-lg font-bold text-brand-yellow">Key Features & Guarantees</h3>
                <ul className="space-y-3">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-3 text-xs sm:text-sm text-gray-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-brand-black-gray">
                  <Button href="/contact" variant="primary" size="md" className="w-full">
                    Start {service.title} Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
