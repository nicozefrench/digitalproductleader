'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import MobileNav from './mobile-nav'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-gray-border)] shadow-sm">
      <nav className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4 h-20 md:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-xl font-bold text-[var(--color-primary-600)] font-serif transition-colors hover:text-[var(--color-primary-700)]"
        >
          Digital Product Leader
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors duration-300"
          >
            Contact
          </Link>
          <Button className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-[4px] px-6 py-3">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <Menu className="w-6 h-6 text-[var(--color-gray-dark)]" />
        </button>
      </nav>

      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
