"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Story, StoryFilterOptions } from "@/data/stories";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StoryIllustration } from "@/components/illustrations";

type StoriesFilterGridProps = {
  stories: Story[];
  filters: StoryFilterOptions;
};

export function StoriesFilterGrid({ stories, filters }: StoriesFilterGridProps) {
  const [size, setSize] = useState<string>("All sizes");
  const [useCase, setUseCase] = useState<string>("All use cases");
  const [denomination, setDenomination] = useState<string>("All traditions");

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchesSize = size === "All sizes" || story.sizeCategory === size;
      const matchesUseCase = useCase === "All use cases" || story.useCase === useCase;
      const matchesDenomination = denomination === "All traditions" || story.denomination === denomination;
      return matchesSize && matchesUseCase && matchesDenomination;
    });
  }, [stories, size, useCase, denomination]);

  const resetFilters = () => {
    setSize("All sizes");
    setUseCase("All use cases");
    setDenomination("All traditions");
  };

  return (
    <section className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-semibold text-slate-700 flex flex-col gap-2">
          Church size
          <select
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <option>All sizes</option>
            {filters.sizes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-slate-700 flex flex-col gap-2">
          Use case
          <select
            value={useCase}
            onChange={(event) => setUseCase(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <option>All use cases</option>
            {filters.useCases.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-slate-700 flex flex-col gap-2">
          Tradition
          <select
            value={denomination}
            onChange={(event) => setDenomination(event.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          >
            <option>All traditions</option>
            {filters.denominations.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-slate-500">
          Showing {filteredStories.length} {filteredStories.length === 1 ? "story" : "stories"}
        </p>
        <Button variant="ghost" size="sm" onClick={resetFilters} aria-label="Reset all story filters">
          Reset filters
        </Button>
      </div>

      {filteredStories.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center space-y-6">
          <div className="max-w-sm mx-auto">
            <StoryIllustration type="care" title="No stories illustration" />
          </div>
          <p className="text-lg font-semibold text-slate-900">No stories match those filters yet.</p>
          <p className="text-slate-600">Try a different combination or share the kind of story you would like to see.</p>
          <Button variant="gradient" asChild>
            <Link href="/contact">Share your story</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <Card key={story.slug} className="h-full border-slate-200 hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-5 flex flex-col h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{story.size} | {story.location}</p>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">{story.church}</h3>
                  </div>
                  <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{story.useCase}</span>
                </div>

                <div className="h-32">
                  <StoryIllustration type={story.illustration} title={`${story.church} story illustration`} className="h-full w-full" />
                </div>

                <div className="space-y-3 flex-1">
                  <p className="text-sm font-semibold text-slate-700">{story.challenge}</p>
                  <p className="text-sm text-slate-600">{story.outcome}</p>
                  <p className="text-sm text-slate-500 italic">"{story.quote.text}"</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {story.focus.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 mt-auto">
                  <Link
                    href={`/stories/${story.slug}`}
                    className="text-primary-700 font-semibold inline-flex items-center gap-1 hover:text-primary-800"
                    aria-label={`Read story from ${story.church}`}
                  >
                    Read story →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
