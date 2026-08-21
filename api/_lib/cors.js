// ALLOWED_ORIGIN is an explicit allow-list, not "*" — the session cookie
// travels on every credentialed request now (see api/_lib/auth.js), and
// Access-Control-Allow-Credentials: true is never valid paired with a
// wildcard origin anyway. Restricting the origin also closes the "any
// page's visitor browser scripts a credentialed request" vector for free.
function getAllowedOrigins() {
	return (process.env.ALLOWED_ORIGIN || '')
		.split(',')
		.map((origin) => origin.trim())
		.filter(Boolean)
}

// Wraps a Vercel Function handler with CORS headers and OPTIONS preflight
// handling, applied consistently instead of repeated in every route file.
export function withCors(handler) {
	return async function corsWrappedHandler(req, res) {
		const origin = req.headers.origin
		const allowed = getAllowedOrigins()
		if (origin && allowed.includes(origin)) {
			res.setHeader('Access-Control-Allow-Origin', origin)
			res.setHeader('Access-Control-Allow-Credentials', 'true')
		}
		res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
		res.setHeader('Vary', 'Origin')

		if (req.method === 'OPTIONS') {
			res.status(204).end()
			return
		}

		return handler(req, res)
	}
}
