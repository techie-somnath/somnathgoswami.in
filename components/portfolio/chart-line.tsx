'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Decorative candlestick / price-action line that draws itself in
 * when scrolled into view. Purely illustrative, low opacity accent gold.
 */
export function ChartLine({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) {
      setDrawn(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDrawn(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const wicks = [
    { x: 60, top: 210, bottom: 260, o: 245, c: 220 },
    { x: 110, top: 190, bottom: 250, o: 235, c: 200 },
    { x: 160, top: 230, bottom: 270, o: 225, c: 255 },
    { x: 210, top: 150, bottom: 210, o: 200, c: 160 },
    { x: 260, top: 130, bottom: 190, o: 175, c: 140 },
    { x: 310, top: 160, bottom: 200, o: 190, c: 170 },
    { x: 360, top: 90, bottom: 150, o: 140, c: 100 },
    { x: 410, top: 60, bottom: 120, o: 110, c: 70 },
    { x: 460, top: 30, bottom: 90, o: 80, c: 40 },
    { x: 510, top: 10, bottom: 60, o: 55, c: 20 },
  ]

  const linePoints = wicks.map((w) => `${w.x},${(w.o + w.c) / 2}`).join(' ')

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none select-none', className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 560 300"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {wicks.map((w, i) => (
          <g key={i} stroke="#C9A34E" strokeOpacity={0.22}>
            <line x1={w.x} x2={w.x} y1={w.top} y2={w.bottom} strokeWidth={1.5} />
            <rect
              x={w.x - 6}
              y={Math.min(w.o, w.c)}
              width={12}
              height={Math.max(Math.abs(w.o - w.c), 2)}
              fill="#C9A34E"
              fillOpacity={0.16}
              stroke="none"
            />
          </g>
        ))}
        <polyline
          ref={pathRef as any}
          points={linePoints}
          fill="none"
          stroke="#C9A34E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.7}
          pathLength={1}
          style={{
            strokeDasharray: 1,
            strokeDashoffset: drawn ? 0 : 1,
            transition: 'stroke-dashoffset 2.2s ease-out',
          }}
        />
      </svg>
    </div>
  )
}
