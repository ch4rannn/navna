# 07 — Information Architecture

## Content Hierarchy

```
NAVNA (Brand)
├── What We Do (Services)
│   ├── Web Design
│   ├── Web Development
│   ├── E-Commerce
│   ├── UI/UX Design
│   ├── Web Applications
│   ├── Automation
│   └── AI Solutions
├── What We've Done (Work)
│   └── Individual Projects
├── How We Work (Process)
├── Who We Are (About)
│   ├── Story
│   ├── Mission & Vision
│   ├── Founders
│   └── Technology
├── Knowledge (Insights) — optional v2
│   └── Individual Articles
├── Get in Touch (Contact)
├── Common Questions (FAQ)
└── Legal
    ├── Privacy Policy
    └── Terms of Service
```

---

## Primary Navigation

| Label | Route | Purpose |
|-------|-------|---------|
| Services | `/services` | Show what NAVNA offers |
| Work | `/work` | Show portfolio/case studies |
| Process | `/process` | Explain how NAVNA works |
| About | `/about` | Build trust, show founders |

**CTA Button:** "Start a Project" → `/contact`

### Navigation Rationale
- **5 items maximum** (including CTA) — keeps navigation scannable
- **Services first** — most visitors want to know what you do
- **Work second** — social proof / quality demonstration
- **Process third** — reduces uncertainty about engagement
- **About fourth** — trust-building for those who need it
- **CTA always visible** — conversion opportunity on every page

---

## Footer Navigation

| Section | Links |
|---------|-------|
| **Services** | Web Design, Web Development, E-Commerce, UI/UX, Web Applications, Automation, AI Solutions |
| **Company** | About, Process, Work, FAQ |
| **Connect** | Contact, LinkedIn (Chiranjivi), LinkedIn (Taha) |
| **Legal** | Privacy Policy, Terms of Service |

---

## Page Depth

| Level | Pages |
|-------|-------|
| Level 0 (Root) | Homepage (`/`) |
| Level 1 | About, Services, Work, Process, Contact, FAQ, Insights, Privacy, Terms |
| Level 2 | Individual services (`/services/web-design`), Individual projects (`/work/[project]`), Individual articles (`/insights/[slug]`) |

Maximum depth: **2 levels** — keeps the site flat and crawlable.

---

## Internal Linking Strategy

### Cross-linking Map
```
Homepage
├── → Services (via cards)
├── → Work (via portfolio section)
├── → Process (via process section)
├── → About (via founders section)
├── → Contact (via CTAs)
└── → FAQ (via FAQ section)

Service Pages
├── → Related work/projects
├── → Process page
└── → Contact (via CTA)

Work/Project Pages
├── → Related services
├── → Other projects
└── → Contact (via CTA)

About Page
├── → Services
├── → Process
└── → Contact (via CTA)

Process Page
├── → Services
└── → Contact (via CTA)
```

Every page should have a clear path to the Contact page via CTA.

---

## Content Priority per Page

### Homepage
1. **Critical:** Hero (what NAVNA does), Services, CTA
2. **Important:** Portfolio, Process, Founders
3. **Supporting:** FAQ, Value Props, Why NAVNA

### Service Page
1. **Critical:** What the service is, what's delivered, CTA
2. **Important:** Process, technology
3. **Supporting:** FAQ, related work

### About Page
1. **Critical:** Who NAVNA is, founders
2. **Important:** Mission, approach
3. **Supporting:** Technology, CTA
