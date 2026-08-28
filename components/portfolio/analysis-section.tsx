import { ScrollReveal } from '@/components/portfolio/scroll-reveal'
import { CandlestickBackdrop } from '@/components/portfolio/candlestick-backdrop'

const TOPICS = [
  {
    number: '01',
    title: 'Technical Analysis',
    description:
      'A price-first approach to reading markets through structure, momentum, and context.',
  },
  {
    number: '02',
    title: 'Trend Analysis',
    description:
      'Mapping directional bias, trend strength, and the conditions that signal a shift.',
  },
  {
    number: '03',
    title: 'Repetition of Structure',
    description:
      'Using the fractal nature of markets to anticipate recurring structural behavior across timeframes.',
  },
  {
    number: '04',
    title: 'Chart Patterns',
    description:
      'Evaluating recurring formations through their location, context, and likely structural outcome.',
  },
  {
    number: '05',
    title: 'Risk Management',
    description:
      'Defining invalidation, protecting capital, and separating a good process from a single outcome.',
  },
  {
    number: '06',
    title: 'MMC',
    description:
      'Studying momentum, market conditions, and confirmation within a broader structural read.',
  },
  {
    number: '07',
    title: 'Candlestick Anatomy & Psychology',
    description:
      'Interpreting candle behavior to read sentiment, exhaustion, and institutional footprints.',
  },
  {
    number: '08',
    title: 'Liquidity Concepts',
    description:
      'Locating buy-side and sell-side liquidity to distinguish genuine breaks from engineered moves.',
  },
  {
    number: '09',
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
