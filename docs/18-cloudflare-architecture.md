# 18 — Cloudflare Architecture

## Deployment Model

**Cloudflare Workers Static Assets**

The NAVNA website is a statically exported Next.js application deployed to Cloudflare's edge network via Workers Static Assets.

```
Next.js Build (output: 'export')
    → /out directory (static HTML, CSS, JS, images)
    → Cloudflare Workers Static Assets
    → Global edge delivery via Cloudflare CDN
```

---

## Production Domain

```
https://navna.online
```

---

## DNS Configuration

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | navna.online | Cloudflare Workers (auto-configured) | ✅ Proxied |
| CNAME | www | navna.online | ✅ Proxied |

### Redirects
- `http://navna.online` → `https://navna.online` (automatic via Cloudflare)
- `http://www.navna.online` → `https://navna.online`
- `https://www.navna.online` → `https://navna.online`

---

## HTTPS

- Cloudflare provides automatic SSL/TLS
- SSL mode: **Full (Strict)**
- Always Use HTTPS: **Enabled**
- Automatic HTTPS Rewrites: **Enabled**
- HSTS: **Enabled**

---

## Wrangler Configuration

```toml
# wrangler.toml
name = "navna-website"
compatibility_date = "2026-09-01"

[site]
bucket = "./out"
```

### Deployment Command
```bash
npx wrangler deploy
```

---

## CDN & Caching

### Cache Strategy
| Asset Type | Cache Duration | Cache-Control |
|-----------|---------------|---------------|
| HTML pages | 1 hour | `public, max-age=3600, s-maxage=86400` |
| CSS/JS (hashed) | 1 year | `public, max-age=31536000, immutable` |
| Images | 1 month | `public, max-age=2592000` |
| Fonts | 1 year | `public, max-age=31536000, immutable` |

### Cache Purge
After each deployment, purge the Cloudflare cache to ensure fresh content.

---

## Security Headers

Create `public/_headers` file:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'
```

---

## Environment Variables

### Development (.env.local)
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=
```

### Production (Cloudflare Dashboard)
```
NEXT_PUBLIC_SITE_URL=https://navna.online
NEXT_PUBLIC_GA_ID=[actual-id]
```

### .env.example
```
# Site URL (used for canonical URLs and OG tags)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics
NEXT_PUBLIC_GA_ID=

# Contact Form (if using Cloudflare Worker backend)
CONTACT_FORM_API_KEY=
CONTACT_EMAIL_TO=
```

---

## Contact Form Backend (Optional Cloudflare Worker)

If a server-side contact form is needed, create a separate Cloudflare Worker:

```
navna-contact-worker/
├── src/
│   └── index.ts          # Worker handler
├── wrangler.toml
└── package.json
```

The worker receives POST requests from the contact form and sends emails via a transactional email API (Resend, SendGrid, etc.).

**For v1**, the contact form can use a third-party service like Web3Forms or Formspree to avoid the need for a custom worker.

---

## Pre-Deployment Checklist

- [ ] `next build` completes without errors
- [ ] `/out` directory contains all expected pages
- [ ] `wrangler.toml` is configured correctly
- [ ] DNS records point to Cloudflare
- [ ] SSL/TLS is set to Full (Strict)
- [ ] `_headers` file is in `/public`
- [ ] `robots.txt` is in `/public`
- [ ] `sitemap.xml` references `https://navna.online`
- [ ] All canonical URLs use `https://navna.online`
- [ ] OG images are present and accessible
- [ ] Contact form backend is configured
- [ ] Environment variables are set in Cloudflare
- [ ] `www` redirect works
- [ ] HTTPS redirect works
- [ ] 404 page works
