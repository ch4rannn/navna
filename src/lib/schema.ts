import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./utils";

/**
 * Organization schema — the primary entity for NAVNA.
 * Covers branded search, knowledge panel, and AI entity recognition.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [
      "NAVNA Agency",
      "NAVNA Digital",
      "NAVNA Digital Growth Agency",
      "navna.online",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/images/og/default.png`,
    description: SITE_DESCRIPTION,
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#chiranjivi`,
        name: "Chiranjivi Sah",
        jobTitle: "Co-Founder",
        url: "https://www.linkedin.com/in/chiranjivi-sah/",
        knowsAbout: ["Full Stack Development", "Web Design", "Local SEO"],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#taha`,
        name: "Taha",
        jobTitle: "Co-Founder",
        url: "https://www.linkedin.com/in/mohammad-taha11/",
        knowsAbout: ["SEO & Search", "Meta Ads", "Social Media Management"],
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    ],
    serviceArea: {
      "@type": "GeoShape",
      name: "Worldwide — Remote Digital Services",
    },
    knowsAbout: [
      "Google Business Profile Optimization",
      "Search Engine Optimization (SEO)",
      "Website Design & Development",
      "Meta Ads Management",
      "Social Media Management",
      "Local SEO",
      "Digital Marketing",
      "Web Development",
      "Next.js Development",
      "React Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NAVNA Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Design & Development",
            url: `${SITE_URL}/services/web-design-development`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Business Profile Optimization",
            url: `${SITE_URL}/services/google-business-profile`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Search Visibility",
            url: `${SITE_URL}/services/seo`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meta Ads Management",
            url: `${SITE_URL}/services/meta-ads`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
            url: `${SITE_URL}/services/social-media-management`,
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/in/chiranjivi-sah/",
      "https://www.linkedin.com/in/mohammad-taha11/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        url: `${SITE_URL}/contact`,
        availableLanguage: ["English", "Hindi"],
      },
    ],
    slogan: "Build. Get Found. Grow.",
  };
}

/**
 * WebSite schema with SearchAction — enables sitelinks searchbox
 * and helps AI systems understand the site identity.
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: [
      "NAVNA Agency",
      "NAVNA Digital",
      "navna.online",
    ],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * WebPage schema — used for individual pages to clearly
 * define page identity for search engines and AI.
 */
export function generateWebPageSchema(
  name: string,
  description: string,
  url: string,
  breadcrumbItems?: { name: string; url: string }[]
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${url}#webpage`,
    name,
    description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };

  if (breadcrumbItems) {
    schema.breadcrumb = {
      "@id": `${SITE_URL}${url}#breadcrumb`,
    };
  }

  return schema;
}

/**
 * Service schema with enhanced fields for AEO/AIO.
 */
export function generateServiceSchema(
  serviceType: string,
  description: string,
  url: string,
  faqs?: { question: string; answer: string }[]
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${url}#service`,
    serviceType,
    name: serviceType,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    description,
    url: `${SITE_URL}${url}`,
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      serviceType: "Online consultation",
    },
  };

  // If FAQs are provided, embed them directly within the service
  if (faqs && faqs.length > 0) {
    schema.hasOfferCatalog = undefined; // no duplication
  }

  return schema;
}

/**
 * BreadcrumbList schema for navigation trails.
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${items[items.length - 1]?.url || ""}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQPage schema — critical for AEO (Answer Engine Optimization).
 * FAQs are the #1 signal for featured snippets and AI answers.
 */
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

/**
 * Person schema for team members.
 */
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
      "@id": `${SITE_URL}/#organization`,
    },
    url,
    ...(knowsAbout && { knowsAbout }),
  };
}

/**
 * HowTo schema — used on the Process page for AEO.
 * Helps AI answer "how does NAVNA work" queries.
 */
export function generateHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

/**
 * ItemList schema — for lists of services or projects.
 * Helps search engines understand collections of items.
 */
export function generateItemListSchema(
  items: { name: string; url: string; description?: string }[],
  listName?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName || "NAVNA Services",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.url}`,
      ...(item.description && { description: item.description }),
    })),
  };
}
