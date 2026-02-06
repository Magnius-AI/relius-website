'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { docsNavigation, type DocSection } from '@/data/docs-navigation';

interface DocsSidebarProps {
  currentPath: string;
}

export function DocsSidebar({ currentPath }: DocsSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() => {
    // Auto-expand the section that contains the current page
    const activeSection = docsNavigation.find((section) =>
      section.items.some((item) => currentPath === item.href)
    );
    return new Set(activeSection ? [activeSection.title] : []);
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <nav className="space-y-1">
      {docsNavigation.map((section) => {
        const isExpanded = expandedSections.has(section.title);
        const Icon = section.icon;
        const hasActiveItem = section.items.some((item) => currentPath === item.href);

        return (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className={`
                w-full flex items-center justify-between px-3 py-2 rounded-lg
                text-sm font-semibold transition-colors
                ${
                  hasActiveItem
                    ? 'text-primary-900 bg-primary-50'
                    : 'text-slate-700 hover:bg-slate-100'
                }
              `}
            >
              <span className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                {section.title}
              </span>
              <ChevronDown
                className={`
                  h-4 w-4 text-slate-400 transition-transform duration-200
                  ${isExpanded ? 'rotate-180' : ''}
                `}
              />
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-200 ease-in-out
                ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <div className="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-3">
                {section.items.map((item) => {
                  const isActive = currentPath === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        block px-3 py-1.5 rounded-md text-sm transition-colors
                        ${
                          isActive
                            ? 'text-primary-600 bg-primary-50 font-medium'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }
                      `}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
