"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { analytics } from "@/lib/analytics";

type MigrationCalloutCtaProps = {
  href: string;
};

export function MigrationCalloutCta({ href }: MigrationCalloutCtaProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      onClick={() => analytics.trackCTAClick("migration_options_home", href)}
    >
      See migration options
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
