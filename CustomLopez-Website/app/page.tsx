import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TrustIndicators from '@/components/sections/TrustIndicators';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TrustIndicators />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </>
  )
}