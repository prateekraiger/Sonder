"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import {
  Bold,
  Italic,
  List,
  AlignLeft,
  Moon,
  Sun,
  Sparkles,
  Save,
} from "lucide-react"

export function NotesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="features" aria-labelledby="features-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 id="features-heading" className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            <span className="text-balance">Notes that work the way you think.</span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Notes shouldn&apos;t feel messy or scattered. With Sonder, every
            thought flows into an organized system that adapts to your style and
            keeps you focused.
          </p>
        </motion.div>

        {/* Editor Mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
        >
          {/* Editor Toolbar */}
          <div className="flex items-center justify-between border-b border-border px-5 py-3">
            <div className="flex items-center gap-1">
              <span className="mr-3 rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                Style 01
              </span>
              <span className="h-4 w-px bg-border" />
              <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary" aria-label="Wave">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12c2-3 4-6 6-6s4 3 6 6 4 6 6 6 4-3 6-6" /></svg>
              </button>
              <button className="rounded-md p-1.5 text-foreground transition-colors hover:bg-secondary" aria-label="Bold">
                <Bold className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary" aria-label="Italic">
                <Italic className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary" aria-label="List">
                <List className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary" aria-label="Align">
                <AlignLeft className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button className="rounded-md p-1.5 text-foreground transition-colors hover:bg-secondary" aria-label="Dark mode">
                <Moon className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary" aria-label="Light mode">
                <Sun className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Editor Content */}
          <div className="px-6 py-6 md:px-10 md:py-8">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus.{" "}
              <span className="text-foreground underline underline-offset-2">
                Contextual collaboration tools
              </span>{" "}
              allow teams to work together seamlessly across any project.
            </p>
          </div>

          {/* Editor Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-border px-5 py-3">
            <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <Sparkles className="h-3.5 w-3.5" />
              AI summary
            </button>
            <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              <Save className="h-3.5 w-3.5" />
              Save
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
