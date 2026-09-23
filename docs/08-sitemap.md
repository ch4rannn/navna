# 08 — Sitemap

## URL Structure

```
https://navna.online/
├── /about
├── /services
│   ├── /services/web-design
│   ├── /services/web-development
│   ├── /services/ecommerce
│   ├── /services/ui-ux
│   ├── /services/web-applications
│   ├── /services/automation
│   └── /services/ai-solutions
├── /work
│   ├── /work/[project-slug]
│   ├── /work/[project-slug]
│   └── /work/[project-slug]
├── /process
├── /contact
├── /faq
├── /insights          (v2 — deferred unless included in v1)
│   └── /insights/[slug]
├── /privacy
├── /terms
└── /404 (not-found)
```

---

## Page Inventory

| Route | Page Title | Priority | Status |
|-------|-----------|----------|--------|
| `/` | NAVNA — Websites & Applications Built for What's Next | Critical | v1 |
| `/about` | About NAVNA | High | v1 |
| `/services` | Services — NAVNA | High | v1 |
| `/services/web-design` | Web Design — NAVNA | High | v1 |
| `/services/web-development` | Web Development — NAVNA | High | v1 |
| `/services/ecommerce` | E-Commerce — NAVNA | High | v1 |
| `/services/ui-ux` | UI/UX Design — NAVNA | High | v1 |
| `/services/web-applications` | Web Applications — NAVNA | High | v1 |
| `/services/automation` | Automation — NAVNA | Medium | v1 |
| `/services/ai-solutions` | AI Solutions — NAVNA | Medium | v1 |
| `/work` | Work — NAVNA | High | v1 |
| `/work/[project]` | [Project Name] — NAVNA | High | v1 (concepts) |
| `/process` | Our Process — NAVNA | Medium | v1 |
| `/contact` | Contact — NAVNA | Critical | v1 |
| `/faq` | FAQ — NAVNA | Medium | v1 |
| `/insights` | Insights — NAVNA | Low | v2 |
| `/insights/[slug]` | [Article Title] — NAVNA | Low | v2 |
| `/privacy` | Privacy Policy — NAVNA | Required | v1 |
| `/terms` | Terms of Service — NAVNA | Required | v1 |

---

## XML Sitemap Configuration

The static export will generate a `sitemap.xml` that includes all pages with:
- `<loc>` — Full canonical URL (https://navna.online/...)
- `<lastmod>` — Build date
- `<changefreq>` — monthly (for most pages)
- `<priority>` — Based on page importance

### Priority Map
| Priority | Pages |
|----------|-------|
| 1.0 | Homepage |
| 0.9 | Services index, Contact |
| 0.8 | Individual services, Work, About |
| 0.7 | Process, FAQ |
| 0.6 | Individual projects |
| 0.5 | Insights articles |
| 0.3 | Privacy, Terms |

---

## robots.txt

```
User-agent: *
Allow: /
Disallow:

Sitemap: https://navna.online/sitemap.xml
```
