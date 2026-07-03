import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { publishedBlogPosts } from "@/data/blog-posts";
import { useCases } from "@/data/use-cases";

// Required for `output: export` — generate the sitemap statically at build time.
export const dynamic = "force-static";

const BASE_URL = "https://relius.ai";

// Redirect-only and noindex aliases should not be listed in the sitemap.
const DOC_REDIRECT_ALIASES = [
  "giving/donation-tracking",
  "giving/tax-receipts",
  "giving/online-giving-setup",
  "administration/integrations",
  "administration/church-settings",
  "administration/reporting",
  "people/family",
  "people/visitor",
  "people/visitor-tracking",
  "people/bulk-import",
  "getting-started/roles-permissions",
  "getting-started/permissions",
  "ai/pastoral-insights",
  "ai/volunteer-scheduler",
  "events-calendar",
  "public-website",
  "services/planning",
  "services/service-planning",
  "website/online-giving-page",
];

const REDIRECT_ONLY_ROUTES = new Set([
  "/demo",
  "/integrations",
  "/people",
  "/resources",
  "/resources/data-cleanup-guide",
  "/resources/migration-checklist",
  "/resources/setting-up-your-church",
  "/resources/staff-communication-template",
  "/resources/switching-from-another-system",
  "/resources/training-your-team",
  "/resources/videos",
  "/resources/volunteer-recruitment-strategies",
  "/training",
  "/resources/docs/administration/integrations",
  "/resources/docs/events/calendar",
  "/resources/docs/events/rentals",
  "/resources/docs/giving/donation-tracking",
  "/resources/docs/giving/tax-receipts",
  ...DOC_REDIRECT_ALIASES.map((slug) => `/resources/docs/${slug}`),
]);

const NOINDEX_PREFIXES = ["/docs"];

function shouldExcludeRoute(route: string): boolean {
  if (route === "/groups" || route === "/donations") return false;
  if (REDIRECT_ONLY_ROUTES.has(route)) return true;
  return NOINDEX_PREFIXES.some((prefix) => route === prefix || route.startsWith(`${prefix}/`));
}

/**
 * Walk the app/ directory and derive every static route from its page.tsx files.
 * Dynamic segments ([slug], [...slug]) are skipped here and expanded from data below.
 * This makes the sitemap self-maintaining: new pages appear automatically on build.
 */
function getStaticRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");
  const routes: string[] = [];

  function walk(dir: string, segments: string[]) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const name = entry.name;
      if (entry.isDirectory()) {
        if (name.startsWith("[")) continue; // dynamic route — expanded from data
        if (name.startsWith("_") || name === "api") continue; // private / non-page
        if (name.startsWith("(") && name.endsWith(")")) {
          walk(path.join(dir, name), segments); // route group — no URL segment
          continue;
        }
        walk(path.join(dir, name), [...segments, name]);
      } else if (name === "page.tsx" || name === "page.ts") {
        routes.push("/" + segments.join("/"));
      }
    }
  }

  walk(appDir, []);
  return routes.filter((route) => !shouldExcludeRoute(route));
}

function toUrl(route: string): string {
  return route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}/`;
}

function priorityFor(route: string): number {
  if (route === "/") return 1;
  if (/^\/(pricing|features|ai|switch|compare)/.test(route)) return 0.9;
  if (/^\/(blog|use-cases)\//.test(route)) return 0.7;
  if (route.startsWith("/resources/docs")) return 0.5;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticUrls = getStaticRoutes().map(toUrl);
  const blogUrls = publishedBlogPosts.map((p) => `${BASE_URL}/blog/${p.slug}/`);
  const useCaseUrls = useCases.map((u) => `${BASE_URL}/use-cases/${u.slug}/`);

  const all = Array.from(new Set([...staticUrls, ...blogUrls, ...useCaseUrls]));

  return all.map((url) => ({
    url,
    lastModified,
    changeFrequency: "weekly",
    priority: priorityFor(url.replace(BASE_URL, "").replace(/\/$/, "") || "/"),
  }));
}
