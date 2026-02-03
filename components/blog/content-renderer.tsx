import Link from "next/link";
import { ArrowRight, Lightbulb, AlertTriangle, Info, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InlineMarkdown } from "./inline-markdown";
import type { ContentBlock, BlogSection } from "@/data/blog-posts";

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index}>
          <InlineMarkdown text={block.text} />
        </p>
      );

    case "list": {
      const ListTag = block.style === "ordered" ? "ol" : "ul";
      const listClass = block.style === "ordered" ? "list-decimal" : "list-disc";
      return (
        <div key={index} className="space-y-2">
          {block.heading && (
            <p className="font-semibold text-slate-800">
              <InlineMarkdown text={block.heading} />
            </p>
          )}
          <ListTag className={`${listClass} pl-5 space-y-2 text-slate-700`}>
            {block.items.map((item, i) => (
              <li key={i}>
                <InlineMarkdown text={item} />
              </li>
            ))}
          </ListTag>
        </div>
      );
    }

    case "subheading":
      return (
        <h3 key={index} className="text-xl font-semibold text-slate-800 mt-4">
          <InlineMarkdown text={block.text} />
        </h3>
      );

    case "callout": {
      const styles = {
        tip: {
          border: "border-l-4 border-blue-400",
          bg: "bg-blue-50",
          icon: <Lightbulb className="h-5 w-5 text-blue-600 shrink-0" />,
          titleColor: "text-blue-800",
        },
        warning: {
          border: "border-l-4 border-yellow-400",
          bg: "bg-yellow-50",
          icon: <AlertTriangle className="h-5 w-5 text-yellow-600 shrink-0" />,
          titleColor: "text-yellow-800",
        },
        info: {
          border: "border-l-4 border-slate-300",
          bg: "bg-slate-50",
          icon: <Info className="h-5 w-5 text-slate-500 shrink-0" />,
          titleColor: "text-slate-700",
        },
        quote: {
          border: "border-l-4 border-primary-200",
          bg: "bg-white",
          icon: <Quote className="h-5 w-5 text-primary-400 shrink-0" />,
          titleColor: "text-slate-700",
        },
      };
      const s = styles[block.variant];
      return (
        <div key={index} className={`${s.border} ${s.bg} rounded-r-lg p-5 space-y-2`}>
          <div className="flex items-center gap-2">
            {s.icon}
            {block.title && (
              <p className={`font-semibold ${s.titleColor}`}>{block.title}</p>
            )}
          </div>
          <p className="text-slate-700">
            <InlineMarkdown text={block.body} />
          </p>
        </div>
      );
    }

    case "stat":
      return (
        <div key={index} className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <span className="text-3xl font-bold text-blue-700">{block.value}</span>
          <p className="text-sm text-slate-600 mt-1">
            <InlineMarkdown text={block.label} />
          </p>
          {block.source && (
            <p className="text-xs text-slate-400 mt-2">Source: {block.source}</p>
          )}
        </div>
      );

    case "cta":
      return (
        <Card key={index} className="border-blue-100 bg-gradient-to-r from-blue-50 to-white">
          <CardContent className="p-8 space-y-4 text-center">
            <h3 className="text-2xl font-bold text-slate-900">{block.heading}</h3>
            {block.body && <p className="text-slate-600">{block.body}</p>}
            <Button variant={block.variant === "secondary" ? "secondary" : "gradient"} size="lg" asChild>
              <Link href={block.buttonHref}>{block.buttonText}</Link>
            </Button>
          </CardContent>
        </Card>
      );

    case "link-card":
      return (
        <Link
          key={index}
          href={block.href}
          className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-200 hover:shadow-md transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">{block.title}</p>
              {block.description && (
                <p className="text-sm text-slate-500 mt-1">{block.description}</p>
              )}
            </div>
            <ArrowRight className="h-5 w-5 text-slate-400 shrink-0" />
          </div>
        </Link>
      );

    default: {
      const _exhaustive: never = block;
      return null;
    }
  }
}

export function BlogArticle({ content }: { content: BlogSection[] }) {
  return (
    <article className="space-y-10 text-slate-700 leading-relaxed">
      {content.map((section) => (
        <section
          key={section.heading}
          id={section.heading.toLowerCase().replace(/\s+/g, "-")}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
          {section.blocks.map((block, i) => renderBlock(block, i))}
        </section>
      ))}
    </article>
  );
}
