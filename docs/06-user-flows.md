# 06 — User Flows

## Primary Visitor Flow

```
Entry Point (Google / Social / Direct / Referral)
    │
    ▼
┌─────────────────────────────────┐
│  HOMEPAGE                       │
│  • Hero → Understand NAVNA      │
│  • Value Proposition            │
│  • Services Overview            │
│  • Selected Work                │
│  • Process                      │
│  • Why NAVNA                    │
│  • Founders                     │
│  • FAQ                          │
│  • CTA                          │
└──────────┬──────────────────────┘
           │
     ┌─────┴──────┐
     │             │
     ▼             ▼
 Explore        Start a
 Further        Project
     │             │
     ▼             ▼
┌──────────┐  ┌──────────┐
│ Services │  │ Contact  │
│ Work     │  │ Form     │
│ About    │  │          │
│ Process  │  │          │
└────┬─────┘  └────┬─────┘
     │              │
     ▼              ▼
  Build Trust    Submit
     │           Inquiry
     ▼              │
  Start a           ▼
  Project        Confirmation
     │
     ▼
  Contact Form
     │
     ▼
  Confirmation
```

---

## Detailed Homepage Flow

```
1. LAND ON HOMEPAGE
   ├── Read hero headline
   ├── Understand what NAVNA does
   └── Decision: Interested? → Continue scrolling

2. VALUE PROPOSITION
   ├── Understand why NAVNA is different
   └── Decision: Want to know more? → Continue

3. SERVICES OVERVIEW
   ├── Scan service categories
   ├── Find relevant service
   └── Decision: Click service? → Service page
                  Continue? → Keep scrolling

4. SELECTED WORK
   ├── View project previews
   ├── Assess quality of work
   └── Decision: View project? → Project detail
                  Impressed? → Build trust

5. PROCESS
   ├── Understand how NAVNA works
   └── Reduces uncertainty

6. WHY NAVNA
   ├── Understand differentiators
   └── Reinforces decision to engage

7. FOUNDERS
   ├── See real people behind the agency
   ├── Check LinkedIn profiles
   └── Trust increases

8. FAQ
   ├── Address remaining questions
   └── Remove objections

9. FINAL CTA
   ├── "Have an idea? Let's build it."
   └── Click "Start a Project" → Contact form

10. CONTACT FORM
    ├── Fill in details
    ├── Submit
    └── Confirmation page/message
```

---

## Service Exploration Flow

```
Homepage → Services Section
    │
    ▼
Click "Learn More" on a service
    │
    ▼
┌─────────────────────────────────┐
│  SERVICE PAGE                   │
│  • Hero (service name + desc)   │
│  • Problem (what clients face)  │
│  • Solution (what NAVNA does)   │
│  • What We Deliver              │
│  • Process                      │
│  • Technology (if relevant)     │
│  • FAQ                          │
│  • CTA → Start a Project       │
└──────────┬──────────────────────┘
           │
     ┌─────┴──────┐
     │             │
     ▼             ▼
 View Related    Start a
 Work            Project
     │             │
     ▼             ▼
 Portfolio       Contact
 Page            Form
```

---

## Portfolio Exploration Flow

```
Homepage → Selected Work
    │
    ▼
Click project card
    │
    ▼
┌─────────────────────────────────┐
│  PROJECT DETAIL PAGE            │
│  • Cover image                  │
│  • Project title + category     │
│  • Challenge                    │
│  • Solution                     │
│  • Technology                   │
│  • Outcome                      │
│  • Gallery                      │
│  • CTA → Start a Project       │
└──────────┬──────────────────────┘
           │
     ┌─────┴──────┐
     │             │
     ▼             ▼
 View More       Start a
 Projects        Project
     │             │
     ▼             ▼
 /work           Contact
 (grid)          Form
```

---

## Contact Form Flow

```
Any CTA → "Start a Project"
    │
    ▼
┌─────────────────────────────────┐
│  CONTACT PAGE                   │
│                                 │
│  Form Fields:                   │
│  • Name (required)              │
│  • Email (required)             │
│  • Company (optional)           │
│  • Project Type (select)        │
│  • Budget Range (select)        │
│  • Timeline (select)            │
│  • Message (required)           │
│                                 │
│  States:                        │
│  • Default (empty form)         │
│  • Filling (validation active)  │
│  • Submitting (loading state)   │
│  • Success (confirmation)       │
│  • Error (retry prompt)         │
└─────────────────────────────────┘
```

---

## Mobile-Specific Flow Considerations

| Element | Desktop | Mobile |
|---------|---------|--------|
| Navigation | Horizontal links + CTA button | Hamburger menu → slide-out/overlay |
| Service cards | Grid layout | Stacked cards |
| Portfolio grid | Multi-column | Single column |
| Contact form | Side-by-side fields possible | Full-width stacked fields |
| CTAs | Standard button | Full-width or prominent thumb-zone placement |
| FAQ | Click to expand | Tap to expand (larger touch targets) |
