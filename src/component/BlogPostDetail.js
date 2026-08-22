import { useEffect, useMemo, useState, lazy, Suspense } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as postService from '../services/postService'
import Seo from './Seo'

// Lazy-loaded so TipTap's bundle is only fetched by visitors who open an
// individual post — never by the /blog listing or any other public page.
const BlogPostContent = lazy(() => import('./BlogPostContent'))

function BlogPostDetail() {
	const { slug } = useParams()
	const [status, setStatus] = useState('loading')
	const [post, setPost] = useState(null)
	// Categories are managed live from the CMS (see PostEditor.js), not a
	// hardcoded constant — fetched here the same way Blog.js does, since this
	// page can be reached directly without ever having rendered the listing.
	const [categories, setCategories] = useState([])

	useEffect(() => {
		let cancelled = false
		setStatus('loading')
		;(async () => {
			try {
				const [found, categoryList] = await Promise.all([
					postService.getPublishedPostBySlug(slug),
					postService.listCategories(),
				])
				if (cancelled) return
				setCategories(categoryList)
				if (found) {
					setPost(found)
					setStatus('found')
				} else {
					setStatus('not-found')
				}
			} catch (err) {
				if (!cancelled) setStatus('error')
			}
		})()
		// Guards against a slow response for a slug the user has already
		// navigated away from overwriting state for the new one — a real race
		// the synchronous mock never had.
		return () => {
			cancelled = true
		}
	}, [slug])

	const categoryById = useMemo(() => Object.fromEntries(categories.map((c) => [c.id, c])), [categories])

	if (status === 'loading') {
		return (
			<div className='blog-page'>
				<section className='blog-detail-status'>
					<p>Loading article…</p>
				</section>
			</div>
		)
	}

	if (status === 'not-found' || status === 'error') {
		return (
			<div className='blog-page'>
				<section className='blog-detail-status'>
					<h1>{status === 'not-found' ? 'Article not found' : 'Something went wrong'}</h1>
					<p>
						{status === 'not-found'
							? "We couldn't find the article you're looking for."
							: 'Please try again shortly.'}
					</p>
					<Link to='/blog' className='blog-detail-back'>
						← Back to Insights & Strategies
					</Link>
				</section>
			</div>
		)
	}

	return (
		<div className='blog-page'>
			<Seo title={`${post.title} - TechTicks Blog`} description={post.excerpt} />
			<section className='blog-detail-hero'>
				<Link to='/blog' className='blog-detail-back'>
					← Back to Insights & Strategies
				</Link>

				{post.categoryIds.length > 0 && (
					<div className='blog-detail-categories'>
						{post.categoryIds.map((id) => (
							<span key={id} className='blog-tag'>
								{categoryById[id]?.name || id}
							</span>
						))}
					</div>
				)}

				<h1>{post.title}</h1>
				<div className='blog-meta'>
					<span>{post.authorName}</span>
					<span className='dot'>·</span>
					<span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
				</div>
			</section>

			{post.featuredImage && (
				<div className='blog-detail-image'>
					<img src={post.featuredImage} alt={post.title} />
				</div>
			)}

			<section className='blog-detail-content'>
				<Suspense fallback={<p className='blog-detail-status'>Loading content…</p>}>
					<BlogPostContent postId={post.id} content={post.content} />
				</Suspense>

				{post.tags?.length > 0 && (
					<div className='blog-detail-tags'>
						{post.tags.map((tag) => (
							<span key={tag} className='blog-detail-tag'>
								{tag}
							</span>
						))}
					</div>
				)}
			</section>
		</div>
	)
}

export default BlogPostDetail
