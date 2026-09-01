// TEMPORARY — delete this file after use
import { createClient } from '@libsql/client'
import { ensureAuthSchema } from './_lib/users-repo.js'
import { hashPassword } from './_lib/auth.js'

const ONE_TIME_TOKEN = 'tt-reset-2026'

export default async function handler(req, res) {
	if (req.method !== 'POST') return res.status(405).end()

	const { token, email, password } = req.body || {}
	if (token !== ONE_TIME_TOKEN) return res.status(401).json({ error: 'unauthorized' })
	if (!email || !password) return res.status(400).json({ error: 'email and password required' })

	const db = createClient({
		url: process.env.TURSO_DATABASE_URL,
		authToken: process.env.TURSO_AUTH_TOKEN,
	})

	await ensureAuthSchema(db)
	const passwordHash = await hashPassword(password)
	const now = new Date().toISOString()

	await db.execute({
		sql: `INSERT INTO users (id, email, password_hash, name, role, created_at, updated_at)
			VALUES (?, ?, ?, ?, 'ADMIN', ?, ?)
			ON CONFLICT(email)
			DO UPDATE SET password_hash = excluded.password_hash, updated_at = excluded.updated_at`,
		args: ['user_admin_1', email.trim().toLowerCase(), passwordHash, 'Admin User', now, now],
	})

	return res.status(200).json({ ok: true, message: `Password updated for ${email}` })
}
