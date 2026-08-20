export type Activity = {
  slug: string
  title: string
  description: string
  intro: string
  highlights: string[]
  gallerySlots: string[]
}

export const ACTIVITIES: Activity[] = [
  {
    slug: 'strength-training',
    title: 'Strength Training',
    description: 'Progressive overload, tracked and repeated — no shortcuts.',
    intro: 'A practice built around patience, measurable progress, and showing up consistently. This is where I document the routines, milestones, and lessons that keep the work grounded.',
    highlights: ['Training notes', 'Personal milestones', 'Lessons from consistency'],
    gallerySlots: ['strength-training-01.jpg', 'strength-training-02.jpg', 'strength-training-03.jpg'],
  },
  {
    slug: 'running',
    title: 'Running',
    description: 'Kilometers add up quietly. Consistency over intensity.',
    intro: 'Running gives the week a simple rhythm: lace up, get outside, and let the distance build. I will use this space for routes, race days, and the small wins between them.',
    highlights: ['Routes and distances', 'Race-day notes', 'Training reflections'],
    gallerySlots: ['running-01.jpg', 'running-02.jpg', 'running-03.jpg'],
  },
  {
    slug: 'hyrox',
    title: 'HYROX',
    description: 'Training for a sport that punishes inconsistency.',
    intro: 'HYROX sits at the intersection of strength and endurance. This page is a home for event preparation, workouts, competition days, and what the process teaches along the way.',
    highlights: ['Event preparation', 'Workout breakdowns', 'Competition recaps'],
    gallerySlots: ['hyrox-01.jpg', 'hyrox-02.jpg', 'hyrox-03.jpg'],
  },
  {
    slug: 'athletics',
    title: 'Athletics',
    description: 'The discipline of showing up on the days you don’t want to.',
    intro: 'Athletics is less about a single result and more about building a durable relationship with effort. I will collect training stories, event memories, and the habits behind them here.',
    highlights: ['Event memories', 'Practice logs', 'What I am learning'],
    gallerySlots: ['athletics-01.jpg', 'athletics-02.jpg', 'athletics-03.jpg'],
  },
  {
    slug: 'endurance',
    title: 'Endurance',
    description: 'Long efforts that reward patience, not bursts.',
    intro: 'Endurance work makes patience tangible. This page will capture the longer efforts, the preparation behind them, and the quiet satisfaction of finishing strong.',
    highlights: ['Long efforts', 'Preparation systems', 'Post-event reflections'],
    gallerySlots: ['endurance-01.jpg', 'endurance-02.jpg', 'endurance-03.jpg'],
  },
  {
    slug: 'trekking-outdoors',
    title: 'Trekking & Outdoors',
    description: 'Slow miles, clear head — the same reset a good chart review gives me.',
    intro: 'Time outdoors is a reset from the screen. I will use this page for trails, trips, event photos, and the places that make slowing down feel productive.',
    highlights: ['Trail notes', 'Trip journals', 'Outdoor event galleries'],
    gallerySlots: ['trekking-outdoors-01.jpg', 'trekking-outdoors-02.jpg', 'trekking-outdoors-03.jpg'],
  },
]

export function getActivity(slug: string) {
  return ACTIVITIES.find((activity) => activity.slug === slug)
}
