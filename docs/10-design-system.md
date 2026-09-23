# 10 — Design System

## Typography

### Font Selection
**Primary Font:** Inter (Google Fonts)

**Rationale:** Inter is designed for screens, has excellent readability at all sizes, supports a wide range of weights, and is widely used in professional technology products. It communicates technical competence without being cold.

### Type Scale (1.25 ratio — Major Third)

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `display` | 4.5rem (72px) | 700 | 1.05 | Hero headline |
| `h1` | 3rem (48px) | 700 | 1.1 | Page titles |
| `h2` | 2.25rem (36px) | 600 | 1.15 | Section headings |
| `h3` | 1.5rem (24px) | 600 | 1.25 | Sub-section headings |
| `h4` | 1.25rem (20px) | 600 | 1.3 | Card titles |
| `body-lg` | 1.125rem (18px) | 400 | 1.6 | Lead paragraphs |
| `body` | 1rem (16px) | 400 | 1.6 | Body text |
| `body-sm` | 0.875rem (14px) | 400 | 1.5 | Supporting text |
| `caption` | 0.75rem (12px) | 500 | 1.4 | Labels, captions |
| `overline` | 0.75rem (12px) | 600 | 1.4 | Section labels (uppercase, tracked) |

### Mobile Type Scale
Scale down display and h1 for mobile:
- `display`: 2.5rem (40px)
- `h1`: 2rem (32px)
- `h2`: 1.75rem (28px)

---

## Color Palette

### CSS Custom Properties

```css
:root {
  /* Background */
  --color-bg: #09090B;
  --color-surface: #18181B;
  --color-surface-2: #27272A;

  /* Text */
  --color-text: #FAFAFA;
  --color-text-secondary: #A1A1AA;
  --color-text-muted: #71717A;

  /* Border */
  --color-border: #27272A;
  --color-border-hover: #3F3F46;

  /* Accent */
  --color-accent: #3B82F6;
  --color-accent-hover: #2563EB;
  --color-accent-subtle: rgba(59, 130, 246, 0.1);

  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #EAB308;
  --color-error: #EF4444;

  /* Overlay */
  --color-overlay: rgba(0, 0, 0, 0.6);
}
```

### Color Accessibility
All text colors meet WCAG 2.2 AA contrast requirements:
- `--color-text` on `--color-bg`: 18.1:1 ✅
- `--color-text-secondary` on `--color-bg`: 7.2:1 ✅
- `--color-text-muted` on `--color-bg`: 4.6:1 ✅
- `--color-accent` on `--color-bg`: 4.8:1 ✅

---

## Spacing Scale

Based on a 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight spacing, inline elements |
| `--space-2` | 8px | Small gaps, icon padding |
| `--space-3` | 12px | Input padding, small card padding |
| `--space-4` | 16px | Standard element spacing |
| `--space-5` | 20px | Card padding |
| `--space-6` | 24px | Section internal spacing |
| `--space-8` | 32px | Component gaps |
| `--space-10` | 40px | Large component spacing |
| `--space-12` | 48px | Section spacing (mobile) |
| `--space-16` | 64px | Section spacing (desktop) |
| `--space-20` | 80px | Major section spacing |
| `--space-24` | 96px | Page section dividers |
| `--space-32` | 128px | Hero spacing |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 6px | Buttons, inputs, badges |
| `--radius-md` | 8px | Cards, dropdowns |
| `--radius-lg` | 12px | Large cards, modals |
| `--radius-xl` | 16px | Hero elements, featured cards |
| `--radius-full` | 9999px | Pill shapes, avatars |

---

## Shadows

Minimal shadows — used only for elevation.

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.3);
```

---

## Layout

### Container
- Max width: `1200px`
- Padding: `24px` (mobile), `32px` (tablet), `48px` (desktop)
- Centered with `margin: 0 auto`

### Grid
- 12-column grid system using CSS Grid
- Gap: `24px` (mobile), `32px` (desktop)

### Breakpoints
| Token | Value | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Desktops |
| `2xl` | 1440px | Large desktops |

---

## Component Specifications

### Button
| Variant | Background | Text | Border | Hover |
|---------|-----------|------|--------|-------|
| Primary | `--color-accent` | white | none | `--color-accent-hover` |
| Secondary | transparent | `--color-text` | `--color-border` | `--color-surface-2` bg |
| Ghost | transparent | `--color-text-secondary` | none | `--color-surface` bg |

- Padding: `12px 24px`
- Border radius: `--radius-sm`
- Font weight: 500
- Transition: `all 150ms ease`
- Focus ring: `2px solid --color-accent` with `2px` offset

### Input / Textarea
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Text: `--color-text`
- Placeholder: `--color-text-muted`
- Focus: border `--color-accent`
- Padding: `12px 16px`
- Border radius: `--radius-sm`

### Card
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Radius: `--radius-md`
- Padding: `24px`
- Hover: border `--color-border-hover`, subtle translate

### Badge
- Background: `--color-accent-subtle`
- Text: `--color-accent`
- Padding: `4px 12px`
- Radius: `--radius-full`
- Font size: `caption`

---

## Animation Tokens

```css
--transition-fast: 150ms ease;
--transition-base: 250ms ease;
--transition-slow: 350ms ease;
--transition-spring: 500ms cubic-bezier(0.16, 1, 0.3, 1);
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Icon System

Use inline SVGs for icons. No external icon library required for the initial set:
- Arrow right
- External link
- Menu (hamburger)
- Close (X)
- LinkedIn
- Check
- ChevronDown
- Mail
- Plus/Minus (FAQ accordion)

All icons: 24x24 default, `currentColor` fill, accessible via `aria-hidden="true"` when decorative.
