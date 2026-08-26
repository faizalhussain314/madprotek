"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function SponsorContact() {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [eventInterest, setEventInterest] = useState("Marathon");
  const [sponsorshipType, setSponsorshipType] = useState("Title Partner");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !companyName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-brand-border" id="contact">
      <Container className="max-w-4xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest bg-brand-yellow text-brand-black px-4 py-1.5 rounded-full inline-block mb-3">
            START A PARTNERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-[-0.04em]">
            Let's Build An Experience <br />
            Your Audience Remembers.
          </h2>
          <p className="text-sm sm:text-base text-brand-gray leading-relaxed mt-3">
            Tell us about your brand and we'll create a sponsorship partnership around your goals.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-brand-off-white border-2 border-brand-yellow rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-black">Partnership Inquiry Received</h3>
            <p className="text-sm text-brand-gray max-w-md mx-auto">
              Thank you, <span className="font-bold text-brand-black">{fullName}</span>. A senior event partnerships director from MadProTek will review your inquiry and reach out within 24 hours.
            </p>
            <div className="pt-2">
              <Button onClick={() => setIsSuccess(false)} variant="primary">
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-brand-off-white rounded-3xl border border-brand-border p-8 sm:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Acme Brand"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Event Interest
                  </label>
                  <select
                    value={eventInterest}
                    onChange={(e) => setEventInterest(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  >
                    <option value="Marathon">Marathon & Road Running</option>
                    <option value="Off-Road Adventure">Off-Road Jeep Expedition</option>
                    <option value="Outdoor Experience">Outdoor Challenge & Trek</option>
                    <option value="Multiple Events">Multiple Events / Annual</option>
                    <option value="Other">Custom Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                    Sponsorship Type
                  </label>
                  <select
                    value={sponsorshipType}
                    onChange={(e) => setSponsorshipType(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  >
                    <option value="Title Partner">Title Partner</option>
                    <option value="Powered By Partner">Powered By Partner</option>
                    <option value="Experience Partner">Experience Partner</option>
                    <option value="Community Partner">Community Partner</option>
                    <option value="Custom Partnership">Custom Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-brand-black uppercase tracking-wider mb-2">
                  Message / Goals Overview
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your marketing objectives or target demographics..."
                  className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <span className="inline-flex items-center justify-center space-x-2">
                    <Loader2 className="animate-spin h-5 w-5" />
                    <span>Submitting Inquiry...</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center space-x-2">
                    <span>Submit Inquiry</span>
                    <Send className="h-4 w-4 shrink-0" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        )}
      </Container>
    </section>
  );
}
