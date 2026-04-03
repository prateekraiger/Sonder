"use client"

import { motion } from "motion/react"
import { FileText, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Visual Side */}
      <div className="hidden lg:block relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground to-muted/20 opacity-90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Welcome Back to Sonder</h2>
            <p className="text-primary-foreground/60 max-w-sm text-lg leading-relaxed">
              Your digital notebook is waiting. Capture your next big idea today.
            </p>
          </motion.div>
          <div className="h-px w-20 bg-primary-foreground/20" />
        </div>
      </div>

      {/* Form Side */}
      <div className="flex items-center justify-center p-8 sm:p-12 lg:p-20">
        <div className="w-full max-w-sm">
          <Link href="/" className="mb-12 inline-flex items-center gap-2">
            <FileText className="h-6 w-6 text-foreground" />
            <span className="font-display text-xl font-bold tracking-tight text-foreground">Sonder</span>
          </Link>

          <header className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Sign in</h1>
            <p className="text-muted-foreground text-sm">Enter your credentials to access your notes.</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email address</label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="pass" className="text-sm font-medium">Password</label>
                  <button type="button" className="text-xs text-muted-foreground hover:text-foreground">Forgot password?</button>
                </div>
                <input 
                  id="pass" 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-foreground focus:outline-none transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <footer className="mt-12 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button className="font-semibold text-foreground hover:underline decoration-offset-4">Sign up for free</button>
          </footer>
        </div>
      </div>
    </main>
  )
}
