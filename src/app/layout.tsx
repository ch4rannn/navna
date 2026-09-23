import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { ConditionalHeader, MainWrapper } from "@/components/layout/ConditionalHeader";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/schema";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://navna.online"),
  title: {
    default: "NAVNA — Digital Growth Agency",
    template: "%s — NAVNA",
  },
  description:
    "NAVNA helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.",
  keywords: [
    "digital growth agency",
    "website design",
    "website development",
    "SEO",
    "Google Business Profile",
    "local SEO",
    "Meta Ads",
    "social media management",
  ],
  authors: [
    { name: "Chiranjivi Sah" },
    { name: "Taha" },
  ],
  creator: "NAVNA",
  publisher: "NAVNA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://navna.online",
    siteName: "NAVNA",
    title: "NAVNA — Digital Growth Agency",
    description:
      "NAVNA helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "NAVNA — Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVNA — Digital Growth Agency",
    description:
      "NAVNA helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.",
    images: ["/images/og/default.png"],
  },
  alternates: {
    canonical: "https://navna.online",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text font-sans antialiased">
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <ConditionalHeader />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
      </body>
    </html>
  );
}
