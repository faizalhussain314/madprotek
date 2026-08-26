import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-brand-black text-white pt-16 pb-8 border-t border-brand-black-gray">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Logo & Info Area */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.png"
                alt="MadProTek Corp Logo"
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              MadProTek Corp combines technology, creativity, and strategy to build digital products, brands, and experiences that create meaningful impact.
            </p>

            {/* Social Media Icons below Info Area */}
            <div className="pt-2">
              <span className="text-[11px] font-bold text-brand-yellow uppercase tracking-widest block mb-2">
                Follow MadProTek
              </span>
              <div className="flex space-x-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-xl bg-brand-black-dark border border-brand-black-gray flex items-center justify-center text-brand-muted hover:bg-brand-yellow hover:text-brand-black hover:border-brand-yellow transition-all duration-200 group"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Selected Work", href: "/work" },
                { name: "Public Events", href: "/events" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-brand-muted hover:text-white text-sm transition-colors inline-flex items-center group">
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Software Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Web & Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Branding & Creative</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Business Solutions</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Event Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-yellow mb-4">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-brand-muted">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5" />
                <span>
                  MadProTek Corp<br />
                  Hosur, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-yellow shrink-0" />
                <a href="tel:+918489199319" className="hover:text-white transition-colors">
                  +91 84891 99319
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-yellow shrink-0" />
                <a href="mailto:info@madprotekcorp.com" className="hover:text-white transition-colors break-all">
                  info@madprotekcorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Thin yellow line divider */}
        <div className="w-full h-[1px] bg-brand-yellow/30 my-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-brand-muted space-y-3 sm:space-y-0">
          <p>© {new Date().getFullYear()} Madprotek. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
