'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'

type ActivityGalleryProps = {
  title: string
  slots: string[]
}

export function ActivityGallery({ title, slots }: ActivityGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const total = slots.length

  useEffect(() => {
    if (paused || total < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % total)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused, total])

  if (!total) {
    return <div className="border border-dashed border-border p-8 text-sm text-muted-foreground">Add image filenames to this activity&apos;s gallery.</div>
  }

  const goTo = (index: number) => setCurrent((index + total) % total)
  const filename = slots[current]
  const src = `/images/activities/${filename}`
  const isMissing = failed[filename]

  return (
    <div className="flex flex-col gap-5">
      <div
        className="relative aspect-[16/9] overflow-hidden border border-border bg-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {isMissing ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Add your image</span>
            <code className="max-w-full break-all font-mono text-[11px] text-dim">public/images/activities/{filename}</code>
          </div>
        ) : (
          <Image
            src={src}
            alt={`${title} event photo ${current + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, 900px"
            className="object-cover"
            onError={() => setFailed((items) => ({ ...items, [filename]: true }))}
          />
        )}
        {total > 1 && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/80 p-3 backdrop-blur-sm">
            <button type="button" onClick={() => goTo(current - 1)} aria-label="Previous image" className="inline-flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowLeft aria-hidden="true" /></button>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
            <button type="button" onClick={() => goTo(current + 1)} aria-label="Next image" className="inline-flex size-9 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowRight aria-hidden="true" /></button>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label={`${title} gallery images`}>
          {slots.map((slot, index) => <button key={slot} type="button" role="tab" aria-selected={index === current} aria-label={`Show image ${index + 1}`} onClick={() => goTo(index)} className={`h-1.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${index === current ? 'w-8 bg-primary' : 'w-4 bg-border hover:bg-muted-foreground'}`} />)}
        </div>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'} className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-dim transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          {paused ? 'Resume' : 'Auto'}
        </button>
      </div>
    </div>
  )
}

