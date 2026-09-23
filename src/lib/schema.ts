import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./utils";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Chiranjivi Sah",
        url: "https://www.linkedin.com/in/chiranjivi-sah/",
      },
      {
        "@type": "Person",
        name: "Taha",
        url: "https://www.linkedin.com/in/mohammad-taha11/",
      },
    ],
    knowsAbout: [
      "Google Business Profile Optimization",
      "Search Engine Optimization (SEO)",
      "Website Design & Development",
      "Meta Ads Management",
      "Social Media Management",
    ],
    sameAs: [
      "https://www.linkedin.com/in/chiranjivi-sah/",
      "https://www.linkedin.com/in/mohammad-taha11/",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function generateServiceSchema(
  serviceType: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description,
    url: `${SITE_URL}${url}`,
    areaServed: "Worldwide",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generatePersonSchema(
  name: string,
  jobTitle: string,
  url: string,
  knowsAbout?: string[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url,
    ...(knowsAbout && { knowsAbout }),
  };
}
