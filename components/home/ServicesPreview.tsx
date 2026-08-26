"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function ServicesPreview() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="What We Do"
          subtitle="We turn ambitious ideas into digital products, memorable brands and measurable growth."
          align="left"
        />

        {/* Editorial Rows */}
        <div className="mt-12 divide-y divide-brand-border border-y border-brand-border">
          {servicesData.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group flex flex-col md:flex-row md:items-center justify-between p-6 sm:p-8 transition-all duration-300 relative ${
                hoveredIdx === idx ? "bg-brand-yellow-subtle/50 pl-8 sm:pl-10" : "bg-transparent"
              }`}
            >
              {/* Left yellow bar indicator */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1.5 bg-brand-yellow transition-all duration-300 ${
                  hoveredIdx === idx ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="flex items-start md:items-center space-x-6 md:space-x-10 max-w-xl">
                <span className="text-sm font-extrabold text-brand-muted tracking-widest pt-1 md:pt-0">
                  {service.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-black group-hover:text-brand-black-dark transition-colors">
                  {service.title}
                </h3>
              </div>

              <div className="mt-4 md:mt-0 md:max-w-md lg:max-w-lg flex items-center justify-between space-x-6">
                <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                  {service.description}
                </p>
                <div className="w-10 h-10 rounded-full border border-brand-border group-hover:border-brand-black group-hover:bg-brand-black group-hover:text-brand-yellow flex items-center justify-center shrink-0 transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
