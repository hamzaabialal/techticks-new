import { getDb } from '../_lib/db.js'
import { ensureSchema, listCategoryRows, insertCategoryRow, deleteCategoryRow } from '../_lib/posts-repo.js'
import { ensureUniqueCategorySlug, slugify } from '../_lib/slug.js'
import { getActingUser, hasPermission } from '../_lib/permissions.js'
import { defineHandler, unauthorized } from '../_lib/handler.js'

function forbidden(message) {
	const err = new Error(message)
	err.status = 403
	throw err
}

function badRequest(message) {
	const err = new Error(message)
	err.status = 400
	throw err
}

// Create and delete live on this same file/route (POST and DELETE on
// /api/categories, DELETE taking ?id= as a query param) rather than a
// separate api/categories/[id].js file — Vercel's Hobby plan caps a
// deployment at 12 Serverless Functions, and this project is already close
// to that ceiling (see the [id]/[action].js and posts/published consolidation
// history).
export default defineHandler({
	// listCategories — public read, no actingUser required, same as before.
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const categories = await listCategoryRows(db)
		res.status(200).json(categories)
	},

	POST: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		if (!hasPermission(actingUser.role, 'manageSettings')) forbidden('Not authorized to manage categories')

		const name = (req.body?.name || '').trim()
		if (!name) badRequest('Category name is required')

		const slug = await ensureUniqueCategorySlug(db, slugify(name))
		const category = { id: `cat_${Date.now()}`, name, slug }
		await insertCategoryRow(db, category)
		res.status(201).json(category)
	},

	DELETE: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const actingUser = getActingUser(req)
		if (!actingUser) return unauthorized('Not authenticated')
		if (!hasPermission(actingUser.role, 'manageSettings')) forbidden('Not authorized to manage categories')

		const id = req.query.id
		if (!id) badRequest('id query parameter is required')
		await deleteCategoryRow(db, id)
		res.status(204).end()
	},
})
