'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { X } from 'lucide-react'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-white p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close menu"
        >
          <X className="h-6 w-6 text-[var(--color-gray-dark)]" />
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-8 mt-16">
          <Link
            href="/"
            onClick={onClose}
            className="text-2xl font-bold text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-2xl font-bold text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors"
          >
            About
          </Link>
          <Link
            href="/blog"
            onClick={onClose}
            className="text-2xl font-bold text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-2xl font-bold text-[var(--color-gray-dark)] hover:text-[var(--color-primary-600)] transition-colors"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              className="w-full bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-[4px] py-4"
              onClick={onClose}
            >
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
