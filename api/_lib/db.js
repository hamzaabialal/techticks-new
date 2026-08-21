import { createClient } from '@libsql/client'

let client = null

// Module-level singleton, reused across invocations within the same
// serverless function instance (standard pattern — avoids reconnecting on
// every request within one warm instance).
export function getDb() {
	if (!client) {
		client = createClient({
			url: process.env.TURSO_DATABASE_URL,
			authToken: process.env.TURSO_AUTH_TOKEN,
		})
	}
	return client
}
