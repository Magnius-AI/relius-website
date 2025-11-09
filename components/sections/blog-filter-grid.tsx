"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost, BlogFilterOptions } from "@/data/blog-posts";

type BlogFilterGridProps = {
  posts: BlogPost[];
  filters: BlogFilterOptions;
};

export function BlogFilterGrid({ posts, filters }: BlogFilterGridProps) {
  const [topic, setTopic] = useState("All topics");
  const [size, setSize] = useState("All sizes");
  const [type, setType] = useState("All types");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const topicMatch = topic === "All topics" || post.topics.includes(topic);
      const sizeMatch = size === "All sizes" || post.churchSizeFocus.includes(size);
      const typeMatch = type === "All types" || post.contentType === type;
      return topicMatch && sizeMatch && typeMatch;
    });
  }, [posts, topic, size, type]);

  const resetFilters = () => {
    setTopic("All topics");
    setSize("All sizes");
    setType("All types");
  };

  return (
    <section className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <FilterSelect label="Ministry topic" value={topic} onChange={setTopic} options={filters.topics} placeholder="All topics" />
        <FilterSelect label="Church size" value={size} onChange={setSize} options={filters.sizes} placeholder="All sizes" />
        <FilterSelect label="Content type" value={type} onChange={setType} options={filters.types} placeholder="All types" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-slate-500">
          {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
        </p>
        <button
          type="button"
          onClick={resetFilters}
          aria-label="Reset all blog filters"
          className="text-sm font-semibold text-primary-700 hover:text-primary-800"
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
              <span className="font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{post.category}</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">{post.title}</h3>
            <p className="text-slate-600 flex-1">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.topics.map((tag) => (
                <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold" aria-label={`Read article: ${post.title}`}>
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="text-sm font-semibold text-slate-700 flex flex-col gap-2">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
