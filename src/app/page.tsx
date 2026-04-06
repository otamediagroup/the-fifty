'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { leaders, SECTORS, Leader } from '@/data/leaders';
import SearchFilter from '@/components/SearchFilter';
import LeaderCard from '@/components/LeaderCard';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSector, setActiveSector] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter logic
  const filteredLeaders = leaders.filter((leader) => {
    // Search filter: name, role, or sector (case-insensitive)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        leader.name.toLowerCase().includes(query) ||
        leader.role.toLowerCase().includes(query) ||
        leader.sector.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Sector filter: exact match or "All"
    if (activeSector !== 'All' && leader.sector !== activeSector) {
      return false;
    }

    return true;
  });

  // Separate filtered leaders by tier
  const powerTierLeaders = filteredLeaders.filter(
    (leader) => leader.tier === 'power'
  );
  const risingLeaders = filteredLeaders.filter(
    (leader) => leader.tier === 'rising'
  );

  // Calculate stats
  const totalPowerTier = leaders.filter(
    (leader) => leader.tier === 'power'
  ).length;
  const totalRising = leaders.filter(
    (leader) => leader.tier === 'rising'
  ).length;
  const womenPercentage = 42;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleSectorFilter = (sector: string) => {
    setActiveSector(sector);
  };

  const handleViewChange = (view: 'grid' | 'list') => {
    setViewMode(view);
  };

  const scrollToRankings = () => {
    const element = document.getElementById('rankings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-dark to-dark opacity-40" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold rounded-full opacity-5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal rounded-full opacity-5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Overline */}
          <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-gold mb-6">
            OTA Media — Inaugural Edition 2026
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-gold">THE FIFTY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto">
            Who Holds the Levers of UK Growth
          </p>

          {/* Stats Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-gold">50</div>
              <p className="text-xs sm:text-sm text-gray-400">Leaders Ranked</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-gold">7</div>
              <p className="text-xs sm:text-sm text-gray-400">Sectors Mapped</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-gold">5</div>
              <p className="text-xs sm:text-sm text-gray-400">Scoring Criteria</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold text-gold">2026</div>
              <p className="text-xs sm:text-sm text-gray-400">Edition</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToRankings}
            className="inline-block px-8 py-4 bg-gold text-dark font-bold rounded-lg hover:bg-opacity-90 transition duration-300 text-base sm:text-lg"
          >
            Explore the Rankings
          </button>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy border-y border-gray-700 py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gold mb-2">£6.2T+</p>
            <p className="text-xs sm:text-sm text-gray-400">
              Combined Assets Influenced
            </p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gold mb-2">
              {totalPowerTier}
            </p>
            <p className="text-xs sm:text-sm text-gray-400">Power Tier Leaders</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gold mb-2">
              {totalRising}
            </p>
            <p className="text-xs sm:text-sm text-gray-400">Rising Leaders</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-gold mb-2">
              {womenPercentage}%
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              Women Represented
            </p>
          </div>
        </div>
      </section>

      {/* Rankings Section */}
      <section id="rankings" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* SearchFilter Component */}
          <div className="mb-16">
            <SearchFilter
              onSearch={handleSearch}
              onSectorFilter={handleSectorFilter}
              onViewChange={handleViewChange}
              activeSector={activeSector}
              activeView={viewMode}
            />
          </div>

          {/* Power Tier Section */}
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-gold">★</span> Power Tier
              </h2>
              <p className="text-gray-400 text-sm">
                Ranks 1–{totalPowerTier}
                {powerTierLeaders.length < totalPowerTier &&
                  ` (${powerTierLeaders.length} shown)`}
              </p>
            </div>

            {powerTierLeaders.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {powerTierLeaders.map((leader) => (
                  <LeaderCard
                    key={leader.slug}
                    leader={leader}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">
                No leaders match your search.
              </p>
            )}
          </div>

          {/* Rising 30 Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="text-teal">↗</span> Rising 30
              </h2>
              <p className="text-gray-400 text-sm">
                Ranks 21–50
                {risingLeaders.length < totalRising &&
                  ` (${risingLeaders.length} shown)`}
              </p>
            </div>

            {risingLeaders.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                    : 'space-y-4'
                }
              >
                {risingLeaders.map((leader) => (
                  <LeaderCard
                    key={leader.slug}
                    leader={leader}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-center py-8">
                No leaders match your search.
              </p>
            )}
          </div>

          {/* Empty state when all filters return nothing */}
          {powerTierLeaders.length === 0 && risingLeaders.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 mb-4">
                No leaders match your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveSector('All');
                }}
                className="text-gold hover:text-gold font-semibold underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy border-t border-gray-700 py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Discover Your Leadership Archetype
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            See how you compare to The Fifty. Take the Leadership Index
            assessment.
          </p>
          <Link
            href="https://index.otamediagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-dark font-bold rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Take the Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
