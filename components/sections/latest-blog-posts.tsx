import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { publishedBlogPosts } from "@/data/blog-posts";

const latestPosts = [...publishedBlogPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export function LatestBlogPosts() {
  return (
    <section className="bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary-600">Ministry operating notes</p>
            <h2 className="text-3xl font-bold text-slate-900">Latest from the blog</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Practical guidance for church teams choosing software, improving workflows, and caring for people well.
            </p>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700"
          >
            View all articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className={index === 0 ? "rounded-2xl border border-primary-200 bg-white p-6 shadow-lg md:row-span-2" : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"}
            >
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">{post.category}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h3 className={index === 0 ? "mb-3 text-2xl font-bold text-slate-900" : "mb-3 text-xl font-bold text-slate-900"}>
                {post.title}
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}/`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-accent-700"
                aria-label={`Read article: ${post.title}`}
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
