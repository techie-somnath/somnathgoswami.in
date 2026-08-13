import { ScrollReveal } from '@/components/portfolio/scroll-reveal'

const ACTIVITIES = [
  {
    title: 'Strength Training',
    description: 'Progressive overload, tracked and repeated — no shortcuts.',
    className: 'sm:col-span-2',
  },
  {
    title: 'Running',
    description: 'Kilometers add up quietly. Consistency over intensity.',
    className: '',
  },
  {
    title: 'HYROX',
    description: 'Training for a sport that punishes inconsistency.',
    className: '',
  },
  {
    title: 'Athletics',
    description: 'The discipline of showing up on the days you don\u2019t want to.',
    className: '',
  },
  {
    title: 'Endurance',
    description: 'Long efforts that reward patience, not bursts.',
    className: '',
  },
  {
    title: 'Trekking & Outdoors',
    description: 'Slow miles, clear head — the same reset a good chart review gives me.',
    className: 'sm:col-span-2',
  },
]

export function BeyondSection() {
  return (
    <section id="beyond" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
            Beyond Coding
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Discipline shows up outside the screen too.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <ScrollReveal
              key={activity.title}
              delay={i * 60}
              className={activity.className}
            >
              <div className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
