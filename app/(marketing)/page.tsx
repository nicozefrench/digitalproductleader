import HeroSection from '@/components/sections/hero'
import BlogCarousel from '@/components/sections/blog-carousel'
import IndustriesNav from '@/components/sections/industries-nav'
import ServicesSection from '@/components/sections/services'
import QuoteSection from '@/components/sections/quote'
import CaseStudyWiztivi from '@/components/sections/case-study-wiztivi'
import CaseStudyLG from '@/components/sections/case-study-lg'
import CaseStudyTechnicolor from '@/components/sections/case-study-technicolor'
import CaseStudyDeltadore from '@/components/sections/case-study-deltadore'
import CaseStudyOnsen from '@/components/sections/case-study-onsen'
import CaseStudyUnivadis from '@/components/sections/case-study-univadis'
import CrossIndustry from '@/components/sections/cross-industry'
import ContactSection from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BlogCarousel />
      <IndustriesNav />
      <ServicesSection />

      {/* Media & Telco Case Studies */}
      <QuoteSection
        id="mediatelco-txt"
        quote="You Don't Need More Ideas, You Need the Right Navigator."
      />
      <CaseStudyWiztivi />
      <CaseStudyLG />
      <CaseStudyTechnicolor />

      {/* Smart Home Case Studies */}
      <QuoteSection
        id="smarthome-txt"
        quote="I navigate companies' product innovation beyond the horizon to anchor your nextGen products and services on solid grounds for market impact."
      />
      <CaseStudyDeltadore />
      <CaseStudyOnsen />

      {/* Digital Pharma */}
      <QuoteSection
        id="pharma-txt"
        quote="The Real Risk Isn't Innovation, It's Standing Still."
      />
      <CaseStudyUnivadis />

      {/* Cross-Industry */}
      <QuoteSection
        id="crossindustry-txt"
        quote="Disrupt or Be Disrupted"
      />
      <CrossIndustry />

      {/* Final Quote */}
      <QuoteSection
        quote="The future belongs to those who prepare for it today."
        attribution="Malcolm X"
        variant="centered"
      />

      <ContactSection />
    </>
  )
}
