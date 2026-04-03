import { PageHero } from "@/components/sections/page-hero"
import { Platforms } from "@/components/sections/platforms"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Platforms — Accessible Across Any Device',
  description: 'Whatever device you use, Sonder is designed to be with you every step of the way.',
}

export default function PlatformsPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        badge="Omnipresent"
        title="Works on Every Screen"
        subtitle="Sonder was built to stay in sync. Start a note on your phone, refine it on your desktop, and present it from the web."
      />
      
      <div className="bg-muted/30">
        <Platforms />
      </div>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center px-6">
          <h2 className="text-3xl font-bold mb-8">Can't Find Your OS?</h2>
          <p className="text-muted-foreground mb-12">
            We're constantly expanding our reach. If your preferred platform 
            isn't listed, our responsive web app is fully featured and 
            installs as a PWA (Progressive Web App).
          </p>
          <div className="flex flex-wrap justify-center gap-6 opacity-40">
            <span className="font-mono text-xs tracking-widest uppercase">Next up: Apple Vision Pro</span>
            <span className="font-mono text-xs tracking-widest uppercase">Next up: Raspberry Pi OS</span>
          </div>
        </div>
      </section>
    </main>
  )
}
