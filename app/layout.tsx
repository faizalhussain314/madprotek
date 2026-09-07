import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MadProTek Corp | Technology, Branding, Marketing & Events",
    template: "%s | MadProTek Corp"
  },
  description: "MadProTek Corp integrates software development, brand design, digital marketing, SEO, and event management to build businesses ready for tomorrow.",
  metadataBase: new URL("https://madprotekcorp.com"),
  keywords: ["Software Development", "Branding", "Digital Marketing", "SEO", "Marathons", "Events Management", "MadProTek", "Hosur"],
  openGraph: {
    title: "MadProTek Corp | Technology, Branding, Marketing & Events",
    description: "MadProTek Corp integrates software development, brand design, digital marketing, SEO, and event management to build businesses ready for tomorrow.",
    url: "https://madprotekcorp.com",
    siteName: "MadProTek Corp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadProTek Corp",
    description: "Technology + Branding + Marketing + Events",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-brand-navy">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
