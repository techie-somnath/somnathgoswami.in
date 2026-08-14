import { Mail } from 'lucide-react'
import { ScrollReveal } from '@/components/portfolio/scroll-reveal'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.33 1.11 2.9.85.09-.66.34-1.11.62-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.94 1.94 0 1 0 5.27 7.39 1.94 1.94 0 0 0 5.25 3.5ZM20.44 20.5H17.06V14.86C17.06 13.4 16.53 12.41 15.24 12.41C14.28 12.41 13.72 13.05 13.47 13.67C13.38 13.89 13.36 14.19 13.36 14.5V20.5H9.98S10.03 9.4 9.98 8.5H13.36V9.98C13.83 9.28 14.68 8.27 16.5 8.27C18.77 8.27 20.44 9.75 20.44 12.93V20.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.15" cy="6.85" r="1.1" fill="currentColor" />
    </svg>
  )
}

const LINKS = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/somnath-goswami-a9690a199/', Icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/techie-somnath', Icon: GithubIcon },
  {
    label: 'Instagram',
    href: 'https://instagram.com/isomnathgoswami/?hl=en',
    Icon: InstagramIcon,
  },
  { label: 'Email', href: 'mailto:somnathgoswami949@gmail.com', Icon: Mail },
]

export function ConnectSection() {
  return (
    <section id="connect" className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-dim">
            Connect
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s connect.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <div className="mt-12 flex items-center gap-5">
            {LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <Icon />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
            Somnath Goswami — Built {new Date().getFullYear()}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
