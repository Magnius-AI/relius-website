import Script from "next/script";

type FAQItem = {
    question: string;
    answer: string;
};

export function FAQSchema({ faqs, id }: { faqs: FAQItem[]; id?: string }) {
    const faqSchema = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                            "@type": "Answer",
                            text: faq.answer,
                  },
          })),
    };

  return (
        <Script
                id={id || "faq-schema"}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
              />
      );
}
