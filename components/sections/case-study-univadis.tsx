import { Badge } from '@/components/ui/badge'

export default function CaseStudyUnivadis() {
  return (
    <section className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <Badge className="mb-6 bg-[var(--color-danger)] text-white rounded-full px-4 py-1">
          DIGITAL PHARMA
        </Badge>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray)] mb-4">
          Univadis, digitalisation of the healthcare relationship
        </h5>

        <div className="space-y-4 text-[var(--color-gray-dark)] leading-relaxed">
          <p>Lead Merck/MSD digital CX strategy and transformation from concept to rollout</p>
          <p>
            Transformation towards <strong>direct-to-physician</strong> and patient to physician relationship to develop <strong>trust virtue cycle</strong> toward Merck
          </p>
          <p>
            <strong>Managed P&Ls and budgets up to $10M</strong>
          </p>
          <p>
            Rebalancing <strong>sales force push effort toward a qualified self-service marketing pull model</strong>
          </p>
          <p>
            Drive reach and engagement to <strong>millions of Healthcare professionals worldwide</strong>
          </p>
          <p>
            Deployed engagement metrics and drove <strong>NPS from 43 to 67</strong>
          </p>
          <p>
            <strong>localised healthcare digital ecosystem in 40 countries and 17 languages</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
