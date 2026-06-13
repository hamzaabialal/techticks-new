import React, { useState, useEffect, useRef } from 'react'
import {
	AnimatePresence,
	motion,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import line1 from '../component/images/line1.png'
import line2 from '../component/images/line2.png'
import rectcore2 from '../component/images/rectcore2.png'
import rightarrow from '../component/images/rightarrow.png'
import arrow from '../component/images/arrow.png'
import arrowdis from '../component/images/arrowdis.png'
import { navItems, servicesData } from './amazonServicesData'

// Each key-feature appears one-by-one when its service becomes active
const staggerContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.12, delayChildren: 0.05 },
	},
}

const revealItem = {
	hidden: { opacity: 0, y: 26 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: 'easeOut' },
	},
}

const TOTAL = navItems.length

const AmazonServicesComponent = () => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [isLargeDevice, setIsLargeDevice] = useState(false)
	const scrollSectionRef = useRef(null)

	useEffect(() => {
		const checkDeviceSize = () => {
			setIsLargeDevice(window.innerWidth >= 1024)
		}
		checkDeviceSize()
		window.addEventListener('resize', checkDeviceSize)
		return () => window.removeEventListener('resize', checkDeviceSize)
	}, [])

	// Scroll drives which service is active (desktop only) → step through
	// block 1 + its features, then block 2, then block 3 … as you scroll.
	const { scrollYProgress } = useScroll({
		target: scrollSectionRef,
		offset: ['start start', 'end end'],
	})

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		if (!isLargeDevice) return
		// Map over TOTAL+1 segments so the final card is reached before the
		// section unpins and then dwells (held) for the last segment.
		const idx = Math.min(Math.floor(latest * (TOTAL + 1)), TOTAL - 1)
		setActiveIndex((prev) => (prev === idx ? prev : idx))
	})

	const activeService = servicesData[activeIndex]

	const handleNavClick = (index) => {
		setActiveIndex(index)
	}

	// Render the four key-feature cards (re-staggers each time the service changes)
	const renderFeatures = () => (
		<motion.div
			key={activeIndex}
			className='corr-features-grid'
			variants={staggerContainer}
			initial='hidden'
			animate='show'>
			<motion.div
				className='corr-feature'
				variants={revealItem}
				whileHover={{ scale: 1.03 }}>
				<img
					src={activeService.features[0].icon}
					alt=''
				/>
				<h5>{activeService.features[0].title}</h5>
				<p>{activeService.features[0].desc}</p>
			</motion.div>
			<img
				src={line1}
				className='corr-divider'
				alt=''
			/>
			<motion.div
				className='corr-feature'
				variants={revealItem}
				whileHover={{ scale: 1.03 }}>
				<img
					src={activeService.features[1].icon}
					alt=''
				/>
				<h5>{activeService.features[1].title}</h5>
				<p>{activeService.features[1].desc}</p>
			</motion.div>
			<img
				src={line2}
				className='corr-divider2'
				alt=''
			/>
			<motion.div
				className='corr-feature'
				variants={revealItem}
				whileHover={{ scale: 1.03 }}>
				<img
					src={activeService.features[2].icon}
					alt=''
				/>
				<h5>{activeService.features[2].title}</h5>
				<p>{activeService.features[2].desc}</p>
			</motion.div>
			<img
				src={line1}
				className='corr-divider3'
				alt=''
			/>
			<motion.div
				className='corr-feature'
				variants={revealItem}
				whileHover={{ scale: 1.03 }}>
				<img
					src={activeService.features[3].icon}
					alt=''
				/>
				<h5>{activeService.features[3].title}</h5>
				<p>{activeService.features[3].desc}</p>
			</motion.div>
		</motion.div>
	)

	// ── MOBILE / TABLET LAYOUT (< 1024px) ──────────────────────────
	if (!isLargeDevice) {
		return (
			<div className='corr-container'>
				<header className='corr-main-header'>
					<h2>Core Services</h2>
					<p>
						We're not a checkbox vendor, we're your tactical partner
						in scaling on Amazon.
					</p>
				</header>

				{/* Content renders in normal flow — no sticky, no scroll trap */}
				<div className='corr-mobile-layout'>
					{/* TOP: content area */}
					<main className='corr-content-area corr-mobile-content'>
						<article className='corr-intro'>
							<h3>{activeService.heading}</h3>
							<p>{activeService.description1}</p>
							<p>{activeService.description2}</p>
						</article>

						<div className='corr-glass-card'>
							<h4>{activeService.keyFeaturesTitle}</h4>
							{renderFeatures()}
							<img
								src={rectcore2}
								alt='decorative'
								className='corr-decorativeimg2'
							/>
						</div>

						<div className='corr-glass-card corr-results-section'>
							<h4>{activeService.resultsTitle}</h4>
							<p className='corr-results-sub'>
								{activeService.resultsSub}
							</p>
							<div className='corr-results-grid'>
								<div className='corr-result-img1'></div>
								<div className='corr-result-img2'></div>
							</div>
							<div className='corr-action-footer'>
								<button className='corr-view-btn'>
									View All Projects{' '}
									<img
										src={rightarrow}
										alt=''
									/>
								</button>
							</div>
						</div>
					</main>

					{/* BOTTOM: horizontal tab nav */}
					<aside className='corr-sidebar corr-mobile-sidebar'>
						<nav className='corr-side-nav'>
							{navItems.map((item, index) => {
								const isActive = activeIndex === index
								return (
									<button
										key={index}
										className={`corr-nav-btn ${isActive ? 'corr-active' : ''}`}
										onClick={() => handleNavClick(index)}>
										<img
											src={isActive ? arrow : arrowdis}
											alt='icon'
										/>
										{item}
									</button>
								)
							})}
						</nav>
					</aside>
				</div>
			</div>
		)
	}

	// ── DESKTOP LAYOUT (≥ 1024px) — scroll steps through each service ───
	return (
		<div className='corr-container'>
			<div
				ref={scrollSectionRef}
				style={{ height: `${TOTAL * 60}vh`, position: 'relative' }}>
				<div className='corr-sticky-frame'>
					<header className='corr-main-header'>
						<h2>Core Services</h2>
						<p>
							We're not a checkbox vendor, we're your tactical
							partner in scaling on Amazon.
						</p>
					</header>

					<div className='corr-layout-grid'>
						<aside className='corr-sidebar'>
							<nav className='corr-side-nav'>
								{navItems.map((item, index) => {
									const isActive = activeIndex === index
									return (
										<motion.button
											key={index}
											animate={{
												opacity: isActive ? 1 : 0.55,
											}}
											whileHover={{ scale: 1.025 }}
											className={`corr-nav-btn ${isActive ? 'corr-active' : ''}`}
											onClick={() => handleNavClick(index)}>
											<img
												src={isActive ? arrow : arrowdis}
												alt='icon'
											/>
											{item}
										</motion.button>
									)
								})}
							</nav>
						</aside>

						<main className='corr-content-area'>
							<AnimatePresence mode='wait'>
								<motion.div
									key={activeIndex}
									initial={{ opacity: 0, y: 14 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -14 }}
									transition={{
										duration: 0.3,
										ease: 'easeInOut',
									}}>
									<article className='corr-intro'>
										<h3>{activeService.heading}</h3>
										<p>{activeService.description1}</p>
										<p>{activeService.description2}</p>
									</article>

									<div className='corr-glass-card'>
										<h4>{activeService.keyFeaturesTitle}</h4>
										{renderFeatures()}
									</div>
								</motion.div>
							</AnimatePresence>
						</main>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AmazonServicesComponent
