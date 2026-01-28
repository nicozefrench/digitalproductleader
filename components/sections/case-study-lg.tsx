import { Badge } from '@/components/ui/badge'

export default function CaseStudyLG() {
  return (
    <section id="media-lg" className="py-15 md:py-12 sm:py-10 bg-[var(--color-gray-light)]">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <Badge className="mb-6 bg-[var(--color-azure)] text-white rounded-full px-4 py-1">
          MEDIA & TELCO
        </Badge>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray)] mb-4">
          Put back &quot;Smart&quot; in smart-TV for LG - VP of innovation & UX
        </h5>

        <div className="space-y-6 text-[var(--color-gray-dark)] leading-relaxed">
          <div>
            <h4 className="font-sans font-bold text-xl mb-3">Led Global Product Innovation</h4>
            <p>
              Established and led a cross-functional &quot;commando&quot; team of 10 experts across Korea, France, and the USA
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xl mb-3">Transformed TV UX</h4>
            <p>
              Redesigned the customer TV experience for LG&apos;s <strong>WebOS-powered Smart TVs</strong>, integrating LG content channels, 3rd-party apps, a recommendation engine, and global search
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-xl mb-3">Pioneered OTT Innovation</h4>
            <p>
              Defined and designed a <strong>WebOS OTT streamer for the US market</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
