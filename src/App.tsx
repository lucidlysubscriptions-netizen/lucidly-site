import { useState } from 'react'
import { RiskBanner } from './sections/RiskBanner'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Frame } from './sections/Frame'
import { Strategies } from './sections/Strategies'
import { ExecutionEngine } from './sections/ExecutionEngine'
import { Why } from './sections/Why'
import { Transparency } from './sections/Transparency'
import { BuiltFor } from './sections/BuiltFor'
import { Risk } from './sections/Risk'
import { Research } from './sections/Research'
import { Backed } from './sections/Backed'
import { FAQ } from './sections/FAQ'
import { AllocatorCTA } from './sections/AllocatorCTA'
import { Footer } from './sections/Footer'

export function App() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <>
      <RiskBanner onDismiss={() => setDismissed(true)} dismissed={dismissed} />
      <Nav />
      <main>
        <Hero />
        <Frame />
        <Strategies />
        <ExecutionEngine />
        <Why />
        <Transparency />
        <BuiltFor />
        <Risk />
        <Research />
        <Backed />
        <FAQ />
        <AllocatorCTA />
      </main>
      <Footer />
    </>
  )
}
