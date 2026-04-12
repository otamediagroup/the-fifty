'use client';

/**
 * Trust bar showing security credentials and infrastructure partners.
 * Inline SVG logos — no external assets needed.
 */
export default function TrustBar() {
  return (
    <section className="border-t border-gray-700/50 bg-dark/80 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
          Secured &amp; Powered By
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {/* Supabase */}
          <a
            href="https://supabase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-80 transition-opacity"
            aria-label="Supabase"
          >
            <svg width="140" height="28" viewBox="0 0 581 113" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M65.6 95.1c-2.5 3.2-7.8 1.5-7.9-2.6l-1.5-56.2h39.4c7.1 0 11 8.3 6.5 13.8L65.6 95.1z" fill="url(#sb1)" />
              <path d="M65.6 95.1c-2.5 3.2-7.8 1.5-7.9-2.6l-1.5-56.2h39.4c7.1 0 11 8.3 6.5 13.8L65.6 95.1z" fill="url(#sb2)" fillOpacity=".2" />
              <path d="M47.4 17.9c2.5-3.2 7.8-1.5 7.9 2.6l.7 56.2H17.6c-7.1 0-11-8.3-6.5-13.8L47.4 17.9z" fill="#3ECF8E" />
              <text x="120" y="72" fill="#FFFFFF" fontFamily="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" fontSize="46" fontWeight="600" letterSpacing="-0.02em">supabase</text>
              <defs>
                <linearGradient id="sb1" x1="53.97" y1="46.66" x2="94.78" y2="71.45" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#249361" />
                  <stop offset="1" stopColor="#3ECF8E" />
                </linearGradient>
                <linearGradient id="sb2" x1="36.16" y1="30.58" x2="54.48" y2="65.84" gradientUnits="userSpaceOnUse">
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          {/* Vercel */}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-80 transition-opacity"
            aria-label="Vercel"
          >
            <svg width="110" height="26" viewBox="0 0 284 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M141.7 1.54h11.74l21.57 37.54 21.57-37.54H208.3L164.84 63.03 141.7 1.54z" fill="#FFFFFF" />
              <path d="M243.3 60.2c-14.22 0-24.1-10.73-24.1-23.58S229.27 13.04 243.3 13.04c8.67 0 16.26 4.27 20.29 10.86l-10.48 6.06c-2.28-3.63-5.66-6.06-9.81-6.06-7.22 0-12.39 5.64-12.39 12.72s5.17 12.72 12.39 12.72c4.14 0 7.54-2.56 9.89-6.06l10.48 6.06c-4.08 6.54-11.7 10.86-20.37 10.86z" fill="#FFFFFF" />
              <path d="M268.6 59.2V14.04h11.58v7.22c2.71-5.25 7.82-8.22 14.64-8.22v12.66c-8.08-.66-14.64 2.02-14.64 12.79v20.71H268.6z" fill="#FFFFFF" />
              <path d="M211.3 36.62c0-13.12 9.93-23.58 23.45-23.58 13.28 0 23.07 10.46 23.07 24.45v3.09h-34.98c1.25 5.91 6.17 9.81 13.12 9.81 4.54 0 9.93-1.81 13.04-5.25l6.73 7.76c-5.03 5.39-12.79 8.3-20.64 8.3-14.3 0-23.79-10.24-23.79-24.58zm12.19-5.03h23.26c-.83-5.58-5.48-9.66-11.51-9.66-6.34 0-10.79 3.86-11.75 9.66z" fill="#FFFFFF" />
              <path d="M36.59 0L73.18 63.04H0L36.59 0z" fill="#FFFFFF" />
              <path d="M100.7 59.2l-23.2-45.16h13.14l16.3 33.66 16.3-33.66h13.14L113.3 59.2H100.7z" fill="#FFFFFF" />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            256-bit TLS encryption
          </span>
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            SOC 2 certified infrastructure
          </span>
          <a href="/privacy" className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors">
            <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            GDPR compliant
          </a>
        </div>
      </div>
    </section>
  );
}
