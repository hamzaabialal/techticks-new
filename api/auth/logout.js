import { clearSessionCookie } from '../_lib/auth.js'
import { defineHandler } from '../_lib/handler.js'

// POST /api/auth/logout — clears the cookie unconditionally; logging out an
// already-expired or missing session should still succeed cleanly.
export default defineHandler({
	POST: async (req, res) => {
		clearSessionCookie(res)
		res.status(204).end()
	},
})
