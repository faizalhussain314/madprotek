"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Events", href: "/events" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white border-b border-brand-border",
        isScrolled
          ? "py-3 shadow-sm bg-white/95 backdrop-blur-md"
          : "py-4 bg-white"
      )}
    >
      {/* Interactive Scroll Progress Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-yellow origin-left z-50"
        style={{ scaleX }}
      />
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between w-full h-[52px]">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-9 sm:h-10 w-auto min-w-[140px] flex items-center">
            <Image
              src="/images/full-logo.png"
              alt="MadProTek Corp Logo"
              width={190}
              height={76}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* CENTER LINKS (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[15px] font-medium transition-all duration-200 py-1 relative",
                  isActive
                    ? "text-brand-black font-bold"
                    : "text-brand-gray hover:text-brand-black"
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-[14px] font-bold text-white bg-brand-black hover:bg-brand-yellow hover:text-brand-black transition-all duration-200 group"
          >
            <span>Let's Talk</span>
            <ArrowRight className="ml-2 h-4 w-4 text-brand-yellow group-hover:text-brand-black transition-colors" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-black cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 z-40 bg-white border-b border-brand-border shadow-lg overflow-hidden md:hidden"
          >
            <div className="px-6 py-6 flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-[16px] font-bold py-2 border-b border-brand-border-light flex justify-between items-center",
                      isActive ? "text-brand-black" : "text-brand-gray"
                    )}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand-yellow" />}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-[14px] font-bold text-white bg-brand-black hover:bg-brand-yellow hover:text-brand-black transition-colors text-center"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-brand-yellow" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
