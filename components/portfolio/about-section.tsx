import { ScrollReveal } from '@/components/portfolio/scroll-reveal'

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
            About
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-8 space-y-6 text-center text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
            <p>
              I like sitting with a confusing problem until it becomes
              simple. That&apos;s true whether it&apos;s a system that
              won&apos;t scale or a chart that doesn&apos;t make sense yet —
              give it enough patient attention and the structure underneath
              starts to show itself.
            </p>
            <p>
              I write software because it turns ideas into something real.
              But I&apos;ll be direct about where my attention actually
              goes: coding pays the bills. Markets are where my curiosity
              actually lives. I read charts in the mornings, study price
              action in the evenings, and I&apos;m working toward making
              analysis the full-time job.
            </p>
            <p className="text-foreground">
              Learn something, apply it, repeat.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
