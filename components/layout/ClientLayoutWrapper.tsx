"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import CinematicPreloader from "@/components/ui/CinematicPreloader";
import RouteProgressBar from "@/components/ui/RouteProgressBar";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return (
      <>
        <RouteProgressBar />
        <main className="flex-grow min-h-screen">{children}</main>
      </>
    );
  }

  return (
    <>
      <CinematicPreloader />
      <RouteProgressBar />
      <Navbar />
      <main className="flex-grow pt-[65px] lg:pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
