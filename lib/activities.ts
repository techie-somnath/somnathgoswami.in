export type Activity = {
  slug: string
  title: string
  description: string
  intro: string
  highlights: string[]
  gallerySlots: string[]
  instagramHighlightUrl?: string
}

export const ACTIVITIES: Activity[] = [
  {
    slug: 'strength-training',
    title: 'Strength Training',
    description: 'Progressive overload, tracked and repeated — no shortcuts.',
    intro: 'A practice built around patience, measurable progress, and showing up consistently. This is where I document the routines, milestones, and lessons that keep the work grounded.',
    highlights: ['Training notes', 'Personal milestones', 'Lessons from consistency'],
    gallerySlots: ['strength-training-01.jpg', 'strength-training-02.jpg', 'strength-training-03.jpg'],
    instagramHighlightUrl: 'https://www.instagram.com/stories/highlights/17888529267444043/',
  },
  {
    slug: 'running',
    title: 'Running',
    description: 'Kilometers add up quietly. Consistency over intensity.',
    intro: 'Running gives the week a simple rhythm: lace up, get outside, and let the distance build. I will use this space for routes, race days, and the small wins between them.',
    highlights: ['Routes and distances', 'Race-day notes', 'Training reflections'],
    gallerySlots: ['running-01.jpg', 'running-02.jpg', 'running-03.jpg'],
    instagramHighlightUrl: '',
  },
  {
    slug: 'hyrox',
    title: 'HYROX',
    description: 'Training for a sport that punishes inconsistency.',
    intro: 'HYROX sits at the intersection of strength and endurance. This page is a home for event preparation, workouts, competition days, and what the process teaches along the way.',
    highlights: ['Event preparation', 'Workout breakdowns', 'Competition recaps'],
    gallerySlots: ['hyrox-01.jpg', 'hyrox-02.jpg', 'hyrox-03.jpg'],
    instagramHighlightUrl: '',
  },
  {
    slug: 'marathon',
    title: 'Marathon',
    description: 'The discipline of showing up for every kilometer, one step at a time.',
    intro: 'Marathon training is a long conversation with patience, preparation, and persistence. I will collect race stories, training memories, and the habits behind every finish here.',
    highlights: ['Race memories', 'Training logs', 'What I am learning'],
    gallerySlots: ['marathon-01.jpg', 'marathon-02.jpg', 'marathon-03.jpg'],
    instagramHighlightUrl: '',
  },
  {
    slug: 'devil-circuit',
    title: 'Devil Circuit',
    description: 'A demanding circuit where grit, speed, and endurance meet.',
    intro: 'Devil Circuit is a test of discipline under pressure. I will use this page to capture the preparation, event memories, and lessons from pushing through every round.',
    highlights: ['Circuit preparation', 'Event memories', 'Lessons from the effort'],
    gallerySlots: ['devil-circuit-01.jpg', 'devil-circuit-02.jpg', 'devil-circuit-03.jpg'],
    instagramHighlightUrl: '',
  },
  {
    slug: 'trekking-outdoors',
    title: 'Trekking & Outdoors',
    description: 'Slow miles, clear head — the same reset a good chart review gives me.',
    intro: 'Time outdoors is a reset from the screen. I will use this page for trails, trips, event photos, and the places that make slowing down feel productive.',
    highlights: ['Trail notes', 'Trip journals', 'Outdoor event galleries'],
    gallerySlots: ['trekking-outdoors-01.jpg', 'trekking-outdoors-02.jpg', 'trekking-outdoors-03.jpg'],
    instagramHighlightUrl: '',
  },
]

export function getActivity(slug: string) {
  return ACTIVITIES.find((activity) => activity.slug === slug)
}
