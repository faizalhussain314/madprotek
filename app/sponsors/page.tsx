import React from "react";
import SponsorHero from "@/components/sponsors/SponsorHero";
import SponsorStory from "@/components/sponsors/SponsorStory";
import EventCategories from "@/components/sponsors/EventCategories";
import ActivationSection from "@/components/sponsors/ActivationSection";
import PartnershipBenefits from "@/components/sponsors/PartnershipBenefits";
import SponsorshipTiers from "@/components/sponsors/SponsorshipTiers";
import SponsorGallery from "@/components/sponsors/SponsorGallery";
import AudienceSection from "@/components/sponsors/AudienceSection";
import PartnerLogos from "@/components/sponsors/PartnerLogos";
import SponsorTestimonial from "@/components/sponsors/SponsorTestimonial";
import PartnershipProcess from "@/components/sponsors/PartnershipProcess";
import SponsorContact from "@/components/sponsors/SponsorContact";

export const metadata = {
  title: "Put Your Brand In The Experience | MadProTek Event Sponsorships",
  description: "Partner with MadProTek to connect your brand with unforgettable marathons, off-road Jeep expeditions, and high-energy outdoor experiences.",
};

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Large Cinematic Sponsor Hero */}
      <SponsorHero />

      {/* 2. Image-First Sponsor Story */}
      <SponsorStory />

      {/* 3. Event Types For Sponsors (3 Large Photography Blocks) */}
      <EventCategories />

      {/* 4. Full-Width Brand Activation Section */}
      <ActivationSection />

      {/* 5. Touchpoints & Sponsor Benefits */}
      <PartnershipBenefits />

      {/* 6. Sponsorship Tiers (Title Partner Dominant) */}
      <SponsorshipTiers />

      {/* 7. Real Event Moments Masonry Gallery */}
      <SponsorGallery />

      {/* 8. Audience & Reach */}
      <AudienceSection />

      {/* 9. Partner Logos */}
      <PartnerLogos />

      {/* 10. Sponsor Testimonial */}
      <SponsorTestimonial />

      {/* 11. Sponsorship Process */}
      <PartnershipProcess />

      {/* 12. Lead Generation Enquiry Form */}
      <SponsorContact />
    </div>
  );
}
