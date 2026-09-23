# 24 — Deployment

## Deployment Process

### Step 1 — Create Cloudflare Account
1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Verify email
3. Select plan (Free tier is sufficient)

### Step 2 — Add Domain
1. Go to **Websites** → **Add a site**
2. Enter: `navna.online`
3. Select plan
4. Cloudflare will scan existing DNS records

### Step 3 — Configure DNS
1. Update nameservers at domain registrar to Cloudflare's nameservers
2. Wait for DNS propagation (up to 24 hours, usually faster)
3. Verify domain is active in Cloudflare dashboard

### Step 4 — Install Wrangler CLI
```bash
npm install -g wrangler
wrangler login
```

### Step 5 — Configure Project
Ensure `wrangler.toml` exists in project root:
```toml
name = "navna-website"
compatibility_date = "2026-09-01"

[site]
bucket = "./out"
```

### Step 6 — Build for Production
```bash
npm run build
```
This generates the `/out` directory with all static files.

### Step 7 — Deploy
```bash
npx wrangler deploy
```

### Step 8 — Configure Custom Domain
1. In Cloudflare Workers dashboard, go to the deployed worker
2. Add custom domain: `navna.online`
3. Add custom domain: `www.navna.online` (redirect to non-www)

### Step 9 — Configure SSL/TLS
1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode: **Full (Strict)**
3. Enable **Always Use HTTPS**
4. Enable **Automatic HTTPS Rewrites**

### Step 10 — Configure Redirects
Create redirect rules:
- `www.navna.online/*` → `https://navna.online/$1` (301)

### Step 11 — Verify
Test all of the following:
- [ ] `https://navna.online` loads correctly
- [ ] `http://navna.online` redirects to HTTPS
- [ ] `https://www.navna.online` redirects to non-www
- [ ] `http://www.navna.online` redirects to `https://navna.online`
- [ ] All pages render correctly
- [ ] Navigation works
- [ ] Contact form works
- [ ] Images load
- [ ] Fonts load
- [ ] `sitemap.xml` accessible at `https://navna.online/sitemap.xml`
- [ ] `robots.txt` accessible at `https://navna.online/robots.txt`
- [ ] OG image accessible
- [ ] 404 page works for unknown routes
- [ ] Mobile responsive
- [ ] Performance acceptable

### Step 12 — Set Environment Variables
In Cloudflare Workers dashboard:
1. Go to worker settings → Variables
2. Add required environment variables:
   - `NEXT_PUBLIC_SITE_URL` = `https://navna.online`
   - `NEXT_PUBLIC_GA_ID` = (analytics ID when ready)

### Step 13 — Submit to Search Engines
1. Submit `https://navna.online/sitemap.xml` to Google Search Console
2. Submit to Bing Webmaster Tools
3. Verify ownership via DNS or meta tag

---

## CI/CD (Optional)

For automated deployments, connect GitHub repository to Cloudflare:

1. Push code to GitHub
2. In Cloudflare dashboard, connect to GitHub repo
3. Configure build command: `npm run build`
4. Configure output directory: `out`
5. Every push to `main` branch auto-deploys

---

## Rollback

If a deployment has issues:
1. Use Wrangler to deploy a previous version
2. Or revert the git commit and redeploy
