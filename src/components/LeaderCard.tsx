'use client';

import { useState } from 'react';
import Link from 'next/link';
import LazyImage from './LazyImage';

interface LeaderScores {
  market: number;
  reach: number;
  policy: number;
  innovation: number;
  culture: number;
}

interface Leader {
  rank: number;
  tier: 'power' | 'rising';
  name: string;
  slug: string;
  role: string;
  sector: string;
  totalScore: number;
  scores: LeaderScores;
  bio: string;
  image: string;
}

interface LeaderCardProps {
  leader: Leader;
  viewMode: 'grid' | 'list';
}

const SECTOR_BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  'Government & Policy': { bg: 'rgba(239, 68, 68, 0.12)', color: '#f87171' },
  'Capital Markets': { bg: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa' },
  'Financial Services': { bg: 'rgba(59, 130, 246, 0.12)', color: '#60a5fa' },
  'Fintech & Innovation': { bg: 'rgba(16, 185, 129, 0.12)', color: '#34d399' },
  'Professional Services': { bg: 'rgba(245, 158, 11, 0.12)', color: '#fbbf24' },
  'Enterprise & Growth': { bg: 'rgba(236, 72, 153, 0.12)', color: '#f472b6' },
  'Inclusive Capital': { bg: 'rgba(6, 182, 212, 0.12)', color: '#22d3ee' },
};

const SCORE_COLORS: Record<string, string> = {
  market: '#4A90D9',
  reach: '#E8734A',
  policy: '#50C878',
  innovation: '#F39C12',
  culture: '#9B59B6',
};

const SCORE_LABELS: Record<string, string> = {
  market: 'Market',
  reach: 'Reach',
  policy: 'Policy',
  innovation: 'Innov.',
  culture: 'Culture',
};

export default function LeaderCard({ leader, viewMode }: LeaderCardProps) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const sectorStyle = SECTOR_BADGE_STYLES[leader.sector] || { bg: 'rgba(255,255,255,0.08)', color: '#94a3b8' };
  const accentColor = leader.tier === 'power' ? '#C9A84C' : '#0EA5E9';

  if (viewMode === 'list') {
    return (
      <Link
        href={`/leader/${leader.slug}`}
        className="group flex items-center gap-4 p-4 rounded-lg transition hover:bg-white/5 cursor-pointer"
        style={{ backgroundColor: '#1A2335', border: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Rank */}
        <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full font-black text-sm"
          style={{ backgroundColor: accentColor, color: '#0A0E1A' }}>
          {leader.rank}
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 w-11 h-11 rounded-lg overflow-hidden">
          <LazyImage src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-slate-100 group-hover:text-white truncate underline-offset-2 group-hover:underline"
            style={{ textDecorationColor: accentColor }}>
            {leader.name}
          </h3>
          <p className="text-xs text-slate-400 truncate">{leader.role}</p>
        </div>

        {/* Category */}
        <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0"
          style={{ backgroundColor: sectorStyle.bg, color: sectorStyle.color }}>
          {leader.sector}
        </span>

        {/* Score */}
        <div className="flex-shrink-0 text-right">
          <div className="text-lg font-black" style={{ color: accentColor }}>{leader.totalScore}</div>
        </div>

        {/* View profile affordance */}
        <div className="flex-shrink-0 hidden sm:flex items-center gap-1 text-xs font-bold group-hover:translate-x-0.5 transition"
          style={{ color: accentColor }}>
          View
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    );
  }

  // Grid Mode — Webflow-style dark card
  const handleBioToggle = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBioExpanded(!bioExpanded);
  };

  const handleBioKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleBioToggle(e);
    }
  };

  return (
    <Link
      href={`/leader/${leader.slug}`}
      className="group block rounded-[10px] overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: '#1A2335',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative w-full overflow-hidden aspect-[4/5] sm:aspect-auto sm:h-[280px]">
          <LazyImage
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition duration-500"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, transparent 80%, rgba(26,35,53,0.4) 100%)'
          }} />
          {/* Rank badge */}
          <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-full font-black text-sm"
            style={{ backgroundColor: accentColor, color: '#0A0E1A' }}>
            {leader.rank}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pb-5 pt-3">
          {/* Name and Role */}
          <h3 className="text-base font-black text-slate-100 group-hover:text-white transition line-clamp-1 underline-offset-2 group-hover:underline"
            style={{ textDecorationColor: accentColor }}>
            {leader.name}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">{leader.role}</p>

          {/* Sector Badge */}
          <div className="mt-2.5">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium"
              style={{ backgroundColor: sectorStyle.bg, color: sectorStyle.color }}>
              {leader.sector}
            </span>
          </div>

          {/* OTA Power Score */}
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[11px] font-semibold text-slate-400">OTA Power Score</span>
              <span className="text-base font-black" style={{ color: accentColor }}>{leader.totalScore}</span>
            </div>
            <div className="w-full rounded-sm h-1 overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-sm transition-all duration-500"
                style={{ width: `${leader.totalScore}%`, backgroundColor: accentColor }} />
            </div>
          </div>

          {/* Score Breakdown */}
          <div className="grid grid-cols-5 gap-1.5 mt-3">
            {Object.entries(leader.scores).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-xs font-bold text-slate-200">{value}</div>
                <div className="text-[10px] text-slate-500">{SCORE_LABELS[key] || key}</div>
              </div>
            ))}
          </div>

          {/* Footer: Bio toggle + View profile CTA */}
          <div className="mt-3 pt-3 flex items-center justify-between gap-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span
              role="button"
              tabIndex={0}
              onClick={handleBioToggle}
              onKeyDown={handleBioKeyDown}
              className="text-xs font-semibold transition flex items-center gap-1 hover:opacity-80 cursor-pointer select-none"
              style={{ color: '#94a3b8' }}
              aria-label={bioExpanded ? 'Hide short bio' : 'Show short bio'}
              aria-expanded={bioExpanded}
            >
              {bioExpanded ? 'Hide bio' : 'Quick bio'}
              <svg className={`w-3 h-3 transition ${bioExpanded ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <span
              className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition"
              style={{ color: accentColor }}
            >
              View profile
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          {bioExpanded && (
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{leader.bio}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
