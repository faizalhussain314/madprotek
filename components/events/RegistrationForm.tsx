"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2, Calendar, MapPin } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

interface RegistrationFormProps {
  event: {
    title: string;
    category: string;
    venue: string;
    date: string;
    location: string;
    slug: string;
  };
}

export default function RegistrationForm({ event }: RegistrationFormProps) {
  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [attendees, setAttendees] = useState("1");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [refNumber, setRefNumber] = useState("");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};

    if (!fullName.trim()) tempErrors.fullName = "Full Name is required";
    
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (phone.length < 10) {
      tempErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!termsAccepted) {
      tempErrors.terms = "You must agree to the terms and rules to register";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedRef = "MPT-" + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
    }, 1200);
  };

  return (
    <div className="py-12 bg-white min-h-[80vh]">
      <Container className="max-w-3xl">
        {/* Back Link */}
        <Link
          href={`/events/${event.slug}`}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-gray hover:text-brand-black mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to Event Details</span>
        </Link>

        {isSuccess ? (
          /* SUCCESS STATE */
          <div className="bg-brand-off-white border-2 border-brand-yellow rounded-3xl p-8 sm:p-12 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-extrabold text-brand-black">You're Registered!</h2>

            <p className="text-sm text-brand-gray max-w-md mx-auto">
              Your registration for <span className="font-bold text-brand-black">{event.title}</span> has been received. We'll be in touch with the event details.
            </p>

            <div className="bg-white p-4 rounded-xl border border-brand-border inline-block text-left">
              <p className="text-xs text-brand-muted uppercase font-bold">Registration Reference</p>
              <p className="text-xl font-black text-brand-black tracking-widest">{refNumber}</p>
            </div>

            <div className="pt-4 flex justify-center space-x-4">
              <Button href="/events" variant="primary">
                Explore More Events
              </Button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <div className="bg-brand-off-white rounded-3xl border border-brand-border p-6 sm:p-10">
            <div className="mb-8 pb-6 border-b border-brand-border">
              <span className="px-3 py-1 rounded-md text-[10px] font-black uppercase bg-brand-yellow text-brand-black">
                {event.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-black mt-2">
                Register for {event.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-brand-muted mt-2">
                <span className="flex items-center"><Calendar className="h-3.5 w-3.5 text-brand-yellow mr-1" />{event.date}</span>
                <span className="flex items-center"><MapPin className="h-3.5 w-3.5 text-brand-yellow mr-1" />{event.venue}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 text-sm bg-white border ${
                      errors.fullName ? "border-red-500" : "border-brand-border"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium`}
                  />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 text-sm bg-white border ${
                      errors.email ? "border-red-500" : "border-brand-border"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 text-sm bg-white border ${
                      errors.phone ? "border-red-500" : "border-brand-border"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                  Number of Attendees
                </label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3-5 People (Group)</option>
                  <option value="10">10+ Corporate Delegation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-black uppercase tracking-wider mb-2">
                  Message / Special Requests
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any accessibility requirements or questions..."
                  className="w-full px-4 py-3 text-sm bg-white border border-brand-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow text-brand-black font-medium"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-brand-border text-brand-yellow focus:ring-brand-yellow"
                />
                <label htmlFor="terms" className="text-xs text-brand-gray">
                  I agree to the event safety rules, terms of participation, and privacy policy.
                </label>
              </div>
              {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

              <div className="pt-4">
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Processing Registration...
                    </span>
                  ) : (
                    "Complete Registration"
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
}
