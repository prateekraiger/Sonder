"use client"

import { motion } from "motion/react"
import { FileText } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-lg"
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-foreground" />
          <span className="font-display text-xl font-bold text-foreground">
            Sonder
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link
            href="/features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/platforms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Platforms
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-foreground transition-colors hover:text-muted-foreground sm:inline-block"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.header>
  )
}
