import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL || 'postgres://ihk:ihk@localhost:5433/ihk_ap2'

const client = postgres(connectionString)
export const db = drizzle(client, { schema })

export { schema }
