"use client"

import { motion } from "motion/react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-center mb-8">
            About Sonder
          </h1>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-xl text-muted-foreground text-center mb-12">
              Sonder is more than just a note-taking app. It&apos;s a digital hub
              designed to bring clarity to your chaos and depth to your workflow.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that ideas are fragile and deserve the best tools to flourish. 
                  Sonder was built from the ground up to be the fastest, most intuitive way 
                  to capture, connect, and capitalize on your best thoughts.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Sonder?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With built-in AI summaries, cross-platform synchronization, and a 
                  minimalist interface that disappears when you&apos;re focused, Sonder 
                  is the ultimate companion for modern thinkers and builders.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
