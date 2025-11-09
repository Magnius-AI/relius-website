"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { ResourceItem } from "@/data/resources";
import { GrowthPlanningIllustration } from "@/components/illustrations";

type ResourcesSearchProps = {
  items: ResourceItem[];
};

export function ResourcesSearch({ items }: ResourcesSearchProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) {
      return items.slice(0, 4);
    }
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lower))
    );
  }, [items, query]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Search resources</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Ministry help, not marketing fluff</h2>
          <p className="text-slate-600 mt-2">Type a topic-volunteers, giving, check-in, AI-and we&apos;ll surface helpful guides.</p>
        </div>
        <div className="w-full max-w-md">
          <label className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            <span className="sr-only">Search resources</span>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5">
              <svg className="h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <circle cx="11" cy="11" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.5 16.5L21 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by topic or tag"
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </label>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {results.length === 0 ? (
          <div className="col-span-2 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
            <div className="max-w-md mx-auto">
              <GrowthPlanningIllustration className="w-full" title="No resource results" />
            </div>
            <p className="text-lg font-semibold text-slate-900 mt-4">No resources found yet.</p>
            <p className="text-slate-600">Try a different phrase or ask us for the guide you need.</p>
          </div>
        ) : (
          results.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
              <p className="text-xs uppercase tracking-wide text-primary-600">{item.type}</p>
              <h3 className="text-lg font-semibold text-slate-900 mt-1">{item.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-1 text-primary-700 font-semibold mt-4"
              >
                Read resource →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
