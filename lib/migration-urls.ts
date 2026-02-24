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
} as const;

export const MIGRATION_PAGE_META: Record<string, MigrationPageMeta> = {
  hub: {
    title: "Switch to Relius | Free Church Data Migration in Hours",
    description:
      "Bring your church data with you when you switch to Relius. Free guided migration from Planning Center, ChurchTrac, and Tithe.ly in just 2-4 hours. People, donations, and history transfer safely.",
    keywords: [
      "church software migration",
      "planning center alternative",
      "churchtrac alternative",
      "tithely alternative",
      "church management software",
      "switch church software",
      "church data migration",
    ],
  },
  "planning-center": {
    title: "Free Planning Center Alternative 2026 | Switch to Relius in 3 Hours",
    description:
      "The free alternative to Planning Center with AI-powered features. Import your people and donations in under 3 hours. Simpler pricing, modern interface, and all-in-one church management.",
    keywords: [
      "planning center alternative",
      "planning center free alternative",
      "planning center migration",
      "switch from planning center",
      "planning center vs relius",
      "church software comparison",
    ],
  },
  churchtrac: {
    title: "ChurchTrac Alternative | Cloud-Based Church Software with AI — Free",
    description:
      "Upgrade from ChurchTrac to Relius: cloud-based access, AI-powered features, and a modern interface. Easy migration preserves all your historical data. Start free today.",
    keywords: [
      "churchtrac alternative",
      "churchtrac migration",
      "switch from churchtrac",
      "churchtrac vs relius",
      "churchtrac integrations",
      "modern church software",
    ],
  },
  tithely: {
    title: "Switch from Tithe.ly to Relius | Free Migration, Better Features",
    description:
      "Move from Tithe.ly to Relius in 3-4 hours. Import people, donations, tags, and attendance — free. Get AI-powered giving tools, pastoral care, and volunteer scheduling your church actually needs.",
    keywords: [
      "tithely alternative",
      "tithe ai",
      "tithely migration",
      "switch from tithely",
      "tithely vs relius",
      "tithely pricing",
      "church management platform",
    ],
  },
};

// Contact form pre-population values
export const CONTACT_FROM_PLATFORMS = {
    "planning-center": "Planning Center",
    churchtrac: "ChurchTrac",
    tithely: "Tithe.ly",
} as const;

// Generate contact URL with platform pre-selected
export function getContactUrlForMigration(platformSlug: string): string {
    return `/contact?from=${platformSlug}&interest=migration-help`;
}
