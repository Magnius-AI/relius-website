import { Suspense } from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Calendar, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a demo of Relius Church Management System. Get in touch with our team to learn how we can help your church.",
  alternates: {
    canonical: "https://relius.ai/contact/",
  },
  openGraph: {
    title: "Contact Relius | Book a Demo",
    description: "Book a personalized demo to see how Relius can transform your church management.",
    url: "https://relius.ai/contact/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Relius | Book a Demo",
    description: "Book a personalized demo to see how Relius can transform your church management.",
  },
  keywords: ["contact Relius", "church software demo", "book a demo", "church management demo"],
};

export default function ContactPage() {
  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="mb-4">Get Started with Relius</h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Book a personalized demo to see how Relius can transform your church management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          <div>
            <Suspense fallback={<div className="animate-pulse bg-gray-100 rounded-xl h-96" />}>
              <ContactForm />
            </Suspense>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6">What to Expect</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Schedule Your Demo</h3>
                    <p className="text-slate-500">
                      We'll reach out within 24 hours to schedule a personalized demo at a time that works for you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Live Walkthrough</h3>
                    <p className="text-slate-500">
                      See Relius in action with a guided tour of features tailored to your church's needs and size.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Get Your Questions Answered</h3>
                    <p className="text-slate-500">
                      Ask anything about features, pricing, migration, training, or how Relius fits your workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
              <h3 className="mb-3">Have Questions First?</h3>
              <p className="text-slate-600 mb-4">
                Check out our documentation and resources, or reach out directly at:
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-primary">
                  Email: <a href="mailto:contact@relius.ai" className="hover:underline">contact@relius.ai</a>
                </p>
                <p className="font-semibold text-primary">
                  Phone: <a href="tel:+16308871162" className="hover:underline">+1 (630) 887-1162</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
