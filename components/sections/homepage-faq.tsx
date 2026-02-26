import { FAQSchema } from "@/components/seo/faq-schema";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const homepageFAQs = [
  {
    question: "Is Relius really free?",
    answer:
      "Yes. Our Free plan includes full church management, online giving with AI-powered donation tools, unlimited members, events, and groups — forever. No credit card, no trial period. We sustain this through small processing fees on donations (2% + $0.19 per transaction).",
  },
  {
    question: "How does Relius compare to Planning Center?",
    answer:
      "Relius offers free giving and AI-powered features that Planning Center charges for. While Planning Center splits features across separate paid apps, Relius is all-in-one. Both platforms let you manage people, groups, and services, but Relius includes AI sermon planning, content generation, and pastoral care insights.",
  },
  {
    question: "Can I migrate my data from other church software?",
    answer:
      "Yes. We have guided migration wizards for Planning Center, ChurchTrac, and Tithe.ly. Your member records, donation history, tags, and attendance data transfer safely. Most migrations take 2-4 hours and our team helps you through the process — free.",
  },
  {
    question: "What AI features does Relius include?",
    answer:
      "The Free plan includes AI-powered donation management with smart thank-you messages and donor insights. The Ministry AI plan ($150/mo) adds a sermon planner, content studio that turns sermons into social posts and emails, real-time translation in 50+ languages, pastoral care insights with at-risk member detection, and a semantic Bible search.",
  },
  {
    question: "How long does it take to set up Relius?",
    answer:
      "Most churches are up and running within a day. Create an account, import your data (if migrating), and start managing your church. If you're starting fresh, basic setup takes under an hour. Our documentation and support team are available to help at every step.",
  },
  {
    question: "Is my church data secure?",
    answer:
      "Yes. Relius uses encryption at rest and in transit, role-based access controls, and comprehensive audit logs. Your data is yours — we never sell or share it. See our security page for full details on our data protection practices.",
  },
];

export function HomepageFAQ() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-slate-50">
      <FAQSchema items={homepageFAQs} id="homepage-faq-schema" />
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers about Relius church management software
            </p>
          </div>
          <Accordion>
            {homepageFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`homepage-faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
