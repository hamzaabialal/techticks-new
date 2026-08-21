// Schema creation is idempotent (CREATE TABLE IF NOT EXISTS) and cheap, but
// still gated to once per warm serverless instance rather than run on every
// request.
let schemaEnsured = false

export async function ensureSchema(db) {
	if (schemaEnsured) return
	await db.batch(
		[
			`CREATE TABLE IF NOT EXISTS categories (
				id   TEXT PRIMARY KEY,
				name TEXT NOT NULL,
				slug TEXT NOT NULL UNIQUE
			)`,
			`CREATE TABLE IF NOT EXISTS posts (
				id             TEXT PRIMARY KEY,
				slug           TEXT NOT NULL UNIQUE,
				title          TEXT NOT NULL DEFAULT '',
				excerpt        TEXT NOT NULL DEFAULT '',
				content        TEXT NOT NULL DEFAULT '',
				featured_image TEXT,
				category_ids   TEXT NOT NULL DEFAULT '[]',
				status         TEXT NOT NULL DEFAULT 'DRAFT',
				author_id      TEXT NOT NULL,
				author_name    TEXT NOT NULL,
				reviewer_note  TEXT,
				is_deleted     INTEGER NOT NULL DEFAULT 0,
				created_at     TEXT NOT NULL,
				updated_at     TEXT NOT NULL,
				published_at   TEXT
			)`,
			`CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug)`,
			`CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status)`,
			`CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author_id)`,
		],
		'write',
	)
	schemaEnsured = true
}

// Row (snake_case, JSON-as-text) <-> Post (camelCase, real object/array) —
// the API boundary is the only place this mapping happens. Everything on
// either side of it (postService.js's callers; the SQL) deals in its own
// native shape.
export function rowToPost(row) {
	return {
		id: row.id,
		slug: row.slug,
		title: row.title,
		excerpt: row.excerpt,
		content: JSON.parse(row.content),
		featuredImage: row.featured_image ?? null,
		categoryIds: JSON.parse(row.category_ids),
		status: row.status,
		authorId: row.author_id,
		authorName: row.author_name,
		reviewerNote: row.reviewer_note ?? null,
		isDeleted: Boolean(row.is_deleted),
		createdAt: row.created_at,
		updatedAt: row.updated_at,
		publishedAt: row.published_at ?? null,
	}
}

const COLUMN_BY_FIELD = {
	slug: 'slug',
	title: 'title',
	excerpt: 'excerpt',
	content: 'content',
	featuredImage: 'featured_image',
	categoryIds: 'category_ids',
	status: 'status',
	authorId: 'author_id',
	authorName: 'author_name',
	reviewerNote: 'reviewer_note',
	isDeleted: 'is_deleted',
	createdAt: 'created_at',
	updatedAt: 'updated_at',
	publishedAt: 'published_at',
}

function fieldToColumnValue(field, value) {
	if (field === 'content' || field === 'categoryIds') return JSON.stringify(value)
	if (field === 'isDeleted') return value ? 1 : 0
	return value
}

export async function findPostById(db, id) {
	const result = await db.execute({ sql: 'SELECT * FROM posts WHERE id = ?', args: [id] })
	return result.rows[0] ? rowToPost(result.rows[0]) : null
}

export async function findPostBySlug(db, slug) {
	const result = await db.execute({ sql: 'SELECT * FROM posts WHERE slug = ?', args: [slug] })
	return result.rows[0] ? rowToPost(result.rows[0]) : null
}

export async function findPublishedPostBySlug(db, slug) {
	const result = await db.execute({
		sql: `SELECT * FROM posts WHERE slug = ? AND status = 'PUBLISHED' AND is_deleted = 0`,
		args: [slug],
	})
	return result.rows[0] ? rowToPost(result.rows[0]) : null
}

// authorId: pass null for "no author filter" (caller may see everything);
// pass a specific id to restrict to that author's own posts. The decision
// of *which* to pass is a permission call the route handler makes via
// hasPermission — this function only ever executes the query it's given.
export async function listPosts(db, { includeDeleted = false, authorId = null } = {}) {
	const conditions = []
	const args = []
	if (!includeDeleted) conditions.push('is_deleted = 0')
	if (authorId) {
		conditions.push('author_id = ?')
		args.push(authorId)
	}
	const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : ''
	const result = await db.execute({ sql: `SELECT * FROM posts ${where} ORDER BY updated_at DESC`, args })
	return result.rows.map(rowToPost)
}

export async function listPublishedPosts(db) {
	const result = await db.execute(
		`SELECT * FROM posts WHERE status = 'PUBLISHED' AND is_deleted = 0 ORDER BY published_at DESC`,
	)
	return result.rows.map(rowToPost)
}

export async function slugExists(db, slug, excludeId = null) {
	const result = await db.execute({
		sql: 'SELECT 1 FROM posts WHERE slug = ? AND id != ? LIMIT 1',
		args: [slug, excludeId || ''],
	})
	return result.rows.length > 0
}

export async function insertPost(db, post) {
	const columns = Object.keys(COLUMN_BY_FIELD)
	const sql = `INSERT INTO posts (${columns.map((f) => COLUMN_BY_FIELD[f]).join(', ')}, id)
		VALUES (${columns.map(() => '?').join(', ')}, ?)`
	const args = [...columns.map((f) => fieldToColumnValue(f, post[f])), post.id]
	await db.execute({ sql, args })
	return post
}

export async function updatePostRow(db, id, patch) {
	const fields = Object.keys(patch).filter((f) => COLUMN_BY_FIELD[f])
	if (fields.length === 0) return
	const setClause = fields.map((f) => `${COLUMN_BY_FIELD[f]} = ?`).join(', ')
	const args = [...fields.map((f) => fieldToColumnValue(f, patch[f])), id]
	await db.execute({ sql: `UPDATE posts SET ${setClause} WHERE id = ?`, args })
}

export async function deletePostRow(db, id) {
	await db.execute({ sql: 'DELETE FROM posts WHERE id = ?', args: [id] })
}

export async function listCategoryRows(db) {
	const result = await db.execute('SELECT id, name, slug FROM categories ORDER BY name')
	return result.rows.map((row) => ({ id: row.id, name: row.name, slug: row.slug }))
}
