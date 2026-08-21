import { slugExists } from './posts-repo.js'

// Same rule and suffix pattern as the mock's ensureUniqueSlug (-2, -3, ...),
// now checking against the real table instead of scanning an in-memory
// array. excludeId lets an update skip comparing a post against its own
// current row.
export async function ensureUniqueSlug(db, candidateSlug, excludeId = null) {
	const base = candidateSlug || 'post'
	if (!(await slugExists(db, base, excludeId))) return base
	let suffix = 2
	// eslint-disable-next-line no-await-in-loop
	while (await slugExists(db, `${base}-${suffix}`, excludeId)) {
		suffix += 1
	}
	return `${base}-${suffix}`
}
