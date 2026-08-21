import { put } from '@vercel/blob'
import { getActingUser, hasPermission } from '../_lib/permissions.js'
import { defineHandler, unauthorized } from '../_lib/handler.js'

// Raw binary upload, not JSON — the client PUTs the file's bytes directly
// with Content-Type set to the file's mime type, so Vercel's default JSON
// body parser must be disabled for this route specifically.
export const config = {
	api: {
		bodyParser: false,
	},
}

// Comfortably under Vercel's hard 4.5MB request body limit, which a bigger
// number here couldn't raise anyway.
const MAX_BYTES = 4 * 1024 * 1024
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])

function badRequest(message) {
	const err = new Error(message)
	err.status = 400
	throw err
}

function forbidden(message) {
	const err = new Error(message)
	err.status = 403
	throw err
}

// Reads the request stream into a single Buffer, aborting early once the
// size cap is crossed rather than buffering an oversized upload in full.
async function readBody(req) {
	const chunks = []
	let size = 0
	for await (const chunk of req) {
		size += chunk.length
		if (size > MAX_BYTES) badRequest('Image exceeds the 4MB limit')
		chunks.push(chunk)
	}
	return Buffer.concat(chunks)
}

export default defineHandler({
	POST: async (req, res) => {
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		if (!hasPermission(actingUser.role, 'manageMedia')) forbidden('Not authorized to upload media')

		const contentType = req.headers['content-type'] || ''
		if (!ALLOWED_TYPES.has(contentType)) {
			badRequest('Unsupported image type — use JPEG, PNG, WebP, or GIF')
		}

		const body = await readBody(req)
		if (body.length === 0) badRequest('Empty upload')

		// Filename only informs the stored blob's path/extension — never
		// trusted for anything else, so a permissive strip is enough.
		const rawName = decodeURIComponent(req.headers['x-filename'] || 'image')
		const safeName = rawName.replace(/[^a-zA-Z0-9._-]/g, '-')
		const pathname = `posts/${Date.now()}-${safeName}`

		const blob = await put(pathname, body, {
			access: 'public',
			contentType,
		})

		res.status(200).json({ url: blob.url })
	},
})
