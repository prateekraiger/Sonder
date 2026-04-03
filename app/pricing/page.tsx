import { PageHero } from "@/components/sections/page-hero"
import { Pricing } from "@/components/sections/pricing"
import { Metadata } from "next"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: 'Pricing — Plans for Every Thinker',
  description: 'Choose the plan that fits your workflow. From solo thinkers to collaborative teams.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PageHero 
        badge="Pricing"
        title="Predictable Pricing"
        subtitle="No hidden fees. No complicated tiers. Just the tools you need to stay organized."
      />
      
      <div className="bg-muted/30 border-y border-border/50">
        <Pricing />
      </div>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="space-y-4">
              <h3 className="font-bold">Can I switch plans later?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes, you can upgrade or downgrade your plan at any time from your account settings. 
                Changes take effect immediately.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Is there a group discount?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer special pricing for educational institutions and non-profits. 
                Contact our support team for more details.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">What happens if I cancel?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your data remains accessible. You'll move to the Free tier, 
                and we'll safely archive any notes above the 50-note limit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Do you offer refunds?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer a 14-day no-questions-asked refund policy for all annual plans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
