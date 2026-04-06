'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScoreBar from './ScoreBar';

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

const SECTOR_COLORS: Record<string, string> = {
  'Government & Policy': '#1A2332',
  'Financial Services': '#0F1720',
  'Fintech & Innovation': '#056773',
  'Capital Markets': '#C9A84C',
  'Professional Services': '#4A90D9',
  'Enterprise & Growth': '#E8734A',
  'Inclusive Capital': '#50C878',
};

const SCORE_COLORS = {
  market: '#4A90D9',
  reach: '#E8734A',
  policy: '#50C878',
  innovation: '#F39C12',
  culture: '#9B59B6',
};

export default function LeaderCard({ leader, viewMode }: LeaderCardProps) {
  const [bioExpanded, setBioExpanded] = useState(false);
  const sectorColor = SECTOR_COLORS[leader.sector] || '#1A2332';
  const borderColor = leader.tier === 'power' ? '#C9A84C' : '#056773';
  const borderWidth = 3;

  if (viewMode === 'list') {
    return (
      <div
        className="flex items-center gap-6 p-6 rounded-lg bg-white border transition hover:shadow-lg"
        style={{ borderLeft: `${borderWidth}px solid ${borderColor}` }}
      >
        {/* Rank */}
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg font-bold text-lg text-gray-900">
          {leader.rank}
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <img
            src={leader.image}
            alt={leader.name}
            width={56}
            height={56}
            className="rounded-lg object-cover"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <Link href={`/leader/${leader.slug}`}>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 truncate">
              {leader.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 truncate">{leader.role}</p>
          <div className="flex items-center gap-3 mt-2">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
              style={{ backgroundColor: sectorColor }}
            >
              {leader.sector}
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="flex-shrink-0 text-right">
          <div className="text-2xl font-bold text-gray-900">
            {leader.totalScore.toFixed(1)}
          </div>
          <p className="text-xs text-gray-500 mt-1">OTA Power Score</p>
        </div>

        {/* Mini Breakdown */}
        <div className="flex-shrink-0 hidden sm:flex gap-1">
          {Object.entries(leader.scores).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center"
              title={`${key}: ${value.toFixed(1)}`}
            >
              <div
                className="w-2 h-8 rounded-sm"
                style={{
                  backgroundColor: SCORE_COLORS[key as keyof typeof SCORE_COLORS],
                  opacity: (value / 25) * 0.8 + 0.2,
                }}
              />
              <span className="text-xs text-gray-600 mt-1 capitalize">
                {key.slice(0, 1).toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Grid Mode
  return (
    <div
      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 relative"
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
      }}
    >
      {/* Rank Overlay */}
      <div className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-black bg-opacity-70 rounded-lg text-white font-bold text-xl">
        {leader.rank}
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name and Role */}
        <Link href={`/leader/${leader.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition line-clamp-2">
            {leader.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{leader.role}</p>

        {/* Sector Badge */}
        <div className="mt-3">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: sectorColor }}
          >
            {leader.sector}
          </span>
        </div>

        {/* OTA Power Score Bar */}
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-gray-700">
              OTA Power Score
            </span>
            <span className="text-sm font-bold text-gray-900">
              {leader.totalScore.toFixed(1)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(leader.totalScore / 100) * 100}%`,
                backgroundColor: borderColor,
              }}
            />
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="mt-4 space-y-2 text-xs">
          <ScoreBar
            label="Market"
            value={leader.scores.market}
            color={SCORE_COLORS.market}
          />
          <ScoreBar
            label="Reach"
            value={leader.scores.reach}
            color={SCORE_COLORS.reach}
          />
          <ScoreBar
            label="Policy"
            value={leader.scores.policy}
            color={SCORE_COLORS.policy}
          />
          <ScoreBar
            label="Innovation"
            value={leader.scores.innovation}
            color={SCORE_COLORS.innovation}
          />
          <ScoreBar
            label="Culture"
            value={leader.scores.culture}
            color={SCORE_COLORS.culture}
          />
        </div>

        {/* Bio Toggle and Expanded Bio */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => setBioExpanded(!bioExpanded)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition flex items-center gap-1"
          >
            {bioExpanded ? 'Hide bio' : 'Show bio'}
            <svg
              className={`w-4 h-4 transition ${bioExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          {bioExpanded && (
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {leader.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
