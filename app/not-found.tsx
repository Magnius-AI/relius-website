import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StoryIllustration } from "@/components/illustrations";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl text-center space-y-8">
        <StoryIllustration type="community" className="w-full max-w-md mx-auto" title="Friendly 404 illustration" />
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">404 | Page not found</p>
        <h1 className="text-4xl font-bold text-slate-900">We couldn't find that page.</h1>
        <p className="text-lg text-slate-600">
          Good news: the people you're serving still matter more than broken links. Choose where to head next.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" asChild>
            <Link href="/">Back home</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/use-cases/">Explore use cases</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/resources/">Resources hub</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
