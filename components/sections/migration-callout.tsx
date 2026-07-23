import { CheckCircle2, RefreshCw } from "lucide-react";
import { MIGRATION_URLS } from "@/lib/migration-urls";
import { MigrationCalloutCta } from "@/components/sections/migration-callout-cta";

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
          <h2 id="migration-title" className="scroll-mt-24 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            Keep the history your church has already built.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Bring over people and giving records from the systems your team already uses. Start with a guide, then get help with the parts that need it.
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
        <MigrationCalloutCta href={MIGRATION_URLS.HUB} />
      </div>
    </section>
  );
}
