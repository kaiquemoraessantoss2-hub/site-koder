import { useCallback, useState } from 'react'
import { LoadingIntro, type IntroPhase } from './components/ui/LoadingIntro'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { MobileExperience } from './components/sections/MobileExperience'
import { ProjectShowcase } from './components/sections/ProjectShowcase'
import { HowItWorks } from './components/sections/HowItWorks'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { CTA } from './components/sections/CTA'
import { WhatsAppButton } from './components/ui/WhatsAppButton'

function App() {
  const [intro, setIntro] = useState<IntroPhase>('loading')
  const reveal = useCallback(() => setIntro('revealing'), [])
  const complete = useCallback(() => setIntro('done'), [])
  return (
    <>
    <LoadingIntro phase={intro} onReady={reveal} onComplete={complete} />
    <div className={`k-site-content min-h-screen ${intro === 'loading' ? 'is-loading' : 'is-ready'}`} aria-hidden={intro === 'loading' ? true : undefined} style={{ background: 'var(--bg-main)' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MobileExperience />
        <ProjectShowcase />
        <HowItWorks />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
    </>
  )
}

export default App
