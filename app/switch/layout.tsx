import Script from "next/script";

const migrationFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does church software migration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most churches complete their migration to Relius in 2-4 hours. Our guided wizard walks you through each step, and our team is available to help if you get stuck.",
      },
    },
    {
      "@type": "Question",
      name: "Will I lose any data during church software migration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our migration system preserves all your data. Any columns that don't map directly are automatically saved as searchable tags, so nothing is lost.",
      },
    },
    {
      "@type": "Question",
      name: "Can I keep using my old church management software during the transition?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. We recommend running both systems in parallel for 1-2 weeks until your team is comfortable with Relius.",
      },
    },
    {
      "@type": "Question",
      name: "What if something goes wrong during migration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our migration system uses per-record savepoints, so failed records don't affect others. You'll get a detailed error report and can re-import any problematic records.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical expertise to migrate to Relius?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our migration wizard is designed for non-technical users. If you can export a CSV file, you can migrate to Relius.",
      },
    },
  ],
};

export default function SwitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="migration-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(migrationFaqSchema) }}
      />
      {children}
    </>
  );
}
