import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Church management tips, product updates, and ministry insights from the Relius team.",
};

export default function BlogPage() {
  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
          <Newspaper className="w-10 h-10 text-primary" />
        </div>
        <h1 className="mb-4">Blog & Resources</h1>
        <p className="text-xl text-slate-500 mb-8">
          Articles, guides, and insights coming soon
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/contact">Stay Updated</Link>
        </Button>
      </div>
    </div>
  );
}
