import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";

// Sort posts by date (newest first)
const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const featuredPost = sortedPosts[0]!;
const remainingPosts = sortedPosts.slice(1);
const topics = Array.from(new Set(sortedPosts.flatMap((post) => post.topics))).sort();

export const metadata: Metadata = {
  title: "Blog & ministry insights",
  description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
  alternates: {
    canonical: "https://relius.com/blog/",
  },
  openGraph: {
    type: "website",
    title: "Blog & Ministry Insights | Relius",
    description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
    url: "https://relius.com/blog/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Relius Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Ministry Insights | Relius",
    description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
  },
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl space-y-16">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Relius Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-balance">Insightful reads for church leaders</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Practical ministry strategy, honest product updates, and step-by-step guidance for modern church teams.
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <div className="relative h-72 w-full">
              {featuredPost.image ? (
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" priority />
              ) : null}
            </div>
            <div className="p-8 space-y-4">
              <div className="text-xs uppercase tracking-wide text-primary-600 font-semibold">Featured post</div>
              <h2 className="text-3xl font-bold text-slate-900">{featuredPost.title}</h2>
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
                  <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                View now →
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Service categories</p>
              <h3 className="text-2xl font-bold text-slate-900">Browse by topic</h3>
              <p className="text-sm text-slate-600">Explore the themes churches are tackling right now.</p>
            </div>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li key={topic} className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-700">{topic}</span>
                  <span className="text-xs text-slate-400">→</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Latest articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <article key={post.slug} className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <div className="relative h-48 w-full">
                  {post.image ? <Image src={post.image} alt={post.title} fill className="object-cover" /> : null}
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-semibold">
                    View now →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

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
