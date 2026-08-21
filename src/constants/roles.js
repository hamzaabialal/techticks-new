// The permission matrix, imported on both sides: the frontend uses it to
// show/hide controls, and api/_lib/permissions.js imports this exact file as
// the server's enforcement source (see assertCanEditPost/assertCanDeletePost
// and each api/posts/* route) — one source of truth, not a client-side copy
// that could drift from what the server actually enforces.
//
// There is only one real user going forward — Admin — so this collapses to a
// single role with every capability true, rather than being removed outright:
// every consumer (RoleGate, assertCanEditPost/assertCanDeletePost, the API
// route handlers) already derives its answer from this map generically, so
// collapsing it here makes the whole system permissive with no other file
// needing to change. Re-extending to a second role later is a one-file edit.
export const ROLES = {
	ADMIN: 'ADMIN',
}

export const ROLE_PERMISSIONS = {
	[ROLES.ADMIN]: {
		createPost: true,
		editAnyPost: true,
		editOwnPost: true,
		review: true,
		publish: true,
		manageUsers: true,
		manageSettings: true,
		softDelete: true,
		permanentDelete: true,
		manageMedia: true,
	},
}

export function hasPermission(role, action) {
	return Boolean(ROLE_PERMISSIONS[role]?.[action])
}
