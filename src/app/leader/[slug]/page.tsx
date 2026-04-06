import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { leaders } from '@/data/leaders';
import LazyImage from '@/components/LazyImage';

const SCORE_COLORS = {
  market: '#4A90D9',
  reach: '#E8734A',
  policy: '#50C878',
  innovation: '#F39C12',
  culture: '#9B59B6',
};

export async function generateStaticParams() {
  return leaders.map((leader) => ({
    slug: leader.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const leader = leaders.find((l) => l.slug === params.slug);

  if (!leader) {
    return {};
  }

  const title = `${leader.name} | The Fifty | OTA Media`;
  const description = `${leader.name} — ${leader.role}. Ranked #${leader.rank} on The Fifty by OTA Media.`;
  const ogImageUrl = `/api/og?name=${encodeURIComponent(leader.name)}&rank=${leader.rank}&score=${leader.totalScore}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://fifty.otamediagroup.com/leader/${leader.slug}`,
      type: 'profile',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: leader.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function LeaderPage({ params }: { params: { slug: string } }) {
  const leader = leaders.find((l) => l.slug === params.slug);

  if (!leader) {
    notFound();
  }

  // Find previous and next leaders by rank
  const prevLeader = leaders.find((l) => l.rank === leader.rank - 1);
  const nextLeader = leaders.find((l) => l.rank === leader.rank + 1);

  const tierLabel = leader.tier === 'power' ? 'Power Tier' : 'Rising 30';
  const tierColor = leader.tier === 'power' ? '#C9A84C' : '#056773';

  return (
    <div className="bg-dark text-gray-200 min-h-screen">
      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Rankings
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Photo and Tier Badge */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <LazyImage
                src={leader.image}
                alt={leader.name}
                width={400}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
              {/* Rank Badge */}
              <div
                className="absolute top-6 right-6 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                style={{ backgroundColor: tierColor }}
              >
                #{leader.rank}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {leader.name}
            </h1>

            {/* Role and Sector */}
            <p className="text-xl text-gray-300 mb-4">{leader.role}</p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white bg-opacity-20"
                style={{ backgroundColor: tierColor }}>
                {tierLabel}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 bg-opacity-80">
                {leader.sector}
              </span>
            </div>

            {/* Total Score Display */}
            <div className="mb-8">
              <div className="flex items-end gap-3">
                <div className="text-6xl font-bold text-gold" style={{ color: '#C9A84C' }}>
                  {leader.totalScore}
                </div>
                <p className="text-gray-400 text-lg mb-2">OTA Power Score</p>
              </div>
              <p className="text-sm text-gray-500">Out of 125 points</p>
            </div>
          </div>
        </div>

        {/* OTA Power Score Breakdown Section */}
        <div className="mb-16 p-8 bg-dark border border-gray-700 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8">OTA Power Score Breakdown</h2>

          <div className="space-y-6">
            <ScoreBarLarge
              label="Market"
              value={leader.scores.market}
              color={SCORE_COLORS.market}
            />
            <ScoreBarLarge
              label="Reach"
              value={leader.scores.reach}
              color={SCORE_COLORS.reach}
            />
            <ScoreBarLarge
              label="Policy"
              value={leader.scores.policy}
              color={SCORE_COLORS.policy}
            />
            <ScoreBarLarge
              label="Innovation"
              value={leader.scores.innovation}
              color={SCORE_COLORS.innovation}
            />
            <ScoreBarLarge
              label="Culture"
              value={leader.scores.culture}
              color={SCORE_COLORS.culture}
            />
          </div>
        </div>

        {/* Bio Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">About {leader.name}</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {leader.bio}
          </p>
        </div>

        {/* Navigation Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Navigation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {prevLeader && (
              <Link href={`/leader/${prevLeader.slug}`}>
                <div className="p-6 bg-dark border border-gray-700 rounded-xl hover:border-teal-400 transition cursor-pointer group">
                  <div className="text-sm text-gray-500 mb-2">Previous Leader</div>
                  <div className="text-xl font-bold text-white group-hover:text-teal-400 transition">
                    ← {prevLeader.name}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Rank #{prevLeader.rank}</div>
                </div>
              </Link>
            )}

            {nextLeader && (
              <Link href={`/leader/${nextLeader.slug}`}>
                <div className="p-6 bg-dark border border-gray-700 rounded-xl hover:border-teal-400 transition cursor-pointer group">
                  <div className="text-sm text-gray-500 mb-2">Next Leader</div>
                  <div className="text-xl font-bold text-white group-hover:text-teal-400 transition">
                    {nextLeader.name} →
                  </div>
                  <div className="text-sm text-gray-400 mt-2">Rank #{nextLeader.rank}</div>
                </div>
              </Link>
            )}
          </div>

          {/* Assessment CTA */}
          <a
            href="https://index.otamediagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-8 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 rounded-xl text-center transition transform hover:scale-105"
          >
            <div className="text-xl font-bold text-white mb-2">
              Take the Assessment
            </div>
            <div className="text-gray-100">
              See how you compare to {leader.name}'s leadership profile
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function ScoreBarLarge({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const percentage = (value / 25) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-lg font-semibold text-white">{label}</div>
          <div className="text-sm text-gray-400">
            {value} <span className="text-gray-500">out of 25</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-white">{Math.round(percentage)}%</div>
      </div>
      <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}
