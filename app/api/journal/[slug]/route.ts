import { put } from '@vercel/blob'
import { and, desc, eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { trades } from '@/lib/db/schema'

const allowed = new Set(['practice-journal', 'stocks-journal', 'crypto-forex-journal'])
const toType = (slug: string) => slug === 'practice-journal' ? 'practice' : slug === 'stocks-journal' ? 'stocks' : 'crypto-forex'

export async function GET(_: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Unknown journal' }, { status: 404 })
  const rows = await db.select().from(trades).where(eq(trades.journalType, toType(slug))).orderBy(desc(trades.tradeDate), desc(trades.createdAt))
  return NextResponse.json(rows)
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!allowed.has(slug)) return NextResponse.json({ error: 'Unknown journal' }, { status: 404 })
  const form = await request.formData()
  const instrument = String(form.get('instrument') ?? '').trim().slice(0, 32)
  const timeframe = String(form.get('timeframe') ?? '').trim().slice(0, 32)
  const direction = String(form.get('direction') ?? '')
  const result = String(form.get('result') ?? '')
  const tradeDate = String(form.get('tradeDate') ?? '')
  const rr = Number(form.get('rr') ?? 0)
  if (!instrument || !timeframe || !/^\d{4}-\d{2}-\d{2}$/.test(tradeDate) || !['BUY', 'SELL', 'NEUTRAL'].includes(direction) || !['TP', 'SL', 'BE', 'RUNNING', 'NC'].includes(result) || !Number.isFinite(rr) || rr < -1000 || rr > 1000) return NextResponse.json({ error: 'Invalid trade fields' }, { status: 400 })
  const upload = async (name: string) => {
    const file = form.get(name)
    if (!(file instanceof File) || file.size === 0) return null
    if (!file.type.startsWith('image/') || file.size > 8 * 1024 * 1024) throw new Error('Images must be under 8MB.')
    const blob = await put(`journal/${toType(slug)}/${crypto.randomUUID()}-${file.name}`, file, { access: 'private' })
    return blob.pathname
  }
  try {
    const [beforePath, afterPath] = await Promise.all([upload('before'), upload('after')])
    const [created] = await db.insert(trades).values({ journalType: toType(slug), tradeDate, timeframe, instrument, direction, result, rr: rr.toFixed(2), month: new Date(`${tradeDate}T00:00:00Z`).toLocaleString('en-US', { month: 'long', timeZone: 'UTC' }), beforePath, afterPath }).returning()
    return NextResponse.json(created, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to save trade' }, { status: 400 })
  }
}
