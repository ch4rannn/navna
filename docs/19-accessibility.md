# 19 — Accessibility

## Target Standard

**WCAG 2.2 Level AA**

---

## Implementation Requirements

### Semantic HTML
- Use correct HTML elements for their purpose (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`)
- Proper heading hierarchy: one `<h1>` per page, sequential `<h2>` → `<h3>` → `<h4>`
- Use `<button>` for actions, `<a>` for navigation
- Use `<ul>`/`<ol>` for lists
- Use `<table>` for tabular data (not layout)

### Keyboard Navigation
- All interactive elements focusable via Tab
- Logical tab order (follows visual layout)
- No keyboard traps
- Escape closes modals/menus
- Enter/Space activates buttons
- Arrow keys navigate within components (accordion, select)

### Focus States
- Visible focus indicator on all interactive elements
- Focus ring: `2px solid var(--color-accent)` with `2px` offset
- Never use `outline: none` without an alternative
- Focus-visible for keyboard-only focus indicators

### Color & Contrast
| Combination | Ratio | Requirement |
|-------------|-------|-------------|
| Body text on background | ≥ 4.5:1 | AA Normal text |
| Large text on background | ≥ 3:1 | AA Large text |
| UI components | ≥ 3:1 | AA UI elements |
| Decorative elements | No requirement | — |

### Images
- All meaningful images have descriptive `alt` text
- Decorative images use `alt=""` or CSS backgrounds
- SVG icons use `aria-hidden="true"` when decorative
- SVG icons use `role="img"` and `aria-label` when meaningful

### Forms
- Every input has a visible `<label>` element
- Labels are associated via `htmlFor`/`id`
- Error messages are associated via `aria-describedby`
- Required fields indicated via `aria-required="true"` and visual indicator
- Form validation errors are announced to screen readers
- Select elements are keyboard-accessible

### Skip Navigation
```html
<a href="#main" class="sr-only focus:not-sr-only">
  Skip to content
</a>
```
First focusable element on every page.

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### ARIA Usage
- Use ARIA only when native HTML semantics are insufficient
- `aria-label` for elements that need accessible names
- `aria-expanded` for accordion/collapsible elements
- `aria-current="page"` for active navigation items
- `aria-live="polite"` for dynamic content updates (form status)
- `role="alert"` for error messages

### Mobile Accessibility
- Touch targets minimum 44×44px
- Sufficient spacing between interactive elements
- Content readable without zooming
- Pinch-to-zoom not disabled
- Viewport meta does not prevent scaling

---

## Testing Checklist

- [ ] Tab through entire site — all interactive elements reachable
- [ ] Screen reader announces all content correctly
- [ ] All images have appropriate alt text
- [ ] All form inputs have associated labels
- [ ] Color contrast meets AA standards
- [ ] Focus states visible on all interactive elements
- [ ] Skip-to-content link works
- [ ] Mobile touch targets ≥ 44px
- [ ] Reduced motion preference respected
- [ ] No content conveyed by color alone
