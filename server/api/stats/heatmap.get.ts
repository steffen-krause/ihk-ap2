import { db, schema } from '~/server/db'
import { desc, sql } from 'drizzle-orm'

export default defineEventHandler(async () => {
  // Last 84 days (12 weeks) for heatmap
  const since = new Date()
  since.setDate(since.getDate() - 84)
  const sinceStr = since.toISOString().split('T')[0]

  const activity = await db
    .select()
    .from(schema.dailyActivity)
    .where(sql`${schema.dailyActivity.date} >= ${sinceStr}`)
    .orderBy(desc(schema.dailyActivity.date))

  return activity
})
