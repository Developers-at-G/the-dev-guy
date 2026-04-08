# Abdallah Amadou Gueye — Portfolio

Personal portfolio and engineer blog built with Next.js: bilingual project showcase, case studies, a Prisma-backed blog API, and a streaming AI assistant grounded in structured portfolio data.

<!-- ADD SCREENSHOT OR GIF HERE -->

**Live demo:** [Add your production URL](https://example.com)

## Tech stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · Framer Motion · Prisma · PostgreSQL · Vercel AI SDK · OpenAI · Vercel Analytics

## Key features

- **Bilingual UI (EN / FR):** Copy lives in `src/locales`; `LanguageContext` resolves strings on the server path and after hydration, with language persisted in `localStorage`.
- **Project catalog:** Static tech metadata in `src/data/projects.ts` is merged with translated titles, problems, and impacts; each project is available at `/Projects/[slug]` with video or image media handled in cards and detail views.
- **Streaming chatbot:** `/api/chat` uses the AI SDK with `streamText`, converts UI messages via `convertToModelMessages`, and injects context from profile, projects, skills, and education helpers; responses are rate-limited per client IP (10 requests per 24h).
- **Blog + persistence:** Static blog routes under `src/app/blog`; `GET`/`POST` handlers for comments and likes use Prisma models (`BlogComment`, `BlogReaction`) with slug validation, optional rate limits, and approval for comments.
- **API hardening:** Middleware attaches CORS headers for `/api/*` when the request `Origin` matches `NEXT_PUBLIC_SITE_URL` or known deployment hosts.
- **Performance:** Home sections below the fold are `next/dynamic` loaded with skeletons; Framer Motion usage is package-import optimized in `next.config.ts`; production builds strip most `console` output.
- **Global UX:** Theme toggle (`ThemeContext`), custom cursor, floating contact control, and client-only chatbot loaded via dynamic imports in the root layout.

## Getting started

```bash
git clone <repository-url>
cd the-dev-guy
yarn install
cp .env.example .env.local
```

Set these variables in `.env.local` (see `.env.example` — **values** are yours, never commit secrets):

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | PostgreSQL for Prisma (blog comments / reactions). Optional if you only browse static pages. |
| `OPENAI_API_KEY` | Required for the chatbot. Without it, `/api/chat` will fail at runtime. |
| `NEXT_PUBLIC_SITE_URL` | Optional locally; used for CORS allowlist in middleware when set. |

Apply the schema when using the blog APIs:

```bash
yarn prisma db push
# or: yarn prisma migrate dev
```

Run the dev server (default [http://localhost:3000](http://localhost:3000)):

```bash
yarn dev
```

Other scripts: `yarn build` (runs `prisma generate` then `next build`), `yarn start`, `yarn lint`.

## Project structure

| Path | Role |
|------|------|
| `src/app/` | App Router routes: home, `Projects`, `blog`, `frontend-architecture`, `case-studies`, `api` (chat, blog comments/likes). |
| `src/components/` | UI primitives (`ui/`), page sections, `Chatbot`, layout helpers; `ClientComponents` lazy-loads cursor, chat, and floating contact. |
| `src/data/` | Typed builders for projects, profile, skills, education — combined with translations at runtime. |
| `src/locales/` | English and French JSON namespaces (`common`, `projects`, `profile`, etc.). |
| `src/lib/` | Translations loader, Prisma client, rate limiting, validation. |
| `prisma/` | Schema for blog reactions and comments. |
| `public/` | Static assets (images, videos). |
