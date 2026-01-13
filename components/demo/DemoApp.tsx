'use client';

import Image from 'next/image';
import { useReducer, useMemo } from 'react';
import { DemoSidebar } from './DemoSidebar';
import { DemoHeader } from './DemoHeader';
import { DemoBottomNav } from './DemoBottomNav';
import { DemoDashboard } from './views/DemoDashboard';
import { DemoPeopleDirectory } from './views/DemoPeopleDirectory';
import { DemoGroupsDirectory } from './views/DemoGroupsDirectory';
import { DemoServicesOverview } from './views/DemoServicesOverview';
import { DemoEventsCalendar } from './views/DemoEventsCalendar';
import { mockPeople, mockGroups, additionalPeople, additionalGroups } from './data/mockData';
import type { DemoState, DemoAction, DemoView, Person, Group } from './types/demo.types';

interface DemoAppProps {
  isMobileView?: boolean;
}

const MAX_ADDITIONS = 5;

const initialState: DemoState = {
  currentView: 'dashboard',
  isMobileMenuOpen: false,
  searchQuery: '',
  peopleRoleFilter: 'all',
  groupTypeFilter: 'all',
  people: mockPeople,
  groups: mockGroups,
  addedPeopleCount: 0,
  addedGroupsCount: 0,
};

function demoReducer(state: DemoState, action: DemoAction): DemoState {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.payload, searchQuery: '' };
    case 'TOGGLE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
    case 'CLOSE_MOBILE_MENU':
      return { ...state, isMobileMenuOpen: false };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_PEOPLE_ROLE_FILTER':
      return { ...state, peopleRoleFilter: action.payload };
    case 'SET_GROUP_TYPE_FILTER':
      return { ...state, groupTypeFilter: action.payload };
    case 'ADD_PERSON':
      if (state.addedPeopleCount >= MAX_ADDITIONS) return state;
      return {
        ...state,
        people: [action.payload, ...state.people],
        addedPeopleCount: state.addedPeopleCount + 1,
      };
    case 'ADD_GROUP':
      if (state.addedGroupsCount >= MAX_ADDITIONS) return state;
      return {
        ...state,
        groups: [action.payload, ...state.groups],
        addedGroupsCount: state.addedGroupsCount + 1,
      };
    default:
      return state;
  }
}

export function DemoApp({ isMobileView = false }: DemoAppProps) {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  const handleNavigate = (view: DemoView) => {
    dispatch({ type: 'SET_VIEW', payload: view });
  };

  const handleAddPerson = () => {
    if (state.addedPeopleCount < MAX_ADDITIONS) {
      const newPerson = additionalPeople[state.addedPeopleCount];
      dispatch({ type: 'ADD_PERSON', payload: newPerson });
    }
  };

  const handleAddGroup = () => {
    if (state.addedGroupsCount < MAX_ADDITIONS) {
      const newGroup = additionalGroups[state.addedGroupsCount];
      dispatch({ type: 'ADD_GROUP', payload: newGroup });
    }
  };

  // Filter people based on search and role
  const filteredPeople = useMemo(() => {
    return state.people.filter((person) => {
      const matchesSearch =
        state.searchQuery === '' ||
        person.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        (person.email && person.email.toLowerCase().includes(state.searchQuery.toLowerCase()));

      const matchesRole =
        state.peopleRoleFilter === 'all' || person.role === state.peopleRoleFilter;

      return matchesSearch && matchesRole;
    });
  }, [state.people, state.searchQuery, state.peopleRoleFilter]);

  // Filter groups based on search and type
  const filteredGroups = useMemo(() => {
    return state.groups.filter((group) => {
      const matchesSearch =
        state.searchQuery === '' ||
        group.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        group.leader.toLowerCase().includes(state.searchQuery.toLowerCase());

      const matchesType =
        state.groupTypeFilter === 'all' || group.type === state.groupTypeFilter;

      return matchesSearch && matchesType;
    });
  }, [state.groups, state.searchQuery, state.groupTypeFilter]);

  const renderView = () => {
    switch (state.currentView) {
      case 'dashboard':
        return <DemoDashboard />;
      case 'people':
        return (
          <DemoPeopleDirectory
            people={filteredPeople}
            searchQuery={state.searchQuery}
            onSearchChange={(query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query })}
            roleFilter={state.peopleRoleFilter}
            onRoleFilterChange={(role) => dispatch({ type: 'SET_PEOPLE_ROLE_FILTER', payload: role })}
            onAddPerson={handleAddPerson}
            canAddMore={state.addedPeopleCount < MAX_ADDITIONS}
          />
        );
      case 'groups':
        return (
          <DemoGroupsDirectory
            groups={filteredGroups}
            searchQuery={state.searchQuery}
            onSearchChange={(query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query })}
            typeFilter={state.groupTypeFilter}
            onTypeFilterChange={(type) => dispatch({ type: 'SET_GROUP_TYPE_FILTER', payload: type })}
            onAddGroup={handleAddGroup}
            canAddMore={state.addedGroupsCount < MAX_ADDITIONS}
          />
        );
      case 'services':
        return <DemoServicesOverview />;
      case 'events':
        return <DemoEventsCalendar />;
      default:
        return <DemoDashboard />;
    }
  };

  // Mobile layout with bottom navigation
  if (isMobileView) {
    return (
      <div className="demo-app h-full flex flex-col bg-gray-50">
        {/* Simplified mobile header */}
        <header className="h-12 bg-white border-b border-gray-200 flex items-center px-4 flex-shrink-0">
          <div className="relative w-7 h-7">
            <Image
              src="/relius_emblem_circle.png"
              alt="Relius"
              fill
              className="object-contain"
            />
          </div>
          <span className="ml-2 font-semibold text-gray-900 text-sm">Relius</span>
        </header>

        {/* Content area - full width */}
        <main className="flex-1 overflow-y-auto demo-scrollbar">
          {renderView()}
        </main>

        {/* Bottom navigation */}
        <DemoBottomNav currentView={state.currentView} onNavigate={handleNavigate} />
      </div>
    );
  }

  // Desktop layout with sidebar
  return (
    <div className="demo-app h-full flex relative overflow-hidden">
      <DemoSidebar
        currentView={state.currentView}
        onNavigate={handleNavigate}
        isMobileOpen={state.isMobileMenuOpen}
        onCloseMobile={() => dispatch({ type: 'CLOSE_MOBILE_MENU' })}
      />

      {/* Main content area - responsive margin for sidebar */}
      <div className="flex-1 flex flex-col ml-0 sm:ml-16 lg:ml-64 transition-all duration-300 h-full">
        <DemoHeader
          searchQuery={state.searchQuery}
          onSearchChange={(query) => dispatch({ type: 'SET_SEARCH_QUERY', payload: query })}
          onToggleMobileMenu={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
        />
        <main className="flex-1 overflow-y-auto demo-scrollbar">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
