import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { docsNavigation } from '@/data/docs-navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Generate static params for all documentation pages
export async function generateStaticParams() {
  const paths: { slug: string[] }[] = [];

  docsNavigation.forEach((section) => {
    section.items.forEach((item) => {
      // Remove the /resources/docs/ prefix and split into segments
      const slug = item.href.replace('/resources/docs/', '').split('/');
      paths.push({ slug });
    });
  });

  return paths;
}

// Generate metadata for each page
export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const href = `/resources/docs/${slug.join('/')}`;

  // Find the page in navigation
  let pageTitle = '';
  let sectionTitle = '';

  for (const section of docsNavigation) {
    const item = section.items.find((i) => i.href === href);
    if (item) {
      pageTitle = item.title;
      sectionTitle = section.title;
      break;
    }
  }

  if (!pageTitle) {
    return {
      title: 'Documentation - Relius',
    };
  }

  return {
    title: `${pageTitle} - ${sectionTitle} - Relius Documentation`,
    description: `Learn about ${pageTitle.toLowerCase()} in Relius church management software.`,
    alternates: {
      canonical: `https://relius.ai${href}`,
    },
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const href = `/resources/docs/${slug.join('/')}`;

  // Find the current page and section in navigation
  let currentPage = null;
  let currentSection = null;

  for (const section of docsNavigation) {
    const item = section.items.find((i) => i.href === href);
    if (item) {
      currentPage = item;
      currentSection = section;
      break;
    }
  }

  // If page not found in navigation, show 404
  if (!currentPage || !currentSection) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-600 not-prose">
        <Link href="/resources/docs" className="hover:text-primary-600 transition-colors">
          Documentation
        </Link>
        <span>/</span>
        <span className="text-slate-900">{currentSection.title}</span>
        <span>/</span>
        <span className="text-slate-900 font-medium">{currentPage.title}</span>
      </nav>

      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
            {(() => {
              const Icon = currentSection.icon;
              return <Icon className="h-6 w-6" />;
            })()}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              {currentSection.title}
            </p>
            <h1 className="text-4xl font-bold text-slate-900">{currentPage.title}</h1>
          </div>
        </div>
      </div>

      {/* Placeholder Content */}
      <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center not-prose">
        <BookOpen className="mx-auto h-12 w-12 text-slate-400 mb-4" />
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Content Coming Soon</h2>
        <p className="text-slate-600 mb-6">
          We're working on detailed documentation for <strong>{currentPage.title}</strong>.
          <br />
          Check back soon for comprehensive guides and examples.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/resources/docs"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Documentation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Request Information
          </Link>
        </div>
      </div>

      {/* Example Content Structure (commented out for now) */}
      {/* 
      <div>
        <h2>Overview</h2>
        <p>
          Quick summary of what this feature does and why it's useful for your ministry.
        </p>

        <h2>Getting Started</h2>
        <p>Step-by-step instructions for basic usage.</p>

        <h3>Step 1: Initial Setup</h3>
        <p>Description of the first step...</p>

        <h3>Step 2: Configuration</h3>
        <p>Description of the second step...</p>

        <h2>Features</h2>
        <p>Detailed explanation of all available features...</p>

        <h2>Best Practices</h2>
        <ul>
          <li>Tip 1</li>
          <li>Tip 2</li>
          <li>Tip 3</li>
        </ul>

        <h2>Common Questions</h2>
        <p><strong>Q: Question here?</strong></p>
        <p>A: Answer here.</p>

        <h2>Related Topics</h2>
        <ul>
          <li><Link href="#">Related Page 1</Link></li>
          <li><Link href="#">Related Page 2</Link></li>
        </ul>
      </div>
      */}

      {/* Navigation to other pages in section */}
      <div className="border-t border-slate-200 pt-8 not-prose">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-4">
          More in {currentSection.title}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {currentSection.items
            .filter((item) => item.href !== href)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700 hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                {item.title} →
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
