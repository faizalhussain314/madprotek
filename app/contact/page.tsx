"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import HighlightText from "@/components/ui/HighlightText";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Software Development");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="py-12 lg:py-16 bg-brand-off-white border-b border-brand-border">
        <Container className="text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-black bg-brand-yellow px-3 py-1 rounded-full">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mt-4">
            Let's Start a <br />
            <HighlightText delay={0.3}>Conversation</HighlightText>
          </h1>
          <p className="text-base sm:text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed mt-4">
            Have a project in mind, need technical architecture advice, or want to sponsor a public event? Reach out to our execution team directly.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-brand-black mb-3">Direct Contact Channels</h2>
                <p className="text-sm text-brand-gray leading-relaxed">
                  We respond to all enterprise project inquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-2xl border border-brand-border bg-brand-off-white">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-black uppercase">Corporate Office</h3>
                    <p className="text-xs sm:text-sm text-brand-gray mt-1">MadProTek Corp, Inner Ring Road, Hosur, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl border border-brand-border bg-brand-off-white">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-black uppercase">Phone Support</h3>
                    <a href="tel:+918489199319" className="text-xs sm:text-sm text-brand-black font-semibold hover:text-brand-yellow-dark mt-1 block">
                      +91 84891 99319
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl border border-brand-border bg-brand-off-white">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow text-brand-black flex items-center justify-center font-bold shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-black uppercase">Email Inquiries</h3>
                    <a href="mailto:info@madprotekcorp.com" className="text-xs sm:text-sm text-brand-black font-semibold hover:text-brand-yellow-dark mt-1 block break-all">
                      info@madprotekcorp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-brand-off-white border-2 border-brand-yellow rounded-3xl p-8 sm:p-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-black">Message Sent Successfully</h3>
                  <p className="text-sm text-brand-gray max-w-md mx-auto">
                    Thank you for contacting MadProTek Corp. A project specialist will review your request and get back to you shortly.
                  </p>
                  <div className="pt-4">
                    <Button onClick={() => setSubmitted(false)} variant="primary">
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-brand-off-white rounded-3xl border border-brand-border p-8 sm:p-10">
                  <h2 className="text-2xl font-extrabold text-brand-black mb-6">Send an Inquiry</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
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

                      <div>
                        <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                          Primary Capability Needed
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                        >
                          <option value="Software Development">Software Development</option>
                          <option value="Web & Mobile Apps">Web & Mobile Apps</option>
                          <option value="Branding & Creative">Branding & Creative</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Business Solutions">Business Solutions</option>
                          <option value="Event Management">Event Management</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                        Project Overview *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your project scope, timeline, and goals..."
                        className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      <span>Submit Inquiry</span>
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
