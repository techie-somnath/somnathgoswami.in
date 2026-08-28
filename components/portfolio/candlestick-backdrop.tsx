'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

/**
 * Full-bleed decorative candlestick field used as a section backdrop.
 * Deterministically generated (seeded) so server and client render
 * identical markup — purely illustrative, faded at the edges so
 * foreground copy stays legible.
 */

interface Candle {
  x: number
  top: number
  bottom: number
  o: number
  c: number
  up: boolean
}

function seededRandom(seed: number) {
  let s = seed % 2147483647
  if (s <= 0) s += 2147483646
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function generateCandles(
  count: number,
  width: number,
  height: number,
  seed: number,
): Candle[] {
  const rand = seededRandom(seed)
  const candles: Candle[] = []
  const gap = width / count
  let price = height * 0.52

  for (let i = 0; i < count; i++) {
    const x = gap * i + gap / 2
    const volatility = height * 0.07
    const open = price
    const drift = (rand() - 0.48) * volatility * 1.7
    let close = open + drift
    close = Math.max(height * 0.1, Math.min(height * 0.9, close))
    const wickUp = rand() * volatility * 0.9
    const wickDown = rand() * volatility * 0.9
    const top = Math.min(open, close) - wickUp
    const bottom = Math.max(open, close) + wickDown
    candles.push({ x, top, bottom, o: open, c: close, up: close < open })
    price = close
  }

  return candles
}

const WIDTH = 1600
const HEIGHT = 760
const GRID_LINES = [0.16, 0.38, 0.6, 0.82]

export function CandlestickBackdrop({ className }: { className?: string }) {
  const candles = useMemo(() => generateCandles(72, WIDTH, HEIGHT, 1337), [])

  return (
    <div
      className={cn('pointer-events-none select-none', className)}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        {GRID_LINES.map((p) => (
          <line
            key={p}
            x1={0}
            x2={WIDTH}
            y1={HEIGHT * p}
            y2={HEIGHT * p}
            stroke="var(--hairline)"
            strokeOpacity={0.5}
            strokeWidth={1}
          />
        ))}
        {candles.map((candle, i) => (
          <g key={i}>
            <line
              x1={candle.x}
              x2={candle.x}
              y1={candle.top}
              y2={candle.bottom}
              stroke={candle.up ? '#9B7CFF' : '#7F8294'}
              strokeOpacity={candle.up ? 0.55 : 0.32}
              strokeWidth={2.5}
            />
            <rect
              x={candle.x - 8}
              y={Math.min(candle.o, candle.c)}
              width={16}
              height={Math.max(Math.abs(candle.o - candle.c), 3)}
              fill={candle.up ? '#9B7CFF' : '#7F8294'}
              fillOpacity={candle.up ? 0.42 : 0.24}
              stroke="none"
            />
          </g>
        ))}
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--background) 0%, transparent 10%, transparent 88%, var(--background) 100%)',
        }}
      />
    </div>
  )
}
