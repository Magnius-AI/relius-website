'use client';

import Image from 'next/image';
import {
  Home,
  Users,
  UsersRound,
  MessageCircle,
  CalendarDays,
  ClipboardCheck,
  DollarSign,
  TrendingUp,
  Target,
  ClipboardList,
  Music,
  Sparkles,
  FileText,
  Languages,
  Heart,
  Settings,
  Globe,
  UserPlus,
  FolderOpen,
  Building2,
  UserCog,
  CheckSquare,
  LayoutGrid,
  ArrowRightLeft,
} from 'lucide-react';
import { DemoCollapsible } from './components/DemoCollapsible';
import type { DemoView } from './types/demo.types';

interface DemoSidebarProps {
  currentView: DemoView;
  onNavigate: (view: DemoView) => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: DemoView;
  color?: string;
  activeColor?: string; // bg and text colors when active (e.g., 'bg-[#dbeafe] text-[#3b82f6]')
  badge?: string;
  badgeColor?: string; // badge colors (e.g., 'bg-[#dbeafe] text-[#3b82f6]')
  isVisualOnly?: boolean;
}

const mainNavItems: NavItem[] = [
  { id: 'dashboard', name: 'Dashboard', icon: Home, href: 'dashboard' },
  { id: 'groups', name: 'Groups', icon: UsersRound, href: 'groups', color: 'text-[#22c55e] hover:bg-[#dcfce7]', activeColor: 'bg-[#dcfce7] text-[#22c55e]' },
  { id: 'communications', name: 'Communications', icon: MessageCircle, color: 'text-blue-600 hover:bg-blue-50', isVisualOnly: true },
  { id: 'events', name: 'Events Calendar', icon: CalendarDays, href: 'events', color: 'text-purple-600 hover:bg-purple-50', activeColor: 'bg-purple-50 text-purple-600' },
  { id: 'checkins', name: 'Check-Ins', icon: ClipboardCheck, color: 'text-[#f59e0b] hover:bg-[#fef3c7]', isVisualOnly: true },
  { id: 'repository', name: 'Repository', icon: FolderOpen, color: 'text-emerald-600 hover:bg-emerald-50', isVisualOnly: true },
  { id: 'room-rentals', name: 'Room Rentals', icon: Building2, color: 'text-orange-600 hover:bg-orange-50', isVisualOnly: true },
];

const peopleItems: NavItem[] = [
  { id: 'people-directory', name: 'Directory', icon: Users, href: 'people', activeColor: 'bg-[#dbeafe] text-[#3b82f6]' },
  { id: 'new-members', name: 'New Member Contacts', icon: UserPlus, badge: 'New', badgeColor: 'bg-[#dbeafe] text-[#3b82f6]', isVisualOnly: true },
];

const servicesItems: NavItem[] = [
  { id: 'teams', name: 'Teams', icon: Users, href: 'services', activeColor: 'bg-[#fce7f3] text-[#ec4899]' },
  { id: 'service-plans', name: 'Service Plans', icon: ClipboardList, badge: 'New', badgeColor: 'bg-[#fce7f3] text-[#ec4899]', isVisualOnly: true },
  { id: 'songs', name: 'Songs', icon: Music, isVisualOnly: true },
];

const givingItems: NavItem[] = [
  { id: 'giving-overview', name: 'Overview', icon: DollarSign, isVisualOnly: true },
  { id: 'giving-insights', name: 'Insights', icon: TrendingUp, isVisualOnly: true },
  { id: 'giving-campaigns', name: 'Campaigns', icon: Target, isVisualOnly: true },
];

const aiItems: NavItem[] = [
  { id: 'sermon-planner', name: 'Sermon Planner', icon: Sparkles, badge: 'New', isVisualOnly: true },
  { id: 'content-studio', name: 'Content Studio', icon: FileText, badge: 'New', isVisualOnly: true },
  { id: 'translation', name: 'Translation', icon: Languages, isVisualOnly: true },
  { id: 'pastoral-care', name: 'Pastoral Care', icon: Heart, isVisualOnly: true },
  { id: 'donations-ai', name: 'Donations AI', icon: DollarSign, badge: 'New', isVisualOnly: true },
];

const adminItems: NavItem[] = [
  { id: 'user-management', name: 'User Management', icon: UserCog, isVisualOnly: true },
  { id: 'rental-approvals', name: 'Rental Approvals', icon: CheckSquare, isVisualOnly: true },
  { id: 'rooms-management', name: 'Rooms Management', icon: LayoutGrid, isVisualOnly: true },
];

const settingsItems: NavItem[] = [
  { id: 'general-settings', name: 'General Settings', icon: Settings, isVisualOnly: true },
  { id: 'public-website', name: 'Public Website', icon: Globe, isVisualOnly: true },
  { id: 'data-migration', name: 'Data Migration', icon: ArrowRightLeft, isVisualOnly: true },
];

export function DemoSidebar({ currentView, onNavigate, isMobileOpen, onCloseMobile }: DemoSidebarProps) {
  const isActive = (href?: DemoView) => href === currentView;

  const handleNavClick = (item: NavItem) => {
    if (item.href && !item.isVisualOnly) {
      onNavigate(item.href);
      onCloseMobile();
    }
  };

  const renderNavItem = (item: NavItem, isIconOnly: boolean = false) => {
    const Icon = item.icon;
    const active = isActive(item.href);
    const isClickable = item.href && !item.isVisualOnly;
    const defaultActiveColor = 'bg-[#eff6ff] text-[#1d4ed8]';
    const activeStyles = item.activeColor || defaultActiveColor;

    return (
      <button
        key={item.id}
        onClick={() => handleNavClick(item)}
        title={item.name}
        disabled={!isClickable}
        className={`
          w-full flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors
          ${isIconOnly ? 'justify-center lg:justify-start lg:space-x-3' : 'space-x-3'}
          ${active
            ? activeStyles
            : isClickable
              ? `text-gray-700 hover:bg-gray-100 ${item.color || ''}`
              : 'text-gray-400 cursor-default'
          }
        `}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <span className={isIconOnly ? 'hidden lg:block' : ''}>{item.name}</span>
        {item.badge && (
          <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-semibold ${
            item.badgeColor || 'bg-orange-100 text-orange-800'
          } ${isIconOnly ? 'hidden lg:inline' : ''}`}>
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="absolute inset-0 z-40 bg-black/50 sm:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          absolute left-0 top-0 z-50 h-full demo-sidebar transition-all duration-300
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          sm:translate-x-0 sm:w-16
          lg:w-64
          w-64
        `}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-gray-200 px-3 lg:px-6">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 flex-shrink-0 relative">
                <Image
                  src="/relius_emblem_circle.png"
                  alt="Relius Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="hidden lg:block text-xl font-bold text-gray-900 truncate">
                Relius Platform
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 overflow-y-auto p-2 lg:p-4 demo-scrollbar">
            {/* Main Nav */}
            <div className="space-y-1">
              {mainNavItems.map((item) => renderNavItem(item, true))}
            </div>

            {/* People */}
            <DemoCollapsible title="People" defaultExpanded={true} isIconOnly>
              {peopleItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>

            {/* Services */}
            <DemoCollapsible title="Services" defaultExpanded={false} isIconOnly>
              {servicesItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>

            {/* Giving */}
            <DemoCollapsible title="Giving" defaultExpanded={false} isIconOnly>
              {givingItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>

            {/* Admin */}
            <DemoCollapsible title="Admin" defaultExpanded={false} isIconOnly>
              {adminItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>

            {/* AI Features */}
            <DemoCollapsible title="AI Features" defaultExpanded={false} isIconOnly>
              {aiItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>

            {/* Settings */}
            <DemoCollapsible title="Settings" defaultExpanded={false} isIconOnly>
              {settingsItems.map((item) => renderNavItem(item, true))}
            </DemoCollapsible>
          </nav>

          {/* User Profile */}
          <div className="border-t border-gray-200 p-2 lg:p-4">
            <div className="flex items-center rounded-lg px-2 py-2 justify-center lg:justify-start lg:space-x-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white font-semibold text-sm">
                JD
              </div>
              <div className="hidden lg:block flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 truncate">admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
