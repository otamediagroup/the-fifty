import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Methodology | The Fifty | OTA Media',
  description: 'Learn how The Fifty leaders are scored across five criteria: Market Influence, Leadership Reach, Policy Proximity, Innovation Impact, and Cultural Capital.',
  openGraph: {
    title: 'Methodology | The Fifty | OTA Media',
    description: 'How leaders are scored across five dimensions of structural influence.',
    url: 'https://fifty.otamediagroup.com/methodology',
    type: 'website',
  },
}

const scoringCriteria = [
  {
    id: 'market',
    name: 'Market Influence',
    weight: 25,
    description: 'Scale of capital, assets, or market infrastructure under their direction or stewardship.',
    color: '#4A90D9',
  },
  {
    id: 'reach',
    name: 'Leadership Reach',
    weight: 25,
    description: 'Breadth of influence across sectors, boards, and institutions beyond their primary role.',
    color: '#E8734A',
  },
  {
    id: 'policy',
    name: 'Policy Proximity',
    weight: 20,
    description: 'Access to and demonstrable influence on government policy, regulation, and public frameworks.',
    color: '#50C878',
  },
  {
    id: 'innovation',
    name: 'Innovation Impact',
    weight: 15,
    description: 'Contribution to UK competitiveness through technology, new models, or structural market change.',
    color: '#F39C12',
  },
  {
    id: 'culture',
    name: 'Cultural Capital',
    weight: 15,
    description: 'Public narrative influence, thought leadership, and ability to shape the discourse on growth.',
    color: '#9B59B6',
  },
]

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Back Link */}
      <div className="sticky top-20 z-40 bg-dark/95 backdrop-blur-sm border-b border-gray-700 px-6 sm:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-gold hover:text-gold/80 transition duration-200 font-semibold"
          >
            ← Back to Rankings
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6 sm:px-8 lg:px-12">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-dark to-dark opacity-40" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold rounded-full opacity-5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal rounded-full opacity-5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8">
            How We Score <span className="text-gold">Influence</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            The OTA 50 is not a wealth list. It maps the individuals who hold structural influence over UK economic growth — across capital markets, financial services, fintech, policy, and enterprise.
          </p>
        </div>
      </section>

      {/* Five Scoring Criteria Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Five Scoring Criteria
            </h2>
            <p className="text-gray-400 text-lg">
              Leaders are evaluated across five dimensions of influence
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scoringCriteria.map((criterion) => (
              <div
                key={criterion.id}
                className="group relative overflow-hidden rounded-xl bg-navy/50 border border-gray-700 hover:border-gray-600 p-8 transition duration-300"
              >
                {/* Background accent */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition duration-300"
                  style={{ backgroundColor: criterion.color }}
                />

                <div className="relative z-10">
                  {/* Weight */}
                  <div className="mb-6">
                    <div className="text-5xl font-black text-gold">
                      {criterion.weight}%
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold mb-4">{criterion.name}</h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-base">
                    {criterion.description}
                  </p>

                  {/* Color indicator */}
                  <div
                    className="mt-6 w-1 h-12 rounded"
                    style={{ backgroundColor: criterion.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-navy/30 border-y border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              The Two Tiers
            </h2>
          </div>

          {/* Power Tier */}
          <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-gold text-4xl font-bold">★</span>
              <h3 className="text-3xl font-bold">Power Tier (1–20)</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed ml-12">
              Leaders with systemic, cross-sector influence over the UK growth agenda. Decision-makers whose actions directly shape capital flows, regulatory frameworks, and market structure.
            </p>
          </div>

          {/* Rising 30 */}
          <div>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-teal text-4xl font-bold">↗</span>
              <h3 className="text-3xl font-bold">Rising 30 (21–50)</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed ml-12">
              Leaders building significant influence through innovation, enterprise, advocacy, or institutional leadership. Sector shapers whose trajectory points toward top-tier structural impact.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            Our Methodology
          </h2>

          <div className="space-y-8">
            {/* How we compile */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold">
                How We Compile the Rankings
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rankings are compiled by the OTA Media editorial and research team using a combination of public data analysis, institutional mapping, sector consultation, and proprietary assessment criteria. Each leader is evaluated independently across all five dimensions, with scores synthesized into a final ranking that reflects their overall structural influence on UK economic growth.
              </p>
            </div>

            {/* Update cadence */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold">
                Annual Updates
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rankings are updated annually. The inaugural 2026 edition is live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge to Leadership Index Section */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-navy border-y border-gray-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Measure Your Own <span className="text-gold">Leadership</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            The Fifty methodology informs the Leadership Index — our AI-powered psychometric assessment that measures leadership across six dimensions. Discover your leadership archetype and see how you compare.
          </p>
          <Link
            href="https://index.otamediagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gold text-dark font-bold rounded-lg hover:bg-opacity-90 transition duration-300 text-base sm:text-lg"
          >
            Take the Leadership Index
          </Link>
        </div>
      </section>
    </div>
  )
}
