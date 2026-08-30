import { RotatingRole } from '@/components/portfolio/rotating-role'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      {/* faint background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, white 40%, transparent 100%)',
        }}
      />

      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mt-6 font-heading text-[12vw] font-extrabold uppercase leading-[0.88] tracking-[-0.02em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
          <span className="block text-foreground">Somnath</span>
          <span className="block text-muted-foreground">Goswami</span>
        </h1>

        <div className="mt-8 h-6">
          <RotatingRole />
        </div>

        <p className="mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
          Full-stack engineer by trade. Technical analyst by growing
          obsession. Four years building production systems — now spending my
          early mornings studying markets, with one goal: doing it full-time.
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-dim transition-colors hover:text-muted-foreground"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="relative h-8 w-px overflow-hidden bg-hairline">
          <span className="absolute inset-x-0 top-0 h-3 w-px animate-[scroll-hint_1.8s_ease-in-out_infinite] bg-primary" />
        </span>
      </a>

      <style>{`
        @keyframes scroll-hint {
          0% { transform: translateY(-100%); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
