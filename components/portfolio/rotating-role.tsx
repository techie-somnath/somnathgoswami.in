'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const ROLES = [
  'Full-Stack Developer',
  'Cloud Practitioner',
  'Chart Analyst,
  'Endurance Athlete',
]

export function RotatingRole() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const interval = setInterval(() => {
      setVisible(false)
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % ROLES.length)
        setVisible(true)
      }, 300)
      return () => clearTimeout(timeout)
    }, 2600)

    return () => clearInterval(interval)
  }, [reduceMotion])

  return (
    <span
      className={cn(
        'inline-block font-mono text-sm sm:text-base tracking-wide text-primary transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
      )}
      aria-live="polite"
    >
      {ROLES[index]}
    </span>
  )
}
