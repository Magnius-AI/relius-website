'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { docsNavigation, type DocSection } from '@/data/docs-navigation';

interface DocsSidebarProps {
  currentPath: string;
}

const getSectionId = (title: string) =>
  `docs-section-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

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
        const sectionId = getSectionId(section.title);
        const triggerId = `${sectionId}-trigger`;

        return (
          <div key={section.title}>
            <button
              id={triggerId}
              onClick={() => toggleSection(section.title)}
              aria-expanded={isExpanded}
              aria-controls={sectionId}
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
                <Icon className="h-4 w-4" aria-hidden="true" />
                {section.title}
              </span>
              <ChevronDown
                aria-hidden="true"
                className={`
                  h-4 w-4 text-slate-400 transition-transform duration-200
                  ${isExpanded ? 'rotate-180' : ''}
                `}
              />
            </button>

            <div
              id={sectionId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isExpanded}
              inert={!isExpanded}
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
                      aria-current={isActive ? 'page' : undefined}
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
