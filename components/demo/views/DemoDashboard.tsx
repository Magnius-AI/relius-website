'use client';

import {
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  TrendingDown,
  UserPlus,
  ClipboardCheck,
  ArrowUpRight,
} from 'lucide-react';
import { mockDashboardKPIs, mockRecentActivity } from '../data/mockData';

function KPICard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  change: string | null;
  trend: 'up' | 'down' | null;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className="demo-card p-5">
      <div className="flex items-center justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        {change && (
          <div className={`flex items-center text-xs font-medium ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend === 'up' ? (
              <TrendingUp className="h-3 w-3 mr-0.5" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-0.5" />
            )}
            {change}
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

function ActivityItem({
  type,
  title,
  subtitle,
  time,
}: {
  type: string;
  title: string;
  subtitle?: string;
  time: string;
}) {
  const getIcon = () => {
    switch (type) {
      case 'new_member':
        return <UserPlus className="h-4 w-4 text-blue-600" />;
      case 'donation':
        return <DollarSign className="h-4 w-4 text-green-600" />;
      case 'event_rsvp':
        return <Calendar className="h-4 w-4 text-purple-600" />;
      case 'check_in':
        return <ClipboardCheck className="h-4 w-4 text-amber-600" />;
      case 'group_join':
        return <Users className="h-4 w-4 text-pink-600" />;
      default:
        return <ArrowUpRight className="h-4 w-4 text-gray-600" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'new_member':
        return 'bg-blue-50';
      case 'donation':
        return 'bg-green-50';
      case 'event_rsvp':
        return 'bg-purple-50';
      case 'check_in':
        return 'bg-amber-50';
      case 'group_join':
        return 'bg-pink-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${getBgColor()}`}>
        {getIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
    </div>
  );
}

export function DemoDashboard() {
  const kpiIcons = [DollarSign, UserPlus, Calendar, Users];
  const kpiColors = [
    'bg-green-100 text-green-600',
    'bg-blue-100 text-blue-600',
    'bg-purple-100 text-purple-600',
    'bg-pink-100 text-pink-600',
  ];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">Dashboard</div>
            <p className="text-sm text-gray-500 mt-1">Welcome back! Here&apos;s what&apos;s happening with your church.</p>
          </div>
          <select className="demo-input !w-36 text-sm appearance-none" disabled>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {mockDashboardKPIs.map((kpi, index) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            icon={kpiIcons[index]}
            color={kpiColors[index]}
          />
        ))}
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="demo-card">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p className="text-sm text-gray-500">Latest updates from your church</p>
          </div>
          <div className="p-4">
            {mockRecentActivity.map((activity) => (
              <ActivityItem
                key={activity.id}
                type={activity.type}
                title={activity.title}
                subtitle={activity.subtitle}
                time={activity.time}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="demo-card">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
            <p className="text-sm text-gray-500">Next 7 days</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-purple-600 text-white">
                <span className="text-xs font-medium">JAN</span>
                <span className="text-lg font-bold leading-none">14</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Sunday Worship Service</p>
                <p className="text-xs text-gray-500">9:00 AM - Main Sanctuary</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-blue-600 text-white">
                <span className="text-xs font-medium">JAN</span>
                <span className="text-lg font-bold leading-none">15</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Youth Group Meeting</p>
                <p className="text-xs text-gray-500">6:30 PM - Youth Center</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-green-600 text-white">
                <span className="text-xs font-medium">JAN</span>
                <span className="text-lg font-bold leading-none">17</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Women&apos;s Bible Study</p>
                <p className="text-xs text-gray-500">10:00 AM - Room 105</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Member Contacts */}
        <div className="demo-card">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">New Member Contacts</h3>
            <p className="text-sm text-gray-500">People awaiting follow-up</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm">
                EW
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Emma Wilson</p>
                <p className="text-xs text-gray-500">First visit: Jan 7, 2024</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">Pending</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold text-sm">
                MJ
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Marcus Johnson</p>
                <p className="text-xs text-gray-500">First visit: Jan 5, 2024</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Contacted</span>
            </div>
          </div>
        </div>

        {/* Schedule Requests */}
        <div className="demo-card">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Schedule Requests</h3>
            <p className="text-sm text-gray-500">Volunteer availability updates</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-amber-50">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold text-xs">
                  RA
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Rachel Adams</p>
                  <p className="text-xs text-gray-500">Worship Team - Jan 21</p>
                </div>
              </div>
              <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">Swap</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-red-50">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-semibold text-xs">
                  JP
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Jason Park</p>
                  <p className="text-xs text-gray-500">Tech Team - Jan 28</p>
                </div>
              </div>
              <span className="text-xs bg-red-200 text-red-800 px-2 py-0.5 rounded-full">Unavailable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
