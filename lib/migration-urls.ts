// SEO constants and metadata for migration pages

export type MigrationPageMeta = {
  title: string;
  description: string;
  keywords: string[];
};

export const MIGRATION_URLS = {
  HUB: "/switch",
  PLANNING_CENTER: "/switch/planning-center",
  CHURCHTRAC: "/switch/churchtrac",
  TITHELY: "/switch/tithely",
  PUSHPAY: "/switch/pushpay",
} as const;

export const MIGRATION_PAGE_META: Record<string, MigrationPageMeta> = {
  hub: {
    title: "Switch to Relius | Free Church Data Migration in Hours",
    description:
      "Bring your church data with you when you switch to Relius. Free guided migration from Planning Center, ChurchTrac, Tithe.ly, and Pushpay in just 2-4 hours. People, donations, and history transfer safely.",
    keywords: [
      "church software migration",
      "planning center alternative",
      "churchtrac alternative",
      "tithely alternative",
      "pushpay alternative",
      "church management software",
      "switch church software",
      "church data migration",
    ],
  },
  "planning-center": {
    title: "Free Planning Center Alternative 2026 | AI Church Management Software",
    description:
      "The free alternative to Planning Center with AI-powered features. Import your people and donations in under 3 hours. Simpler pricing, modern interface, and all-in-one church management — no credit card required.",
    keywords: [
      "planning center alternative",
      "planning center free alternative",
      "planning center alternative free",
      "planning center migration",
      "switch from planning center",
      "planning center vs relius",
      "free church management software",
    ],
  },
  churchtrac: {
    title: "Best ChurchTrac Alternative 2026 — Free AI Church Software",
    description:
      "Outgrown ChurchTrac? Switch to Relius free — cloud-based, AI-powered church management with easy data migration. Import all your people and donations in 2-3 hours. No credit card required.",
    keywords: [
      "churchtrac alternative",
      "churchtrac alternative free",
      "best churchtrac alternative",
      "churchtrac migration",
      "switch from churchtrac",
      "churchtrac vs relius",
      "modern church software",
      "cloud church management software",
    ],
  },
  tithely: {
    title: "Tithe.ly Alternative 2026 — Free Church Giving & Management",
    description:
      "Looking for a Tithe.ly alternative? Relius gives you free online giving plus full church management, AI tools, and volunteer scheduling. Migrate people, donations, and tags in hours.",
    keywords: [
      "tithely alternative",
      "tithe.ly alternative",
      "tithe ai",
      "tithely alternative free",
      "tithely migration",
      "switch from tithely",
      "tithely vs relius",
      "free church giving platform",
    ],
  },
  pushpay: {
    title: "Pushpay Alternative 2026 — Free Church Giving & Management | Relius",
    description:
      "Looking for a Pushpay alternative? Relius offers free online giving plus complete church management with AI-powered tools. Migrate your data easily. No credit card required.",
    keywords: [
      "pushpay alternative",
      "pushpay alternative free",
      "pushpay vs relius",
      "pushpay migration",
      "switch from pushpay",
      "free church giving software",
      "church giving platform",
    ],
  },
};

// Contact form pre-population values
export const CONTACT_FROM_PLATFORMS = {
  "planning-center": "Planning Center",
  churchtrac: "ChurchTrac",
  tithely: "Tithe.ly",
  pushpay: "Pushpay",
} as const;

// Generate contact URL with platform pre-selected
export function getContactUrlForMigration(platformSlug: string): string {
  return `/contact?from=${platformSlug}&interest=migration-help`;
}
