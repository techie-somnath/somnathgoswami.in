'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

type ActivityGalleryProps = {
  title: string
  images: string[]
}

export function ActivityGallery({ title, images }: ActivityGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowLeft') setSelectedIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length))
      if (event.key === 'ArrowRight') setSelectedIndex((index) => (index === null ? null : (index + 1) % images.length))
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [images.length, selectedIndex])

  if (!images.length) {
    return <div className="border border-dashed border-border p-8 text-sm text-muted-foreground">Event pictures will appear here soon.</div>
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square overflow-hidden border border-border bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Open ${title} event photo ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${title} event photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-foreground/0 transition group-hover:bg-foreground/15" />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} enlarged photo ${selectedIndex + 1} of ${images.length}`}
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative flex h-full w-full max-w-6xl items-center justify-center" onClick={(event) => event.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`${title} event photo ${selectedIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close enlarged image" className="absolute right-0 top-0 inline-flex size-10 items-center justify-center bg-background text-foreground transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><X aria-hidden="true" /></button>
            {images.length > 1 && <>
              <button type="button" onClick={() => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)} aria-label="Previous image" className="absolute left-0 inline-flex size-10 items-center justify-center bg-background text-foreground transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)} aria-label="Next image" className="absolute right-0 inline-flex size-10 items-center justify-center bg-background text-foreground transition hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><ArrowRight aria-hidden="true" /></button>
            </>}
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">{String(selectedIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</p>
          </div>
        </div>
      )}
    </>
  )
}
