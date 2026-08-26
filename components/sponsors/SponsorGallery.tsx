import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function SponsorGallery() {
  const galleryImages = [
    { src: "/images/sponsors/event-gallery-01.jpg", title: "Marathon Starting Line Arch", size: "col-span-1 md:col-span-2 row-span-2 h-96 md:h-[480px]" },
    { src: "/images/sponsors/event-gallery-02.jpg", title: "Off-Road 4x4 Jeep Convoy", size: "col-span-1 h-60 md:h-60" },
    { src: "/images/sponsors/event-gallery-03.jpg", title: "Cheering Spectator Crowd Zone", size: "col-span-1 h-60 md:h-60" },
    { src: "/images/sponsors/event-gallery-04.jpg", title: "Sampling Booth Activation", size: "col-span-1 h-60 md:h-60" },
    { src: "/images/sponsors/event-gallery-05.jpg", title: "Finisher Trophy Celebration", size: "col-span-1 md:col-span-2 h-60 md:h-60" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border">
      <Container>
        <SectionHeading
          eyebrow="EVENT GALLERY"
          title="Built Around Real Experiences."
          subtitle="Authentic moments captured across marathons, jeep trails, and experiential community events."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl overflow-hidden bg-brand-black border border-brand-border ${img.size}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-black text-brand-yellow uppercase tracking-widest block mb-0.5">
                  EVENT MOMENT 0{idx + 1}
                </span>
                <p className="text-sm font-extrabold text-white">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
