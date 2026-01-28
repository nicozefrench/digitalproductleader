import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThoughtLeadershipPage() {
  return (
    <div className="py-15 md:py-12 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[var(--color-dark)] mb-6">
            Digital Product Leaders & CPO Thought Leadership
          </h1>
          <p className="text-[var(--color-gray-dark)] text-lg md:text-base max-w-3xl leading-relaxed">
            Insights, frameworks, and strategic perspectives on leading digital product innovation in today&apos;s rapidly evolving landscape.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl space-y-8">
          <section>
            <h2 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mb-4">
              Navigating Digital Transformation
            </h2>
            <p className="text-[var(--color-gray-dark)] leading-relaxed mb-4">
              As industries face unprecedented disruption, digital product leaders must balance innovation with execution, vision with pragmatism, and transformation with operational excellence.
            </p>
            <p className="text-[var(--color-gray-dark)] leading-relaxed">
              Through decades of experience across Media & Telco, Smart Home, and Digital Pharma, I&apos;ve developed frameworks and methodologies for successfully launching next-generation digital products in complex organizational environments.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mb-4">
              Core Principles
            </h2>
            <ul className="space-y-3 text-[var(--color-gray-dark)] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[var(--color-primary-600)] font-bold">•</span>
                <span><strong>User-Centric Innovation:</strong> Technology serves people, not the other way around</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary-600)] font-bold">•</span>
                <span><strong>Bridge Strategy to Execution:</strong> Vision without execution is hallucination</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary-600)] font-bold">•</span>
                <span><strong>Navigate Beyond the Horizon:</strong> Guide innovation through uncertainty to market impact</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-primary-600)] font-bold">•</span>
                <span><strong>Build High-Performance Teams:</strong> Success requires orchestrating diverse expertise</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="pt-8">
            <Button
              asChild
              className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] text-white rounded-[4px] px-8 py-4"
            >
              <Link href="/blog">Read My Articles</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "Digital Product Leaders & CPO Thought Leadership | Digital Product Leader",
  description: "Strategic insights on leading digital product innovation, managing transformation, and building next-generation products across industries.",
}
