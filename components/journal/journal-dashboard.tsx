'use client'

import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ArrowLeft, ImagePlus, Plus, Search } from 'lucide-react'
import Link from 'next/link'

type Journal = { title: string; eyebrow: string; description: string }
const rows = [
  { date: '14 Jul 2026', timeframe: '15M/5M', instrument: 'GBPUSD', direction: 'BUY', result: 'TP', rr: 3.15, month: 'July' },
  { date: '14 Jul 2026', timeframe: '2H', instrument: 'XAUUSD', direction: 'SELL', result: 'RUNNING', rr: 0, month: 'July' },
  { date: '13 Jul 2026', timeframe: '30M/15M', instrument: 'BTCUSD', direction: 'SELL', result: 'SL', rr: -1, month: 'July' },
  { date: '13 Jul 2026', timeframe: '15M', instrument: 'GBPUSD', direction: 'BUY', result: 'TP', rr: 2.5, month: 'July' },
]
const monthly = [{ month: 'Mar', rr: 48 }, { month: 'Apr', rr: 98 }, { month: 'May', rr: 32 }, { month: 'Jun', rr: 57 }, { month: 'Jul', rr: 4 }]
const results = [{ name: 'Wins', value: 4, color: 'var(--chart-purple)' }, { name: 'Losses', value: 1, color: '#ef4444' }, { name: 'Running', value: 1, color: '#64748b' }]

export function JournalDashboard({ journal }: { journal: Journal }) {
  const [query, setQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [savedRows, setSavedRows] = useState(rows)
  const filteredRows = useMemo(() => savedRows.filter((row) => `${row.instrument} ${row.direction} ${row.result}`.toLowerCase().includes(query.toLowerCase())), [query, savedRows])
  async function saveTrade(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const response = await fetch(`/api/journal/${journal.title === 'Stock Analysis' ? 'stocks-journal' : journal.title === 'Crypto & Forex Analysis' ? 'crypto-forex-journal' : 'practice-journal'}`, { method: 'POST', body: new FormData(event.currentTarget) })
    if (!response.ok) return
    const created = await response.json()
    setSavedRows((current) => [{ date: created.tradeDate, timeframe: created.timeframe, instrument: created.instrument, direction: created.direction, result: created.result, rr: Number(created.rr), month: created.month }, ...current])
    event.currentTarget.reset()
    setShowForm(false)
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Link href="/#analysis" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-primary"><ArrowLeft className="size-4" /> Back to analysis</Link>
      <header className="mt-10 border-b border-border pb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{journal.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-6xl">{journal.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">{journal.description}</p>
      </header>

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[['Total trades', '183'], ['Wins', '85'], ['Losses', '46'], ['Win rate', '64.89%']].map(([label, value]) => <div key={label} className="border border-border bg-card p-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p><p className="mt-3 font-heading text-3xl font-bold text-foreground">{value}</p></div>)}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="border border-border bg-card p-5 sm:p-7"><div className="flex items-center justify-between border-b border-border pb-4"><h2 className="font-heading text-xl font-semibold">Monthly net RR</h2><span className="font-mono text-xs text-primary">Calculated live</span></div><div className="mt-5 h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthly}><XAxis dataKey="month" stroke="var(--muted-foreground)" /><YAxis stroke="var(--muted-foreground)" /><Tooltip /><Bar dataKey="rr" fill="var(--chart-purple)" radius={[3, 3, 0, 0]} /></BarChart></ResponsiveContainer></div></div>
        <div className="border border-border bg-card p-5 sm:p-7"><h2 className="border-b border-border pb-4 font-heading text-xl font-semibold">Result distribution</h2><div className="mt-3 h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={results} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={3}>{results.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div></div>
      </section>

      <section className="mt-8 border border-border bg-card p-5 sm:p-7"><div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-heading text-xl font-semibold">Trade journal</h2><p className="mt-1 text-sm text-muted-foreground">Review every setup, outcome, and chart reference.</p></div><button type="button" onClick={() => setShowForm((value) => !value)} className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground"><Plus className="size-4" /> Log trade</button>{showForm && <form onSubmit={saveTrade} className="mt-5 grid gap-3 border border-border p-4 sm:grid-cols-4"><input required name="instrument" placeholder="Instrument" className="border border-border bg-transparent px-3 py-2 text-sm" /><input required name="timeframe" placeholder="Timeframe" className="border border-border bg-transparent px-3 py-2 text-sm" /><input required name="tradeDate" type="date" className="border border-border bg-transparent px-3 py-2 text-sm" /><input required name="rr" type="number" step="0.01" placeholder="RR" className="border border-border bg-transparent px-3 py-2 text-sm" /><select name="direction" className="border border-border bg-transparent px-3 py-2 text-sm"><option>BUY</option><option>SELL</option><option>NEUTRAL</option></select><select name="result" className="border border-border bg-transparent px-3 py-2 text-sm"><option>TP</option><option>SL</option><option>BE</option><option>RUNNING</option><option>NC</option></select><input name="before" type="file" accept="image/*" className="border border-border px-3 py-2 text-sm" /><input name="after" type="file" accept="image/*" className="border border-border px-3 py-2 text-sm" /><button type="submit" className="bg-chart-purple px-4 py-2 font-mono text-xs uppercase text-primary-foreground sm:col-span-4">Save trade</button></form>}</div><div className="mt-5 flex items-center gap-3 border border-border px-3 py-2"><Search className="size-4 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search instrument, direction, result" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" /></div><div className="mt-5 overflow-x-auto"><table className="w-full min-w-[780px] text-left text-sm"><thead className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><tr>{['Date', 'Timeframe', 'Instrument', 'Direction', 'Result', 'RR', 'Before / After'].map((heading) => <th key={heading} className="border-b border-border px-3 py-3">{heading}</th>)}</tr></thead><tbody>{filteredRows.map((row) => <tr key={`${row.date}-${row.instrument}`} className="border-b border-border last:border-0"><td className="px-3 py-4">{row.date}</td><td className="px-3 py-4">{row.timeframe}</td><td className="px-3 py-4 font-semibold text-primary">{row.instrument}</td><td className="px-3 py-4">{row.direction}</td><td className="px-3 py-4">{row.result}</td><td className={row.rr < 0 ? 'px-3 py-4 text-red-400' : 'px-3 py-4 text-primary'}>{row.rr.toFixed(2)}R</td><td className="px-3 py-4"><button className="inline-flex items-center gap-2 border border-border px-3 py-2 text-xs hover:border-primary"><ImagePlus className="size-4" /> Upload images</button></td></tr>)}</tbody></table></div></section>
    </div>
  )
}
