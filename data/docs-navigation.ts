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
  Music,
  DoorOpen,
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
      { title: 'Overview', href: '/resources/docs/people' },
      { title: 'People Directory', href: '/resources/docs/people/directory' },
      { title: 'Person Profiles', href: '/resources/docs/people/profiles' },
      { title: 'Family Management', href: '/resources/docs/people/families' },
      { title: 'Visitor Tracking', href: '/resources/docs/people/visitors' },
      { title: 'Pipelines', href: '/resources/docs/people/pipelines' },
      { title: 'New Member Contacts', href: '/resources/docs/people/new-member-contacts' },
    ],
  },
  {
    title: 'Groups',
    icon: UsersRound,
    items: [
      { title: 'Overview', href: '/resources/docs/groups' },
      { title: 'Creating Groups', href: '/resources/docs/groups/creating' },
      { title: 'Group Types & Categories', href: '/resources/docs/groups/types' },
      { title: 'Group Leaders', href: '/resources/docs/groups/leaders' },
      { title: 'Group Attendance', href: '/resources/docs/groups/attendance' },
      { title: 'Small Group Finder', href: '/resources/docs/groups/finder' },
    ],
  },
  {
    title: 'Events & Scheduling',
    icon: Calendar,
    items: [
      { title: 'Overview', href: '/resources/docs/events' },
      { title: 'Events Scheduler', href: '/resources/docs/events/scheduler' },
      { title: 'Creating Events', href: '/resources/docs/events/creating' },
      { title: 'Registration', href: '/resources/docs/events/registration' },
      { title: 'Check-Ins & Attendance', href: '/resources/docs/events/check-in' },
      { title: 'Event Analytics', href: '/resources/docs/events/analytics' },
    ],
  },
  {
    title: 'Services',
    icon: Music,
    items: [
      { title: 'Overview', href: '/resources/docs/services' },
      { title: 'Service Plans', href: '/resources/docs/services/plans' },
      { title: 'Songs Library', href: '/resources/docs/services/songs' },
      { title: 'Service Teams', href: '/resources/docs/services/teams' },
      { title: 'Volunteer Scheduling', href: '/resources/docs/services/scheduling' },
    ],
  },
  {
    title: 'Giving',
    icon: DollarSign,
    items: [
      { title: 'Overview', href: '/resources/docs/giving' },
      { title: 'Donation Tracking', href: '/resources/docs/giving/tracking' },
      { title: 'Online Giving Setup', href: '/resources/docs/giving/online-setup' },
      { title: 'Campaigns', href: '/resources/docs/giving/campaigns' },
      { title: 'Giving Insights', href: '/resources/docs/giving/insights' },
      { title: 'Tax Receipts', href: '/resources/docs/giving/receipts' },
      { title: 'Import Data', href: '/resources/docs/giving/import' },
      { title: 'Financial Overview', href: '/resources/docs/giving/finance' },
    ],
  },
  {
    title: 'Communications',
    icon: MessageSquare,
    items: [
      { title: 'Overview', href: '/resources/docs/communications' },
      { title: 'Email Campaigns', href: '/resources/docs/communications/email' },
      { title: 'SMS Messaging', href: '/resources/docs/communications/sms' },
      { title: 'Announcements', href: '/resources/docs/communications/announcements' },
    ],
  },
  {
    title: 'Rooms',
    icon: DoorOpen,
    items: [
      { title: 'Overview', href: '/resources/docs/rooms' },
      { title: 'Managing Rooms', href: '/resources/docs/rooms/manage' },
      { title: 'Room Rentals & Bookings', href: '/resources/docs/rooms/rentals' },
      { title: 'Room Settings & QR Codes', href: '/resources/docs/rooms/settings' },
    ],
  },
  {
    title: 'Pastoral Care',
    icon: Heart,
    items: [
      { title: 'Overview', href: '/resources/docs/pastoral-care' },
      { title: 'Care Notes', href: '/resources/docs/pastoral-care/notes' },
      { title: 'Prayer Requests', href: '/resources/docs/pastoral-care/prayer' },
      { title: 'At-Risk Detection', href: '/resources/docs/pastoral-care/at-risk' },
    ],
  },
  {
    title: 'AI Features',
    icon: Sparkles,
    items: [
      { title: 'Overview', href: '/resources/docs/ai' },
      { title: 'AI Sermon Planner', href: '/resources/docs/ai/sermon-planner' },
      { title: 'AI Content Studio', href: '/resources/docs/ai/content-studio' },
      { title: 'Translation Console', href: '/resources/docs/ai/translation' },
      { title: 'Pastoral Care AI', href: '/resources/docs/ai/pastoral-care' },
      { title: 'Donations AI', href: '/resources/docs/ai/donations-manager' },
      { title: 'Semantic Bible Search', href: '/resources/docs/ai/bible-search' },
    ],
  },
  {
    title: 'Public Website',
    icon: Globe,
    items: [
      { title: 'Overview', href: '/resources/docs/website' },
      { title: 'Website Setup', href: '/resources/docs/website/setup' },
      { title: 'Pages & Content', href: '/resources/docs/website/pages' },
      { title: 'Online Giving Page', href: '/resources/docs/website/giving' },
    ],
  },
  {
    title: 'Settings & Admin',
    icon: Settings,
    items: [
      { title: 'Overview', href: '/resources/docs/admin' },
      { title: 'General Settings', href: '/resources/docs/admin/settings' },
      { title: 'Users & Roles', href: '/resources/docs/admin/users' },
      { title: 'Security & Audit Trail', href: '/resources/docs/admin/security' },
      { title: 'Billing', href: '/resources/docs/admin/billing' },
      { title: 'Data Migration', href: '/resources/docs/admin/data' },
      { title: 'Campus Management', href: '/resources/docs/admin/campus' },
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
