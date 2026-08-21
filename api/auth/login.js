import { getDb } from '../_lib/db.js'
import { ensureAuthSchema, findUserByEmail, checkThrottle, recordLoginFailure, clearThrottle } from '../_lib/users-repo.js'
import { verifyPassword, signSession, setSessionCookie, getClientIp } from '../_lib/auth.js'
import { defineHandler, rateLimited } from '../_lib/handler.js'

function invalidCredentials() {
	const err = new Error('Invalid email or password')
	err.status = 401
	throw err
}

// POST /api/auth/login — verifies credentials, issues the session cookie.
// Throttle is checked (and can short-circuit with a 429) before the users
// table is even queried or any password comparison runs.
export default defineHandler({
	POST: async (req, res) => {
		const db = getDb()
		await ensureAuthSchema(db)

		const { email, password } = req.body || {}
		if (!email || !password) invalidCredentials()

		const normalizedEmail = String(email).trim().toLowerCase()
		const ip = getClientIp(req)

		const emailThrottle = await checkThrottle(db, 'email', normalizedEmail)
		if (emailThrottle.locked) rateLimited(`Too many attempts. Try again in ${emailThrottle.retryAfterMinutes} minute(s).`)
		const ipThrottle = await checkThrottle(db, 'ip', ip)
		if (ipThrottle.locked) rateLimited(`Too many attempts. Try again in ${ipThrottle.retryAfterMinutes} minute(s).`)

		const user = await findUserByEmail(db, normalizedEmail)
		// Always runs a hash comparison, even for a nonexistent user (against
		// a fixed dummy hash inside verifyPassword) — so "no such user" and
		// "wrong password" take the same time and return the same response,
		// with no signal revealing which emails are registered.
		const valid = await verifyPassword(password, user?.passwordHash)
		if (!user || !valid) {
			await recordLoginFailure(db, 'email', normalizedEmail)
			await recordLoginFailure(db, 'ip', ip)
			invalidCredentials()
		}

		await clearThrottle(db, 'email', normalizedEmail)
		await clearThrottle(db, 'ip', ip)

		const token = signSession(user)
		setSessionCookie(res, token)
		res.status(200).json({ id: user.id, name: user.name, email: user.email, role: user.role })
	},
})
