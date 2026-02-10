import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, publishedBlogPosts, getBlogPost } from "@/data/blog-posts";
import { StoryIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogArticle } from "@/components/blog/content-renderer";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {
      title: "Blog post not found",
      description: "The article you are looking for does not exist.",
    };
  }
  const ogImage = post.image
    ? `https://relius.ai${post.image}`
    : "https://relius.ai/og-image.png";

  return {
    title: `${post.title} | Relius Blog`,
    description: post.excerpt,
    keywords: post.topics,
    alternates: {
      canonical: `https://relius.ai/blog/${slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://relius.ai/blog/${slug}/`,
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.topics,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = publishedBlogPosts
    .filter((item) => item.slug !== post.slug && item.topics.some((topic) => post.topics.includes(topic)))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://relius.ai${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Relius",
      logo: {
        "@type": "ImageObject",
        url: "https://relius.ai/relius_emblem_circle.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://relius.ai/blog/${post.slug}/`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://relius.ai/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://relius.ai/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://relius.ai/blog/${post.slug}/` },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{post.category}</span>
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span aria-hidden="true">|</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900">{post.title}</h1>
          <p className="text-xl text-slate-600">{post.excerpt}</p>
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold text-slate-900">{post.author}</p>
              <p className="text-sm text-slate-500">{post.role}</p>
            </div>
          </div>
        </header>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 overflow-hidden relative">
          {post.image ? (
            <div className="relative h-64 w-full rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <StoryIllustration type="ministry" className="w-full" title="Blog illustration" />
          )}
        </div>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Key takeaways</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {post.takeaway.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {post.quote ? (
            <blockquote className="mt-2 text-slate-600 italic border-l-4 border-primary-200 pl-4">
              "{post.quote}"
            </blockquote>
          ) : null}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Table of contents</p>
          <ul className="space-y-2 text-slate-700">
            {post.content.map((section) => (
              <li key={section.heading}>
                <a href={`#${section.heading.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-primary-700">
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <BlogArticle content={post.content} />

        <Card className="border border-slate-200 bg-white">
          <CardContent className="p-8 space-y-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Next step</p>
            <h3 className="text-3xl font-bold text-slate-900">Let's apply this to your church</h3>
            <p className="text-lg text-slate-600">
              Share where you are stuck and we'll help map a path-no pressure, no aggressive sales cycle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact/">Start a conversation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/use-cases/">Explore use cases</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {relatedPosts.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Related posts</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2">
                  <p className="text-xs uppercase tracking-wide text-slate-500">{related.category}</p>
                  <h4 className="text-lg font-semibold text-slate-900">{related.title}</h4>
                  <p className="text-sm text-slate-600">{related.excerpt}</p>
                  <Link href={`/blog/${related.slug}`} className="inline-flex items-center gap-1 text-primary-700 font-semibold">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
    </>
  );
}
