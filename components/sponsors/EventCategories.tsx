import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function EventCategories() {
  const categories = [
    {
      num: "01",
      title: "MARATHONS",
      copy: "Connect with fitness-focused communities through high-energy running experiences.",
      image: "/images/sponsors/marathon-sponsor.jpg",
    },
    {
      num: "02",
      title: "OFF-ROAD ADVENTURES",
      copy: "Take your brand beyond the ordinary with immersive off-road Jeep experiences.",
      image: "/images/sponsors/offroad-sponsor.jpg",
    },
    {
      num: "03",
      title: "OUTDOOR EXPERIENCES",
      copy: "Build meaningful connections through outdoor treks and community challenges.",
      image: "/images/sponsors/outdoor-sponsor.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border" id="opportunities">
      <Container>
        <SectionHeading
          eyebrow="EVENT CATEGORIES"
          title="Where Your Brand Shows Up."
          subtitle="Three core event properties designed for deep brand activation and high audience engagement."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((cat) => (
            <div
              key={cat.num}
              className="group bg-white rounded-3xl border border-brand-border overflow-hidden flex flex-col justify-between hover:border-brand-black transition-all duration-300 shadow-sm hover:-translate-y-1"
            >
              <div>
                {/* Large Photography Block (60% Area) */}
                <div className="relative h-64 sm:h-72 w-full bg-brand-black overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-brand-yellow text-brand-black text-[10px] font-black uppercase tracking-wider">
                    {cat.num} • {cat.title}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-brand-gray leading-relaxed font-normal">
                    {cat.copy}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-xl bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black transition-colors text-xs font-bold group/btn"
                >
                  <span>Explore Partnership</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
