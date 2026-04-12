'use client';

/**
 * Trust bar showing security credentials — no vendor logos.
 * We deliberately keep the tech stack private and lead with
 * outcomes (encryption, compliance, isolation) rather than ingredients.
 */

const SHIELD_ICON = (
  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const CHECK_ICON = (
  <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function TrustBar() {
  return (
    <section className="border-t border-gray-700/50 bg-dark/80 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <div className="flex items-center justify-center gap-2">
          {SHIELD_ICON}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">
            Enterprise-Grade Security
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            {CHECK_ICON}
            256-bit TLS encryption
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-500">
            {CHECK_ICON}
            SOC 2 Type II certified infrastructure
          </span>
          <a href="/privacy" className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors">
            {CHECK_ICON}
            GDPR compliant · ICO registered
          </a>
          <span className="flex items-center gap-2 text-xs text-gray-500">
            {CHECK_ICON}
            Row-level data isolation
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-500">
            {CHECK_ICON}
            Independent security audits
          </span>
        </div>
      </div>
    </section>
  );
}
