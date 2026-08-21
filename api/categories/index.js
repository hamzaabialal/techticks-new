import { getDb } from '../_lib/db.js'
import { ensureSchema, listCategoryRows } from '../_lib/posts-repo.js'
import { defineHandler } from '../_lib/handler.js'

// listCategories — the category reference data moved into Turso alongside
// posts, per the confirmed sub-phase 1 scope. No actingUser required, same
// as the mock (categories were always a public read).
export default defineHandler({
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)
		const categories = await listCategoryRows(db)
		res.status(200).json(categories)
	},
})
