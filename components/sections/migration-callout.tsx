import Link from "next/link";
import { ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import { MIGRATION_URLS } from "@/lib/migration-urls";

const platforms = ["Planning Center", "ChurchTrac", "Tithe.ly"];

export function MigrationCallout() {
  return (
    <section className="bg-slate-950 px-6 py-16 lg:px-8 lg:py-20" aria-labelledby="migration-title">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm font-semibold text-blue-300">
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Guided migration
          </div>
          <h2 id="migration-title" className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Bring your church history with you
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Move people and donation records into Relius with migration tools and assistance for the systems churches already use.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300" aria-label="Supported migration sources">
            {platforms.map((platform) => (
              <li key={platform} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                {platform}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={MIGRATION_URLS.HUB}
          className="inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Explore migration guides
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
