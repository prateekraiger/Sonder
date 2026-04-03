import { StructuredData } from "@/components/structured-data"
import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { NotesPreview } from "@/components/sections/notes-preview"
import { Platforms } from "@/components/sections/platforms"
import { Pricing } from "@/components/sections/pricing"
import { Features } from "@/components/sections/features"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Hero />
        <TrustBar />
        <NotesPreview />
        <Platforms />
        <Pricing />
        <Features />
        <CTA />
      </main>
    </>
  )
}
