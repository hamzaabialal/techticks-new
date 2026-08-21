import { getDb } from '../_lib/db.js'
import { ensureSchema, listPublishedPosts } from '../_lib/posts-repo.js'
import { defineHandler } from '../_lib/handler.js'

// getPublishedPosts — the public blog listing's read. No actingUser
// required; this is the one read the mock never gated at all.
export default defineHandler({
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const posts = await listPublishedPosts(db)
		res.status(200).json(posts)
	},
})
