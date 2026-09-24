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
    default: "NAVNA — Digital Growth Agency | Web Design, SEO & Google Business Profile",
    template: "%s — NAVNA",
  },
  description:
    "NAVNA is a digital growth agency that helps businesses build and grow their online presence through website design & development, Google Business Profile optimization, SEO, Meta Ads, and social media management. Start your project today.",
  keywords: [
    // Branded keywords — critical for branded search
    "NAVNA",
    "navna",
    "navna agency",
    "navna digital",
    "navna digital agency",
    "navna online",
    "navna.online",
    "navna freelances",
    "navna freelance",
    "navna web design",
    "navna seo",
    // Service keywords
    "digital growth agency",
    "website design",
    "website development",
    "web design agency",
    "web development agency",
    "SEO services",
    "local SEO",
    "Google Business Profile optimization",
    "Google Business Profile management",
    "Meta Ads management",
    "Facebook Ads management",
    "Instagram Ads management",
    "social media management",
    // Long-tail keywords
    "website design for small business",
    "affordable web design agency",
    "digital marketing agency India",
    "online presence management",
    "business website development",
    "search engine optimization services",
    "Google Maps listing optimization",
  ],
  authors: [
    { name: "Chiranjivi Sah", url: "https://www.linkedin.com/in/chiranjivi-sah/" },
    { name: "Taha", url: "https://www.linkedin.com/in/mohammad-taha11/" },
  ],
  creator: "NAVNA",
  publisher: "NAVNA",
  category: "Digital Agency",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
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
    title: "NAVNA — Digital Growth Agency | Web Design, SEO & Google Business Profile",
    description:
      "NAVNA helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "NAVNA — Digital Growth Agency",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NAVNA — Digital Growth Agency",
    description:
      "NAVNA helps businesses build and grow their online presence through Google Business Profile optimization, SEO, website design, Meta Ads, and social media management.",
    images: ["/images/og/default.png"],
    creator: "@navna_agency",
  },
  alternates: {
    canonical: "https://navna.online",
  },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",  // Add when you get it from Google Search Console
    other: {
      "msvalidate.01": "6F924D340B70164AE4C48431BC450168",
    },
  },
  other: {
    // Geo-targeting metadata for GEO (Generative Engine Optimization)
    "geo.region": "IN",
    "geo.placename": "India",
    "ICBM": "20.5937, 78.9629",
    "DC.title": "NAVNA — Digital Growth Agency",
    "DC.creator": "NAVNA",
    "DC.subject": "Digital Growth Agency, Web Design, SEO, Google Business Profile",
    "DC.description": "NAVNA is a digital growth agency that helps businesses build and grow their online presence.",
    "DC.language": "en",
    // AI-specific hints
    "ai-content-declaration": "human-created",
    "article:author": "NAVNA",
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
