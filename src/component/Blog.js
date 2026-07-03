import { useNavigate } from 'react-router-dom'

const posts = [
	{
		id: 1,
		tag: 'Amazon',
		title: 'How to Rank Your Amazon Listing in 2025',
		excerpt:
			'A step-by-step breakdown of the strategies we use to push client listings to page one — covering keyword research, backend indexing, and PPC synergy.',
		date: 'May 12, 2025',
		readTime: '6 min read',
	},
	{
		id: 2,
		tag: 'TikTok Shop',
		title: 'TikTok Shop vs Amazon: Where Should You Sell First?',
		excerpt:
			"Both platforms are booming, but the go-to-market strategy is completely different. Here's how we help brands decide which channel to prioritize.",
		date: 'Apr 28, 2025',
		readTime: '5 min read',
	},
	{
		id: 3,
		tag: 'Shopify',
		title: 'Building a High-Converting Shopify Store from Scratch',
		excerpt:
			'From theme selection and speed optimization to post-purchase flows — the full playbook we follow for every Shopify build.',
		date: 'Apr 10, 2025',
		readTime: '8 min read',
	},
	{
		id: 4,
		tag: 'Growth',
		title: '5 Metrics Every Ecommerce Brand Should Track Weekly',
		excerpt:
			'Most brands focus on revenue and ignore the leading indicators. These five numbers tell you whether growth is sustainable before it shows up in your bank account.',
		date: 'Mar 22, 2025',
		readTime: '4 min read',
	},
	{
		id: 5,
		tag: 'Amazon',
		title: 'Amazon PPC in 2025: What Still Works and What Doesn\'t',
		excerpt:
			'Ad costs are rising, but returns don\'t have to fall. We break down the campaign structures and bid strategies that are outperforming in the current landscape.',
		date: 'Mar 5, 2025',
		readTime: '7 min read',
	},
	{
		id: 6,
		tag: 'Branding',
		title: 'Why Your Product Photography is Killing Your Conversion Rate',
		excerpt:
			'Buyers can\'t touch your product — your images are doing the selling. Here\'s what separates listings that convert at 12% from those stuck at 4%.',
		date: 'Feb 18, 2025',
		readTime: '5 min read',
	},
]

const tagColors = {
	Amazon: '#f90',
	'TikTok Shop': '#69c9d0',
	Shopify: '#96bf48',
	Growth: '#7c5cbf',
	Branding: '#e05c5c',
}

function Blog() {
	const navigate = useNavigate()

	return (
		<div className='blog-page'>
			<section className='blog-hero'>
				<h1>Insights & Strategies</h1>
				<p>
					Real tactics from scaling 380+ ecommerce brands across Amazon,
					TikTok Shop, and Shopify.
				</p>
			</section>

			<section className='blog-grid-section'>
				<div className='blog-grid'>
					{posts.map((post) => (
						<article
							key={post.id}
							className='blog-card'>
							<span
								className='blog-tag'
								style={{ color: tagColors[post.tag] }}>
								{post.tag}
							</span>
							<h2>{post.title}</h2>
							<p>{post.excerpt}</p>
							<div className='blog-meta'>
								<span>{post.date}</span>
								<span className='dot'>·</span>
								<span>{post.readTime}</span>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className='blog-cta'>
				<h2>Ready to grow your brand?</h2>
				<p>Let's build something that actually moves the needle.</p>
				<button onClick={() => navigate('/contactUs')}>
					Book a Free Strategy Call
				</button>
			</section>
		</div>
	)
}

export default Blog
