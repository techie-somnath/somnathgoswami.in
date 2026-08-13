'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#analysis', label: 'Analysis' },
  { href: '#beyond', label: 'Beyond' },
  { href: '#connect', label: 'Connect' },
]

export function SiteNav() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? Math.min(current / total, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="h-px bg-primary/70 transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
      <nav className="flex items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-heading text-sm font-semibold tracking-tight text-foreground"
        >
          SG
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
