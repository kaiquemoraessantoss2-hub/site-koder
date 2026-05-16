import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { BentoFeatures } from './components/sections/BentoFeatures'
import { HowItWorks } from './components/sections/HowItWorks'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { CTA } from './components/sections/CTA'
import { WhatsAppButton } from './components/ui/WhatsAppButton'

function App() {
  return (
    <div className="bg-obsidian min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <BentoFeatures />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
