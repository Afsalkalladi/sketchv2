# Sketch Robotics — Production SEO, GEO, AEO & Analytics Guide

## What Was Implemented

### Files Created / Modified

| File | Purpose |
|------|---------|
| `app/robots.ts` | Dynamic robots.txt — allows all crawlers including AI bots (GPTBot, Bingbot, Anthropic-AI, ChatGPT-User, Google-Extended) |
| `app/sitemap.ts` | Dynamic sitemap.xml with all 4 pages, priorities, and change frequencies |
| `app/layout.tsx` | Root layout with comprehensive metadata, Vercel Analytics, Speed Insights, structured data |
| `app/opengraph-image.tsx` | Auto-generated OG image (1200×630) for social sharing |
| `app/components/StructuredData.tsx` | JSON-LD structured data: Organization, Website, FAQ, per-page schemas |
| `app/solutions/layout.tsx` | Solutions page metadata + JSON-LD (services schema) |
| `app/team/layout.tsx` | Team page metadata + JSON-LD (about page + person schema) |
| `app/careers/layout.tsx` | Careers page metadata + JSON-LD (job postings schema) |
| `public/manifest.json` | Web app manifest for PWA-readiness |
| `next.config.ts` | Security headers, cache headers, compression enabled |

---

## Post-Deploy Steps (Manual — Vercel Dashboard & Google)

### 1. Enable Vercel Analytics

1. Go to [Vercel Dashboard](https://vercel.com/) → your **sketchv2** project
2. Navigate to **Analytics** tab in the left sidebar
3. Click **Enable Analytics** → confirm
4. Analytics will auto-collect from the `<Analytics />` component already added to your layout

### 2. Enable Vercel Speed Insights

1. In the same Vercel project dashboard
2. Navigate to **Speed Insights** tab
3. Click **Enable Speed Insights** → confirm
4. Real User Monitoring (RUM) data will auto-collect from the `<SpeedInsights />` component

### 3. Google Search Console (CRITICAL for replacing old site data)

This is the most important step to get Google to index your new site content.

1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://sketchrobotics.in`
3. Verify ownership via one of these methods:
   - **DNS verification** (recommended): Add a TXT record to your domain DNS
   - **HTML tag**: Add meta tag to `<head>` (we can add this if needed)
   - **Domain provider**: If domain is at Google Domains/Cloudflare
4. After verification:
   - Submit sitemap: Go to **Sitemaps** → enter `sitemap.xml` → click **Submit**
   - Request indexing: Go to **URL Inspection** → enter `https://sketchrobotics.in` → click **Request Indexing**
   - Do the same for `/solutions`, `/team`, `/careers`
5. **Remove outdated content** (if old site had different URLs):
   - Use [Google's Remove Outdated Content tool](https://search.google.com/search-console/removals) to request removal of stale cached pages

### 4. Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your site: `https://sketchrobotics.in`
3. Verify ownership
4. Submit sitemap: `https://sketchrobotics.in/sitemap.xml`

### 5. Google Business Profile (GEO optimization)

If not already done:
1. Go to [Google Business Profile](https://business.google.com/)
2. Create/claim your business: "Sketch Robotics Pvt Ltd"
3. Add details: Kochi address, phone, website, hours, category (Robotics Company / Technology Company)
4. This significantly helps local/GEO search results

### 6. Add a Favicon

Currently using the logo as apple-touch-icon. For proper favicon:
1. Generate a favicon from your logo using [favicon.io](https://favicon.io/)
2. Place `favicon.ico` in `/public/`
3. Place `favicon-16x16.png`, `favicon-32x32.png` in `/public/`
4. Place `apple-touch-icon.png` (180×180) in `/public/`

### 7. OG Image (Optional Enhancement)

An auto-generated OG image is already created at `/opengraph-image`. For a branded image:
1. Design a 1200×630px branded image
2. Save as `/public/images/og-image.png`
3. Update `openGraph.images` in `layout.tsx` to use the static path

---

## What Each SEO/GEO/AEO Feature Does

### SEO (Search Engine Optimization)
- **Metadata**: Title templates, descriptions, keywords on every page
- **robots.txt**: Tells search engines what to crawl
- **sitemap.xml**: Helps Google discover all pages with priority signals
- **Canonical URLs**: Prevents duplicate content issues
- **Open Graph / Twitter Cards**: Rich previews when shared on social media
- **Security Headers**: X-Frame-Options, CSP, etc. (improves trust signals)

### GEO (Generative Engine Optimization)
- **geo.region, geo.placename, geo.position, ICBM** meta tags: Helps location-based search
- **Google Business Profile**: Local search visibility
- **Structured Data (Organization)**: Address, location, founding location in schema
- **Local keywords**: "Kochi", "Kerala", "India" in descriptions

### AEO (Answer Engine Optimization)
- **FAQ Schema**: Direct answers for AI assistants (Google AI Overview, ChatGPT, Bing Chat)
- **JSON-LD Structured Data**: Machine-readable data on every page
- **AI Bot Access**: robots.txt explicitly allows GPTBot, ChatGPT-User, Google-Extended, Anthropic-AI
- **Clear, factual descriptions**: Written to be extractable by LLMs
- **Service descriptions**: Detailed enough for AI to generate accurate answers
- **Person schema**: Team members discoverable by AI assistants

---

## Verification Checklist

After deploying, verify these URLs work:

- [ ] `https://sketchrobotics.in/robots.txt` — shows robot rules
- [ ] `https://sketchrobotics.in/sitemap.xml` — lists all pages
- [ ] `https://sketchrobotics.in/manifest.json` — PWA manifest
- [ ] `https://sketchrobotics.in/opengraph-image` — OG image renders

### Test Tools

| Tool | URL | What It Tests |
|------|-----|---------------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Structured data validity |
| Google PageSpeed Insights | https://pagespeed.web.dev/ | Performance score |
| Facebook Sharing Debugger | https://developers.facebook.com/tools/debug/ | OG tags preview |
| Twitter Card Validator | https://cards-dev.twitter.com/validator | Twitter card preview |
| Schema.org Validator | https://validator.schema.org/ | JSON-LD validation |
| Bing URL Inspection | https://www.bing.com/webmasters/urlinspection | Bing indexing |
| Ahrefs/Moz Backlink Check | https://ahrefs.com/backlink-checker | Existing backlinks to preserve |

---

## Transitioning from Old Site to New

Since your old site already has Google search presence:

1. **Keep the same domain** (`sketchrobotics.in`) ✅ — already doing this
2. **Submit new sitemap** in Google Search Console immediately after deploy
3. **Request indexing** for all 4 pages via URL Inspection tool
4. **Monitor Search Console** for crawl errors and coverage reports
5. **If old pages had different URLs**: Set up redirects in `next.config.ts`:
   ```ts
   async redirects() {
     return [
       { source: '/old-page', destination: '/new-page', permanent: true },
     ];
   }
   ```
6. Google typically re-indexes within 2-7 days after sitemap submission
7. Full transition of search snippets: 2-4 weeks

---

## Future Improvements

- [ ] Add a **blog** section (huge for SEO — target long-tail robotics keywords)
- [ ] Create **case study** pages for projects (builds authority)
- [ ] Add **testimonials** with Review schema
- [ ] Implement **breadcrumb navigation** UI to match breadcrumb schema
- [ ] Add **hreflang** tags if you expand to multiple languages
- [ ] Set up **Google Tag Manager** for conversion tracking
- [ ] Create a **404 page** with navigation back to key pages
- [ ] Add **alt text** review for all images (already using Next.js Image)
