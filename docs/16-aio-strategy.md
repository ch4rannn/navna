# 16 — AIO Strategy (AI Optimization)

## What is AIO?

AI Optimization makes the website machine-readable — structured so that AI systems, crawlers, and automated tools can accurately parse and understand the content.

---

## JSON-LD Implementation

### Schemas to Implement

| Schema | Pages | Purpose |
|--------|-------|---------|
| `Organization` | All pages (via layout) | Define NAVNA as a business entity |
| `WebSite` | Homepage | Define site-level information |
| `Service` | Each service page | Define individual services |
| `Person` | About page | Define founders |
| `BreadcrumbList` | Service pages, project pages | Navigation hierarchy |
| `FAQPage` | FAQ page, service FAQ sections | Structured Q&A |

### Organization Schema (Global)
Applied in the root layout — present on every page.

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
    { "@type": "Person", "name": "Chiranjivi Sah" },
    { "@type": "Person", "name": "Mohammad Taha" }
  ],
  "knowsAbout": [
    "Web Design",
    "Web Development",
    "E-Commerce",
    "UI/UX Design",
    "Web Applications",
    "Business Automation",
    "AI Integration"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/chiranjivi-sah/",
    "https://www.linkedin.com/in/mohammad-taha11/"
  ]
}
```

### WebSite Schema (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NAVNA",
  "url": "https://navna.online",
  "description": "NAVNA — Websites & applications built for what's next."
}
```

### Service Schema (Per Service Page)

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
  "description": "Professional web design services. Custom, responsive websites designed for your business.",
  "url": "https://navna.online/services/web-design"
}
```

### Person Schema (Founders)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chiranjivi Sah",
  "jobTitle": "Co-Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "NAVNA"
  },
  "url": "https://www.linkedin.com/in/chiranjivi-sah/",
  "knowsAbout": ["Next.js", "React", "Tailwind CSS", "Frontend Development"]
}
```

### BreadcrumbList Schema

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://navna.online" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://navna.online/services" },
    { "@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://navna.online/services/web-design" }
  ]
}
```

---

## Semantic HTML for Machine Readability

### Document Structure
```html
<html lang="en">
  <head>
    <!-- Metadata, JSON-LD scripts -->
  </head>
  <body>
    <a href="#main" class="sr-only">Skip to content</a>
    <header>
      <nav aria-label="Main navigation">...</nav>
    </header>
    <main id="main">
      <h1>Page Title</h1>
      <section aria-labelledby="section-id">
        <h2 id="section-id">Section Title</h2>
        ...
      </section>
    </main>
    <footer>
      <nav aria-label="Footer navigation">...</nav>
    </footer>
  </body>
</html>
```

### ARIA Landmarks
| Element | Role |
|---------|------|
| `<header>` | banner |
| `<nav>` | navigation |
| `<main>` | main |
| `<footer>` | contentinfo |
| `<section>` | region (with aria-labelledby) |

---

## Implementation Rules

1. **No fake schemas** — Never include Review, Rating, AggregateRating, or Award schemas without real data
2. **Accurate data only** — All schema data must match visible page content
3. **Valid JSON-LD** — Validate all schemas with Schema.org validator
4. **One Organization schema** — Consistent across all pages
5. **Unique Service schemas** — Each service page gets its own
6. **Person schemas** — Only for founders, only with publicly available accurate information
