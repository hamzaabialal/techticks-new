import { STATUS_TRANSITIONS } from '../../../src/constants/postStatus.js'
import { getDb } from '../../_lib/db.js'
import { ensureSchema, findPostById, updatePostRow } from '../../_lib/posts-repo.js'
import { getActingUser, hasPermission, assertCanEditPost } from '../../_lib/permissions.js'
import { defineHandler, notFound, unauthorized } from '../../_lib/handler.js'

function illegalTransition(from, to) {
	const err = new Error(`Illegal transition from ${from} to ${to}`)
	err.status = 400
	throw err
}

function forbidden(message) {
	const err = new Error(message)
	err.status = 403
	throw err
}

// transitionStatus — a single endpoint encoding the whole workflow via
// STATUS_TRANSITIONS (imported from src/constants/postStatus.js, the same
// file the frontend uses), exactly matching the mock's approach: the legal-
// transitions table is the source of truth, not a family of per-action
// endpoints.
export default defineHandler({
	POST: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)

		const { nextStatus, reviewerNote } = req.body || {}
		const legalMoves = STATUS_TRANSITIONS[post.status] || []
		const move = legalMoves.find((m) => m.to === nextStatus)
		if (!move) illegalTransition(post.status, nextStatus)

		if (move.action === 'submitForReview') {
			assertCanEditPost(actingUser, post)
		} else if (!hasPermission(actingUser.role, move.requiredPermission)) {
			forbidden(`Role ${actingUser.role} cannot perform "${move.action}"`)
		}

		const updatedAt = new Date().toISOString()
		const patch = { status: nextStatus, updatedAt }
		if (move.action === 'requestChanges') patch.reviewerNote = reviewerNote || null
		if (move.action === 'publish') patch.publishedAt = updatedAt

		await updatePostRow(db, post.id, patch)
		const updated = await findPostById(db, post.id)
		res.status(200).json(updated)
	},
})
