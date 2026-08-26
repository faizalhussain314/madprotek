"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import * as Icons from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-20 lg:py-28 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-black bg-brand-yellow px-3 py-1 rounded-full">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mt-4">
            Technology, Branding & Marketing<br />
            <span className="bg-brand-yellow px-2 py-0.5 inline-block text-brand-black">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed mt-4">
            We engineer custom software systems, design visual brand identities, launch acquisition marketing, and manage public events.
          </p>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.Code;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-black text-brand-muted tracking-widest">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-brand-black mb-3 group-hover:text-brand-yellow-dark transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-gray leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center space-x-2 text-xs text-brand-black font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-brand-border">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-xs font-bold text-brand-black hover:text-brand-yellow-dark group/link"
                    >
                      <span>Request Capability Proposal</span>
                      <Icons.ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-yellow text-brand-black">
        <Container className="text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold mb-3">Need a Custom Integrated Package?</h2>
          <p className="text-sm text-brand-black/80 mb-6 font-medium">
            We offer multi-disciplinary plans combining software build, branding, search optimization, and live event sponsorship.
          </p>
          <Button href="/contact" variant="dark" showArrow>
            Discuss Custom Requirements
          </Button>
        </Container>
      </section>
    </div>
  );
}
