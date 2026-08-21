import { STATUS_TRANSITIONS } from '../../../src/constants/postStatus.js'
import { getDb } from '../../_lib/db.js'
import { ensureSchema, findPostById, updatePostRow } from '../../_lib/posts-repo.js'
import { getActingUser, hasPermission, assertCanEditPost, assertCanDeletePost } from '../../_lib/permissions.js'
import { defineHandler, notFound, unauthorized } from '../../_lib/handler.js'

// Consolidates what were three separate one-route files (restore, status,
// trash) into a single dynamic-segment function — Vercel's Hobby plan caps a
// deployment at 12 Serverless Functions (one per api/ file), and this
// project was about to cross that ceiling. The URLs postService.js already
// calls (`/posts/:id/restore`, `/posts/:id/status`, `/posts/:id/trash`) are
// unchanged — [action] just captures that final segment instead of it
// picking a literal filename.

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

function notFoundAction(action) {
	const err = new Error(`Unknown post action: ${action}`)
	err.status = 404
	throw err
}

// restorePost / softDeletePost — same authorization (assertCanDeletePost).
async function setDeleted(db, post, isDeleted) {
	await updatePostRow(db, post.id, { isDeleted, updatedAt: new Date().toISOString() })
	return findPostById(db, post.id)
}

// transitionStatus — a single endpoint encoding the whole workflow via
// STATUS_TRANSITIONS (imported from src/constants/postStatus.js, the same
// file the frontend uses): the legal-transitions table is the source of
// truth, not a family of per-action endpoints.
async function transitionStatus(db, actingUser, post, body) {
	const { nextStatus, reviewerNote } = body || {}
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
	return findPostById(db, post.id)
}

export default defineHandler({
	POST: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		const post = await findPostById(db, req.query.id)
		if (!post) return notFound(`Post not found: ${req.query.id}`)

		let updated
		switch (req.query.action) {
			case 'restore':
				assertCanDeletePost(actingUser, post)
				updated = await setDeleted(db, post, false)
				break
			case 'trash':
				assertCanDeletePost(actingUser, post)
				updated = await setDeleted(db, post, true)
				break
			case 'status':
				updated = await transitionStatus(db, actingUser, post, req.body)
				break
			default:
				notFoundAction(req.query.action)
		}

		res.status(200).json(updated)
	},
})
