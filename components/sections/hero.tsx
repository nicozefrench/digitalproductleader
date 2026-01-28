'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail, Copy } from 'lucide-react'

export default function HeroSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nicolas@digitalproductleader.com')
  }

  return (
    <section className="relative min-h-[600px] bg-gradient-to-br from-[var(--color-primary-600)] to-[var(--color-azure)] flex items-center py-24 md:py-16 sm:py-12">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4 w-full">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-white font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] leading-tight mb-8">
            I lead your digital product innovation with user-centric design approach, for seamless market introduction, so you don&apos;t have to.
          </h1>

          {/* Body Content */}
          <div className="space-y-6 text-white/90 text-lg md:text-base sm:text-sm leading-relaxed">
            <p>
              Your teams may excel at maintaining current products, but launching innovative new ones can be challenging.
            </p>
            <p>
              Your <strong>industry is undergoing radical disruption</strong>, threatening your mid-term position—you know it&apos;s time to innovate.
            </p>
            <p>
              <strong>But you&apos;re not equipped, you lack the time</strong>, and the risk of changing the engine mid-flight is daunting.
            </p>
            <p>
              As a Chief Product Officer (CPO), my mission is to <strong>transform your innovative ideas into valuable digital products that integrate seamlessly into your offerings</strong>, ensuring smooth execution from strategy and definition to development and scaling.
            </p>
            <p>
              I navigate companies&apos; product innovation and transformation beyond the horizon to anchor your next-generation digital products and services on solid ground for market impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8 sm:flex-col">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--color-primary-600)] hover:bg-white/90 rounded-[4px] px-8 py-6 text-base font-semibold"
            >
              <Link href="#footer">Let&apos;s discuss</Link>
            </Button>
            <Button
              onClick={handleCopyEmail}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-[4px] px-8 py-6 text-base font-semibold"
            >
              <Copy className="w-5 h-5 mr-2" />
              Copy my email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/nlimare/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
