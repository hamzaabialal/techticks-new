import { getDb } from '../../_lib/db.js'
import { ensureSchema, listPublishedPosts, findPublishedPostBySlug } from '../../_lib/posts-repo.js'
import { defineHandler, notFound } from '../../_lib/handler.js'

// Consolidates what were two separate files (the listing at
// /posts/published and the single-post read at /posts/published/:slug)
// into one optional-catch-all route — see the sibling [action].js for why:
// Vercel's Hobby plan caps a deployment at 12 Serverless Functions. Both
// URLs postService.js already calls are unchanged; [[...slug]] just matches
// either shape instead of two separate filenames each matching one.
//
// No actingUser required on either read — the public blog's listing and
// detail pages, never gated even in the original mock.
export default defineHandler({
	GET: async (req, res) => {
		const db = getDb()
		await ensureSchema(db)

		const segments = req.query.slug
		const slug = Array.isArray(segments) ? segments[0] : segments

		if (!slug) {
			const posts = await listPublishedPosts(db)
			res.status(200).json(posts)
			return
		}

		const post = await findPublishedPostBySlug(db, slug)
		if (!post) return notFound(`Published post not found for slug: ${slug}`)
		res.status(200).json(post)
	},
})
