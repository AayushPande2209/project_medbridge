import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProblemSection from "@/components/problem-section"
import HowItWorks from "@/components/how-it-works"
import ImpactMetrics from "@/components/impact-metrics"
import PartnersSection from "@/components/partners-section"
import QuarterlyReports from "@/components/quarterly-reports"
import PartnershipForm from "@/components/partnership-form"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <ImpactMetrics />
      <PartnersSection />
      <QuarterlyReports />
      <PartnershipForm />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
