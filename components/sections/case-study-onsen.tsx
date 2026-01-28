import { Badge } from '@/components/ui/badge'

export default function CaseStudyOnsen() {
  return (
    <section id="smarthome-onsen" className="py-15 md:py-12 sm:py-10 bg-[var(--color-gray-light)]">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <Badge className="mb-6 bg-[var(--color-success)] text-white rounded-full px-4 py-1">
          SMART HOME & IOT
        </Badge>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray)] mb-4">
          CES innovation award
        </h5>

        <div className="space-y-6 text-[var(--color-gray-dark)] leading-relaxed">
          <p>Drove the program from POC to MVP to launch at CES</p>
          <p>
            <strong>ONSEN™ is driven by artificial intelligence</strong> to <strong>ensure comfort, learning a family&apos;s shower habits</strong> and kick-starting the water heater
          </p>
          <p>
            With the ONSEN™ app and <strong>patented AI technology</strong>, users can now track - in real time - their <strong>hot water and electricity consumption</strong>, set up timers or competitions between users to reduce unnecessarily long shower times
          </p>
        </div>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-dark)] mt-8 mb-4">
          The first AI powered hotwater manager
        </h5>
      </div>
    </section>
  )
}
