import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
import { PricingSection } from "../components/pricing-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { FAQSection } from "../components/faq-section"
import { Footer } from "../components/footer"
import { FloatingParticles } from "../components/floating-particles"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
