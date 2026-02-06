'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-8 px-6 py-8 lg:px-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="fixed bottom-6 right-6 z-50 lg:hidden rounded-full bg-primary-600 p-4 text-white shadow-lg hover:bg-primary-700 transition-colors"
            aria-label="Toggle documentation menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}

          {/* Sidebar - Desktop Sticky, Mobile Overlay */}
          <aside
            className={`
              fixed lg:sticky top-0 left-0 z-40 h-screen lg:h-auto
              w-72 lg:w-72 flex-shrink-0
              bg-white lg:bg-transparent
              shadow-xl lg:shadow-none
              transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
              lg:top-8 lg:max-h-[calc(100vh-4rem)]
            `}
          >
            <div className="h-full overflow-y-auto p-6 lg:sticky lg:top-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-900">Documentation</h2>
                <p className="mt-1 text-sm text-slate-600">
                  Everything you need to know about Relius
                </p>
              </div>

              {/* Navigation */}
              <DocsSidebar currentPath={pathname} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="min-w-0 flex-1">
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-50">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
