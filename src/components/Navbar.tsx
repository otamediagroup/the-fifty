'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-navy px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="https://cdn.prod.website-files.com/69889742baae82d9f9911b3b/69c81d5b281e5a311043f7b7_The-Fifty-Logo-Transparent.png"
              alt="The Fifty"
              width={160}
              height={50}
              className="h-9 md:h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            <a
              href="/#rankings"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Rankings
            </a>
            <Link
              href="/methodology"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Methodology
            </Link>
            <a
              href="https://index.otamediagroup.com"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Leadership Index
            </a>
            <a
              href="https://www.otamediagroup.com"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              OTA Media
            </a>
          </div>

          {/* Hamburger button — animated */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-[5px] p-1 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4 pt-6 pb-2 border-t border-white/10 mt-5">
            <a
              href="/#rankings"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Rankings
            </a>
            <Link
              href="/methodology"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Methodology
            </Link>
            <a
              href="https://index.otamediagroup.com"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Leadership Index
            </a>
            <a
              href="https://www.otamediagroup.com"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              OTA Media
            </a>
          </div>
        </div>
    </nav>
  )
}
