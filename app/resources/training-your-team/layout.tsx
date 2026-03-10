import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting...",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://relius.ai/resources/docs/getting-started/roles/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
