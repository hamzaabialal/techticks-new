// One-off, manually-run migration. NOT part of the deployed API and not run
// automatically on any deploy. Seeds Turso with the same categories and
// posts already live in the frontend's mock data, so the app doesn't start
// empty once postService.js switches from the mock to this database.
//
// Usage (from the techticks-new/ directory):
//   node --env-file=.env scripts/migrate-seed-data.mjs
// (or export TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in your shell first, if
// your Node version predates --env-file)
//
// Safe to re-run: schema creation is idempotent, and INSERT OR IGNORE means
// re-running never duplicates or errors on rows that already exist.

import { createClient } from '@libsql/client'
import { CATEGORIES } from '../src/constants/categories.js'
import { posts } from '../src/services/mockPostsData.js'

const db = createClient({
	url: process.env.TURSO_DATABASE_URL,
	authToken: process.env.TURSO_AUTH_TOKEN,
})

async function ensureSchema() {
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
}

async function seedCategories() {
	for (const category of CATEGORIES) {
		await db.execute({
			sql: 'INSERT OR IGNORE INTO categories (id, name, slug) VALUES (?, ?, ?)',
			args: [category.id, category.name, category.slug],
		})
	}
	console.log(`Seeded ${CATEGORIES.length} categories.`)
}

async function seedPosts() {
	for (const post of posts) {
		await db.execute({
			sql: `INSERT OR IGNORE INTO posts
				(id, slug, title, excerpt, content, featured_image, category_ids, status,
				 author_id, author_name, reviewer_note, is_deleted, created_at, updated_at, published_at)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			args: [
				post.id,
				post.slug,
				post.title,
				post.excerpt,
				JSON.stringify(post.content),
				post.featuredImage,
				JSON.stringify(post.categoryIds),
				post.status,
				post.authorId,
				post.authorName,
				post.reviewerNote,
				post.isDeleted ? 1 : 0,
				post.createdAt,
				post.updatedAt,
				post.publishedAt,
			],
		})
	}
	console.log(`Seeded ${posts.length} posts.`)
}

async function main() {
	if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
		console.error('Missing TURSO_DATABASE_URL / TURSO_AUTH_TOKEN in the environment. Aborting.')
		process.exit(1)
	}
	await ensureSchema()
	await seedCategories()
	await seedPosts()
	console.log('Migration complete.')
}

main().catch((err) => {
	console.error('Migration failed:', err)
	process.exit(1)
})
