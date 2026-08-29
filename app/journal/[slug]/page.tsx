import { notFound } from 'next/navigation'
import { JournalDashboard } from '@/components/journal/journal-dashboard'

const journals = {
  'practice-journal': {
    title: 'Practice Trading Journal',
    eyebrow: 'Practice Journal',
    description: 'A structured space for testing ideas, reviewing execution, and turning practice into repeatable process.',
  },
  'stocks-journal': {
    title: 'Stock Analysis',
    eyebrow: 'Equity Journal',
    description: 'A detailed record of stock setups, decisions, outcomes, and the context behind each trade.',
  },
  'crypto-forex-journal': {
    title: 'Crypto & Forex Analysis',
    eyebrow: 'Global Markets Journal',
    description: 'A visual log for crypto and forex analysis, from market structure and liquidity to execution review.',
  },
} as const

export function generateStaticParams() {
  return Object.keys(journals).map((slug) => ({ slug }))
}

export default async function JournalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const journal = journals[slug as keyof typeof journals]
  if (!journal) notFound()

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-8 lg:px-12">
      <JournalDashboard journal={journal} />
    </main>
  )
}
