import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f12]">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}
