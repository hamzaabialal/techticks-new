import { getDb } from '../_lib/db.js'
import { ensureSchema, listPosts, insertPost } from '../_lib/posts-repo.js'
import { ensureUniqueSlug } from '../_lib/slug.js'
import { getActingUser, hasPermission } from '../_lib/permissions.js'
import { defineHandler, unauthorized } from '../_lib/handler.js'

function forbidden(message) {
	const err = new Error(message)
	err.status = 403
	throw err
}

export default defineHandler({
	// getAllPosts — visibility is computed here, server-side, rather than
	// trusted from the client, via the same generic permission check every
	// other route uses. Scoped to editAnyPost so it stays correct if a
	// second, more restricted role is ever reintroduced.
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const includeDeleted = req.query.includeDeleted === 'true'
		const canSeeAll = hasPermission(actingUser.role, 'editAnyPost')
		const posts = await listPosts(db, { includeDeleted, authorId: canSeeAll ? null : actingUser.id })
		res.status(200).json(posts)
	},

	// createPost — always created as DRAFT, authorId = actingUser.id, same as
	// the mock. Slug uniqueness is enforced here (§7a of postService.js), not
	// trusted from the client either.
	POST: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		if (!hasPermission(actingUser.role, 'createPost')) forbidden('Not authorized to create posts')

		const fields = req.body || {}
		const now = new Date().toISOString()
		const slug = await ensureUniqueSlug(db, fields.slug || 'post')
		const post = {
			id: `post_${Date.now()}`,
			slug,
			title: fields.title || '',
			excerpt: fields.excerpt || '',
			content: fields.content || '',
			featuredImage: fields.featuredImage || null,
			categoryIds: fields.categoryIds || [],
			tags: fields.tags || [],
			status: 'DRAFT',
			authorId: actingUser.id,
			authorName: actingUser.name,
			reviewerNote: null,
			isDeleted: false,
			createdAt: now,
			updatedAt: now,
			publishedAt: null,
		}
		await insertPost(db, post)
		res.status(201).json(post)
	},
})
