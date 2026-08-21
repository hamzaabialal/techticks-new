import { getDb } from '../../_lib/db.js'
import { ensureSchema, findPostBySlug } from '../../_lib/posts-repo.js'
import { defineHandler, notFound } from '../../_lib/handler.js'

// getPostBySlug — no permission check in the mock either; used internally
// (e.g. slug-availability lookups), not the public-facing read.
export default defineHandler({
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const post = await findPostBySlug(db, req.query.slug)
		if (!post) return notFound(`Post not found for slug: ${req.query.slug}`)
		res.status(200).json(post)
	},
})
