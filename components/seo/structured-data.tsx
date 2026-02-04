import Script from "next/script";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Relius",
    url: "https://relius.ai",
    logo: "https://relius.ai/relius_emblem_circle.png",
    description:
      "AI-powered church management software with church automation tools and workflow automation. Helps churches save 10+ hours weekly on administration.",
    foundingDate: "2024",
    sameAs: [
      "https://www.facebook.com/relius.ai",
      "https://www.linkedin.com/company/relius",
      "https://twitter.com/relius_ai",
      "https://www.youtube.com/@relius",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@relius.ai",
      url: "https://relius.ai/contact",
    },
    knowsAbout: [
      "Church management software",
      "Church automation tools",
      "Church workflow automation",
      "Church administration software",
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
      "AI-powered church management software with church automation tools, workflow automation, volunteer scheduling, pastoral care tracking, and content generation.",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "49",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Essential church management with unlimited members",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "99",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Complete pastoral care, services planning, and communications",
      },
      {
        "@type": "Offer",
        name: "AI Pro",
        price: "149",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "Full AI suite saving 10+ hours per week with intelligent automation",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "249",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        description: "White-labeling, unlimited sites, SSO, and dedicated support",
      },
    ],
    featureList: [
      "Church workflow automation",
      "AI-powered volunteer scheduling",
      "Pastoral care tracking",
      "Member database and church CRM",
      "Church automation tools",
      "AI content generation",
      "Event management",
      "Giving and donation tracking",
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
          text: "Relius is AI-powered church management software designed to help churches save 10+ hours weekly on admin tasks. It includes volunteer scheduling, pastoral care tracking, member management, and AI tools for content creation.",
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
          text: "Relius starts at $49/month for the Starter plan with unlimited members. We offer a 7-day free trial. Growth plan is $99/month, AI Pro is $149/month, and Enterprise is $249/month.",
        },
      },
      {
        "@type": "Question",
        name: "What AI features does Relius include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Relius includes AI-powered features like intelligent volunteer scheduling with burnout detection, automated sermon content repurposing, predictive engagement analytics, and smart pastoral care alerts.",
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
