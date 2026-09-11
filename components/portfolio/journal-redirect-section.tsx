'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/portfolio/scroll-reveal'

const JOURNAL_OPTIONS = [
  {
    slug: 'practice-journal',
    title: 'Practice Trading Journal',
    description:
      'Document learning trades, test strategies, and track progress in a low-pressure environment.',
  },
  {
    slug: 'stocks-journal',
    title: 'Stock Analysis',
    description:
      'Log equity trades with detailed technical analysis, before/after charts, and performance metrics.',
  },
  {
    slug: 'crypto-forex-journal',
    title: 'Crypto & Forex Analysis',
    description:
      'Track digital asset and forex trades with candlestick analysis, risk-reward data, and execution quality.',
  },
]

export function JournalRedirectSection() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Trading Analysis & Performance
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Trading Journals
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            A comprehensive archive of my trading journey across multiple asset classes, with detailed trade logs, visual documentation, and performance analysis.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {JOURNAL_OPTIONS.map((option, i) => (
            <ScrollReveal key={option.slug} delay={i * 70} className="h-full">
              <Link
                href={`/journal/${option.slug}`}
                className="group relative block h-full overflow-hidden bg-background p-8 pb-10 transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                <div className="relative z-10">
                  <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {option.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                    {option.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-mono text-xs uppercase tracking-wider">Open</span>
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-chart-purple transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
