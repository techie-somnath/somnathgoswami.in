import { ScrollReveal } from '@/components/portfolio/scroll-reveal'
import { CandlestickBackdrop } from '@/components/portfolio/candlestick-backdrop'

const TOPICS = [
  {
    number: '01',
    title: 'Repetition of Structure',
    description:
      'Using the fractal nature of markets to anticipate recurring structural behavior across timeframes.',
  },
  {
    number: '02',
    title: 'MMC — Mirror Market Concept',
    description:
      'Reading mirrored price behavior to compare market structure, reactions, and potential continuation.',
  },
  {
    number: '03',
    title: 'Chart Patterns',
    description:
      'Evaluating recurring formations through their location, context, and likely structural outcome.',
  },
  {
    number: '04',
    title: 'Risk Management',
    description:
      'Defining invalidation, protecting capital, and separating a good process from a single outcome.',
  },
  {
    number: '05',
    title: 'Candlestick Anatomy & Psychology',
    description:
      'Interpreting candle behavior to read sentiment, exhaustion, and institutional footprints.',
  },
  {
    number: '06',
    title: 'Market Structure & Mapping',
    description:
      'Mapping multi-timeframe zones, structural shifts, and directional bias with a repeatable framework.',
  },
]

export function AnalysisSection() {
  return (
    <section
      id="analysis"
      className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-40"
    >
      <CandlestickBackdrop className="absolute inset-0 z-0 h-full w-full" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Independent chart analysis — mapping structure, liquidity, and
              sentiment across timeframes
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
            As an independent Chart Analyst, I conduct in-depth technical
            evaluations of financial markets, focusing on market structure
            repetition and candlestick analysis rather than indicator-heavy
            strategies. I map multi-timeframe structures, interpret market
            sentiment, and isolate critical liquidity to distinguish genuine
            structural breaks from market fakeouts.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, i) => (
            <ScrollReveal key={topic.number} delay={i * 70}>
              <div className="group relative h-full overflow-hidden bg-background p-8 pb-10 transition-all duration-300 hover:-translate-y-1 hover:bg-card">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-chart-purple transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
