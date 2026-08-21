// hasPermission is imported from the same file the frontend uses
// (src/constants/roles.js) — one source of truth for the permission matrix,
// not a second copy that could drift between client and server.
import { hasPermission } from '../../src/constants/roles.js'
import { getSessionToken, verifySession } from './auth.js'

// Verifies the JWT carried in the httpOnly session cookie and returns the
// identity it certifies — {id, name, role}, the same shape every caller
// below already expected back when this parsed an unverified client
// header. That's what changed: the identity is now backed by a real login
// (see api/auth/login.js), not asserted by the client.
export function getActingUser(req) {
	const token = getSessionToken(req)
	if (!token) return null
	try {
		const payload = verifySession(token)
		return { id: payload.sub, name: payload.name, role: payload.role }
	} catch {
		return null
	}
}

// post is the camelCase Post shape (rowToPost's output) everywhere this is
// called — same shape the original mock's isOwner checked (post.authorId),
// not a raw DB row.
export function isOwner(actingUser, post) {
	return post.authorId === actingUser.id
}

export function assertCanEditPost(actingUser, post) {
	const canEditAny = hasPermission(actingUser.role, 'editAnyPost')
	const canEditOwn = hasPermission(actingUser.role, 'editOwnPost') && isOwner(actingUser, post)
	if (!canEditAny && !canEditOwn) {
		const err = new Error('Not authorized to edit this post')
		err.status = 403
		throw err
	}
}

export function assertCanDeletePost(actingUser, post) {
	if (!hasPermission(actingUser.role, 'softDelete')) {
		const err = new Error('Not authorized to delete posts')
		err.status = 403
		throw err
	}
	const canDeleteAny = hasPermission(actingUser.role, 'editAnyPost')
	const canDeleteOwn = isOwner(actingUser, post)
	if (!canDeleteAny && !canDeleteOwn) {
		const err = new Error('Not authorized to delete this post')
		err.status = 403
		throw err
	}
}

export { hasPermission }
