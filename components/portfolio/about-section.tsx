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
              I like sitting with a confusing problem until it becomes simple. With 4 years of experience engineering robust full-stack systems, I build software that scales cleanly and turns complex ideas into reality. But code is only half the equation. Where my raw curiosity lives is in the markets. I spend my late nights mapping multi-timeframe structures and studying repetition in markets, decoding liquidity pools and market psychology long before the charts close. Whether I'm architecting code or mapping market structure, the mission is always the same: strip away the noise until the underlying pattern reveals itself.
            </p>
            <p>
              When I'm not architecting systems, you'll find me analyzing market trends and deep-diving into financial charts. I'm a hybrid athlete, so I also spend my evenings running, cycling, and gym — often all in the same day.
            </p>
            <p className="text-foreground">
              Build systems. Read the charts. Repeat.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
