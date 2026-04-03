"use client"

import { motion } from "motion/react"

interface PageHeroProps {
  title: string
  subtitle: string
  badge?: string
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {badge}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
