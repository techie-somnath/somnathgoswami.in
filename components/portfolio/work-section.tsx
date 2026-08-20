import { ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from '@/components/portfolio/scroll-reveal'

const ENTRIES = [
  {
    role: 'Consultant',
    org: 'CG Infinity',
    period: '2023 — Present',
    description:
      'Backend architecture on Azure Functions, integrating 5+ third-party systems with Salesforce. Built CI/CD pipelines and mentored 8–10 developers.',
    stack: [
      '.NET Core',
      'Azure Functions',
      'Azure DevOps',
      'SQL Server',
      'Salesforce APIs',
    ],
  },
  {
    role: 'Personal Project',
    org: 'StoreIt',
    period: '',
    description:
      'Passwordless cloud storage app using email OTP authentication.',
    stack: ['Next.js', 'Appwrite', 'Tailwind CSS', 'ShadCN'],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
            Work
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where the discipline started.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Engineering taught me how to sit with a system until it made
            sense — the same instinct I now point at charts.
          </p>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-border">
          {ENTRIES.map((entry, i) => (
            <ScrollReveal key={entry.org} delay={i * 100}>
              <div className="grid gap-4 py-8 sm:grid-cols-[1fr_2fr] sm:gap-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {entry.org}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-dim">
                    {entry.role}
                    {entry.period ? ` · ${entry.period}` : ''}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {entry.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={220}>
          <a
            href="/resume.pdf" target="_blank" rel="noopener noreferrer"
            className="mt-14 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
          >
            View Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
