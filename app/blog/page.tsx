import { Metadata } from "next";
import { publishedBlogPosts } from "@/data/blog-posts";
import { BlogPageContent } from "@/components/blog/blog-page-content";

// Sort posts by date (newest first)
const sortedPosts = [...publishedBlogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const topics = Array.from(new Set(sortedPosts.flatMap((post) => post.topics))).sort();

export const metadata: Metadata = {
  title: "Blog & ministry insights",
  description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
  alternates: {
    canonical: "https://relius.ai/blog/",
  },
  openGraph: {
    type: "website",
    title: "Blog & Ministry Insights | Relius",
    description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
    url: "https://relius.ai/blog/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Relius Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Ministry Insights | Relius",
    description: "Practical ministry tips, honest takes on church software, and transparent product updates from the Relius team.",
  },
};

export default function BlogPage() {
  return <BlogPageContent posts={sortedPosts} topics={topics} />;
}
