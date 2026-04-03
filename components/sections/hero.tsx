"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import {
  Bold,
  Italic,
  List,
  AlignLeft,
  AlignCenter,
  Moon,
  Sun,
  Users,
  Underline,
  Strikethrough,
  ChevronDown,
} from "lucide-react"

type StylePreset = {
  label: string
  fontClass: string
  sizeClass: string
  trackingClass: string
  description: string
}

const stylePresets: StylePreset[] = [
  {
    label: "Style 01",
    fontClass: "font-sans",
    sizeClass: "text-sm md:text-base",
    trackingClass: "tracking-normal",
    description: "Clean Sans",
  },
  {
    label: "Style 02",
    fontClass: "font-display",
    sizeClass: "text-base md:text-lg",
    trackingClass: "tracking-tight",
    description: "Display",
  },
  {
    label: "Style 03",
    fontClass: "font-mono",
    sizeClass: "text-xs md:text-sm",
    trackingClass: "tracking-wide",
    description: "Monospace",
  },
  {
    label: "Style 04",
    fontClass: "font-serif",
    sizeClass: "text-sm md:text-base",
    trackingClass: "tracking-normal",
    description: "Serif",
  },
  {
    label: "Style 05",
    fontClass: "font-sans",
    sizeClass: "text-base md:text-lg",
    trackingClass: "tracking-widest uppercase",
    description: "Uppercase",
  },
]

export function Hero() {
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)
  const [isList, setIsList] = useState(false)
  const [alignment, setAlignment] = useState<"left" | "center">("center")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeStyle, setActiveStyle] = useState(0)
  const [showStyleMenu, setShowStyleMenu] = useState(false)

  const currentStyle = stylePresets[activeStyle]

  const subtitleText =
    "Combine note-taking, idea tracking, and daily planning in one smart notebook — ready whenever inspiration hits."

  return (
    <section className="px-4 pt-24 pb-0 md:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-foreground">
        {/* Mountain Image - positioned at bottom */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-mountains.jpg?v=2"
            alt=""
            fill
            className="object-cover object-bottom opacity-100"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-40 text-center md:pt-20 md:pb-52 lg:pt-24 lg:pb-64">
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <Users className="h-3.5 w-3.5 text-primary-foreground/70" />
            <span className="text-xs font-medium text-primary-foreground/70">
              +100K active users
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
          >
            <span className="text-balance">
              Ideas. Notes. Clarity.
              <br />
              Wherever your mind goes.
            </span>
          </motion.h1>

          {/* Highlighted Subheadline - looks like selected text in an editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mx-auto mt-6 max-w-xl transition-all duration-300 ${
              isList ? "list-item list-inside list-disc" : ""
            } ${alignment === "left" ? "text-left" : "text-center"}`}
          >
            <span
              className={`leading-loose text-primary-foreground/80 transition-all duration-300 [box-decoration-break:clone] bg-primary-foreground/15 px-1.5 py-0.5 rounded-sm ${currentStyle.fontClass} ${currentStyle.sizeClass} ${currentStyle.trackingClass} ${
                isBold ? "font-bold" : "font-normal"
              } ${isItalic ? "italic" : "not-italic"} ${
                isUnderline ? "underline decoration-primary-foreground/40 underline-offset-4" : "no-underline"
              } ${isStrikethrough ? "line-through" : ""}`}
            >
              {subtitleText}
            </span>
          </motion.div>

          {/* Interactive Toolbar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mx-auto mt-8 flex items-center gap-0.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 backdrop-blur-sm md:gap-1 md:px-5 md:py-2.5"
          >
            <div className="relative mr-2">
              <button
                onClick={() => setShowStyleMenu(!showStyleMenu)}
                aria-expanded={showStyleMenu}
                aria-haspopup="listbox"
                className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-semibold text-primary-foreground/90">
                    {currentStyle.label}
                  </span>
                  <span className="text-[9px] text-primary-foreground/50">
                    {currentStyle.description}
                  </span>
                </span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showStyleMenu ? "rotate-180" : ""}`} />
              </button>

              {showStyleMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  role="listbox"
                  className="absolute bottom-full left-0 mb-2 w-40 overflow-hidden rounded-xl border border-primary-foreground/15 bg-foreground/95 shadow-2xl backdrop-blur-xl"
                >
                  {stylePresets.map((preset, i) => (
                    <button
                      key={preset.label}
                      role="option"
                      aria-selected={i === activeStyle}
                      onClick={() => {
                        setActiveStyle(i)
                        setShowStyleMenu(false)
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-xs transition-colors ${
                        i === activeStyle
                          ? "bg-primary-foreground/15 text-primary-foreground"
                          : "text-primary-foreground/60 hover:bg-primary-foreground/10 hover:text-primary-foreground/90"
                      }`}
                    >
                      <span className="flex flex-col leading-tight">
                        <span className="font-medium">{preset.label}</span>
                        <span className={`text-[10px] text-primary-foreground/40 ${preset.fontClass}`}>
                          {preset.description}
                        </span>
                      </span>
                      {i === activeStyle && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            <span className="mx-1 h-4 w-px bg-primary-foreground/15" aria-hidden="true" />

            {/* Wave / Underline */}
            <ToolbarButton
              active={isUnderline}
              onClick={() => setIsUnderline(!isUnderline)}
              label={isUnderline ? "Remove underline" : "Add underline"}
            >
              <Underline className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* Bold */}
            <ToolbarButton
              active={isBold}
              onClick={() => setIsBold(!isBold)}
              label={isBold ? "Remove bold" : "Apply bold"}
            >
              <Bold className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* Italic */}
            <ToolbarButton
              active={isItalic}
              onClick={() => setIsItalic(!isItalic)}
              label={isItalic ? "Remove italic" : "Apply italic"}
            >
              <Italic className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* Strikethrough */}
            <ToolbarButton
              active={isStrikethrough}
              onClick={() => setIsStrikethrough(!isStrikethrough)}
              label={isStrikethrough ? "Remove strikethrough" : "Apply strikethrough"}
            >
              <Strikethrough className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* List */}
            <ToolbarButton
              active={isList}
              onClick={() => setIsList(!isList)}
              label={isList ? "Remove list" : "Apply list"}
            >
              <List className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* Alignment toggle */}
            <ToolbarButton
              active={alignment === "left"}
              onClick={() => setAlignment(alignment === "center" ? "left" : "center")}
              label={alignment === "center" ? "Align left" : "Align center"}
            >
              {alignment === "left" ? (
                <AlignLeft className="h-3.5 w-3.5" />
              ) : (
                <AlignCenter className="h-3.5 w-3.5" />
              )}
            </ToolbarButton>

            <span className="mx-1 h-4 w-px bg-primary-foreground/15" aria-hidden="true" />

            {/* Dark mode */}
            <ToolbarButton
              active={isDarkMode}
              onClick={() => setIsDarkMode(true)}
              label="Dark mode"
            >
              <Moon className="h-3.5 w-3.5" />
            </ToolbarButton>

            {/* Light mode */}
            <ToolbarButton
              active={!isDarkMode}
              onClick={() => setIsDarkMode(false)}
              label="Light mode"
            >
              <Sun className="h-3.5 w-3.5" />
            </ToolbarButton>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#cta"
              className="rounded-full bg-primary-foreground px-7 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Download for Playstore
            </a>
            <a
              href="#cta"
              className="rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground/60"
            >
              Start Free Trial &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ToolbarButton({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean
  onClick: () => void
  label: string
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={`rounded-md p-1.5 transition-all duration-200 ${
        active
          ? "bg-primary-foreground/20 text-primary-foreground shadow-sm"
          : "text-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground/80"
      }`}
    >
      {children}
    </button>
  )
}
