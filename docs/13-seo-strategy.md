# 13 — SEO Strategy

## Production Canonical

All canonical URLs must reference:
```
https://navna.online
```

Never leave `localhost`, `127.0.0.1`, `vercel.app`, or `pages.dev` in production metadata.

---

## Metadata Structure

### Title Tag Format
```
[Page Title] — NAVNA
```

| Page | Title |
|------|-------|
| Homepage | NAVNA — Websites & Applications Built for What's Next |
| About | About — NAVNA |
| Services | Services — NAVNA |
| Web Design | Web Design — NAVNA |
| Web Development | Web Development — NAVNA |
| E-Commerce | E-Commerce Solutions — NAVNA |
| UI/UX Design | UI/UX Design — NAVNA |
| Web Applications | Web Applications — NAVNA |
| Automation | Automation — NAVNA |
| AI Solutions | AI Solutions — NAVNA |
| Work | Work — NAVNA |
| Process | Our Process — NAVNA |
| Contact | Start a Project — NAVNA |
| FAQ | FAQ — NAVNA |
| Privacy | Privacy Policy — NAVNA |
| Terms | Terms of Service — NAVNA |

### Meta Description Guidelines
- 150–160 characters
- Include primary keyword naturally
- Include a value proposition or CTA
- Unique per page

### Example Meta Descriptions

| Page | Description |
|------|-------------|
| Homepage | NAVNA is a digital studio that designs and builds websites, web applications, and digital systems for businesses. Start your project today. |
| Web Design | Professional web design services by NAVNA. We create custom, responsive websites that look right and work right for your business. |
| Contact | Ready to start your project? Get in touch with NAVNA. Tell us about your business and we'll help you build the right digital solution. |

---

## Open Graph & Twitter Cards

Every page must include:

```html
<meta property="og:title" content="[Page Title] — NAVNA" />
<meta property="og:description" content="[Meta description]" />
<meta property="og:url" content="https://navna.online/[path]" />
<meta property="og:image" content="https://navna.online/images/og/default.png" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="NAVNA" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[Page Title] — NAVNA" />
<meta name="twitter:description" content="[Meta description]" />
<meta name="twitter:image" content="https://navna.online/images/og/default.png" />
```

### OG Image
- Size: 1200×630px
- NAVNA branding
- Clean, professional
- Works on dark and light backgrounds

---

## Sitemap

Generate `sitemap.xml` at build time listing all pages with:
- `<loc>` — Full canonical URL
- `<lastmod>` — Build date
- `<priority>` — Page importance (see 08-sitemap.md)

---

## robots.txt

```
User-agent: *
Allow: /
Disallow:

Sitemap: https://navna.online/sitemap.xml
```

---

## Keyword Strategy

### Core Keywords
| Keyword | Intent | Target Page |
|---------|--------|-------------|
| web development agency | Commercial | Homepage, Services |
| web design agency | Commercial | Homepage, Web Design |
| digital agency | Navigational/Commercial | Homepage |
| website development | Informational/Commercial | Web Development |
| website design | Informational/Commercial | Web Design |

### Service Keywords
| Keyword | Target Page |
|---------|-------------|
| custom website development | Web Development |
| business website design | Web Design |
| ecommerce website development | E-Commerce |
| ui ux design services | UI/UX |
| custom web application development | Web Applications |
| business automation services | Automation |
| ai integration services | AI Solutions |

### Long-Tail Keywords
| Keyword | Target Page |
|---------|-------------|
| web development agency India | Homepage |
| website redesign services | Web Design |
| saas application development | Web Applications |
| website for small business | Web Design, Web Development |
| startup website development | Web Development |

### Implementation Rules
- Keywords appear naturally in content — never stuffed
- Each page targets 1 primary keyword and 2-3 secondary keywords
- Keywords are used in headings, meta descriptions, and body copy
- Write for humans first, search engines second

---

## Semantic HTML

| Element | Usage |
|---------|-------|
| `<header>` | Site header/navbar |
| `<nav>` | Navigation menus |
| `<main>` | Primary page content |
| `<article>` | Self-contained content (blog posts, project case studies) |
| `<section>` | Thematic groups of content |
| `<aside>` | Supplementary content |
| `<footer>` | Site footer |
| `<h1>` | One per page — page title |
| `<h2>` | Section headings |
| `<h3>` | Sub-section headings |

### Heading Hierarchy Rule
Every page has exactly ONE `<h1>`. Headings follow strict hierarchy (h1 > h2 > h3). No heading level skipping.

---

## Internal Linking

- Every page links back to relevant parent pages
- Service pages cross-link to related services
- All pages have path to Contact via CTA
- Breadcrumbs on service and project detail pages
- Footer contains comprehensive site navigation

---

## Image SEO

- All images have descriptive `alt` text
- Image filenames are descriptive (e.g., `navna-web-design-service.webp`)
- Images are optimized for web (WebP format, appropriate sizing)
- Lazy loading for below-fold images
