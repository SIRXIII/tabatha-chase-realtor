import { Header } from "@/components/sections/Header"
import { Hero } from "@/components/sections/Hero"
import { FeaturedProperties } from "@/components/sections/FeaturedProperties"
import { Stats } from "@/components/sections/Stats"
import QuickAccess from "@/components/sections/QuickAccess"
import { About } from "@/components/sections/About"
import { Communities } from "@/components/sections/Communities"
import { Testimonials } from "@/components/sections/Testimonials"
import { Team } from "@/components/sections/Team"
import { Newsletter } from "@/components/sections/Newsletter"
import { CtaBand } from "@/components/sections/CtaBand"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProperties />
        <Stats />
        <QuickAccess />
        <About />
        <Communities />
        <Testimonials />
        <Team />
        <Newsletter />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
