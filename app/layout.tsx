import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/lib/analytics";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relius.ai"),
  title: {
    default: "Relius | Free Church Management Software with AI",
    template: "%s | Relius",
  },
  description: "100% free church management software with AI-powered giving, volunteer scheduling, and pastoral care. The modern Planning Center & Tithe.ly alternative. No credit card, no hidden fees — free forever.",
  icons: {
    icon: "/relius_emblem_circle.png",
    apple: "/relius_emblem_circle.png",
  },
  keywords: [
    "free church management software",
    "free online giving for churches",
    "church donation software free",
    "AI church management software",
    "ai church software",
    "Planning Center alternative",
    "tithely alternative",
    "churchtrac alternative",
    "church CRM",
    "ChMS",
    "volunteer scheduling software",
    "church volunteer scheduling software",
    "pastoral care tools",
    "church admin software",
    "ministry software",
    "church database",
    "church automation tools",
    "free church management",
    "church donor data migration",
  ],
  authors: [{ name: "Relius" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relius.ai",
    siteName: "Relius",
    title: "Relius | Free Church Management Software with AI",
    description: "100% free church management with AI-powered giving, volunteer scheduling, and pastoral care. Save 10+ hours weekly. The modern Planning Center & Tithe.ly alternative.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Relius AI Church Management Software Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relius | Free Church Management Software with AI",
    description: "100% free church management with AI-powered giving, volunteer scheduling, and pastoral care. Save 10+ hours weekly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://relius.ai" />
        <link rel="alternate" hrefLang="x-default" href="https://relius.ai" />
        <link rel="dns-prefetch" href="https://us.i.posthog.com" />
        <link rel="dns-prefetch" href="https://us-assets.i.posthog.com" />
        <link rel="preconnect" href="https://us.i.posthog.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://us-assets.i.posthog.com" crossOrigin="anonymous" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17934148646"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17934148646');
          `}
        </Script>
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-medium">
          Skip to main content
        </a>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <StructuredData />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
