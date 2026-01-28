import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function IndustriesNav() {
  return (
    <section id="industries" className="py-15 md:py-12 sm:py-10 bg-[var(--color-gray-light)]">
      <div className="max-w-[1440px] mx-auto px-12 md:px-6 sm:px-4 text-center">
        <h5 className="font-sans font-semibold text-xl md:text-lg text-[var(--color-gray-dark)] mb-8">
          Two decades pioneering innovation and leveraging new technologies to deliver consumer and business value
        </h5>

        <div className="flex flex-wrap justify-center gap-4 md:gap-3">
          <Button
            asChild
            variant="outline"
            className="border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-full px-6 py-3"
          >
            <Link href="#mediatelco-txt">Media & telco</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-full px-6 py-3"
          >
            <Link href="#smarthome-txt">Smart home</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-full px-6 py-3"
          >
            <Link href="#pharma-txt">Digital pharma</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-[var(--color-primary-600)] text-[var(--color-primary-600)] hover:bg-[var(--color-primary-50)] rounded-full px-6 py-3"
          >
            <Link href="#crossindustry-txt">Cross-industry digital leadership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
