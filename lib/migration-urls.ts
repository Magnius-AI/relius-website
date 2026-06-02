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
      CHURCH_360: "/switch/church-360",
        BREEZE: "/switch/breeze",
          PUSHPAY: "/switch/pushpay",
} as const;

export const MIGRATION_PAGE_META: Record<string, MigrationPageMeta> = {
  hub: {
    title: "Switch Church Software — Free Data Migration",
    description:
      "Bring your data when you switch. Free guided migration from Planning Center, ChurchTrac, and Tithe.ly in 2-4 hours — people, donations, and history.",
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
    title: "Free Planning Center Alternative (2026)",
    description:
      "Free, AI-powered alternative to Planning Center. Import people and donations in under 3 hours. Simpler pricing, one all-in-one church platform.",
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
    title: "ChurchTrac Alternative — Free AI Church Software",
    description:
      "Switch from ChurchTrac to Relius: cloud-based, AI-powered, modern interface. Easy migration keeps all your data. Start free today.",
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
    title: "Tithe.ly Alternative — Free AI Church Software",
    description:
      "Move from Tithe.ly to Relius in 3-4 hours. Import people, donations, tags, and attendance free — plus AI giving and volunteer scheduling.",
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
    "church-360": {
        title: "Church 360 Alternative — Free AI Church Software",
            description: "Switch from Church 360 to Relius: cloud-native, AI-powered, modern interface. Easy migration keeps all your data. Start free today.",
                keywords: [
                      "church 360 alternative",
                            "church 360 cost",
                                  "church 360 migration",
                                        "switch from church 360",
                                              "church 360 vs relius",
                                                    "concordia church software",
                                                        ],
                                                          },
                                                            breeze: {
                                                                title: "Breeze Alternative — Free AI Church Software",
                                                                    description: "Switch from Breeze to Relius: AI-powered features, better reporting, and a free tier. Easy migration in 2-3 hours. Modern church management that scales.",
                                                                        keywords: [
                                                                              "breeze church management alternative",
                                                                                    "breeze chms alternative",
                                                                                          "switch from breeze",
                                                                                                "breeze vs relius",
                                                                                                      "breeze church management pricing",
                                                                                                            "church management software free",
                                                                                                                ],
                                                                                                                  },
                                                                                                                    pushpay: {
                                                                                                                        title: "Pushpay Alternative — Free AI Church Management",
                                                                                                                            description: "Move from Pushpay to Relius: complete church management with lower giving fees. Import your data in hours. AI-powered tools, volunteer scheduling, and more.",
                                                                                                                                keywords: [
                                                                                                                                      "pushpay alternative",
                                                                                                                                            "pushpay pricing",
                                                                                                                                                  "switch from pushpay",
                                                                                                                                                        "pushpay vs relius",
                                                                                                                                                              "church giving platform",
                                                                                                                                                                    "pushpay fees",
                                                                                                                                                                        ],
                                                                                                                                                                          },
};

// Contact form pre-population values
export const CONTACT_FROM_PLATFORMS = {
    "planning-center": "Planning Center",
    churchtrac: "ChurchTrac",
    tithely: "Tithe.ly",
      "church-360": "Church 360",
        breeze: "Breeze",
          pushpay: "Pushpay",
} as const;

// Generate contact URL with platform pre-selected
export function getContactUrlForMigration(platformSlug: string): string {
    return `/contact?from=${platformSlug}&interest=migration-help`;
}
