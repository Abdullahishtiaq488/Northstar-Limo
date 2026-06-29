import { HeaderProfessional } from '@/components/header-professional'
import { HeroPremium } from '@/components/hero-premium'
import { ServicesPremium } from '@/components/services-premium'
import { FleetPremium } from '@/components/fleet-premium'
import { BookingSectionPremium } from '@/components/booking-section-premium'
import { TestimonialsPremium } from '@/components/testimonials-premium'
import { FooterProfessional } from '@/components/footer-professional'

export default function Page() {
  return (
    <>
      <HeaderProfessional />
      <main className="pt-20">
        <HeroPremium />
        <ServicesPremium />
        <FleetPremium />
        <BookingSectionPremium />
        <TestimonialsPremium />
      </main>
      <FooterProfessional />
    </>
  )
}
