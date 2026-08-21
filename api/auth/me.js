import { getDb } from '../_lib/db.js'
import { ensureAuthSchema, findUserById } from '../_lib/users-repo.js'
import { getActingUser } from '../_lib/permissions.js'
import { defineHandler, unauthorized } from '../_lib/handler.js'

// GET /api/auth/me — the check the frontend runs on mount so a session can
// survive a page refresh instead of only living in React state.
export default defineHandler({
	GET: async (req, res) => {
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')

		const db = getDb()
		await ensureAuthSchema(db)
		// The JWT already carries {id, name, role}, but re-reading the row
		// keeps the response's email field accurate and confirms the account
		// the token names still actually exists.
		const user = await findUserById(db, actingUser.id)
		if (!user) return unauthorized('Not authenticated')
		res.status(200).json(user)
	},
})
