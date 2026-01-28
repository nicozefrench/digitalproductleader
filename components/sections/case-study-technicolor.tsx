import { Badge } from '@/components/ui/badge'

export default function CaseStudyTechnicolor() {
  return (
    <section className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <Badge className="mb-6 bg-[var(--color-azure)] text-white rounded-full px-4 py-1">
          MEDIA & TELCO
        </Badge>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray)] mb-4">
          Navigating proprietary OS to Android TV for Technicolor - VP UX Design & innovation
        </h5>

        <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mb-8">
          Navigating industry disruption - Redefining the Future of TV & Streaming Experiences
        </h3>

        <div className="space-y-4 text-[var(--color-gray-dark)] leading-relaxed">
          <p>Led the design and development of the next-generation <strong>set-top boxes</strong> and <strong>OTT streaming platforms</strong></p>
          <p>Managed <strong>P&Ls and budgets up to $5M</strong></p>
          <p>Spearheaded the <strong>transition from proprietary STB OS to Google TV stacks</strong></p>
          <p>Provided <strong>strategic product direction</strong> across <strong>five global regions</strong></p>
          <p>
            Delivered groundbreaking <strong>TV UX solutions and Industrial Design</strong> for: <strong>Canal+, Telecom Italia, Telstra, Etisalat, Foxtel, Liberty Global, and Comhem</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
