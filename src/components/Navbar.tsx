'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
      {/* Ecosystem Bar */}
      <div className="bg-dark border-b border-white/5 px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1">
            <a
              href="https://www.otamediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors px-2 py-1"
            >
              OTA Media
            </a>
            <span className="text-gray-600 text-[10px]">|</span>
            <a
              href="https://www.otamediagroup.com/off-the-agenda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500 hover:text-white transition-colors px-2 py-1"
            >
              Off The Agenda
            </a>
            <span className="text-gray-600 text-[10px]">|</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold px-2 py-1">
              The Fifty
            </span>
            <span className="text-gray-600 text-[10px]">|</span>
            <a
              href="https://index.otamediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500 hover:text-white transition-colors px-2 py-1"
            >
              Leadership Index
            </a>
          </div>
          <a
            href="https://www.otamediagroup.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-[10px] text-gray-500 hover:text-gray-300 transition-colors"
          >
            otamediagroup.com
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-navy px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="https://cdn.prod.website-files.com/69889742baae82d9f9911b3b/69cce2536388514ed0b381e0_The%20FIFTY%20White%20Logo.png"
              alt="The Fifty"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Leadership Index
            </a>
            <a
              href="https://www.otamediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              Leadership Index
            </a>
            <a
              href="https://www.otamediagroup.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-white hover:text-gold transition-colors"
            >
              OTA Media
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
