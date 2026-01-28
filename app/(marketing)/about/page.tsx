export default function AboutPage() {
  return (
    <div className="py-15 md:py-12 sm:py-10">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="font-serif font-bold text-[3.5rem] md:text-[2.5rem] sm:text-[2rem] text-[var(--color-dark)] mb-6">
            About Nicolas Limare
          </h1>
          <p className="text-[var(--color-gray-dark)] text-lg md:text-base max-w-3xl leading-relaxed">
            UX Design Innovation Leadership
          </p>
        </div>

        {/* Bio Content */}
        <div className="max-w-4xl space-y-6 text-[var(--color-gray-dark)] leading-relaxed">
          <p className="text-xl md:text-lg">
            As a Chief Product Officer (CPO), my mission is to transform innovative ideas into valuable digital products that integrate seamlessly into your offerings, ensuring smooth execution from strategy and definition to development and scaling.
          </p>

          <p>
            With two decades of experience pioneering innovation across Media & Telco, Smart Home, and Digital Pharma, I navigate companies&apos; product innovation and transformation beyond the horizon to anchor next-generation digital products and services on solid ground for market impact.
          </p>

          <h2 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mt-12 mb-6">
            Track Record
          </h2>

          <ul className="space-y-3 list-disc list-inside">
            <li>Led digital transformation and SaaS business model shifts</li>
            <li>Managed P&Ls and budgets up to $10M</li>
            <li>Delivered products for global brands: Vodafone, Orange, LG, Canal+, Merck/MSD</li>
            <li>Founded and scaled UX teams from 2 to 30+ experts</li>
            <li>CES Innovation Award winner</li>
            <li>Drove NPS from 43 to 67 for healthcare digital ecosystem</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: "About Nicolas Limare - UX Design Innovation Leadership | Digital Product Leader",
  description: "Two decades pioneering innovation across Media & Telco, Smart Home, and Digital Pharma. Expert in digital product leadership and strategic UX design.",
}
