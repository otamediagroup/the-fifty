import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — The Fifty',
  description: 'How OTA Media Group collects, uses and protects personal data related to The Fifty rankings.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark">
      <article className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: 12 April 2026
          </p>
        </header>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">1. Who we are</h2>
            <p>
              OTA Media Ltd (&ldquo;OTA Media&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data controller for personal data processed through The Fifty at fifty.otamediagroup.com and the wider OTA Media platform.
            </p>
            <p className="mt-3">
              <strong className="text-white">Registered office:</strong> Unit 82a James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE<br />
              <strong className="text-white">Contact:</strong> info@otamediagroup.com<br />
              <strong className="text-white">ICO registration:</strong> Registered with the UK Information Commissioner&apos;s Office
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">2. What data we collect</h2>
            <p>
              <strong className="text-white">Rankings data:</strong> The Fifty publishes the names, professional titles, organisations, and sector classifications of individuals featured in the rankings. This information is drawn from publicly available sources and our proprietary research methodology.
            </p>
            <p className="mt-3">
              <strong className="text-white">Assessment data:</strong> if you are a nominated participant and complete the OTA Media Leadership Index assessment, your responses, scores, and archetype are processed in accordance with the{' '}
              <a href="https://index.otamediagroup.com/privacy" className="text-gold hover:underline">
                Leadership Index Privacy Policy
              </a>. Individual assessment responses are never published.
            </p>
            <p className="mt-3">
              <strong className="text-white">Technical data:</strong> standard server logs including IP address, browser type, and pages viewed. These are retained for security purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">3. How we use your data</h2>
            <p>
              <strong className="text-white">To publish the rankings:</strong> names, titles, and organisations of ranked individuals are displayed publicly on The Fifty. The lawful basis is legitimate interest — The Fifty serves a journalistic and public-interest purpose in identifying leadership across the UK economy.
            </p>
            <p className="mt-3">
              <strong className="text-white">To improve the platform:</strong> anonymised analytics help us understand how visitors use the site. We do not track individuals or use advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">4. How we protect your data</h2>
            <p>
              The Fifty is hosted on Vercel with 256-bit TLS encryption. Our database infrastructure is provided by Supabase. Both providers hold SOC 2 Type II certification. All database tables enforce row-level security policies to isolate user data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">5. Your rights</h2>
            <p>
              Under UK GDPR, you have the right to access, rectify, or request erasure of your personal data. If you are featured in The Fifty and wish to discuss how your data is used, or if you wish to exercise any of your data protection rights, contact us at{' '}
              <a href="mailto:info@otamediagroup.com" className="text-gold hover:underline">
                info@otamediagroup.com
              </a>.
            </p>
            <p className="mt-3">
              We aim to respond to all requests within 30 days. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                ico.org.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mt-10 mb-4">6. Changes to this policy</h2>
            <p>
              We may update this privacy policy from time to time. The &ldquo;last updated&rdquo; date at the top indicates when it was most recently revised.
            </p>
          </section>

          <section className="border-t border-gray-700 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              For the full privacy policy covering the Leadership Index assessment platform, visit{' '}
              <a href="https://index.otamediagroup.com/privacy" className="text-gold hover:underline">
                index.otamediagroup.com/privacy
              </a>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
