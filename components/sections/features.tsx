"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import Image from "next/image"
import { Pencil, Compass, Zap } from "lucide-react"

const features = [
  {
    icon: Pencil,
    title: "Smart Note Capture",
    description:
      "Quickly jot down ideas, tasks, and reminders without losing flow. Add tags, folders, or checklists to keep everything in order.",
  },
  {
    icon: Compass,
    title: "Adaptive Organization",
    description:
      "Your notes grow with you. Use smart search, categories, and links to connect ideas and find what you need instantly.",
  },
  {
    icon: Zap,
    title: "Simple & Flexible",
    description:
      "A tool that fits your style — whether for study, work, or personal journaling. Take notes your way, on the fly, and access them any time.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            earned by users today
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 max-w-lg font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          <span className="text-balance">
            Smarter Notes. One Simple Space to Capture, Organize & Remember
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Simplify the way you take notes. Write down your thoughts instantly,
          organize them into clear categories, and find anything in seconds.
        </motion.p>

        {/* Content Grid */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-secondary"
          >
            <Image
              src="/images/features-box.jpg?v=3"
              alt="Open box with floating notes, checklists, and documents representing organized note-taking"
              width={600}
              height={450}
              unoptimized
              className="w-full object-cover"
            />
          </motion.div>

          {/* Feature List */}
          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
