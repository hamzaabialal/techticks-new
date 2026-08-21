import { getDb } from '../_lib/db.js'
import { ensureSchema, findPostById, updatePostRow, deletePostRow } from '../_lib/posts-repo.js'
import { ensureUniqueSlug } from '../_lib/slug.js'
import { getActingUser, hasPermission, assertCanEditPost } from '../_lib/permissions.js'
import { defineHandler, notFound, unauthorized } from '../_lib/handler.js'

function forbidden(message) {
	const err = new Error(message)
	err.status = 403
	throw err
}

export default defineHandler({
	// getPostById — returns the post regardless of author/status (no
	// visibility filtering on this one, only getAllPosts filters by
	// ownership), but does require a valid session — this previously had no
	// auth check at all, meaning any post, including an unpublished
	// Draft/Review one, was readable by anyone who knew its id.
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)
		res.status(200).json(post)
	},

	// updatePost — authorization via assertCanEditPost's generic permission +
	// ownership check. Slug uniqueness re-checked only if the patch actually
	// changes it.
	PATCH: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)
		assertCanEditPost(actingUser, post)

		const patch = { ...(req.body || {}) }
		if (patch.slug && patch.slug !== post.slug) {
			patch.slug = await ensureUniqueSlug(db, patch.slug, post.id)
		}
		patch.updatedAt = new Date().toISOString()
		await updatePostRow(db, post.id, patch)
		const updated = await findPostById(db, post.id)
		res.status(200).json(updated)
	},

	// permanentDeletePost — gated by the permanentDelete permission.
	DELETE: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		if (!hasPermission(actingUser.role, 'permanentDelete')) {
			forbidden('Not authorized to permanently delete posts')
		}
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)
		await deletePostRow(db, post.id)
		res.status(204).end()
	},
})
