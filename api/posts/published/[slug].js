import { getDb } from '../../_lib/db.js'
import { ensureSchema, findPublishedPostBySlug } from '../../_lib/posts-repo.js'
import { defineHandler, notFound } from '../../_lib/handler.js'

// getPublishedPostBySlug — the public blog detail page's read. No
// actingUser required.
export default defineHandler({
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const post = await findPublishedPostBySlug(db, req.query.slug)
		if (!post) return notFound(`Published post not found for slug: ${req.query.slug}`)
		res.status(200).json(post)
	},
})
