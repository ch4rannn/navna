# 23 — Content Schema (JSON-LD)

## Schema Overview

| Schema Type | Where Used | Purpose |
|------------|-----------|---------|
| `Organization` | All pages (root layout) | Define NAVNA entity |
| `WebSite` | Homepage | Site-level metadata |
| `Service` | Each service page | Define services |
| `Person` | About page | Define founders |
| `BreadcrumbList` | Service & project pages | Navigation hierarchy |
| `FAQPage` | FAQ page, service pages | Structured Q&A |

---

## Schema Definitions

### Organization (Global)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NAVNA",
  "url": "https://navna.online",
  "logo": "https://navna.online/icons/logo.svg",
  "description": "NAVNA is a digital studio that designs and builds websites, web applications, and digital systems for businesses.",
  "foundingDate": "2026",
  "founders": [
    {
      "@type": "Person",
      "name": "Chiranjivi Sah",
      "url": "https://www.linkedin.com/in/chiranjivi-sah/"
    },
    {
      "@type": "Person",
      "name": "Mohammad Taha",
      "url": "https://www.linkedin.com/in/mohammad-taha11/"
    }
  ],
  "knowsAbout": [
    "Web Design",
    "Web Development",
    "E-Commerce Development",
    "UI/UX Design",
    "Web Application Development",
    "Business Automation",
    "AI Integration"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/chiranjivi-sah/",
    "https://www.linkedin.com/in/mohammad-taha11/"
  ]
}
```

### WebSite (Homepage Only)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NAVNA",
  "url": "https://navna.online",
  "description": "NAVNA is a digital studio that designs and builds websites, web applications, and digital systems for businesses."
}
```

### Service (Per Service Page)

Example for Web Design:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design",
  "provider": {
    "@type": "Organization",
    "name": "NAVNA",
    "url": "https://navna.online"
  },
  "description": "Professional web design services. Custom, responsive websites designed to look right and work right for your business.",
  "url": "https://navna.online/services/web-design",
  "areaServed": "Worldwide"
}
```

### Person (Founders on About Page)

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Chiranjivi Sah",
    "jobTitle": "Co-Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "NAVNA",
      "url": "https://navna.online"
    },
    "url": "https://www.linkedin.com/in/chiranjivi-sah/",
    "knowsAbout": ["Next.js", "React", "Tailwind CSS", "Frontend Development"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammad Taha",
    "jobTitle": "Co-Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "NAVNA",
      "url": "https://navna.online"
    },
    "url": "https://www.linkedin.com/in/mohammad-taha11/"
  }
]
```

### BreadcrumbList

Example for `/services/web-design`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://navna.online"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://navna.online/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Design",
      "item": "https://navna.online/services/web-design"
    }
  ]
}
```

### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does NAVNA do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NAVNA is a digital studio that designs and builds websites, web applications, and digital systems for businesses. We handle everything from strategy and design to development and deployment."
      }
    },
    {
      "@type": "Question",
      "name": "What types of websites do you build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build business websites, landing pages, portfolio websites, corporate websites, e-commerce stores, web applications, dashboards, and SaaS interfaces."
      }
    }
  ]
}
```

---

## Implementation in Next.js

```typescript
// src/lib/schema.ts
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    // ... fields
  }
}

// Usage in layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateOrganizationSchema())
  }}
/>
```

---

## Validation Rules

1. All schemas must be valid JSON-LD
2. All data in schemas must match visible page content
3. Never include fake Review, Rating, or Award schemas
4. Test with Google Rich Results Test before deployment
5. Test with Schema.org validator
