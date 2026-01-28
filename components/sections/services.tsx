import Link from 'next/link'

const services = [
  "End-to-end product leadership",
  "Ideation, définition & strategic roadmap",
  "Feasibility, design & action plan",
  "Phase driven dev & MVP release",
  "Feature rollout & optimisation",
  "UXD capacities & leadership",
  "AI-driven product design processes"
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] sm:text-[1.25rem] text-[var(--color-dark)] text-center mb-12">
          I solve your product challenges, bridging strategy to execution
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href="#services"
              className="group p-6 bg-[var(--color-gray-light)] hover:bg-[var(--color-primary-50)] rounded-[15px] transition-all duration-300 text-center"
            >
              <p className="text-[var(--color-dark)] font-semibold group-hover:text-[var(--color-primary-600)] transition-colors">
                {service}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
