import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import portfolio1 from '../component/images/portfolio-Picture/1.png'
import portfolio2 from '../component/images/portfolio-Picture/2.png'
import portfolio3 from '../component/images/portfolio-Picture/3.png'
import portfolio4 from '../component/images/portfolio-Picture/4.png'
import portfolio5 from '../component/images/portfolio-Picture/5.png'
import portfolio6 from '../component/images/portfolio-Picture/6.png'

gsap.registerPlugin(ScrollTrigger)

function Portfolio() {
	const sectionRef = useRef()

	const horizontalRef = useRef()

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const mm = gsap.matchMedia()

			// ✅ Only run on large screens
			mm.add('(min-width: 1024px)', () => {
				const totalWidth = horizontalRef.current.scrollWidth

				gsap.to(horizontalRef.current, {
					x: -(totalWidth - window.innerWidth),
					ease: 'none',
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top top',
						end: () => `+=${totalWidth}`,
						scrub: 1.5,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true,
					},
				})
			})

			return () => mm.revert()
		}, sectionRef)

		return () => ctx.revert()
	}, [])

	return (
		<section
			className='portfolioPage'
			ref={sectionRef}>
			<div
				className='portfolioPage-horizontal'
				ref={horizontalRef}>
				<div className='portfolioPage-container'>
					<div className='main-content'>
						<div className='heading p-m-heading'>
							<h1>
								<span>From</span>
								<span>Store</span>
								<span>Design</span>
								<span>To</span>
								<span>Sales</span>
								<span>Growth,</span>
								<span>We</span>
								<span>Handle it</span>
								<span>All.</span>
							</h1>
						</div>
					</div>
				</div>
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>Advertising</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio6}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>Click-to-Conversion Logic</h3>
							<p>
								The core of this design system is the seamless
								translation of user behavior into actionable
								growth metrics. This layout prioritizes the
								visual relationship between traffic quality and
								listing optimization, using a sophisticated
								dark-mode aesthetic to reduce cognitive load
								while managing complex datasets.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								By integrating shaded performance bands and
								color-coded trend lines, the UI empowers account
								managers , turning abstract percentages into a
								tangible roadmap for brand scaling.
							</p>
							<p>
								The design utilizes high-fidelity charting to
								highlight industry standards like ACOS and
								TACOS.
							</p>
						</div>
					</div>
				</div>
				{/** 2nd card */}
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>PPC Campaigns</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio2}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>Performance-Driven Advertising</h3>
							<p>
								By running targeted PPC campaigns that boosted
								keyword rankings, organic visibility compounded
								over time, resulting in $317.3K in organic sales
								and ~3,996 organic orders within just 30 days.
								This is the mark of a sustainable Amazon growth
								strategy where every ad dollar works twice.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								When the majority of revenue flows organically,
								it signals that paid advertising has done its
								real job, not just driving sales, but building
								lasting ranking authority.
							</p>
							<p>
								With 60% of total revenue coming from organic
								channels, this breakdown reflects a PPC strategy
								that was built to scale, not just spend.
							</p>
						</div>
					</div>
				</div>
				{/** 3rd card */}
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>Ecommerce</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio3}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>Strategic Sales & Spend Architecture</h3>
							<p>
								Throwing money at ads is easy. Controlling where
								every dollar goes and ensuring it comes back
								with returns, is a strategy. Throughout this
								30-day period, ad spend was managed with daily
								precision, ensuring that budget increases were
								always matched by proportional PPC sales growth,
								with zero runaway spend events or ACOS blowouts.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								What this chart proves is disciplined budget
								management at scale. As spend was scaled on
								high-performing days, PPC sales followed,
								peaking above $9K in mid-May while maintaining a
								healthy spend-to-revenue ratio.
							</p>
							<p>
								This is not accidental. It's the result of
								continuous campaign monitoring, bid adjustments,
								and keyword-level optimization that ensures
								every dollar spent is working as hard as
								possible to generate profitable returns.
							</p>
						</div>
					</div>
				</div>
				{/** 4th card */}
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>Advertising</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio4}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>Performance Analytics Mastery</h3>
							<p>
								Generating $565,387.44 in total sales from
								$127,502.73 in ad spend tells one clear story,
								this campaign was built for profitability, not
								just visibility. With an ACOS of 22.55% and
								7,147 orders delivered, every campaign decision
								was driven by data, focused on maximizing
								returns while keeping costs firmly under
								control.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								What this period from May 13 to June 6
								demonstrates is the power of sustained,
								strategic campaign management. A 22.55% ACOS in
								a competitive marketplace is not luck, it's the
								result of continuous keyword harvesting,
								negative keyword management, bid optimization,
								and campaign structure that keeps profitable
								targets front and center while eliminating
								wasted spend.
							</p>
						</div>
					</div>
				</div>
				{/** 5th card */}
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>Ecommerce</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio5}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>Sales Snapshot — 12 Days, Real Numbers</h3>
							<p>
								In just 12 days (June 1–12, 2025), the store
								generated $319,423.80 in ordered product sales
								across 4,367 units and 654 order items, with an
								average sale value of $79.60 per order. These
								are not projected numbers or estimates. This is
								real marketplace revenue captured in a single
								snapshot, reflecting what a well-structured
								Amazon presence delivers when traffic,
								conversion, and fulfillment all work together.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								What makes this period significant is the
								consistency of daily sales volume across both
								units and revenue. Even through natural
								marketplace fluctuations, the baseline held
								strong, a direct result of maintaining ranking
								positions earned through strategic PPC
								investment, keeping the listing fully optimized,
								and ensuring the product stayed competitive on
								price and availability. Twelve days of steady,
								high-volume sales like this is the compounding
								reward of getting the fundamentals right from
								day one.
							</p>
						</div>
					</div>
				</div>
				<div className='portfolioPage-container'>
					{/* Heading */}
					<h2 className='portfolioPage-heading'>UI/UX Design</h2>

					{/* Main Card */}
					<div className='portfolioPage-card'>
						<img
							src={portfolio1}
							alt=''
						/>
					</div>

					{/* Bottom Content */}
					<div className='portfolioPage-content'>
						<div className='portfolioPage-left'>
							<h3>
								Landing Page That Converts From the First Scroll
							</h3>
							<p>
								A landing page has just seconds to communicate
								value and this one does it instantly. Built for
								talkdonttext, the hero section leads with a
								bold, emotionally resonant headline that speaks
								directly to the target audience, students
								looking to connect, grow, and make the most of
								campus life. With clear CTAs like "Watch Demo"
								and "Get the App" placed front and center, the
								page is engineered to move visitors toward
								action from the very first scroll.
							</p>
						</div>

						<div className='portfolioPage-right'>
							<p>
								Every element on this page was intentionally
								chosen to build trust and drive conversions. The
								playful 3D characters and vibrant visual
								language immediately communicate the fun, social
								nature of the platform, making the brand feel
								approachable and relevant to a young audience. A
								clean navigation with sections like About Us,
								How it Works, Testimonials, and FAQs ensures
								that hesitant visitors have every reason they
								need to stay, explore, and ultimately convert,
								turning a casual visit into a sign-up.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
