import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function CaseStudyWiztivi() {
  return (
    <section id="mediatelco-section" className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <Badge className="mb-6 bg-[var(--color-azure)] text-white rounded-full px-4 py-1">
          MEDIA & TELCO
        </Badge>

        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray)] mb-4">
          Transformation from ad-hoc to a recurring revenue SaaS business model - CPO & head of UX
        </h5>

        <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mb-8">
          Digital Transformation & SaaS Business Model Shift
        </h3>

        <div className="space-y-6 text-[var(--color-gray-dark)] leading-relaxed">
          <p>
            Drove the <strong>strategic shift from a Professional Services (PS) model to a scalable SaaS business</strong>, enabling <strong>Wiztivi</strong> to deliver innovative, <strong>subscription-based solutions</strong> for global clients.
          </p>
          <p>
            <strong>Defined and managed SaaS product pricing</strong>, ensuring competitive positioning.
          </p>
          <p>
            Managed <strong>Business Unit (BU) P&L</strong>, overseeing financial performance and <strong>budget allocation across all product lines</strong>.
          </p>
          <p>
            Led <strong>client offer quoting and Statement of Work (SOW) management</strong>.
          </p>
        </div>

        <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mt-12 mb-6">
          Industry Leadership & Strategic Partnerships
        </h3>

        <p className="text-[var(--color-gray-dark)] leading-relaxed mb-8">
          Partnered with <strong>Vodafone, Orange, SFR, TF1 Group, and France Sat</strong>, transforming their <strong>video streaming and cloud gaming experiences</strong>.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-1 gap-8 mt-12">
          <Card className="rounded-[20px] p-8 bg-[var(--color-gray-light)]">
            <h4 className="font-sans font-bold text-xl mb-4">Timeless Platform</h4>
            <p className="text-[var(--color-gray-dark)]">
              <strong>No-code SaaS platform</strong> for designing, managing, and editorialising cross-platform streaming video apps.
            </p>
            <p className="text-[var(--color-gray-dark)] mt-4">
              Empowered telecom operators to <strong>synchronise feature releases across all TV brands and OS</strong> (Tizen, WebOS, AppleTV, AndroidTV, GTV, mobile, tablet, gameconsole)
            </p>
          </Card>

          <Card className="rounded-[20px] p-8 bg-[var(--color-gray-light)]">
            <h4 className="font-sans font-bold text-xl mb-4">Advanced Design System</h4>
            <p className="text-[var(--color-gray-dark)]">
              <strong>Advanced distributed design system</strong> with Figma fully synchronised with low level code
            </p>
            <p className="text-[var(--color-gray-dark)] mt-4">
              Automated online documentation with all white label assets available online
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
