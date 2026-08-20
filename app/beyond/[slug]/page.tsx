import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { ActivityGallery } from '@/components/portfolio/activity-gallery'
import { getActivity, ACTIVITIES } from '@/lib/activities'

export function generateStaticParams() {
  return ACTIVITIES.map((activity) => ({ slug: activity.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const activity = getActivity(slug)
  return {
    title: activity ? `${activity.title} — Somnath Goswami` : 'Activity — Somnath Goswami',
    description: activity?.description,
  }
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const activity = getActivity(slug)

  if (!activity) notFound()

  return (
    <main className="min-h-screen bg-background px-6 py-8 sm:px-10 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#beyond"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft aria-hidden="true" />
          Back to Beyond Coding
        </Link>

        <header className="mt-24 max-w-3xl border-b border-border pb-12 sm:mt-32">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            Beyond Coding / Activity
          </p>
          <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            {activity.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
            {activity.intro}
          </p>
        </header>

        <section className="grid gap-10 border-b border-border py-12 sm:grid-cols-[0.7fr_1.3fr] sm:py-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">
              Notes to come
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              This page is ready for your detailed story, event notes, and personal milestones.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {activity.highlights.map((highlight) => (
              <li key={highlight} className="border-t border-border pt-4 text-sm text-foreground">
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="gallery-title">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-dim">Gallery</p>
              <h2 id="gallery-title" className="mt-3 font-heading text-2xl font-bold text-foreground">
                Event pictures
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-dim">
              Add your images
            </span>
          </div>

          <div className="mt-8">
            <ActivityGallery title={activity.title} slots={activity.gallerySlots} />
          </div>
        </section>

        {activity.instagramHighlightUrl ? (
          <a
            href={activity.instagramHighlightUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Have a story to share? Connect
            <ArrowUpRight aria-hidden="true" />
          </a>
        ) : (
          <Link
            href="/#connect"
            className="group inline-flex items-center gap-2 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.2em] text-dim transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Have a story to share? Connect
            <ArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </div>
    </main>
  )
}
