import { boolean, date, numeric, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const trades = pgTable('trades', {
  id: serial('id').primaryKey(),
  journalType: text('journal_type').notNull(),
  tradeDate: date('trade_date').notNull(),
  timeframe: text('timeframe').notNull(),
  instrument: text('instrument').notNull(),
  direction: text('direction').notNull(),
  result: text('result').notNull(),
  rr: numeric('rr', { precision: 10, scale: 2 }).notNull().default('0'),
  month: text('month').notNull(),
  activated: boolean('activated').notNull().default(false),
  reentry: boolean('reentry').notNull().default(false),
  beforePath: text('before_path'),
  afterPath: text('after_path'),
  notes: text('notes'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
