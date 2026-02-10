import Script from "next/script";

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id={`breadcrumb-schema-${items[items.length - 1]?.name?.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Relius",
    url: "https://relius.ai",
    logo: "https://relius.ai/relius_emblem_circle.png",
    description:
      "Free church management software with AI-powered giving tools. Helps churches save 10+ hours weekly on administration.",
    foundingDate: "2024",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61587862231605",
      "https://www.linkedin.com/company/relius-chms-platform/",
      "https://x.com/ReliusPlatform",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@relius.ai",
      url: "https://relius.ai/contact",
    },
    knowsAbout: [
      "Church management software",
      "Free church management",
      "Online giving for churches",
      "Church automation tools",
      "Volunteer scheduling",
      "Pastoral care tracking",
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Relius Church Management Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Free church management software with AI-powered donation tools, volunteer scheduling, pastoral care tracking, and content generation.",
    offers: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Free forever - full church management, online giving, and AI-powered donation tools with unlimited members",
      },
      {
        "@type": "Offer",
        name: "Ministry Pro",
        price: "60",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Complete pastoral care, service planning, and unlimited communications",
      },
      {
        "@type": "Offer",
        name: "Ministry AI",
        price: "150",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        description: "Full AI suite saving 10+ hours per week with sermon planning, content studio, and pastoral insights",
      },
    ],
    featureList: [
      "Free church management",
      "Online giving and donations",
      "AI-powered donation tools",
      "AI volunteer scheduling",
      "Pastoral care tracking",
      "Member database and church CRM",
      "Event management",
      "Check-in system with QR codes",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Relius?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Relius is free church management software with AI-powered giving tools. It includes member management, online giving, events, groups, and check-ins at no cost. Paid upgrades are available for pastoral care and advanced AI features.",
        },
      },
      {
        "@type": "Question",
        name: "Is Relius a Planning Center alternative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Relius is a modern alternative to Planning Center with AI-powered features. Churches can easily migrate from Planning Center, ChurchTrac, or Tithe.ly with our guided migration process that typically takes 2-4 hours.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Relius cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Relius core platform is free forever with unlimited members, including online giving and AI-powered donation tools. Ministry Pro is $60/month for pastoral care and service planning. Ministry AI is $150/month for the full AI suite. Processing fees on donations are 2% + $0.19 per transaction.",
        },
      },
      {
        "@type": "Question",
        name: "What AI features does Relius include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The free plan includes AI-powered donation tools (thank-you messages, donor re-engagement, donor insights). The Ministry AI plan adds AI sermon planning, content studio, pastoral insights, volunteer scheduling with burnout detection, translation console, and semantic Bible search.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
