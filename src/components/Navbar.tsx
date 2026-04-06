'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-dark border-b border-gray-800">
      {/* Ecosystem bar */}
      <div className="bg-navy border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              <a
                href="https://www.otamediagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                OTA Media
              </a>
              <a
                href="https://www.otamediagroup.com/off-the-agenda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Off The Agenda
              </a>
              <span className="text-gold font-medium">The Fifty</span>
              <a
                href="https://index.otamediagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                Leadership Index
              </a>
            </div>
            <a
              href="https://www.otamediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              otamediagroup.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Title */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gold hover:text-gold-bright transition-colors"
            >
              <span>The Fifty</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/#rankings"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                Rankings
              </a>
              <Link
                href="/methodology"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                Methodology
              </Link>
              <a
                href="https://index.otamediagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors"
              >
                Leadership Index
              </a>
            </div>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-400 hover:text-gold"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800">
              <a
                href="/#rankings"
                className="block px-2 py-2 text-gray-300 hover:text-gold transition-colors"
              >
                Rankings
              </a>
              <Link
                href="/methodology"
                className="block px-2 py-2 text-gray-300 hover:text-gold transition-colors"
              >
                Methodology
              </Link>
              <a
                href="https://index.otamediagroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-2 text-gray-300 hover:text-gold transition-colors"
              >
                Leadership Index
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
