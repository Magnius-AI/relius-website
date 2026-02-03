"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blog-posts";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type BlogPageContentProps = {
  posts: BlogPost[];
  topics: string[];
};

export function BlogPageContent({ posts, topics }: BlogPageContentProps) {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  const featuredPost = posts[0]!;
  const remainingPosts = posts.slice(1);

  const filteredRemaining = useMemo(() => {
    if (!activeTopic) return remainingPosts;
    return remainingPosts.filter((post) => post.topics.includes(activeTopic));
  }, [remainingPosts, activeTopic]);

  function handleTopicClick(topic: string) {
    const next = activeTopic === topic ? null : topic;
    setActiveTopic(next);
    if (next && articlesRef.current) {
      // Scroll to the articles section so results are immediately visible
      setTimeout(() => {
        articlesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }

  return (
    <div className="py-16 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl space-y-16">
        {/* Header */}
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Relius Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance">Insightful reads for church leaders</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Practical ministry strategy, honest product updates, and step-by-step guidance for modern church teams.
          </p>
        </section>

        {/* Featured post */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <Link href={`/blog/${featuredPost.slug}`} className="relative block h-72 w-full">
              {featuredPost.image ? (
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" priority />
              ) : null}
            </Link>
            <div className="p-8 space-y-4">
              <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold">Featured post</div>
              <h2 className="text-3xl font-bold text-slate-900">
                <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary-700 transition-colors">
                  {featuredPost.title}
                </Link>
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                    {getInitials(featuredPost.author)}
                  </span>
                  {featuredPost.author}
                </span>
                <span aria-hidden="true">|</span>
                <span>{new Date(featuredPost.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.topics.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTopicClick(tag)}
                    className={`text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                      activeTopic === tag
                        ? "bg-primary-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                View now →
              </Link>
            </div>
          </div>

          {/* Browse by topic — compact card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Service categories</p>
              <h3 className="text-2xl font-bold text-slate-900">Browse by topic</h3>
              <p className="text-sm text-slate-600">Select a topic to filter articles below.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleTopicClick(topic)}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                    activeTopic === topic
                      ? "bg-primary-600 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section ref={articlesRef} className="space-y-6 scroll-mt-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-slate-900">
              {activeTopic ? `Articles on "${activeTopic}"` : "Latest articles"}
            </h2>
            {activeTopic && (
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="shrink-0 text-sm font-semibold text-primary-700 hover:text-primary-800 cursor-pointer"
              >
                Show all →
              </button>
            )}
          </div>
          {filteredRemaining.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-500 mb-4">No articles found for &ldquo;{activeTopic}&rdquo;.</p>
              <button
                type="button"
                onClick={() => setActiveTopic(null)}
                className="text-sm font-semibold text-primary-700 hover:text-primary-800 cursor-pointer"
              >
                Show all articles →
              </button>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredRemaining.map((post) => (
                <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <Link href={`/blog/${post.slug}`} className="relative block h-48 w-full">
                    {post.image ? <Image src={post.image} alt={post.title} fill className="object-cover" /> : null}
                  </Link>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-slate-900">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary-700 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.topics.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => handleTopicClick(tag)}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                            activeTopic === tag
                              ? "bg-primary-600 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                      View now →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-50 to-white p-12 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Blog callout</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Want a personalized plan for your church?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We sit with churches weekly to translate these ideas into action. No sales pitch-just honest help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact/">Start a conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/use-cases/">Explore use cases</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
