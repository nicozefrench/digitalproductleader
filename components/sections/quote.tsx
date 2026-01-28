interface QuoteSectionProps {
  quote: string
  attribution?: string
  variant?: 'default' | 'centered'
  id?: string
}

export default function QuoteSection({
  quote,
  attribution,
  variant = 'default',
  id,
}: QuoteSectionProps) {
  return (
    <section
      id={id}
      className={`py-15 md:py-12 sm:py-10 bg-[var(--color-gray-light)] ${
        variant === 'centered' ? 'text-center' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4">
        <div className={`max-w-4xl ${variant === 'centered' ? 'mx-auto' : ''}`}>
          <h3 className="font-serif font-bold text-[2rem] md:text-[1.5rem] sm:text-[1.25rem] text-[var(--color-dark)] leading-snug">
            &ldquo;{quote}&rdquo;
          </h3>
          {attribution && (
            <p className="mt-4 text-[var(--color-gray)] text-base md:text-sm font-serif italic">
              — {attribution}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
