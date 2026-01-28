import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4 py-15 md:py-12 sm:py-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-12 md:gap-8 sm:gap-6">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">
              Digital Product Leader
            </h3>
            <p className="text-[var(--color-gray)] text-sm leading-relaxed">
              Expert insights on digital product leadership, UX innovation, and strategic design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/thought-leadership"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm"
                >
                  Thought Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nicolas@digitalproductleader.com"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nlimare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gray)] hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-gray-dark)]">
          <div className="flex justify-between items-center md:flex-col md:gap-4 sm:text-center">
            <p className="text-[var(--color-gray)] text-sm">
              © {currentYear} Digital Product Leader. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[var(--color-gray)] hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--color-gray)] hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
