import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive documentation for Relius Church Management System.",
};

export default function DocsPage() {
  return (
    <div className="py-14 px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
          <BookOpen className="w-10 h-10 text-primary" />
        </div>
        <h1 className="mb-4">Documentation</h1>
        <p className="text-xl text-slate-500 mb-8">
          Comprehensive guides and API documentation coming soon
        </p>
        <Button variant="primary" size="lg" asChild>
          <Link href="/contact/">Contact Us for Early Access</Link>
        </Button>
      </div>
    </div>
  );
}
