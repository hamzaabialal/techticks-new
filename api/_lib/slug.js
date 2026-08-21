import { slugExists, categorySlugExists } from './posts-repo.js'

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

// String -> slug, same rule PostEditor.js's own slugify() uses for post
// titles — kept here too since categories need the identical transform
// server-side and this file has no client bundle to share it with.
export function slugify(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

export async function ensureUniqueCategorySlug(db, candidateSlug) {
	const base = candidateSlug || 'category'
	if (!(await categorySlugExists(db, base))) return base
	let suffix = 2
	// eslint-disable-next-line no-await-in-loop
	while (await categorySlugExists(db, `${base}-${suffix}`)) {
		suffix += 1
	}
	return `${base}-${suffix}`
}
