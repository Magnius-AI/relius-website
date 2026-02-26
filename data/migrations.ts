// Migration platform data for switch/migration pages
export type FeatureComparison = {
  feature: string;
  relius: boolean | string;
  competitor: boolean | string;
  isAIPowered?: boolean;
};

export type MigrationFAQ = {
  question: string;
  answer: string;
};

export type MigrationPlatform = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  dataTypes: string[];
  exportInstructions: string[];
  features: FeatureComparison[];
  faqs: MigrationFAQ[];
  whatYouGain: string[];
  commonConcerns: string[];
};

export type MigrationStep = {
  step: number;
  title: string;
  description: string;
};

// 6-step migration process from overview doc
export const migrationSteps: MigrationStep[] = [
  {
    step: 1,
    title: "Select Source",
    description:
      "Choose the platform you're migrating from with platform-specific export instructions",
  },
  {
    step: 2,
    title: "Upload Files",
    description:
      "Drag-and-drop CSV upload with automatic structure detection",
  },
  {
    step: 3,
    title: "Map Columns",
    description:
      "Intelligent field mapping with auto-suggestions and sample data preview",
  },
  {
    step: 4,
    title: "Review Duplicates",
    description:
      "AI-powered duplicate detection with merge, create, or skip options",
  },
  {
    step: 5,
    title: "Import Progress",
    description: "Real-time progress tracking with error handling",
  },
  {
    step: 6,
    title: "Summary & Results",
    description:
      "Complete import statistics with error report download",
  },
];

// Common FAQs across all migrations
export const commonMigrationFAQs: MigrationFAQ[] = [
  {
    question: "How long does the migration take?",
    answer:
      "Most churches complete their migration in 2-4 hours. Our guided wizard walks you through each step, and our team is available to help if you get stuck.",
  },
  {
    question: "Will I lose any data during the migration?",
    answer:
      "No. Our migration system preserves all your data. Any columns that don't map directly are automatically saved as searchable tags, so nothing is lost.",
  },
  {
    question: "Can I keep using my old system during the transition?",
    answer:
      "Yes, absolutely. We recommend running both systems in parallel for 1-2 weeks until your team is comfortable with Relius.",
  },
  {
    question: "What if something goes wrong?",
    answer:
      "Our migration system uses per-record savepoints, so failed records don't affect others. You'll get a detailed error report and can re-import any problematic records.",
  },
  {
    question: "Do I need technical expertise to migrate?",
    answer:
      "No. Our migration wizard is designed for non-technical users. If you can export a CSV file, you can migrate to Relius.",
  },
];

// Platform-specific data
export const migrationPlatforms: MigrationPlatform[] = [
  {
    slug: "planning-center",
    name: "Planning Center",
    tagline:
      "Bring your Planning Center history to a simpler, AI-powered platform",
    description:
      "Planning Center is a popular choice for many churches, but its fragmented apps and lack of AI features leave many teams wanting more. Relius brings everything together in one platform with powerful AI tools to save you time.",
    dataTypes: ["People", "Donations"],
    exportInstructions: [
      "Log into Planning Center and go to People",
      "Click on 'Lists' and select 'All People'",
      "Click 'Export' and choose CSV format",
      "For donations, go to Giving > Reports > Export",
      "Download both CSV files to your computer",
    ],
    features: [
      { feature: "Member Management", relius: true, competitor: true },
      { feature: "Donation Tracking", relius: true, competitor: true },
      { feature: "Event Calendar", relius: true, competitor: true },
      { feature: "Volunteer Scheduling", relius: true, competitor: true },
      { feature: "Check-In System", relius: true, competitor: true },
      { feature: "All-in-One Platform", relius: true, competitor: false },
      {
        feature: "AI Content Studio",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Sermon Planner",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Pastoral Care Insights",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Real-time Translation (50+ languages)",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Volunteer Scheduler",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Predictive Giving Analytics",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Simple, Transparent Pricing",
        relius: true,
        competitor: false,
      },
    ],
    faqs: [
      {
        question: "What data can I bring from Planning Center?",
        answer:
          "You can import your people/member database and donation history. This includes names, contact info, family relationships, giving records, and custom fields.",
      },
      {
        question: "What about my Planning Center groups and services?",
        answer:
          "While direct group import isn't available yet, you can easily recreate your groups in Relius. Most churches find Relius's group management more intuitive once set up.",
      },
      {
        question:
          "Do I need to export from each Planning Center app separately?",
        answer:
          "Yes, you'll export from People and Giving separately. Our wizard will guide you through combining them into your Relius database.",
      },
    ],
    whatYouGain: [
      "All your tools in one platform instead of separate apps",
      "AI-powered content creation from your sermons",
      "Pastoral care insights that help you catch people before they drift",
      "Real-time translation for multilingual services",
      "Predictive analytics for giving and attendance",
      "Simpler pricing without nickel-and-diming for features",
    ],
    commonConcerns: [
      "Your team will adapt quickly - Relius is designed to be intuitive",
      "All your historical data comes with you - nothing is left behind",
      "You can run both systems during transition - no pressure to switch overnight",
    ],
  },
  {
    slug: "churchtrac",
    name: "ChurchTrac",
    tagline:
      "Upgrade from ChurchTrac to modern, AI-powered church management",
    description:
      "ChurchTrac has served many churches well, but if you're ready for a modern interface and AI-powered features, Relius is the natural next step. Bring your data and step into the future of church management.",
    dataTypes: ["People", "Donations"],
    exportInstructions: [
      "Log into ChurchTrac and go to Reports",
      "Select 'People Report' and choose all fields",
      "Export to CSV format",
      "For donations, go to Finance > Reports > Contribution Report",
      "Export contributions to CSV",
    ],
    features: [
      { feature: "Member Management", relius: true, competitor: true },
      { feature: "Donation Tracking", relius: true, competitor: true },
      { feature: "Event Calendar", relius: true, competitor: true },
      { feature: "Check-In System", relius: true, competitor: true },
      {
        feature: "Modern, Intuitive Interface",
        relius: true,
        competitor: false,
      },
      {
        feature: "Cloud-Native (No Software to Install)",
        relius: true,
        competitor: false,
      },
      {
        feature: "AI Content Studio",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Sermon Planner",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Pastoral Care Insights",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Real-time Translation (50+ languages)",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Volunteer Scheduler",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      { feature: "Mobile-First Design", relius: true, competitor: false },
    ],
    faqs: [
      {
        question:
          "I've used ChurchTrac for years. Is migration really that easy?",
        answer:
          "Yes! ChurchTrac exports clean CSV files that our migration wizard handles beautifully. Most ChurchTrac users complete migration in under 3 hours.",
      },
      {
        question:
          "What about my contribution statements and reports?",
        answer:
          "Your full giving history comes with you. Relius can generate contribution statements and reports from day one using your imported data.",
      },
      {
        question: "Is Relius harder to learn than ChurchTrac?",
        answer:
          "Actually, most users find Relius easier. It's designed with modern UX principles and doesn't require training manuals to figure out.",
      },
    ],
    whatYouGain: [
      "A modern, beautiful interface your team will actually enjoy using",
      "Cloud-based access from anywhere - no software installations",
      "AI tools that save 10+ hours weekly on content creation",
      "Pastoral care AI that helps you serve your people better",
      "Real-time translation for diverse congregations",
      "A platform that grows with your church",
    ],
    commonConcerns: [
      "Your existing data imports cleanly with full history preserved",
      "The modern interface is more intuitive, not more complicated",
      "Cloud-based means you can work from anywhere, including your phone",
    ],
  },
  {
    slug: "tithely",
    name: "Tithe.ly",
    tagline:
      "Move from Tithe.ly to a complete, AI-powered church platform",
    description:
      "Tithe.ly is great for giving, but if you want a complete church management platform with AI capabilities, Relius offers more. Plus, we support the most data types from Tithe.ly of any migration path.",
    dataTypes: ["People", "Donations", "Tags", "Attendance", "Newsletter"],
    exportInstructions: [
      "Log into Tithe.ly and go to People",
      "Click 'Export' and select CSV format",
      "For donations, go to Giving > Transactions > Export",
      "Export tags from People > Tags > Export",
      "Export attendance from Check-in > Reports > Export",
      "Export newsletter subscribers from Communications > Export",
    ],
    features: [
      { feature: "Member Management", relius: true, competitor: true },
      { feature: "Donation Tracking", relius: true, competitor: true },
      { feature: "Online Giving", relius: true, competitor: true },
      { feature: "Check-In System", relius: true, competitor: true },
      {
        feature: "Comprehensive Church Management",
        relius: true,
        competitor: "Limited",
      },
      {
        feature: "AI Content Studio",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Sermon Planner",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Pastoral Care Insights",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Real-time Translation (50+ languages)",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Service Planning & Worship",
        relius: true,
        competitor: false,
      },
      {
        feature: "Room & Facility Booking",
        relius: true,
        competitor: false,
      },
      {
        feature: "Advanced Volunteer Management",
        relius: true,
        competitor: false,
      },
    ],
    faqs: [
      {
        question: "What makes Tithe.ly migration special?",
        answer:
          "Tithe.ly exports more data types than most platforms, and Relius supports all of them: People, Donations, Tags, Attendance, and Newsletter subscribers.",
      },
      {
        question: "Will my recurring donations keep working?",
        answer:
          "Recurring donations are managed through payment processors. Your donors will set up new recurring gifts through Relius's giving portal, which uses Stripe for secure processing.",
      },
      {
        question: "Can I bring my tags and segments?",
        answer:
          "Yes! Tags are one of the data types we import from Tithe.ly. Your segmentation and tagging will come right over.",
      },
    ],
    whatYouGain: [
      "A complete church management platform, not just giving",
      "AI-powered content creation from your sermons",
      "Volunteer scheduling with burnout detection",
      "Service planning and worship management",
      "Room booking for facility rentals",
      "All your Tithe.ly data preserved including tags and attendance",
    ],
    commonConcerns: [
      "Tithe.ly is great for giving; Relius does that AND everything else",
      "Your historical giving data transfers completely",
      "Tags and segments you've built up come with you",
    ],
  },
  {
    slug: "pushpay",
    name: "Pushpay",
    tagline:
      "Switch from Pushpay to free, AI-powered church giving and management",
    description:
      "Pushpay is known for mobile giving, but rising costs and limited church management features leave many churches looking for more. Relius offers free online giving plus complete church management with AI-powered tools — all at no cost to start.",
    dataTypes: ["People", "Donations"],
    exportInstructions: [
      "Log into your Pushpay admin dashboard",
      "Go to People and click Export to download your member list as CSV",
      "Navigate to Giving > Transactions and export your donation history",
      "Download both CSV files to your computer",
      "Upload the files to Relius using our migration wizard",
    ],
    features: [
      { feature: "Member Management", relius: true, competitor: true },
      { feature: "Donation Tracking", relius: true, competitor: true },
      { feature: "Online & Mobile Giving", relius: true, competitor: true },
      { feature: "Donor Management", relius: true, competitor: true },
      {
        feature: "Complete Church Management",
        relius: true,
        competitor: false,
      },
      {
        feature: "AI Content Studio",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Sermon Planner",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Pastoral Care Insights",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Real-time Translation (50+ languages)",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "AI Volunteer Scheduler",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Predictive Giving Analytics",
        relius: true,
        competitor: false,
        isAIPowered: true,
      },
      {
        feature: "Free Forever Plan",
        relius: true,
        competitor: false,
      },
    ],
    faqs: [
      {
        question: "Why switch from Pushpay?",
        answer:
          "Pushpay focuses on giving but charges premium prices for limited church management. Relius gives you free online giving plus a complete church management platform with AI tools — saving you thousands per year.",
      },
      {
        question: "What data can I bring from Pushpay?",
        answer:
          "You can import your people/member database and complete donation history. Our migration wizard maps Pushpay fields automatically.",
      },
      {
        question: "How does Relius giving compare to Pushpay?",
        answer:
          "Relius offers online giving powered by Stripe with competitive processing rates, recurring gifts, fund designations, and contribution statements — all included free.",
      },
    ],
    whatYouGain: [
      "Free online giving with competitive processing rates",
      "Complete church management — not just a giving platform",
      "AI-powered content creation from your sermons",
      "Pastoral care insights to serve your congregation better",
      "Predictive giving analytics and attendance tracking",
      "Save thousands per year compared to Pushpay pricing",
    ],
    commonConcerns: [
      "Your donation history and member data transfer completely",
      "Relius giving is powered by Stripe — the same processor many top platforms use",
      "Your donors can set up recurring gifts in minutes through the new giving portal",
    ],
  },
];

// Trust signals for migration pages
export const migrationTrustSignals = [
  "Your data stays yours",
  "Nothing gets lost in translation",
  "Average migration: 2-3 hours",
  "No technical expertise required",
  "Free migration assistance available",
];

// Get a specific platform by slug
export function getMigrationPlatform(
  slug: string
): MigrationPlatform | undefined {
  return migrationPlatforms.find((p) => p.slug === slug);
}

// Get all platform slugs for static generation
export function getMigrationPlatformSlugs(): string[] {
  return migrationPlatforms.map((p) => p.slug);
}
