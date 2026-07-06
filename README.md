# Meridian Partners - Company Website & Platform

A production-ready, responsive SaaS-style website for a U.S.-focused software talent company. Built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- **Marketing site** - Home, About, Services, Industries, Our Process, Careers, Blog, Contact
- **Dark/light mode** - System-aware theme toggle
- **Animations** - Framer Motion scroll animations with reduced-motion support
- **SEO** - Metadata, Open Graph, sitemap, robots.txt
- **Accessibility** - Skip links, ARIA labels, semantic HTML, focus states
- **CMS-ready** - Content lives in `src/content/` for easy migration to a headless CMS
- **Auth-ready** - Placeholder session/role helpers in `src/lib/auth.ts`
- **Database schema** - Prisma models for users, candidates, clients, applications, messaging
- **Portal scaffolding** - Admin, Client, and Candidate portal dashboards

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Database Setup

```bash
# Configure DATABASE_URL in .env.local, then:
npm run db:generate
npm run db:push
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Public pages with header/footer
│   ├── portal/          # Admin, client, candidate portals
│   └── api/             # API routes
├── components/
│   ├── layout/          # Header, Footer, ThemeToggle
│   ├── sections/        # Homepage sections
│   ├── ui/              # Reusable UI components
│   └── forms/           # Contact form
├── content/             # CMS-ready content files
├── lib/                 # Utils, metadata, auth placeholders
└── types/               # TypeScript interfaces
prisma/
└── schema.prisma        # PostgreSQL schema
```

## Deployment

Optimized for [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` to your production domain.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Prisma + PostgreSQL
- next-themes

## Next Steps

1. Replace placeholder company name/branding
2. Integrate NextAuth or Clerk for authentication
3. Connect Prisma to PostgreSQL
4. Wire contact form to API + database
5. Add real blog content via CMS
6. Build out portal features
