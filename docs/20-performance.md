# 20 — Performance

## Targets

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | ≥ 95 | All pages |
| LCP (Largest Contentful Paint) | < 2.5s | Hero text/image |
| FID (First Input Delay) | < 100ms | Minimal JS makes this easy |
| CLS (Cumulative Layout Shift) | < 0.1 | Font loading, image dimensions |
| TTFB (Time to First Byte) | < 200ms | Static files from Cloudflare edge |
| Total Page Size | < 500KB | First load (compressed) |

---

## Optimization Strategies

### Fonts
- Use `next/font` for Inter — self-hosted, no external request
- `font-display: swap` to prevent FOIT
- Subset to Latin characters only
- Preload critical font weights (400, 500, 600, 700)

### Images
- Use WebP format for all images
- Set explicit `width` and `height` to prevent CLS
- Lazy load all below-fold images (`loading="lazy"`)
- Use appropriate image sizes (not oversized originals)
- Generate OG images at correct dimensions (1200×630)

### CSS
- Tailwind CSS purges unused styles at build time
- Result: typically < 20KB CSS
- Inline critical CSS (Next.js handles this)
- No external CSS files beyond self-hosted fonts

### JavaScript
- Next.js automatically code-splits per route
- Minimal client-side JavaScript (mostly static content)
- Framer Motion is tree-shakeable — import only used features
- No heavy third-party libraries
- Defer non-critical scripts

### Network
- Static files served from Cloudflare edge (nearest POP)
- Long cache headers for hashed assets
- Minimal HTTP requests per page
- No external API calls at runtime
- No third-party scripts unless strictly necessary

### Build Optimization
- `next build` with `output: 'export'` generates optimized static HTML
- Pre-rendered HTML for every route
- Minified HTML, CSS, and JS in production
- Tree-shaking removes unused code

---

## Performance Budget

| Resource Type | Budget |
|--------------|--------|
| HTML | < 30KB |
| CSS (total) | < 25KB |
| JS (total first-load) | < 100KB |
| Images (per page, above fold) | < 200KB |
| Fonts (total) | < 100KB |
| **Total first load** | **< 500KB** |

---

## What to Avoid

| ❌ Avoid | Reason |
|----------|--------|
| Huge background videos | Massive file sizes, poor mobile experience |
| Unoptimized hero images | Delays LCP |
| Auto-playing media | Performance and UX impact |
| Heavy animation libraries | Unnecessary JS bloat |
| Multiple external font services | Extra DNS lookups, render blocking |
| Analytics libraries beyond one | Cumulative performance impact |
| Social media embed scripts | Heavy, often blocking |
| Chat widgets | Heavy JS, impacts Core Web Vitals |

---

## Monitoring

- Run Lighthouse audit before each deployment
- Monitor Core Web Vitals via Cloudflare Analytics (if available)
- Test on throttled connections (Slow 3G, Fast 3G)
- Test on mid-range mobile devices
