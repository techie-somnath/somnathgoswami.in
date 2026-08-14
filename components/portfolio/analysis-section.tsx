import { ScrollReveal } from '@/components/portfolio/scroll-reveal'
import { ChartLine } from '@/components/portfolio/chart-line'

const TOPICS = [
  {
    number: '01',
    title: 'Price action',
    description:
      'Reading what the candles actually say before anything else.',
  },
  {
    number: '02',
    title: 'Market structure',
    description: 'Higher highs, lower lows, and where structure breaks.',
  },
  {
    number: '03',
    title: 'Trend analysis',
    description:
      'Direction, strength, and how long a move has been running.',
  },
  {
    number: '04',
    title: 'Technical indicators',
    description: 'Used as confirmation, never as the whole argument.',
  },
  {
    number: '05',
    title: 'Risk management',
    description:
      'Position sizing and defined invalidation — the boring essentials.',
  },
  {
    number: '06',
    title: 'Market psychology',
    description:
      'Why participants behave the way they do at key levels.',
  },
]

export function AnalysisSection() {
  return (
    <section
      id="analysis"
      className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-40"
    >
      <ChartLine className="absolute inset-x-0 top-0 -z-10 h-[420px] w-full opacity-80" />

      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Currently focused on market structure &amp; order flow —
              journaling daily
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-8 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Chart Analyst
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            This is the thing I&apos;m actually building toward. Not a
            course I took — a discipline I&apos;m in daily. Markets are a
            system with structure, feedback and human behaviour baked in,
            which is exactly the kind of thing I like taking apart slowly.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, i) => (
            <ScrollReveal key={topic.number} delay={i * 70}>
              <div className="group h-full bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-card">
                <span className="font-mono text-xs text-dim transition-colors group-hover:text-primary">
                  {topic.number}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
