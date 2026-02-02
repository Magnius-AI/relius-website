import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogFilters } from "@/data/blog-posts";
import { BlogFilterGrid } from "@/components/sections/blog-filter-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Sort posts by date (newest first)
const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featuredPost = sortedPosts[0]!;
const remainingPosts = sortedPosts.slice(1);

export const metadata: Metadata = {
  title: "Blog & ministry insights",
  description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
};

export default function BlogPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl space-y-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Insights for church leaders</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Stories, strategies, and product honesty</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Articles written with pastors, directors, and volunteers-never just marketers. Subscribe for practical ideas that pair ministry heart with helpful tech.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="flex-1">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  placeholder="you@church.org"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  required
                />
              </label>
              <Button type="submit" variant="gradient">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-slate-500 mt-3">Monthly digest. No spam. Unsubscribe anytime.</p>
          </div>
          <Card className="border border-slate-200 shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold">Featured post</div>
              <h2 className="text-3xl font-bold text-slate-900">{featuredPost.title}</h2>
              <p className="text-slate-600">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{featuredPost.author}</span>
                <span aria-hidden="true">|</span>
                <span>{new Date(featuredPost.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span aria-hidden="true">|</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredPost.topics.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                Read featured post →
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Recent writing</p>
            <h2 className="text-3xl font-bold text-slate-900">Fresh from the Relius team</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {remainingPosts.slice(0, 3).map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col gap-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{post.category}</div>
                <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
                <p className="text-slate-600 flex-1">{post.excerpt}</p>
                <p className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric" })} | {post.readTime}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                  Keep reading →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <BlogFilterGrid posts={sortedPosts} filters={blogFilters} />

        <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-50 to-white p-12 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Soft CTA</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Want these insights tailored to your church?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We sit with churches weekly to translate these ideas into action. No sales pitch-just honest help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact/">Schedule a conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/use-cases/">See use cases</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
