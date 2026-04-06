'use client';

import { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onSectorFilter: (sector: string) => void;
  onViewChange: (view: 'grid' | 'list') => void;
  activeSector: string;
  activeView: 'grid' | 'list';
}

const SECTORS = [
  'All',
  'Government & Policy',
  'Financial Services',
  'Fintech & Innovation',
  'Capital Markets',
  'Professional Services',
  'Enterprise & Growth',
  'Inclusive Capital',
];

export default function SearchFilter({
  onSearch,
  onSectorFilter,
  onViewChange,
  activeSector,
  activeView,
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by name, role, or organisation"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
        <svg
          className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Sector Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Sector
        </label>
        <div className="flex flex-wrap gap-2">
          {SECTORS.map((sector) => (
            <button
              key={sector}
              onClick={() => onSectorFilter(sector)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeSector === sector
                  ? 'bg-[#1A2332] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
      </div>

      {/* View Toggle */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          View
        </label>
        <div className="flex gap-2">
          <button
            onClick={() => onViewChange('grid')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
              activeView === 'grid'
                ? 'bg-[#1A2332] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => onViewChange('list')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${
              activeView === 'list'
                ? 'bg-[#1A2332] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            List
          </button>
        </div>
      </div>
    </div>
  );
}
