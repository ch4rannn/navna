# 22 — Analytics

## Philosophy

Track what matters. Respect user privacy. No unnecessary tracking.

---

## Recommended Platform

**Cloudflare Web Analytics** (privacy-first, no cookies, free with Cloudflare)

Alternative: **Plausible** or **Fathom** (privacy-focused, lightweight)

Avoid: Google Analytics 4 (heavy, privacy concerns, complex)

---

## Events to Track

### Page Views (Automatic)
| Event | Trigger | Notes |
|-------|---------|-------|
| `page_view` | Every page load | Automatic with analytics platform |

### Custom Events
| Event | Trigger | Page |
|-------|---------|------|
| `service_view` | Visit a service page | `/services/*` |
| `portfolio_view` | Visit a project page | `/work/*` |
| `cta_click` | Click "Start a Project" button | Any page |
| `contact_form_start` | Focus on first form field | `/contact` |
| `contact_form_submit` | Successfully submit form | `/contact` |
| `founder_linkedin_click` | Click a founder's LinkedIn link | Homepage, About |

### Implementation

For Cloudflare Web Analytics:
```html
<!-- In root layout <head> -->
<script
  defer
  src='https://static.cloudflareinsights.com/beacon.min.js'
  data-cf-beacon='{"token": "[your-token]"}'
></script>
```

For custom events (if platform supports it):
```typescript
// src/lib/analytics.ts
export function trackEvent(name: string, properties?: Record<string, string>) {
  // Implementation depends on chosen platform
  if (typeof window !== 'undefined' && window.cfBeacon) {
    // Cloudflare Web Analytics custom events
  }
}
```

---

## What NOT to Track

- Individual user behavior
- Personal information
- Mouse movements or heatmaps (not needed at this stage)
- Session recordings
- A/B test variants (premature)

---

## Privacy

- Use cookie-free analytics
- No cookie consent banner needed (if using Cloudflare Web Analytics)
- Comply with GDPR principles even without cookies
- Mention analytics in privacy policy
- No data sold to third parties

---

## Dashboard & Reporting

Track monthly:
1. Total page views
2. Most viewed pages
3. Traffic sources (referrer)
4. Geographic distribution
5. Device breakdown
6. Contact form submission rate

Review quarterly to inform content and UX decisions.
