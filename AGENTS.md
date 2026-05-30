# AGENTS.md

Quick orientation for Codex/Hermes and future AI chats working in this repo.

## Product summary
- Relius Website is the public marketing/documentation surface for Relius, a church management platform with AI-powered ministry workflows.
- The site supports acquisition, SEO, product education, migration positioning, docs, blog content, and lead capture.

## Architecture at a glance
- Next.js App Router marketing site using static export.
- React 19 + TypeScript + Tailwind CSS 4.
- GitHub Pages hosts the static site at `relius.ai` / `www.relius.ai`.
- A Cloudflare Worker under `worker/` handles contact/CTA notifications and email delivery.
- PostHog analytics are wired through `lib/analytics.tsx`.

## Repo layout
- `app/`: Next.js App Router pages and route segments.
- `components/`: reusable UI, sections, forms, SEO, docs, blog, and demo components.
- `data/`: structured content catalogs for features, pillars, blog posts, docs navigation, migrations, and use cases.
- `lib/`: shared utilities, analytics, constants, and migration URLs.
- `public/`: static assets, CNAME, robots, and sitemap files.
- `worker/`: Cloudflare Worker backend for form/notification flows.
- `.github/workflows/deploy.yml`: GitHub Pages static deployment workflow.
- `.serena/`: Serena semantic-code index project config and local caches/logs.

## Key entry points
- Site shell: `app/layout.tsx`.
- Homepage: `app/page.tsx`.
- Global styling/design tokens: `app/globals.css`.
- Blog listing/detail: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `data/blog-posts.ts`.
- Docs hub/navigation: `app/resources/docs/**`, `data/docs-navigation.ts`, `components/docs/`.
- Main marketing sections: `components/sections/`.
- Contact/newsletter forms: `components/forms/contact-form.tsx`, `components/forms/newsletter-form.tsx`.
- Worker API: `worker/src/index.ts`, `worker/wrangler.toml`.
- Analytics/CTA notifications: `lib/analytics.tsx`.

## Common commands
- Install: `npm ci`.
- Local dev: `npm run dev`.
- Production build/static export: `npm run build`.
- Start built Next app locally: `npm run start`.
- Lint: `npm run lint`.
- Worker dev: `cd worker && npm ci && npm run dev`.
- Worker deploy: `cd worker && npm run deploy`.
- Serena index refresh: `uvx --from git+https://github.com/oraios/serena serena project index . --name relius-website --language typescript`.
- Cross-repo agent/AWS runbook: `/Users/madhulekh/Projects/relius/docs/operations/AGENT_CONTEXT_AND_AWS_READONLY.md`.

## Deployment
- Static site deploys from `.github/workflows/deploy.yml`.
- Build artifact is `./out` because `next.config.ts` uses `output: "export"`.
- Domain files: `CNAME`, `public/CNAME`, `public/.nojekyll`.
- SEO crawl assets live in `public/robots.txt` and `public/sitemap*.xml`.

## Environment variables and integrations
- Public analytics and CTA behavior uses `NEXT_PUBLIC_*` values where applicable.
- Contact/CTA flows use the Cloudflare Worker endpoint and Worker secrets/config.
- Newsletter route uses server-side env for Beehiiv if enabled.
- Do not commit credentials, API keys, worker secrets, production tokens, or private lead/customer data.

## Testing and quality
- Minimum pre-change sanity: `git status -sb`, inspect relevant route/data/component files, then run `npm run build`.
- For content/navigation edits, verify route existence against `data/docs-navigation.ts`, `data/blog-posts.ts`, `data/use-cases.ts`, and generated/public sitemap files.
- There is currently little formal test coverage; treat static build, route/nav parity, and visual smoke checks as the main gates.

## Known gotchas
- Static export and dynamic/server routes can conflict. Be careful with `app/api/newsletter/route.ts` and anything requiring a server runtime.
- Contact form and CTA notification flows use the Worker, while newsletter uses a Next API route. Keep runtime assumptions explicit.
- Docs/navigation and sitemap content can drift because much of the site is data-driven.
- `next lint` behavior can vary across recent Next versions; if lint breaks due tooling rather than code, still run `npm run build` and inspect ESLint config/package compatibility.

## Future AI maintenance pattern
1. Pull latest and check for a clean tree before editing.
2. Read this file plus `package.json`, `next.config.ts`, and the target route/data/component files.
3. Use Serena for symbol-level navigation, then file search for text/content/SEO checks.
4. Keep changes small and tied to a concrete marketing/product outcome.
5. Run `npm run build` before reporting a website change as done.
