import { HeaderProfessional } from '@/components/header-professional'
import { HeroPremium } from '@/components/hero-premium'
import { ServicesLimited } from '@/components/services-limited'
import { FleetLimited } from '@/components/fleet-limited'
import { BookingSectionPremium } from '@/components/booking-section-premium'
import { TestimonialsPremium } from '@/components/testimonials-premium'
import { FooterProfessional } from '@/components/footer-professional'

export default function Page() {
  return (
    <>
      <HeaderProfessional />
      <main>
        <HeroPremium />
        <ServicesLimited />
        <FleetLimited />
        <BookingSectionPremium />
        <TestimonialsPremium />
      </main>
      <FooterProfessional />
    </>
  )
}
