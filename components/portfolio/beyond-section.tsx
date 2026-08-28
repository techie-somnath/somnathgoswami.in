import Link from 'next/link'
import { ScrollReveal } from '@/components/portfolio/scroll-reveal'
import { ACTIVITIES } from '@/lib/activities'

const ACTIVITY_CLASS_NAMES = [
  'sm:col-span-2',
  '',
  '',
  '',
  '',
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
              key={activity.slug}
              delay={i * 60}
              className={ACTIVITY_CLASS_NAMES[i]}
            >
              <Link
                href={`/beyond/${activity.slug}`}
                className="group block h-full rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label={`Read more about ${activity.title}`}
              >
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                  {activity.description}
                </p>
                <span className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-[0.2em] text-dim transition-colors group-hover:text-primary">
                  View activity
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
