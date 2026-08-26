import React from "react";
import { Check, Star, Zap, Users } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function SponsorshipTiers() {
  return (
    <section className="py-20 sm:py-28 bg-brand-off-white border-b border-brand-border" id="tiers">
      <Container>
        <SectionHeading
          eyebrow="PARTNERSHIP TIERS"
          title="Find Your Place In The Experience."
          subtitle="Flexible sponsorship packages structured to deliver maximum return on brand investment."
          align="center"
        />

        {/* DOMINANT TITLE PARTNER CARD */}
        <div className="bg-brand-black text-white rounded-3xl p-8 sm:p-12 border-2 border-brand-yellow relative overflow-hidden shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/15 rounded-bl-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-yellow text-brand-black text-xs font-black uppercase tracking-wider">
                <Star className="h-3.5 w-3.5 fill-brand-black" />
                <span>EXCLUSIVITY • HIGHEST VISIBILITY</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                Title Partner
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Full naming rights integration ("Event Presented by Your Brand"). Dominant start-finish arch branding, main-stage presentation, and category exclusivity.
              </p>
              <div className="pt-2">
                <Button href="#contact" variant="primary" showArrow size="md">
                  Let's Build Your Title Partnership
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-brand-black-dark rounded-2xl p-6 border border-brand-black-gray space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                Title Partner Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-200">
                {[
                  "Official Event Naming Rights",
                  "Start & Finish Line Arch Branding",
                  "Category Exclusivity Guarantee",
                  "Dedicated 100sq.m Activation Zone",
                  "Co-Branded Digital & PR Campaigns",
                  "Participant Bib & T-Shirt Logo",
                  "Main Stage Award Presentation",
                  "Raw High-Res Event Video Rights"
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* OTHER THREE TIERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Powered By */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-colors shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow-dark">
                TIER 02
              </span>
              <h3 className="text-2xl font-extrabold text-brand-black">Powered By Partner</h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                Strong co-brand association across main signage, digital registration channels, and participant kits.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-black font-semibold pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Prominent Secondary Logo Placement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>50sq.m Dedicated Brand Activation Zone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Social Media & Email Blast Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Participant Swag Bag Insertion</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <Button href="#contact" variant="secondary" size="sm" className="w-full">
                Discuss Powered By Tier
              </Button>
            </div>
          </div>

          {/* Experience Partner */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-colors shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow-dark">
                TIER 03
              </span>
              <h3 className="text-2xl font-extrabold text-brand-black">Experience Partner</h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                Direct audience engagement focused on product sampling, interactive challenges, or hydration stations.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-black font-semibold pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Custom Experience/Sampling Booth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Hydration / Recovery Zone Naming</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Event Photo & Video Content Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Digital Directory Logo Listing</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <Button href="#contact" variant="secondary" size="sm" className="w-full">
                Discuss Experience Tier
              </Button>
            </div>
          </div>

          {/* Community Partner */}
          <div className="bg-white rounded-3xl border border-brand-border p-8 flex flex-col justify-between space-y-6 hover:border-brand-black transition-colors shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-yellow-dark">
                TIER 04
              </span>
              <h3 className="text-2xl font-extrabold text-brand-black">Community Partner</h3>
              <p className="text-xs sm:text-sm text-brand-gray leading-relaxed">
                Localized visibility for regional brands wanting direct association with community athletic health.
              </p>
              <ul className="space-y-2.5 text-xs text-brand-black font-semibold pt-2">
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Event Perimeter Banner Display</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Website Logo & Partner Listing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>Community Social Mention</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-brand-yellow-dark shrink-0" />
                  <span>VIP Passes for Corporate Team</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <Button href="#contact" variant="secondary" size="sm" className="w-full">
                Discuss Community Tier
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
