'use client';

import { Home, Users, UsersRound, CalendarDays, MoreHorizontal } from 'lucide-react';
import type { DemoView } from './types/demo.types';

interface DemoBottomNavProps {
  currentView: DemoView;
  onNavigate: (view: DemoView) => void;
}

const navItems: { id: DemoView | 'more'; icon: React.ComponentType<{ className?: string }>; label: string }[] = [
  { id: 'dashboard', icon: Home, label: 'Home' },
  { id: 'people', icon: Users, label: 'People' },
  { id: 'groups', icon: UsersRound, label: 'Groups' },
  { id: 'events', icon: CalendarDays, label: 'Events' },
  { id: 'more', icon: MoreHorizontal, label: 'More' },
];

export function DemoBottomNav({ currentView, onNavigate }: DemoBottomNavProps) {
  return (
    <nav className="flex items-center justify-around h-14 border-t border-gray-200 bg-white flex-shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isMore = item.id === 'more';
        const active = item.id === currentView ||
          (isMore && !['dashboard', 'people', 'groups', 'events'].includes(currentView));

        return (
          <button
            key={item.id}
            onClick={() => {
              if (!isMore && item.id !== 'more') {
                onNavigate(item.id as DemoView);
              }
            }}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors
              ${active ? 'text-blue-600' : 'text-gray-500'}
              ${isMore ? 'opacity-50 cursor-default' : 'hover:bg-gray-50'}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
