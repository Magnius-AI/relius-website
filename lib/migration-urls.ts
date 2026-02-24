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
          title:
                  "Switch to Relius | Free Church Software Migration in Under 3 Hours",
          description:
                  "Migrate your church data from Planning Center, ChurchTrac, or Tithe.ly to Relius in under 3 hours — completely free. Keep all your people, donations, and history intact.",
          keywords: [
                  "church software migration",
                  "planning center alternative",
                  "churchtrac alternative",
                  "tithely alternative",
                  "church management software",
                  "switch church software",
                  "free church software migration",
                ],
    },
    "planning-center": {
          title:
                  "Planning Center Alternative — Save $200+/mo with Free AI Church Software",
          description:
                  "Churches are switching from Planning Center to Relius for free AI-powered management, simpler pricing, and an all-in-one platform. Import your people and donations in under 3 hours.",
          keywords: [
                  "planning center alternative",
                  "planning center migration",
                  "switch from planning center",
                  "planning center vs relius",
                  "church software comparison",
                  "free planning center alternative",
                  "planning center free alternative",
                ],
    },
    churchtrac: {
          title:
                  "ChurchTrac Alternative — Free Cloud-Based Church Software with AI",
          description:
                  "Upgrade from ChurchTrac to Relius: modern cloud-based interface, AI-powered giving tools, and unlimited members — free forever. Migrate all your data in 2-3 hours.",
          keywords: [
                  "churchtrac alternative",
                  "churchtrac migration",
                  "switch from churchtrac",
                  "churchtrac vs relius",
                  "modern church software",
                  "cloud church management software",
                  "churchtrac integrations",
                ],
    },
    tithely: {
          title:
                  "Tithe.ly Alternative — Complete Church Management Beyond Just Giving",
          description:
                  "Move beyond just giving with Relius: free church management with AI-powered donations, volunteer scheduling, and pastoral care. Import all your Tithe.ly data easily.",
          keywords: [
                  "tithely alternative",
                  "tithe.ly alternative",
                  "tithely migration",
                  "switch from tithely",
                  "tithely vs relius",
                  "church management platform",
                  "tithe ai",
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
