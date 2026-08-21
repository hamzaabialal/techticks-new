// Sibling to posts-repo.js — same ensureSchema-once-per-warm-instance
// pattern, kept in its own file since users/throttle are a distinct
// resource from posts.
let schemaEnsured = false

export async function ensureAuthSchema(db) {
	if (schemaEnsured) return
	await db.batch(
		[
			`CREATE TABLE IF NOT EXISTS users (
				id            TEXT PRIMARY KEY,
				email         TEXT NOT NULL UNIQUE,
				password_hash TEXT NOT NULL,
				name          TEXT NOT NULL,
				role          TEXT NOT NULL DEFAULT 'ADMIN',
				created_at    TEXT NOT NULL,
				updated_at    TEXT NOT NULL
			)`,
			`CREATE TABLE IF NOT EXISTS login_throttle (
				identifier_type  TEXT NOT NULL,
				identifier_value TEXT NOT NULL,
				fail_count       INTEGER NOT NULL DEFAULT 0,
				first_fail_at    TEXT NOT NULL,
				locked_until     TEXT,
				PRIMARY KEY (identifier_type, identifier_value)
			)`,
		],
		'write',
	)
	schemaEnsured = true
}

export async function findUserByEmail(db, email) {
	const result = await db.execute({
		sql: 'SELECT id, email, password_hash, name, role FROM users WHERE email = ?',
		args: [email],
	})
	const row = result.rows[0]
	if (!row) return null
	return {
		id: row.id,
		email: row.email,
		passwordHash: row.password_hash,
		name: row.name,
		role: row.role,
	}
}

export async function findUserById(db, id) {
	const result = await db.execute({
		sql: 'SELECT id, email, name, role FROM users WHERE id = ?',
		args: [id],
	})
	const row = result.rows[0]
	if (!row) return null
	return { id: row.id, email: row.email, name: row.name, role: row.role }
}

const MAX_ATTEMPTS = 5
const WINDOW_MINUTES = 15
const LOCKOUT_MINUTES = 15

// Returns { locked: boolean, retryAfterMinutes } — a locked identifier
// short-circuits the login route before it even looks up the user or runs
// a password comparison.
export async function checkThrottle(db, type, value) {
	const result = await db.execute({
		sql: 'SELECT locked_until FROM login_throttle WHERE identifier_type = ? AND identifier_value = ?',
		args: [type, value],
	})
	const row = result.rows[0]
	if (!row || !row.locked_until) return { locked: false }
	const lockedUntil = new Date(row.locked_until)
	if (lockedUntil > new Date()) {
		const retryAfterMinutes = Math.max(1, Math.ceil((lockedUntil - Date.now()) / 60000))
		return { locked: true, retryAfterMinutes }
	}
	return { locked: false }
}

// Upserts the throttle row: resets the counter if the previous failure
// window already expired, otherwise increments it, and sets locked_until
// once the threshold is crossed within the window.
export async function recordLoginFailure(db, type, value) {
	const now = new Date()
	const result = await db.execute({
		sql: 'SELECT fail_count, first_fail_at FROM login_throttle WHERE identifier_type = ? AND identifier_value = ?',
		args: [type, value],
	})
	const row = result.rows[0]

	const windowExpired = row && now - new Date(row.first_fail_at) > WINDOW_MINUTES * 60000
	const failCount = !row || windowExpired ? 1 : row.fail_count + 1
	const firstFailAt = !row || windowExpired ? now.toISOString() : row.first_fail_at
	const lockedUntil =
		failCount >= MAX_ATTEMPTS ? new Date(now.getTime() + LOCKOUT_MINUTES * 60000).toISOString() : null

	await db.execute({
		sql: `INSERT INTO login_throttle (identifier_type, identifier_value, fail_count, first_fail_at, locked_until)
			VALUES (?, ?, ?, ?, ?)
			ON CONFLICT(identifier_type, identifier_value)
			DO UPDATE SET fail_count = excluded.fail_count, first_fail_at = excluded.first_fail_at, locked_until = excluded.locked_until`,
		args: [type, value, failCount, firstFailAt, lockedUntil],
	})
}

export async function clearThrottle(db, type, value) {
	await db.execute({
		sql: 'DELETE FROM login_throttle WHERE identifier_type = ? AND identifier_value = ?',
		args: [type, value],
	})
}
