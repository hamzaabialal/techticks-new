import { POST_STATUS } from '../constants/postStatus.js'

/**
 * @typedef {Object} Post
 * @property {string} id
 * @property {string} slug                      - unique, url-safe
 * @property {string} title
 * @property {string} excerpt
 * @property {string|Object} content             - '' for a never-touched post (TipTap
 *                                                  treats an empty string as an empty
 *                                                  document); a TipTap/ProseMirror JSON
 *                                                  document ({ type: 'doc', content: [...] })
 *                                                  once any content has been typed
 * @property {string|null} featuredImage         - URL placeholder; real upload arrives with a future mediaService
 * @property {string[]} categoryIds              - references categories.js, 1+ required
 * @property {'DRAFT'|'REVIEW'|'PUBLISHED'} status
 * @property {string} authorId
 * @property {string} authorName                 - denormalized; no user service yet
 * @property {string|null} reviewerNote          - set when Review -> Draft via Request Changes
 * @property {boolean} isDeleted                 - soft-delete flag
 * @property {string} createdAt                  - ISO date string
 * @property {string} updatedAt                  - ISO date string
 * @property {string|null} publishedAt           - ISO date string
 */

// Minimal valid TipTap/ProseMirror document wrapping a single paragraph of
// plain text — used only to migrate this file's seed content into the shape
// the real editor now produces. Nothing else needs this; the editor builds
// its own JSON from here on.
function paragraphDoc(text) {
	return { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text }] }] }
}

// In-memory mock data only — no localStorage, no backend. Resets on every
// page load by design, which keeps QA/role testing predictable (see the
// Phase 1 verification checklist). The CMS otherwise starts with fresh
// content; this seed exists only so the Draft/Review/Published workflow and
// per-role visibility rules have something to exercise end to end.
export const posts = [
	{
		id: 'post_1',
		slug: 'amazon-listing-rank-2025',
		title: 'How to Rank Your Amazon Listing in 2025',
		excerpt: 'A step-by-step breakdown of the strategies we use to push client listings to page one.',
		content: paragraphDoc('Full post content placeholder — replaced by the real editor output in a later phase.'),
		featuredImage: null,
		categoryIds: ['cat_amazon'],
		status: POST_STATUS.DRAFT,
		authorId: 'user_author_1',
		authorName: 'Sam Lui',
		reviewerNote: null,
		isDeleted: false,
		createdAt: '2026-08-01T09:00:00.000Z',
		updatedAt: '2026-08-01T09:00:00.000Z',
		publishedAt: null,
	},
	{
		id: 'post_2',
		slug: 'tiktok-shop-vs-amazon',
		title: 'TikTok Shop vs Amazon: Where Should You Sell First?',
		excerpt: 'Both platforms are booming, but the go-to-market strategy is completely different.',
		content: paragraphDoc('Full post content placeholder — replaced by the real editor output in a later phase.'),
		featuredImage: null,
		categoryIds: ['cat_tiktok_shop', 'cat_growth'],
		status: POST_STATUS.REVIEW,
		authorId: 'user_author_1',
		authorName: 'Sam Lui',
		reviewerNote: null,
		isDeleted: false,
		createdAt: '2026-08-03T09:00:00.000Z',
		updatedAt: '2026-08-05T14:30:00.000Z',
		publishedAt: null,
	},
	{
		id: 'post_3',
		slug: 'shopify-store-from-scratch',
		title: 'Building a High-Converting Shopify Store from Scratch',
		excerpt: 'From theme selection and speed optimization to post-purchase flows.',
		content: paragraphDoc('Full post content placeholder — replaced by the real editor output in a later phase.'),
		featuredImage: null,
		categoryIds: ['cat_shopify'],
		status: POST_STATUS.PUBLISHED,
		authorId: 'user_editor_1',
		authorName: 'Ali Malik',
		reviewerNote: null,
		isDeleted: false,
		createdAt: '2026-07-20T09:00:00.000Z',
		updatedAt: '2026-07-22T11:00:00.000Z',
		publishedAt: '2026-07-22T11:00:00.000Z',
	},
]
