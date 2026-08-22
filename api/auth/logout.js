import { defineHandler } from '../_lib/handler.js'

// POST /api/auth/logout — the token is stateless (see api/_lib/auth.js) and
// held client-side, not a cookie this endpoint clears server-side. The
// frontend drops its stored token; this endpoint exists so that flow still
// has a server round trip to call, for parity with a future session store
// and so logging out an already-expired session still succeeds cleanly.
export default defineHandler({
	POST: async (req, res) => {
		res.status(204).end()
	},
})
