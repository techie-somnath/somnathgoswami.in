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
              With 4 years of full-stack engineering experience, I build robust, scalable software that turns complex ideas into reality. When I'm not architecting systems, my curiosity lives in the markets—spending late nights mapping multi-timeframe structures, liquidity pools, and price repetition.
            </p>
            <p>
              Whether debugging code or analyzing charts, my mission is simple: strip away the noise until the underlying pattern reveals itself. Outside the screen, you'll find me training as a hybrid athlete—running, cycling, and hitting the gym, often all in one day.
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
