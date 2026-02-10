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
    default: "Relius | AI Church Management Software & Planning Center Alternative",
    template: "%s | Relius",
  },
  description: "Free church management software with AI-powered giving tools. The modern Planning Center alternative with volunteer scheduling, pastoral care, and church CRM. Free forever, no credit card required.",
  icons: {
    icon: "/relius_emblem_circle.png",
    apple: "/relius_emblem_circle.png",
  },
  keywords: [
    "free church management software",
    "free online giving for churches",
    "church donation software free",
    "AI church management software",
    "Planning Center alternative",
    "church CRM",
    "ChMS",
    "volunteer scheduling software",
    "pastoral care tools",
    "church admin software",
    "ministry software",
    "church database",
    "church automation tools",
    "free church management",
  ],
  authors: [{ name: "Relius" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relius.ai",
    siteName: "Relius",
    title: "Relius | AI Church Management Software & Planning Center Alternative",
    description: "AI-powered church management software that saves 10+ hours weekly. Modern volunteer scheduling, pastoral care, and church CRM built for ministry teams.",
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
    title: "Relius | AI Church Management Software",
    description: "Save 10+ hours weekly with AI-powered church management. Volunteer scheduling, pastoral care, and church CRM built for ministry.",
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <StructuredData />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
