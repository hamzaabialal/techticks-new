import { withCors } from './cors.js'

// Dispatches by HTTP method and centralizes error->status mapping, so each
// route file only writes the logic specific to its resource, not repeated
// try/catch and CORS boilerplate. Errors thrown anywhere downstream
// (permissions.js, posts-repo.js not-found cases) carry an optional
// `.status`; anything unmarked is a 500.
export function defineHandler(methodHandlers) {
	return withCors(async (req, res) => {
		const handler = methodHandlers[req.method]
		if (!handler) {
			res.status(405).json({ error: `Method ${req.method} not allowed` })
			return
		}
		try {
			await handler(req, res)
		} catch (err) {
			const status = err.status || 500
			res.status(status).json({ error: err.message || 'Internal server error' })
		}
	})
}

export function notFound(message) {
	const err = new Error(message)
	err.status = 404
	throw err
}

export function unauthorized(message) {
	const err = new Error(message)
	err.status = 401
	throw err
}

export function rateLimited(message) {
	const err = new Error(message)
	err.status = 429
	throw err
}
