# 21 — Security

## Security Model

The NAVNA website is a static site with no server-side processing. The primary attack surface is the contact form.

---

## Form Security

### Input Validation
- Client-side validation for immediate feedback
- Server-side validation in the form handler (Cloudflare Worker or third-party service)
- Email format validation
- Maximum length limits on all fields
- Strip HTML tags from text inputs

### Sanitization
- Sanitize all user inputs before processing
- Never render raw user input as HTML
- Escape special characters

### Spam Protection
- **Honeypot field** — hidden field that bots fill but humans don't
- **Time-based validation** — reject submissions faster than 3 seconds (bot behavior)
- No CAPTCHA (poor UX) unless spam becomes a problem

```html
<!-- Honeypot field — hidden from users, visible to bots -->
<input
  type="text"
  name="website"
  tabindex="-1"
  autocomplete="off"
  style="position: absolute; left: -9999px;"
  aria-hidden="true"
/>
```

---

## Security Headers

Applied via `public/_headers` or Cloudflare configuration:

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `X-XSS-Protection` | `1; mode=block` | XSS filter (legacy browsers) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referer leakage |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Restrict browser features |
| `Content-Security-Policy` | (see below) | Restrict resource loading |

### Content Security Policy
```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https:;
frame-src 'none';
object-src 'none';
base-uri 'self';
```

---

## Environment Variables

### Rules
- Never commit `.env.local` to version control
- Never expose API keys in client-side code
- Use `NEXT_PUBLIC_` prefix only for non-sensitive values
- Store secrets in Cloudflare environment variables dashboard
- Create `.env.example` with safe placeholder values

### .env.example
```
# Public (safe to expose)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=

# Private (never expose to client)
CONTACT_FORM_API_KEY=your-api-key-here
CONTACT_EMAIL_TO=your-email@example.com
```

---

## HTTPS

- Cloudflare provides automatic HTTPS
- SSL mode: Full (Strict)
- Always Use HTTPS: Enabled
- HSTS enabled with `max-age=31536000`

---

## Dependency Security

- Keep all npm dependencies up to date
- Run `npm audit` before each deployment
- Avoid unnecessary dependencies (smaller attack surface)
- Pin dependency versions in `package.json`

---

## What We Don't Need

Since this is a static site:
- No authentication system needed
- No database security concerns
- No server-side session management
- No API route protection (no API routes)
- No CORS configuration (no cross-origin requests)
