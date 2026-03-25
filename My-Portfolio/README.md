# Akshay Kale — Portfolio

A production-ready personal portfolio built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

---

## ✨ Features

- **Next.js 14 App Router** — Server Components, optimised image loading
- **TypeScript** — Strict mode; type-safe throughout
- **CSS Modules** — Scoped styles with no runtime overhead
- **SEO Ready** — Open Graph, Twitter Card, canonical URL, sitemap, robots.txt
- **Security Headers** — CSP, X-Frame-Options, referrer policy, permissions policy
- **Accessibility** — `prefers-reduced-motion`, `focus-visible` keyboard navigation
- **Performance** — AVIF/WebP images, Google Fonts preconnect, React strict mode

---

## 🚀 Quick Start

```bash
npm install
cp .env.example .env.local   # update NEXT_PUBLIC_SITE_URL if needed
npm run dev
```

Open http://localhost:3000

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens & global styles
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── page.tsx          # Home page
├── components/           # One component per section
└── data/
    └── portfolio.ts      # ← Edit ALL your content here
public/
├── profile.jpg
├── robots.txt
└── sitemap.xml
```

---

## ✏️ Customising Content

All text content lives in **one file**: `src/data/portfolio.ts`

Edit your name, bio, skills, experience, projects, and education there.

---

## 🌐 Deploy to Vercel (Recommended)

```bash
npm i -g vercel && vercel --prod
```

Or push to GitHub and import at vercel.com/new.

Set environment variable on Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 🖥️ Deploy to VPS

```bash
npm run build
npm run start        # port 3000

# With PM2:
pm2 start "npm run start" --name portfolio
```

Proxy with Nginx to localhost:3000.

---

## 🛠️ Scripts

| Script | Description |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint |
| `npm run lint:fix` | Auto-fix lint |
| `npm run type-check` | TypeScript check |

---

## 🔧 Env Variables

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` | Canonical URL for SEO |

See `.env.example` for full reference.
