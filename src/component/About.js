import { useEffect, useRef, useState } from 'react'
import founderimage1 from '../component/images/about-card1.png'
import founderimage2 from '../component/images/about-card2.png'
import { useNavigate } from 'react-router-dom'
import CtaCard from './Cta-card'
import Seo from './Seo'

function About() {
	const navigate = useNavigate()
	const StatsCounter = ({ end, duration = 2000 }) => {
		const [count, setCount] = useState(0)
		const ref = useRef()
		const [start, setStart] = useState(false)

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						setStart(true)
					}
				},
				{ threshold: 0.5 },
			)

			if (ref.current) observer.observe(ref.current)

			return () => observer.disconnect()
		}, [])

		useEffect(() => {
			if (!start) return

			let startTime
			const animate = (time) => {
				if (!startTime) startTime = time
				const progress = Math.min((time - startTime) / duration, 1)

				setCount(Math.floor(progress * end))

				if (progress < 1) {
					requestAnimationFrame(animate)
				}
			}

			requestAnimationFrame(animate)
		}, [start, end, duration])

		return <span ref={ref}>{count}+</span>
	}
	const useFadeInOnScroll = () => {
		const ref = useRef()

		useEffect(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('show')
						}
					})
				},
				{ threshold: 0.2 },
			)

			if (ref.current) observer.observe(ref.current)

			return () => observer.disconnect()
		}, [])

		return ref
	}
	const headingRef = useFadeInOnScroll()
	const statsRef = useFadeInOnScroll()
	const contentRef = useFadeInOnScroll()
	const chooseRef = useFadeInOnScroll()
	const foundersRef = useFadeInOnScroll()
	return (
		<div>
			<Seo
				title='About TechTicks, Ecommerce Agency Built by Operators, Not Marketers'
				description='TechTicks is a US-market e-commerce agency founded by Muhammad Athar with 6+ years operating brands on Amazon, TikTok Shop, Shopify, Walmart, eBay & Etsy. 80+ brands served.'
			/>
			<section
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<img
					src='/contactrectleft.png'
					alt=''
					className='leftrect-amazon'
				/>
				<img
					src='/contactrectright.png'
					alt=''
					className='rightrect-amazon'
				/>
				<div
					ref={headingRef}
					className='main-content fade-in '>
					<div className='about'>
						<div className='heading'>
							<h1>
								<span>We</span>
								<span>Built</span>
								<span>the</span>
								<span>Agency</span>
								<span>We</span>
								<span>Wished</span>
								<span>Existed</span>
								<span>When</span>
								<span>We</span>
								<span>Were</span>
								<span>Operators</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								Muhammad Athar started TechTicks after years of running Amazon accounts,
								managing ad spend with his own money on the line, and building Shopify
								stores that had to convert or fail. The agency came from a simple
								frustration: most of the agencies available to ecommerce brands had never
								actually run one. They knew the theory. They didn't know why a 3-cent bid
								adjustment on a long-tail keyword at 2 AM changes everything during a
								product launch.
								<br />
								<br />
								TechTicks was built to be different. Operator-first. Straight-talking.
								Focused on results that show up in your revenue dashboard, not our
								reporting deck.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Book a Free Strategy Call
						</button>
					</div>
				</div>
			</section>

			<div
				ref={statsRef}
				class='stats fade-in'>
				<div class='stat'>
					<h2>
						<StatsCounter end={80} />
					</h2>
					<p>Brands Scaled Across 6 Platforms</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>
						<StatsCounter end={6} />
					</h2>
					<p>Years of Hands-On Ecommerce Experience</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>$2M+</h2>
					<p>In Managed Ad Spend</p>
				</div>
			</div>

			<div
				ref={contentRef}
				class='content fade-in'>
				<div class='left'>
					<div className='left-heading'>
						{' '}
						<h1>
							From Bahawalpur to
							<br />
							80+ US Brands
						</h1>
					</div>
					<div className='about-card'>
						<div class='top-right'>
							<div class='text-card'>
								<p>
									TechTicks started as a small Amazon PPC consultancy, serving US brands
									who needed expert operators without US agency prices. Over six years
									and 80+ brand partnerships, we expanded into TikTok Shop, Shopify, Meta
									Ads, Google Ads, SEO, UX/UI design, graphic design, and web
									development.
									<br />
									<br />
									Today we serve solo sellers doing $50K a month and established brands
									doing seven figures. Our clients range from private label Amazon
									sellers to Shopify DTC brands and multi-channel retailers. What they
									have in common is that they needed a team that treats their business
									seriously, and that's what we show up to do every day.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/** values */}
			<section
				ref={chooseRef}
				className='why-choose fade-in'>
				<div className='container'>
					<div className='left'>
						<h2>
							A Few Things We
							<br />
							Genuinely Believe
						</h2>
						<span>
							Before every decision, we ask, "Would we do this with our own brand and
							our own budget?"
						</span>
					</div>

					<div className='right'>
						<div className='cards'>
							<span>01</span>
							<h3>Operator mindset</h3>
							<span>
								If the answer to "would we do this with our own brand and our own
								budget" is no, we don't recommend it.
							</span>
						</div>

						<div class='cards'>
							<span>02</span>
							<h3>Honest numbers</h3>
							<span>
								Vanity metrics don't pay bills. We report on revenue impact, and tell
								you when something isn't working.
							</span>
						</div>

						<div class='cards'>
							<span>03</span>
							<h3>Move, then refine</h3>
							<span>
								Waiting for perfect conditions is how brands stay stuck. We launch,
								measure, and improve — in that order.
							</span>
						</div>

						<div class='cards'>
							<span>04</span>
							<h3>Your win is ours</h3>
							<span>
								We don't have a "good enough" threshold on someone else's account. If
								your numbers aren't moving, neither are we.
							</span>
						</div>
					</div>
				</div>
			</section>

			{/**FOUNDERS SECTION  */}
			<section
				ref={foundersRef}
				class='founders fade-in'>
				<h2>Meet our Founders</h2>
				<p>
					Built by people who understand both technology and business.
				</p>

				<div class='founder-boxes'>
					<div class='founder-card'>
						<div className='founder-detail'>
							<h3>Muhammad Athar</h3>
							<span>Founder</span>
						</div>
						<img
							src={founderimage1}
							alt='Founder 1'
						/>
					</div>

					<div class='founder-card'>
						<div className='founder-detail '>
							<h3>Abdullah Shafeeq</h3>
							<span>Co-Founder</span>
						</div>
						<img
							src={founderimage2}
							alt='Founder 1'
							style={{ width: '32rem' }}
						/>
					</div>
				</div>
			</section>

			<CtaCard
				title="Want to Work With People Who've Already Done What You're Trying to Do?"
				subtitle=''
				unlockText=''
				buttonText='Book a Free Strategy Call →'
			/>
		</div>
	)
}

export default About
