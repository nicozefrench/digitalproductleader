export default function CrossIndustry() {
  const experiences = [
    {
      company: "Axance",
      period: "2006–2010",
      role: "Owner & Director of Digital Strategy & UX",
      highlights: [
        "Built and scaled a user experience strategy consultancy",
        "Expanding the team from 2 to 30 experts",
        "Delivering UX strategy and design services for La Redoute, Castorama, HSBC, Groupama, eBay, TV5, Meteo France, MY TF1"
      ]
    },
    {
      company: "Opodo",
      period: "2001–2004",
      role: "Director of Product Design",
      highlights: [
        "Led the creation, implementation, and European launch across the UK, France, and Germany",
        "Shaping the brand, content strategy, UX, and dynamic packaging"
      ]
    },
    {
      company: "Sapient",
      period: "2000–2005",
      role: "Manager of User Experience",
      highlights: [
        "Spearheaded global UX and digital strategy projects across the UK, USA, India, and Japan",
        "Leading online travel and communication industry transformations",
        "Director of CX Operations for Opodo",
        "Clients: Hilton International, British Airways, Avis, and Vodafone"
      ]
    },
    {
      company: "IBM Europe",
      period: "1997–2000",
      role: "Creative Director",
      highlights: [
        "Led the first wave of internet transformation for media and online brands",
        "Built the UX design studio, defined digital brand strategies",
        "Drove the transition of major news outlets like La Tribune and Le Figaro into subscription-based online platforms"
      ]
    }
  ]

  return (
    <section id="crossindustry" className="py-15 md:py-12 sm:py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] text-[var(--color-dark)] mb-12 text-center">
          Powering Digital Evolution Across Sectors
        </h3>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[var(--color-primary-600)] pl-8 md:pl-6">
              <div className="flex justify-between items-start mb-4 md:flex-col md:gap-2">
                <div>
                  <h4 className="font-sans font-bold text-2xl md:text-xl text-[var(--color-dark)]">
                    {exp.company}
                  </h4>
                  <p className="text-[var(--color-gray)] mt-1">{exp.role}</p>
                </div>
                <span className="text-[var(--color-gray)] font-semibold">{exp.period}</span>
              </div>

              <ul className="space-y-2 text-[var(--color-gray-dark)] leading-relaxed">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[var(--color-primary-600)] font-bold">•</span>
                    <span dangerouslySetInnerHTML={{ __html: highlight }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
