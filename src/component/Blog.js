import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as postService from '../services/postService'

// Same fade-up + stagger pattern contactUs.js uses — one shared animation
// language across the site, not a one-off invented here.
const heroReveal = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const gridContainer = {
	hidden: {},
	show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const cardReveal = {
	hidden: { opacity: 0, y: 28 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

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

	// Categories are managed live from the CMS now (see PostEditor.js), not a
	// hardcoded constant — this list is already fetched above for the filter
	// buttons, so the id->name lookup for each card's tag pill is built from
	// the same data instead of a second, separately-sourced copy.
	const categoryById = useMemo(() => Object.fromEntries(categories.map((c) => [c.id, c])), [categories])

	return (
		<div className='blog-page'>
			<motion.section
				className='blog-hero'
				initial='hidden'
				animate='show'
				variants={gridContainer}>
				<motion.h1 variants={heroReveal}>Insights & Strategies</motion.h1>
				<motion.p variants={heroReveal}>
					Real tactics from scaling 380+ ecommerce brands across Amazon, TikTok Shop, and Shopify.
				</motion.p>
			</motion.section>

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
					<motion.div
						className='blog-grid'
						variants={gridContainer}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.1 }}>
						{visiblePosts.map((post) => (
							<motion.div key={post.id} variants={cardReveal}>
								<Link to={`/blog/${post.slug}`} className='blog-card'>
									{post.featuredImage && (
										<div className='blog-card-image-wrap'>
											<img src={post.featuredImage} alt='' className='blog-card-image' loading='lazy' />
										</div>
									)}
									<span className='blog-tag'>{categoryById[post.categoryIds[0]]?.name || ''}</span>
									<h2>{post.title}</h2>
									<p>{post.excerpt}</p>
									<div className='blog-meta'>
										<span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
									</div>
								</Link>
							</motion.div>
						))}
					</motion.div>
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
