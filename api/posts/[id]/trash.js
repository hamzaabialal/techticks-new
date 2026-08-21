import { getDb } from '../../_lib/db.js'
import { ensureSchema, findPostById, updatePostRow } from '../../_lib/posts-repo.js'
import { getActingUser, assertCanDeletePost } from '../../_lib/permissions.js'
import { defineHandler, notFound, unauthorized } from '../../_lib/handler.js'

// softDeletePost — authorization via assertCanDeletePost's generic permission
// + ownership check.
export default defineHandler({
	POST: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)
		assertCanDeletePost(actingUser, post)
		await updatePostRow(db, post.id, { isDeleted: true, updatedAt: new Date().toISOString() })
		const updated = await findPostById(db, post.id)
		res.status(200).json(updated)
	},
})
