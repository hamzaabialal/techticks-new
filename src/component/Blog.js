import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as postService from '../services/postService'
import { categoryById } from '../constants/categories'

function Blog() {
	const navigate = useNavigate()
	const [status, setStatus] = useState('loading')
	const [posts, setPosts] = useState([])
	const [categories, setCategories] = useState([])
	const [activeCategory, setActiveCategory] = useState('all')

	useEffect(() => {
		let cancelled = false
		;(async () => {
			try {
				const [publishedPosts, categoryList] = await Promise.all([
					postService.getPublishedPosts(),
					postService.listCategories(),
				])
				if (cancelled) return
				const sorted = publishedPosts
					.slice()
					.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
				setPosts(sorted)
				setCategories(categoryList)
				setStatus('ready')
			} catch (err) {
				if (!cancelled) setStatus('error')
			}
		})()
		return () => {
			cancelled = true
		}
	}, [])

	const visiblePosts =
		activeCategory === 'all' ? posts : posts.filter((post) => post.categoryIds.includes(activeCategory))

	return (
		<div className='blog-page'>
			<section className='blog-hero'>
				<h1>Insights & Strategies</h1>
				<p>Real tactics from scaling 380+ ecommerce brands across Amazon, TikTok Shop, and Shopify.</p>
			</section>

			<section className='blog-grid-section'>
				{status === 'ready' && categories.length > 0 && (
					<div className='blog-category-filter'>
						<button
							className={activeCategory === 'all' ? 'active' : ''}
							onClick={() => setActiveCategory('all')}>
							All
						</button>
						{categories.map((category) => (
							<button
								key={category.id}
								className={activeCategory === category.id ? 'active' : ''}
								onClick={() => setActiveCategory(category.id)}>
								{category.name}
							</button>
						))}
					</div>
				)}

				{status === 'loading' && <p className='blog-detail-status'>Loading articles…</p>}
				{status === 'error' && <p className='blog-detail-status'>Something went wrong loading articles.</p>}
				{status === 'ready' && visiblePosts.length === 0 && (
					<p className='blog-detail-status'>No articles published yet — check back soon.</p>
				)}

				{status === 'ready' && visiblePosts.length > 0 && (
					<div className='blog-grid'>
						{visiblePosts.map((post) => (
							<Link key={post.id} to={`/blog/${post.slug}`} className='blog-card'>
								<span className='blog-tag'>{categoryById[post.categoryIds[0]]?.name || ''}</span>
								<h2>{post.title}</h2>
								<p>{post.excerpt}</p>
								<div className='blog-meta'>
									<span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
								</div>
							</Link>
						))}
					</div>
				)}
			</section>

			<section className='blog-cta'>
				<h2>Ready to grow your brand?</h2>
				<p>Let's build something that actually moves the needle.</p>
				<button onClick={() => navigate('/contactUs')}>Book a Free Strategy Call</button>
			</section>
		</div>
	)
}

export default Blog
