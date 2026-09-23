# 25 — Testing

## Test Categories

### 1. Functional Testing

| Test | Expected Result |
|------|----------------|
| Click all nav links | Each navigates to correct page |
| Click all CTA buttons | All link to `/contact` |
| Click "View Our Work" | Links to `/work` |
| Click service "Learn More" | Links to correct service page |
| Click project cards | Links to project detail pages |
| Click founder LinkedIn links | Opens correct LinkedIn profile in new tab |
| Click footer links | All navigate correctly |
| Submit contact form (valid) | Shows success state |
| Submit contact form (empty required) | Shows validation errors |
| Submit contact form (invalid email) | Shows email format error |
| Click FAQ accordion items | Expands/collapses content |
| Open mobile menu | Menu slides in/overlays |
| Close mobile menu | Menu closes |
| Navigate via mobile menu links | Correct navigation + menu closes |
| Visit non-existent URL | Shows 404 page |
| Click "Back Home" on 404 | Returns to homepage |
| Browser back/forward | Correct page history |

### 2. Visual Testing

#### Desktop (1440px+)
- [ ] Homepage renders correctly
- [ ] All sections properly spaced
- [ ] Grid layouts align properly
- [ ] Typography hierarchy clear
- [ ] Images display correctly
- [ ] Footer complete and aligned

#### Tablet (768px–1024px)
- [ ] Layout adapts appropriately
- [ ] Navigation still works (desktop or mobile variant)
- [ ] Grid columns reduce
- [ ] Text remains readable
- [ ] Touch targets adequate

#### Mobile (320px–430px)
- [ ] Mobile navigation works
- [ ] Hero text fits without overflow
- [ ] No horizontal scrolling
- [ ] Cards stack vertically
- [ ] Form fields full-width
- [ ] Buttons full-width or appropriately sized
- [ ] Footer stacks properly
- [ ] Text readable without zooming

#### Specific Breakpoints
- [ ] 320px (small phone)
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 430px (iPhone 14 Pro Max)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro / small desktop)
- [ ] 1280px (desktop)
- [ ] 1440px (large desktop)
- [ ] 1920px (full HD)

### 3. SEO Testing

| Test | Expected Result |
|------|----------------|
| Unique `<title>` per page | ✅ Each page has unique title |
| Meta description per page | ✅ Each page has unique description |
| Canonical URL per page | ✅ Points to `https://navna.online/...` |
| Open Graph tags | ✅ Present on all pages |
| Twitter Card tags | ✅ Present on all pages |
| `<h1>` count per page | ✅ Exactly one per page |
| Heading hierarchy | ✅ Sequential, no skipping |
| `sitemap.xml` | ✅ Accessible, lists all pages |
| `robots.txt` | ✅ Accessible, references sitemap |
| Image `alt` text | ✅ All images have alt text |
| JSON-LD schemas | ✅ Valid, present on correct pages |
| No `localhost` in metadata | ✅ All URLs use production domain |
| Internal links work | ✅ No broken internal links |

### 4. Accessibility Testing

| Test | Expected Result |
|------|----------------|
| Tab through entire site | All interactive elements reachable |
| Focus states visible | Clear focus indicator on all elements |
| Skip-to-content link | Works, visible on focus |
| Screen reader (basic) | Content announced logically |
| Form labels | All inputs have associated labels |
| Error announcements | Screen reader announces form errors |
| Color contrast | Meets AA standards |
| Reduced motion | Animations disabled with preference |
| Touch targets | ≥ 44×44px on mobile |

### 5. Performance Testing

| Test | Target |
|------|--------|
| Lighthouse Performance score | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Total page size | < 500KB |
| No render-blocking resources | ✅ |
| Images optimized | ✅ |
| Fonts preloaded | ✅ |

### 6. Security Testing

| Test | Expected Result |
|------|----------------|
| Security headers present | ✅ All headers set correctly |
| No API keys in client code | ✅ |
| Form honeypot field works | Hidden from users, catches bots |
| Form input sanitized | HTML tags stripped |
| HTTPS enforced | ✅ |
| No console errors | ✅ |
| No sensitive data in console logs | ✅ |

---

## Test Commands

```bash
# Build test
npm run build

# Lint test
npm run lint

# Type check
npx tsc --noEmit

# Start production preview
npx serve out
```
