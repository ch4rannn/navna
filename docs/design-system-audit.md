# NAVNA — Design System Audit (v2)

## Color Palette

### Before (v1)
| Token | Value | Issue |
|---|---|---|
| `bg` | `#09090B` | Flat, no depth |
| `accent` | `#3B82F6` | Generic Tailwind blue-500 |
| `text-secondary` | `#A1A1AA` | Low contrast on dark bg |
| `border` | `#27272A` | Too close to bg, barely visible |

### After (v2)
| Token | Value | Purpose |
|---|---|---|
| `bg` | `#0A0A0F` | Darker with slight blue undertone |
| `bg-elevated` | `#0E0E14` | Footer/modal surfaces |
| `surface` | `#14141C` | Cards, inputs |
| `surface-2` | `#1C1C28` | Hover states, nested elements |
| `surface-3` | `#24243A` | Tertiary depth |
| `accent` | `#7C5CFC` | Distinctive violet — not generic blue |
| `accent-hover` | `#6B4AEB` | Darker on interaction |
| `accent-muted` | `oklch(0.55 0.19 280 / 0.15)` | Icon backgrounds, subtle highlights |
| `accent-glow` | `oklch(0.55 0.19 280 / 0.06)` | Card hover glow |
| `text` | `#F0F0F5` | Warmer white, easier on eyes |
| `text-secondary` | `#9D9DB5` | Better contrast (5.1:1 vs bg) |
| `text-muted` | `#6B6B82` | Intentionally low for tertiary info |
| `border` | `#1E1E2E` | Visible but subtle |
| `border-hover` | `#2E2E42` | Clear hover feedback |

---

## Typography Scale

### Before (v1)
- Hero: `text-4xl` (36px mobile) — too small
- Body: `text-sm` (14px) — too small on dark bg
- Overline: `text-xs` (12px) — nearly invisible
- Section heading: `text-3xl` / `sm:text-4xl` — undersized

### After (v2)
- Hero: `text-[2.25rem]` → `lg:text-[3.75rem]` → `xl:text-[4.25rem]` — properly dominant
- Body: `text-[15px]` minimum — readable on dark
- Overline: `text-[13px]` tracking `0.15em` — visible and distinctive
- Section heading: `text-[1.75rem]` → `lg:text-[2.5rem]` — clear hierarchy
- Cards: `text-[15px]` body — comfortable reading

---

## Spacing System

### Before (v1)
| Element | Value | Issue |
|---|---|---|
| Section padding | `py-20 lg:py-28` | Excessive, creates dead zones |
| Hero padding | `py-24 lg:py-40` | 160px desktop padding wastes viewport |
| Grid gap | `gap-8` | Same value everywhere |

### After (v2)
| Element | Mobile | Desktop |
|---|---|---|
| Section padding | `py-16` (64px) | `lg:py-24` (96px) |
| Hero top | `pt-16` (64px) | `lg:pt-32` (128px) |
| Hero bottom | `pb-12` (48px) | `lg:pb-24` (96px) |
| Grid gap | `gap-4` cards, `gap-6` founders | `gap-4` to `gap-8` context-dependent |
| Card padding | `p-5` compact, `p-6 lg:p-8` featured | Context-driven |

---

## Component Upgrades

### Button
- Added accent glow shadow on primary variant
- Increased border-radius to `rounded-lg`
- Better size scale: sm=`px-5 py-2.5`, default=`px-6 py-3`, lg=`px-8 py-4`
- `active:scale-[0.97]` feedback

### Cards
- `rounded-xl` (12px) instead of `rounded-lg` (8px)
- Service cards: featured (2 large) + compact (icon+text horizontal layout)
- `.card-glow` utility for subtle accent border on hover
- Project cards: color-coded gradient backgrounds per project

### FAQ Accordion
- Card-style items (rounded-xl border)
- Active state: background + border change
- Plus icon rotates 45° to × on open
- Question text highlights on hover

### Header
- Scroll-aware: transparent → blurred on scroll
- Logo bumped to `text-[22px]`
- Mobile: 3-line hamburger, larger touch targets (`py-3.5`)
- Route-aware: auto-closes on navigation

### Footer
- `bg-elevated` background for visual separation
- LinkedIn icons in rounded squares
- Uppercase tracking headers for columns
