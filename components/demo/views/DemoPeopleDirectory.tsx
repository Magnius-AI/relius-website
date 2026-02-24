'use client';

import { UserPlus, Mail, Phone, MoreVertical, UserCheck } from 'lucide-react';
import { roleColors } from '../data/mockData';
import type { Person, PersonRole } from '../types/demo.types';

interface DemoPeopleDirectoryProps {
  people: Person[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  roleFilter: PersonRole | 'all';
  onRoleFilterChange: (role: PersonRole | 'all') => void;
  onAddPerson: () => void;
  canAddMore: boolean;
}

function PersonCard({ person }: { person: Person }) {
  const roleColor = roleColors[person.role] || 'bg-gray-100 text-gray-700';

  return (
    <div className="demo-card p-4 transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#1d4ed8] font-semibold">
          {person.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{person.name}</h3>
          <span className={`inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded-full capitalize ${roleColor}`}>
            {person.role}
          </span>
          {person.email && (
            <div className="flex items-center gap-1.5 text-sm text-gray-600 mt-2">
              <Mail className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate">{person.email}</span>
            </div>
          )}
          {person.phone && (
            <div className="flex items-center gap-1.5 text-sm text-gray-600 mt-1">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              <span>{person.phone}</span>
            </div>
          )}
        </div>
        <button
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function DemoPeopleDirectory({
  people,
  searchQuery,
  onSearchChange,
  roleFilter,
  onRoleFilterChange,
  onAddPerson,
  canAddMore,
}: DemoPeopleDirectoryProps) {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">People Directory</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your church members and contacts</p>
        </div>
        <button
          onClick={onAddPerson}
          disabled={!canAddMore}
          className={`demo-btn demo-btn-primary ${!canAddMore ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Person
        </button>
      </div>

      {/* Filters */}
      <div className="demo-card p-4 mb-6 border-[#3b82f6]/20 bg-[#dbeafe]/20">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="demo-input pl-3 sm:max-w-xs"
          />
          {/* Role filter dropdown */}
          <select
            value={roleFilter}
            onChange={(e) => onRoleFilterChange(e.target.value as PersonRole | 'all')}
            className="demo-input !w-32 appearance-none"
            aria-label="Filter by role"
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="pastor">Pastor</option>
            <option value="volunteer">Volunteer</option>
            <option value="member">Member</option>
          </select>
          {/* New Members toggle button */}
          <button className="demo-btn demo-btn-secondary whitespace-nowrap">
            <UserCheck className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>New Members</span>
          </button>
        </div>
      </div>

      {/* People Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>

      {people.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No people found matching your criteria.</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-6 text-sm text-gray-500 text-center">
        Showing {people.length} {people.length === 1 ? 'person' : 'people'}
      </div>
    </div>
  );
}
