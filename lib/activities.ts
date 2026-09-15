export type Activity = {
  slug: string
  title: string
  description: string
  intro: string
  highlights: string[]
  instagramHighlightUrl?: string
}

export const ACTIVITIES: Activity[] = [
  {
    slug: 'strength-training',
    title: 'Strength Training',
    description: 'Progressive overload, tracked and repeated — no shortcuts.',
    intro: 'A practice built around patience, measurable progress, and showing up consistently. This is where I document the routines, milestones, and lessons that keep the work grounded.',
    highlights: ['Training notes', 'Personal milestones', 'Lessons from consistency'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/18105218129120918/',
  },
  {
    slug: 'running',
    title: 'Running',
    description: 'Kilometers add up quietly. Consistency over intensity.',
    intro: 'Running gives the week a simple rhythm: lace up, get outside, and let the distance build. I will use this space for routes, race days, and the small wins between them.',
    highlights: ['Routes and distances', 'Race-day notes', 'Training reflections'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/18103288313589727/',
  },
  {
    slug: 'hyrox',
    title: 'HYROX',
    description: 'Training for a sport that punishes inconsistency.',
    intro: 'HYROX sits at the intersection of strength and endurance. This page is a home for event preparation, workouts, competition days, and what the process teaches along the way.',
    highlights: ['Event preparation', 'Workout breakdowns', 'Competition recaps'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/18103738547142209/',
  },
  {
    slug: 'marathon',
    title: 'Marathon',
    description: 'The discipline of showing up for every kilometer, one step at a time.',
    intro: 'Marathon training is a long conversation with patience, preparation, and persistence. I will collect race stories, training memories, and the habits behind every finish here.',
    highlights: ['Race memories', 'Training logs', 'What I am learning'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/17884428699476732/',
  },
  {
    slug: 'devil-circuit',
    title: 'Devil Circuit',
    description: 'A demanding circuit where grit, speed, and endurance meet.',
    intro: 'Devil Circuit is a test of discipline under pressure. I will use this page to capture the preparation, event memories, and lessons from pushing through every round.',
    highlights: ['Circuit preparation', 'Event memories', 'Lessons from the effort'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/17888529267444043/',
  },
]

import fs from 'node:fs'
import path from 'node:path'

const ACTIVITY_IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

export function getActivity(slug: string) {
  return ACTIVITIES.find((activity) => activity.slug === slug)
}

export function getActivityImages(slug: string) {
  const directory = path.join(process.cwd(), 'public', 'images', 'activities', slug)

  try {
    return fs
      .readdirSync(directory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && ACTIVITY_IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => `/images/activities/${slug}/${encodeURIComponent(entry.name)}`)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  } catch {
    return []
  }
}
