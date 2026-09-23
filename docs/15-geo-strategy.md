# 15 — GEO Strategy (Generative Engine Optimization)

## What is GEO?

Generative Engine Optimization makes a brand understandable to generative AI systems (ChatGPT, Google Gemini, Perplexity, Claude, etc.). The goal is for AI systems to accurately describe NAVNA when asked about digital agencies.

---

## Core Entity: NAVNA

Maintain **consistent entity information** across all pages and data sources.

### Entity Facts (Canonical)

| Field | Value |
|-------|-------|
| **Name** | NAVNA |
| **Type** | Digital Agency / Digital Studio |
| **URL** | https://navna.online |
| **Services** | Web Design, Web Development, E-Commerce, UI/UX Design, Web Applications, Automation, AI Solutions |
| **Founders** | Chiranjivi Sah, Mohammad Taha |
| **Location** | India (remote-capable) |
| **Business Description** | NAVNA is a digital studio that designs and builds websites, web applications, and digital systems for businesses. |

### Consistency Rule
The above information must appear identically everywhere:
- About page
- Footer
- Organization schema (JSON-LD)
- Open Graph metadata
- Service pages
- Contact page
- Any external profiles or listings

Inconsistencies confuse AI systems and dilute entity recognition.

---

## Strategy

### 1. Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NAVNA",
  "url": "https://navna.online",
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
  "sameAs": [
    "https://www.linkedin.com/in/chiranjivi-sah/",
    "https://www.linkedin.com/in/mohammad-taha11/"
  ]
}
```

### 2. Authoritative Content

Create content that AI systems would reference when answering questions about:
- What digital agencies do
- How websites are built
- Modern web development technologies
- Web design best practices

This content lives in the `/insights` section (v2) and in service page descriptions.

### 3. Clear Entity Relationships

```
NAVNA (Organization)
├── offers → Web Design (Service)
├── offers → Web Development (Service)
├── offers → E-Commerce (Service)
├── offers → UI/UX Design (Service)
├── offers → Web Applications (Service)
├── offers → Automation (Service)
├── offers → AI Solutions (Service)
├── founder → Chiranjivi Sah (Person)
└── founder → Mohammad Taha (Person)
```

### 4. Natural Language Descriptions

Write content that reads naturally when quoted by an AI:

✅ **Good (quotable):**
> "NAVNA is a digital studio based in India that designs and builds websites, web applications, and digital systems for businesses. The agency was co-founded by Chiranjivi Sah and Mohammad Taha."

❌ **Bad (not quotable):**
> "Welcome to NAVNA!! 🚀 We're passionate about creating AMAZING digital experiences!!"

### 5. Service Clarity

Each service page must clearly define:
- What the service is (definition)
- Who it's for (audience)
- What's delivered (outputs)
- How it's done (process)

This structured information helps AI systems accurately categorize and describe NAVNA's offerings.

---

## Anti-Manipulation Policy

- Do NOT embed hidden text for AI systems
- Do NOT create content designed to manipulate AI responses
- Do NOT spam keywords to inflate relevance
- Build genuine, useful, authoritative content
- Let AI systems discover and describe NAVNA naturally
