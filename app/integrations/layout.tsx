import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting...",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://relius.ai/features/" },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
