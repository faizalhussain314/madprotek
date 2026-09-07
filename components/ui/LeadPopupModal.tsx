"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send, User, Mail, Phone, Sparkles, Video, Code, Smartphone, Megaphone, Calendar, Palette } from "lucide-react";
import Button from "./Button";
import { ButtonSpinner } from "./LoadingKit";

interface LeadPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const serviceOptions = [
  { id: "software-dev", label: "Software Development", icon: Code },
  { id: "web-mobile", label: "Web & Mobile Apps", icon: Smartphone },
  { id: "branding", label: "Branding & Design", icon: Palette },
  { id: "digital-growth", label: "Digital Marketing", icon: Megaphone },
  { id: "video-production", label: "Video Production", icon: Video },
  { id: "event-mgmt", label: "Event Management", icon: Calendar },
];

export default function LeadPopupModal({ isOpen, onClose }: LeadPopupModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("web-mobile");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: selectedService,
          message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.message || "Failed to submit lead");
      }
    } catch (err: any) {
      alert("Error submitting form: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-black/70 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl border border-brand-border shadow-2xl overflow-hidden z-10 my-auto"
          >
            {/* Top Yellow Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-brand-yellow via-amber-400 to-brand-yellow-bright w-full" />

            {/* Close X Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-brand-off-white text-brand-black hover:bg-brand-black hover:text-white transition-colors cursor-pointer z-20"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-black">
                      Consultation Request Sent!
                    </h3>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      Thank you, <span className="font-extrabold text-brand-black">{name || "Valued Client"}</span>! Our lead project strategist will review your query and contact you at <span className="font-bold text-brand-black">{email}</span> within 2 business hours.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="md" onClick={handleReset}>
                      Close Window
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* Form State */
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-yellow-subtle text-brand-black text-[11px] font-extrabold uppercase tracking-widest border border-brand-yellow/40 mb-3">
                      <Sparkles className="h-3.5 w-3.5 text-brand-yellow-dark" />
                      <span>FREE CONSULTATION</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-black tracking-tight leading-tight">
                      Let's Build Your <span className="bg-brand-yellow px-2 py-0.5 rounded-md">Digital Product</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-gray mt-1.5 leading-relaxed">
                      Fill in your project requirements below. Get an instant proposal and tech roadmap from MadProTek specialists.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-brand-black uppercase tracking-wider block">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border bg-brand-off-white text-sm text-brand-black placeholder:text-brand-muted focus:bg-white focus:border-brand-black focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-brand-black uppercase tracking-wider block">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border bg-brand-off-white text-sm text-brand-black placeholder:text-brand-muted focus:bg-white focus:border-brand-black focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-black uppercase tracking-wider block">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-border bg-brand-off-white text-sm text-brand-black placeholder:text-brand-muted focus:bg-white focus:border-brand-black focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-black uppercase tracking-wider block">
                        Service Required
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {serviceOptions.map((opt) => {
                          const Icon = opt.icon;
                          const isSelected = selectedService === opt.id;
                          return (
                            <button
                              type="button"
                              key={opt.id}
                              onClick={() => setSelectedService(opt.id)}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all text-left cursor-pointer ${
                                isSelected
                                  ? "bg-brand-black text-white border-brand-black shadow-sm"
                                  : "bg-brand-off-white text-brand-gray border-brand-border hover:border-brand-black hover:text-brand-black"
                              }`}
                            >
                              <Icon className={`h-3.5 w-3.5 shrink-0 ${isSelected ? "text-brand-yellow" : "text-brand-muted"}`} />
                              <span className="truncate">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Scope Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-brand-black uppercase tracking-wider block">
                        Project Scope / Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your project timeline, target features or goals..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-off-white text-sm text-brand-black placeholder:text-brand-muted focus:bg-white focus:border-brand-black focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-2xl bg-brand-yellow text-brand-black font-extrabold text-sm sm:text-base hover:bg-brand-yellow-bright transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center space-x-2">
                            <ButtonSpinner size="md" color="border-brand-black" />
                            <span>Submitting Project Request...</span>
                          </span>
                        ) : (
                          <span className="flex items-center space-x-2">
                            <span>Get Free Proposal & Quote</span>
                            <Send className="h-4 w-4" />
                          </span>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-brand-muted font-medium">
                      🔒 Your details are 100% secure. No spam guarantee.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
