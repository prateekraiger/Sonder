import { PageHero } from "@/components/sections/page-hero"
import { Features } from "@/components/sections/features"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Features — Powerful Tools for Deep Thinkers',
  description: 'Explore the tools that make Sonder the ultimate workspace for your ideas.',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        badge="Product Power"
        title="Tools for Your Best Work"
        subtitle="Every feature in Sonder is designed to help you focus on what matters most: your ideas."
      />
      
      <div className="border-y border-border/50 bg-muted/30">
        <Features />
      </div>

      {/* Extra Detail Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Encrypted by Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your data is yours alone. We use end-to-end encryption to ensure 
                your private thoughts stay private, across all your devices.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Zero lag, zero friction. Sonder is built on a high-performance 
                architecture to ensure your notes load in under 100ms.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">AI Companion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Summarize long meetings, extract action items, and find links 
                between disparate ideas with our integrated AI assistant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
