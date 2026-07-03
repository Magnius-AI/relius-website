'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DemoCollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  isIconOnly?: boolean;
}

export function DemoCollapsible({
  title,
  children,
  defaultExpanded = false,
  isIconOnly = false,
}: DemoCollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const panelId = `demo-collapsible-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const buttonId = `${panelId}-trigger`;

  return (
    <div className="pt-4">
      <button
        id={buttonId}
        onClick={() => setIsExpanded(!isExpanded)}
        title={title}
        aria-label={isIconOnly ? title : undefined}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className={`
          w-full flex items-center mb-2 px-3 py-1.5 rounded-md
          text-xs font-semibold uppercase tracking-wider text-gray-500
          hover:bg-gray-100 transition-colors focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2
          ${isIconOnly ? 'justify-center lg:justify-between' : 'justify-between'}
        `}
      >
        <span className={isIconOnly ? 'hidden lg:inline' : ''}>{title}</span>
        <ChevronDown
          aria-hidden="true"
          className={`
            h-3.5 w-3.5 text-gray-400 transition-transform duration-200
            ${isExpanded ? 'rotate-180' : ''}
          `}
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!isExpanded}
        inert={!isExpanded}
        className={`
          overflow-hidden transition-all duration-200 ease-in-out
          ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}
