// ALLOWED_ORIGIN is an explicit allow-list, not "*" — closes off "any page's
// visitor browser scripts a request carrying the session token" even though
// auth is header-based now (see api/_lib/auth.js), not a cookie.
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
		}
		res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
		// X-Filename: mediaService.js's raw-binary upload (api/media/upload.js)
		// sends this alongside Content-Type. Authorization: the session token
		// (see api/_lib/auth.js — header-based, not a cookie, precisely so
		// cross-origin calls like techticks.org -> this API aren't at the
		// mercy of third-party cookie blocking).
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Filename, Authorization')
		res.setHeader('Vary', 'Origin')

		if (req.method === 'OPTIONS') {
			res.status(204).end()
			return
		}

		return handler(req, res)
	}
}
