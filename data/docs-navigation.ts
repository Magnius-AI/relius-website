import {
  Rocket,
  Users,
  UsersRound,
  Calendar,
  DollarSign,
  MessageSquare,
  Heart,
  Sparkles,
  Globe,
  Settings,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

export interface DocItem {
  title: string;
  href: string;
}

export interface DocSection {
  title: string;
  icon: LucideIcon;
  href?: string;
  items: DocItem[];
}

export const docsNavigation: DocSection[] = [
  {
    title: 'Getting Started',
    icon: Rocket,
    items: [
      { title: 'Quick Start Guide', href: '/resources/docs/getting-started/quick-start' },
      { title: 'Setting Up Your Church', href: '/resources/docs/getting-started/setup' },
      { title: 'Understanding the Dashboard', href: '/resources/docs/getting-started/dashboard' },
      { title: 'User Roles & Permissions', href: '/resources/docs/getting-started/roles' },
    ],
  },
  {
    title: 'People',
    icon: Users,
    items: [
      { title: 'Overview', href: '/resources/docs/people/overview' },
      { title: 'Member Directory', href: '/resources/docs/people/directory' },
      { title: 'Family Management', href: '/resources/docs/people/families' },
      { title: 'Visitor Tracking', href: '/resources/docs/people/visitors' },
      { title: 'Pipelines', href: '/resources/docs/people/pipelines' },
    ],
  },
  {
    title: 'Groups',
    icon: UsersRound,
    items: [
      { title: 'Overview', href: '/resources/docs/groups/overview' },
      { title: 'Creating Groups', href: '/resources/docs/groups/creating' },
      { title: 'Group Types & Categories', href: '/resources/docs/groups/types' },
      { title: 'Group Leaders', href: '/resources/docs/groups/leaders' },
      { title: 'Group Attendance', href: '/resources/docs/groups/attendance' },
      { title: 'Small Group Finder', href: '/resources/docs/groups/finder' },
    ],
  },
  {
    title: 'Events & Calendar',
    icon: Calendar,
    items: [
      { title: 'Overview', href: '/resources/docs/events/overview' },
      { title: 'Event Calendar', href: '/resources/docs/events/calendar' },
      { title: 'Registration & RSVP', href: '/resources/docs/events/registration' },
      { title: 'Check-In System', href: '/resources/docs/events/check-in' },
      { title: 'Room Rentals', href: '/resources/docs/events/rentals' },
    ],
  },
  {
    title: 'Giving',
    icon: DollarSign,
    items: [
      { title: 'Overview', href: '/resources/docs/giving/overview' },
      { title: 'Donation Tracking', href: '/resources/docs/giving/tracking' },
      { title: 'Online Giving Setup', href: '/resources/docs/giving/online-setup' },
      { title: 'Campaigns', href: '/resources/docs/giving/campaigns' },
      { title: 'Donor Management', href: '/resources/docs/giving/donors' },
      { title: 'Tax Receipts', href: '/resources/docs/giving/receipts' },
      { title: 'Giving Analytics', href: '/resources/docs/giving/analytics' },
    ],
  },
  {
    title: 'Communications',
    icon: MessageSquare,
    items: [
      { title: 'Overview', href: '/resources/docs/communications/overview' },
      { title: 'Email Campaigns', href: '/resources/docs/communications/email' },
      { title: 'SMS Messaging', href: '/resources/docs/communications/sms' },
      { title: 'Announcements', href: '/resources/docs/communications/announcements' },
    ],
  },
  {
    title: 'Pastoral Care',
    icon: Heart,
    items: [
      { title: 'Overview', href: '/resources/docs/pastoral-care/overview' },
      { title: 'Care Notes', href: '/resources/docs/pastoral-care/notes' },
      { title: 'Prayer Requests', href: '/resources/docs/pastoral-care/prayer' },
      { title: 'At-Risk Detection', href: '/resources/docs/pastoral-care/at-risk' },
    ],
  },
  {
    title: 'AI Features',
    icon: Sparkles,
    items: [
      { title: 'Overview', href: '/resources/docs/ai/overview' },
      { title: 'AI Sermon Planner', href: '/resources/docs/ai/sermon-planner' },
      { title: 'AI Content Studio', href: '/resources/docs/ai/content-studio' },
      { title: 'AI Pastoral Insights', href: '/resources/docs/ai/pastoral-insights' },
      { title: 'AI Volunteer Scheduler', href: '/resources/docs/ai/volunteer-scheduler' },
      { title: 'AI Donations Manager', href: '/resources/docs/ai/donations-manager' },
      { title: 'Translation Console', href: '/resources/docs/ai/translation' },
      { title: 'Semantic Bible Search', href: '/resources/docs/ai/bible-search' },
    ],
  },
  {
    title: 'Public Website',
    icon: Globe,
    items: [
      { title: 'Overview', href: '/resources/docs/website/overview' },
      { title: 'Website Setup', href: '/resources/docs/website/setup' },
      { title: 'Pages & Content', href: '/resources/docs/website/pages' },
      { title: 'Online Giving Page', href: '/resources/docs/website/giving' },
    ],
  },
  {
    title: 'Administration',
    icon: Settings,
    items: [
      { title: 'Overview', href: '/resources/docs/admin/overview' },
      { title: 'Church Settings', href: '/resources/docs/admin/settings' },
      { title: 'User Management', href: '/resources/docs/admin/users' },
      { title: 'Security Settings', href: '/resources/docs/admin/security' },
      { title: 'Integrations', href: '/resources/docs/admin/integrations' },
      { title: 'Data Management', href: '/resources/docs/admin/data' },
      { title: 'Billing & Subscription', href: '/resources/docs/admin/billing' },
    ],
  },
  {
    title: 'Reference',
    icon: BookOpen,
    items: [
      { title: 'Keyboard Shortcuts', href: '/resources/docs/reference/shortcuts' },
      { title: 'API Documentation', href: '/resources/docs/reference/api' },
      { title: 'Glossary', href: '/resources/docs/reference/glossary' },
      { title: 'Release Notes', href: '/resources/docs/reference/releases' },
      { title: 'FAQ', href: '/resources/docs/reference/faq' },
    ],
  },
];
