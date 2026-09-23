# 11 — Technical Architecture

## Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 15 (App Router) | Modern React framework, excellent DX, SEO, static export |
| **Language** | TypeScript | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS v4 | Utility-first, fast development, small bundle |
| **Animation** | Framer Motion | Declarative, reduced-motion support, lightweight |
| **Utility** | clsx | Conditional class composition |
| **Deployment** | Cloudflare Workers Static Assets | Edge delivery, excellent performance |
| **Build** | Next.js `output: 'export'` | Static HTML generation |

### Libraries NOT Included (Intentionally)
- No CMS (content is in TypeScript data files)
- No database
- No authentication
- No state management library (React state is sufficient)
- No UI component library (custom components only)
- No heavy animation libraries beyond Framer Motion

---

## Project Structure

```
navna/
├── docs/                          # Project documentation (26 files)
├── public/
│   ├── images/                    # Static images
│   │   ├── projects/              # Portfolio project images
│   │   └── og/                    # Open Graph images
│   ├── icons/                     # Favicon and app icons
│   ├── robots.txt                 # Search engine directives
│   └── sitemap.xml                # XML sitemap (generated)
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── not-found.tsx          # 404 page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx           # Services index
│   │   │   ├── web-design/
│   │   │   ├── web-development/
│   │   │   ├── ecommerce/
│   │   │   ├── ui-ux/
│   │   │   ├── web-applications/
│   │   │   ├── automation/
│   │   │   └── ai-solutions/
│   │   ├── work/
│   │   │   ├── page.tsx           # Portfolio index
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Individual project
│   │   ├── process/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── NavLink.tsx
│   │   ├── hero/
│   │   │   └── Hero.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceGrid.tsx
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectGrid.tsx
│   │   ├── process/
│   │   │   └── ProcessSteps.tsx
│   │   ├── founders/
│   │   │   └── FounderCard.tsx
│   │   ├── faq/
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── FAQItem.tsx
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Textarea.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeading.tsx
│   │       └── AnimateIn.tsx
│   ├── data/
│   │   ├── services.ts            # Service definitions
│   │   ├── projects.ts            # Portfolio projects
│   │   ├── process.ts             # Process steps
│   │   ├── founders.ts            # Founder information
│   │   ├── faq.ts                 # FAQ questions and answers
│   │   ├── navigation.ts          # Nav links
│   │   └── metadata.ts            # Site-wide metadata
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   ├── schema.ts              # JSON-LD schema generators
│   │   └── constants.ts           # Site constants
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   └── useReducedMotion.ts
│   └── types/
│       └── index.ts               # TypeScript type definitions
├── .env.example                   # Environment variable template
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── wrangler.toml                  # Cloudflare deployment config
```

---

## Data Architecture

All content lives in TypeScript files in `src/data/`. No external CMS or database.

### Benefits
- Type-safe content
- Zero API calls at build time
- Easy to update
- Version-controlled content
- No CMS dependency or cost

### Example Data Structure
```typescript
// src/data/services.ts
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  problem: string;
  solution: string;
  deliverables: string[];
  technologies?: string[];
  faqs: FAQ[];
  metadata: {
    title: string;
    description: string;
  };
}
```

---

## Build Process

```
Source (TypeScript + React) 
    → Next.js Build (static export)
    → /out directory (HTML, CSS, JS, images)
    → Cloudflare Workers Static Assets
    → Edge delivery worldwide
```

### Build Command
```bash
next build
```
Output: `/out` directory with static HTML files for every route.

---

## Routing

Next.js App Router with static generation:

| Route Pattern | Generation |
|---------------|-----------|
| `/` | Static |
| `/about` | Static |
| `/services` | Static |
| `/services/[slug]` | Static with `generateStaticParams()` |
| `/work` | Static |
| `/work/[slug]` | Static with `generateStaticParams()` |
| `/process` | Static |
| `/contact` | Static |
| `/faq` | Static |
| `/privacy` | Static |
| `/terms` | Static |

All routes are statically generated at build time. No server-side rendering needed.

---

## Performance Architecture

1. **Static HTML** — Zero server compute per request
2. **next/font** — Self-hosted Inter font, no layout shift
3. **Image optimization** — Pre-optimized images (unoptimized flag since static export)
4. **Code splitting** — Automatic per-route code splitting
5. **Tailwind** — Unused CSS purged at build time
6. **Minimal JS** — Components are mostly presentational
7. **Edge delivery** — Cloudflare CDN serves from nearest POP
