export const POST_STATUS = {
	DRAFT: 'DRAFT',
	REVIEW: 'REVIEW',
	PUBLISHED: 'PUBLISHED',
}

// Legal status transitions, expressed as data so a future rule change is an
// edit here, not a new function + new call sites. Deliberately minimal —
// only the transitions the product spec calls for. `requiredPermission`
// refers to a key in ROLE_PERMISSIONS (see constants/roles.js); the
// DRAFT -> REVIEW move has none because "submit for review" is an
// ownership-based check (can this user edit this post at all), handled by
// postService rather than a flat role permission.
export const STATUS_TRANSITIONS = {
	[POST_STATUS.DRAFT]: [{ to: POST_STATUS.REVIEW, action: 'submitForReview' }],
	[POST_STATUS.REVIEW]: [
		{ to: POST_STATUS.DRAFT, action: 'requestChanges', requiredPermission: 'review' },
		{ to: POST_STATUS.PUBLISHED, action: 'publish', requiredPermission: 'publish' },
	],
	[POST_STATUS.PUBLISHED]: [],
}
