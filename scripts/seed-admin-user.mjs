// One-off, manually-run script. NOT part of the deployed API and not run
// automatically on any deploy. Seeds (or resets — see below) the single
// Admin user's row in Turso with a hashed password from an environment
// variable. The plaintext password never lives in code or gets logged.
//
// Usage (from the techticks-new/ directory):
//   node --env-file=.env scripts/seed-admin-user.mjs
// Requires ADMIN_EMAIL and ADMIN_PASSWORD in the environment alongside the
// existing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN.
//
// Safe to re-run: this UPSERTs rather than INSERT OR IGNORE, so re-running
// with a changed ADMIN_PASSWORD doubles as a password-reset tool later.

import { createClient } from '@libsql/client'
import { ensureAuthSchema } from '../api/_lib/users-repo.js'
import { hashPassword } from '../api/_lib/auth.js'

const db = createClient({
	url: process.env.TURSO_DATABASE_URL,
	authToken: process.env.TURSO_AUTH_TOKEN,
})

async function main() {
	const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env
	if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
		console.error('Missing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment. Aborting.')
		process.exit(1)
	}
	if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
		console.error('Missing ADMIN_EMAIL / ADMIN_PASSWORD in the environment. Aborting.')
		process.exit(1)
	}

	await ensureAuthSchema(db)

	const email = ADMIN_EMAIL.trim().toLowerCase()
	const passwordHash = await hashPassword(ADMIN_PASSWORD)
	const now = new Date().toISOString()

	await db.execute({
		sql: `INSERT INTO users (id, email, password_hash, name, role, created_at, updated_at)
			VALUES (?, ?, ?, ?, 'ADMIN', ?, ?)
			ON CONFLICT(email)
			DO UPDATE SET password_hash = excluded.password_hash, updated_at = excluded.updated_at`,
		args: ['user_admin_1', email, passwordHash, 'Admin User', now, now],
	})

	console.log(`Admin user ready: ${email}`)
}

main().catch((err) => {
	console.error('Seeding admin user failed:', err)
	process.exit(1)
})
