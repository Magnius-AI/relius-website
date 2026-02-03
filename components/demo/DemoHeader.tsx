'use client';

import { Menu, Building2 } from 'lucide-react';

interface DemoHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onToggleMobileMenu: () => void;
}

export function DemoHeader({ searchQuery, onSearchChange, onToggleMobileMenu }: DemoHeaderProps) {
  return (
    <header className="sticky top-0 z-30 demo-header">
      <div className="flex h-14 items-center justify-between px-4 sm:px-6">
        {/* Mobile menu button */}
        <button
          onClick={onToggleMobileMenu}
          className="mr-2 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 sm:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-lg">
          <label htmlFor="demo-search" className="sr-only">Search people, groups, events</label>
          <input
            id="demo-search"
            type="search"
            placeholder="Search people, groups, events..."
            className="demo-input pl-3 text-sm"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3 ml-4">
          {/* Church badge */}
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5">
            <Building2 className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900 truncate max-w-[140px]">
              Grace Community
            </span>
          </div>

          {/* Sync status */}
          <div className="hidden md:inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
            All synced
          </div>
        </div>
      </div>
    </header>
  );
}
