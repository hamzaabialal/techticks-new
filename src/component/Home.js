import { useState, useRef, useEffect } from 'react'
import EnhancedParticlesLikeSpline from '../component/SplineBackground'
import ourWork1 from '../component/images/ourWork1.png'
import ourWork2 from '../component/images/ourWork2.png'
import picture1 from '../component/images/slideriImages/Group 319.png'
import picture2 from '../component/images/slideriImages/Mask group.png'
import picture3 from '../component/images/slideriImages/Mask group-1.png'
import picture4 from '../component/images/slideriImages/Mask group-2.png'
import picture5 from '../component/images/slideriImages/Mask group-3.png'
import picture6 from '../component/images/slideriImages/Mask group-4.png'
import picture7 from '../component/images/slideriImages/Group 308.png'
import picture8 from '../component/images/slideriImages/Group 309.png'
import picture9 from '../component/images/slideriImages/Group 310.png'
import picture10 from '../component/images/slideriImages/Group 311.png'
import picture11 from '../component/images/slideriImages/Group 312.png'
import picture12 from '../component/images/slideriImages/Group 313.png'
import picture13 from '../component/images/slideriImages/Group 314.png'
import picture14 from '../component/images/slideriImages/Group 315.png'
import picture15 from '../component/images/slideriImages/Group 316.png'
import picture16 from '../component/images/slideriImages/Group 317.png'
import picture17 from '../component/images/slideriImages/Group 318.png'
import picture18 from '../component/images/slideriImages/Group 319.png'
import picture19 from '../component/images/slideriImages/Group 320.png'
import picture20 from '../component/images/slideriImages/Group 321.png'
import picture21 from '../component/images/slideriImages/Group 322.png'
import Slider from '../slider'
import frameIcon from '../component/images/Frame.png'
import CtaCard from './Cta-card'

import {
	FaArrowRight,
	FaLinkedin,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaAt,
	FaEnvelope,
	FaWhatsapp,
	FaChevronDown,
	FaChevronUp,
} from 'react-icons/fa'

import { Chrome, Code2, Hourglass } from 'lucide-react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoFileDirectory } from 'react-icons/go'
import { LuRadioTower } from 'react-icons/lu'
import { BsLaptop, BsPhone } from 'react-icons/bs'
import Testimonials from './testonomial'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Home() {
	const navigate = useNavigate()
	const faqData = [
		{
			question: 'What types of businesses do you work with?',
			answer: 'We work with startups, growing brands, and established businesses across ecommerce, SaaS, real estate, and service-based industries.',
		},
		{
			question: 'Can I hire Techticks for a single service?',
			answer: 'Yes, you can absolutely hire Techticks for a single service. We offer flexible solutions tailored to your needs, so whether you require help with design, SEO, development, or any other service, you can choose exactly what you need without committing to a full package.',
		},
		{
			question: 'Do you offer ongoing account and website management?',
			answer: 'Yes, we offer ongoing account and website management. Our team provides continuous support, including updates, performance monitoring, security checks, and optimization, ensuring your website and digital assets run smoothly and stay up to date.',
		},

		// You can add more items
	]

	const [openIndex, setOpenIndex] = useState(0)

	const servicesData = [
		{
			icon: (
				<img
					src={frameIcon}
					alt='design icon'
					style={{ width: '32px', height: '32px' }}
				/>
			),
			title: 'DESIGN',
			text: 'We create conversion-focused designs, including UI/UX, branding, social media creatives, and Amazon listing visuals that performs across all platforms.',
		},
		{
			icon: <Chrome />,
			title: 'SEO',
			text: 'We improve your search visibility through technical optimization, keyword strategy, and content structure built for long-term organic growth.',
		},
		{
			icon: <Code2 />,
			title: 'DEVELOPMENT',
			text: 'We build fast, secure, and scalable websites and digital products designed for performance, reliability, and future expansion.',
		},
		{
			icon: <Hourglass />,
			title: 'ADVERTISING',
			text: 'We run data-driven advertising campaigns across search, social, and ecommerce platforms to generate measurable results and controlled growth.',
		},
		{
			icon: <BsLaptop />,
			title: 'MAINTENANCE',
			text: 'We maintain your accounts and websites end-to-end, handling updates, performance monitoring, security, and ongoing support to keep everything running smoothly.',
		},
		{
			icon: <BsPhone />,
			title: 'SOCIAL MEDIA',
			text: 'We manage and structure social media presence to maintain consistency, engagement, and alignment with your brand strategy.',
		},
		{
			icon: <GoFileDirectory />,
			title: 'MIGRATION',
			text: 'We handle smooth website and ecommerce migrations while preserving data, performance, and SEO value.',
		},
		{
			icon: <LuRadioTower />,
			title: 'ECOMMERCE BY INDUSTRY',
			text: 'We deliver industry-specific ecommerce solutions tailored to product type, customer behavior, and market demands.',
		},
	]

	// Services carousel: auto-scroll + manual horizontal scroll / drag.
	// Cards are duplicated in the markup, so when scrollLeft passes the first
	// set we subtract its width to loop seamlessly.
	const servicesTrackRef = useRef(null)

	useEffect(() => {
		const el = servicesTrackRef.current
		if (!el) return

		const reduceMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)',
		).matches

		let raf = 0
		let half = 0 // width of one card set; cached to avoid per-frame reflow
		let paused = false
		let resumeTimer = 0

		const measure = () => {
			half = el.scrollWidth / 2
		}

		// auto-advance using a cached width (no scrollWidth read inside the loop)
		const speed = 0.5 // px per frame
		const tick = () => {
			if (!paused && half > 0) {
				let next = el.scrollLeft + speed
				if (next >= half) next -= half
				el.scrollLeft = next
			}
			raf = requestAnimationFrame(tick)
		}

		const pause = () => {
			paused = true
		}
		const resume = () => {
			paused = false
		}
		// pause, then auto-resume a moment after the user stops interacting
		const nudge = () => {
			paused = true
			clearTimeout(resumeTimer)
			resumeTimer = setTimeout(() => {
				paused = false
			}, 1400)
		}

		// drag-to-scroll (pointer events scoped to the element, with capture)
		let isDown = false
		let startX = 0
		let startScroll = 0
		const onDown = (e) => {
			isDown = true
			paused = true
			startX = e.pageX
			startScroll = el.scrollLeft
			el.classList.add('dragging')
			el.setPointerCapture?.(e.pointerId)
		}
		const onMove = (e) => {
			if (!isDown) return
			el.scrollLeft = startScroll - (e.pageX - startX)
		}
		const onUp = () => {
			if (!isDown) return
			isDown = false
			el.classList.remove('dragging')
			nudge()
		}

		measure()
		if (!reduceMotion) raf = requestAnimationFrame(tick)

		window.addEventListener('resize', measure)
		el.addEventListener('mouseenter', pause)
		el.addEventListener('mouseleave', resume)
		el.addEventListener('wheel', nudge, { passive: true })
		el.addEventListener('touchstart', pause, { passive: true })
		el.addEventListener('touchend', nudge)
		el.addEventListener('pointerdown', onDown)
		el.addEventListener('pointermove', onMove)
		el.addEventListener('pointerup', onUp)
		el.addEventListener('pointercancel', onUp)

		return () => {
			cancelAnimationFrame(raf)
			clearTimeout(resumeTimer)
			window.removeEventListener('resize', measure)
			el.removeEventListener('mouseenter', pause)
			el.removeEventListener('mouseleave', resume)
			el.removeEventListener('wheel', nudge)
			el.removeEventListener('touchstart', pause)
			el.removeEventListener('touchend', nudge)
			el.removeEventListener('pointerdown', onDown)
			el.removeEventListener('pointermove', onMove)
			el.removeEventListener('pointerup', onUp)
			el.removeEventListener('pointercancel', onUp)
		}
	}, [])

	// "Why Choose Us" cards: staggered reveal once they scroll into view
	const whyCardsRef = useRef(null)

	useEffect(() => {
		const el = whyCardsRef.current
		if (!el) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						el.classList.add('reveal-in')
						observer.unobserve(el)
					}
				})
			},
			{ threshold: 0.2 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	// Contact section: slide-in reveal when scrolled into view.
	// Driven by state (not classList) so a re-render can't strip the class,
	// and re-triggers each time the section enters the viewport.
	const contactRef = useRef(null)
	const [contactVisible, setContactVisible] = useState(false)

	useEffect(() => {
		const el = contactRef.current
		if (!el) return

		const observer = new IntersectionObserver(
			([entry]) => setContactVisible(entry.isIntersecting),
			{ threshold: 0.15 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	// FAQ: open on hover, close on leave (with a short delay so it doesn't
	// flicker when the cursor passes over quickly). Click/tap still works for
	// touch devices that have no hover.
	const faqCloseTimer = useRef(null)

	const openFAQ = (index) => {
		clearTimeout(faqCloseTimer.current)
		setOpenIndex(index)
	}

	const scheduleCloseFAQ = (index) => {
		clearTimeout(faqCloseTimer.current)
		faqCloseTimer.current = setTimeout(() => {
			setOpenIndex((current) => (current === index ? null : current))
		}, 220)
	}

	useEffect(() => () => clearTimeout(faqCloseTimer.current), [])

	// Contact heading: move the gradient "spotlight" to follow the cursor
	const moveHeadingGradient = (e) => {
		const el = e.currentTarget
		const rect = el.getBoundingClientRect()
		const x = ((e.clientX - rect.left) / rect.width) * 100
		const y = ((e.clientY - rect.top) / rect.height) * 100
		el.style.setProperty('--mx', `${x}%`)
		el.style.setProperty('--my', `${y}%`)
	}
	const resetHeadingGradient = (e) => {
		e.currentTarget.style.setProperty('--mx', '50%')
		e.currentTarget.style.setProperty('--my', '50%')
	}
	const sendEmail = (e) => {
		e.preventDefault()

		const templateParams = {
			user_name: e.target.user_name.value,
			user_email: e.target.user_email.value,
			message: e.target.message.value,
		}

		emailjs
			.send(
				'service_f75opab',
				'template_jr1szlf',
				templateParams,
				'_OkziMgM7xZC51NDs',
			)
			.then(() => {
				alert('Message sent successfully ✅')
				e.target.reset()
			})
			.catch((error) => {
				console.log(error)
				alert('Failed ❌')
			})
	}
	return (
		<div className='home-layout'>
			<section
				id='Home'
				className='home-page'>
				{/* 3D Background */}
				<EnhancedParticlesLikeSpline />

				<hr style={{ color: 'white' }} />

				<div className='main-content'>
					<div className='heading'>
						<h1>
							<span>Give</span>
							<span>Your</span>
							<span>Business</span>
							<span>the</span>
							<span>Digital</span>
							<span>Edge</span>
							<span>It</span>
							<span>Deserves</span>
						</h1>
					</div>

					<div className='sub-heading'>
						<p>
							Transform your brand’s presence with cutting-edge
							design,
							<br></br> marketing, and eCommerce solutions built
							for growth.
						</p>
					</div>

					<div>
						<button onClick={() => navigate('/contactUs')}>
							Start Now
						</button>
					</div>
				</div>
			</section>

			{/**slider */}
			<section>
				<div
					id='Slider'
					className='heading_brands'>
					<h1>Our Partners</h1>
					<div className='slider'>
						<div className='slide-track'>
							<div className='slide'>
								<img
									src={picture1}
									alt=''
									style={{ width: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture2}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture3}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture4}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture5}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture6}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture7}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture8}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture9}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture10}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture11}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture12}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture13}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture14}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture15}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture16}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture17}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture18}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture19}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture20}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture21}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture2}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture3}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture4}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture5}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture6}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture7}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture8}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture9}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture10}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture11}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture12}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture13}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture14}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture15}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture16}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture17}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture18}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture19}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture20}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture21}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture1}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture2}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture3}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture4}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture5}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture6}
									alt=''
								/>
							</div>
							<div className='slide'>
								<img
									src={picture7}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture8}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture9}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture10}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture11}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>

							<div className='slide'>
								<img
									src={picture12}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture13}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture14}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture15}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture16}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture17}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture18}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture19}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture20}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
							<div className='slide'>
								<img
									src={picture21}
									alt=''
									style={{ height: '30px' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/**services */}
			<section>
				{' '}
				<div
					id='Service'
					className='service-figma'>
					<div className='service-figma-copy'>
						<h1>We’re here to simplify technology for every business.</h1>
						<p>Expend your reach and connect with customers online.</p>
					</div>

					<div className='service-figma-grid'>
						<span className='service-line service-line-mid'></span>
						<span className='service-line service-line-center'></span>
						<span className='service-line service-line-left-lower'></span>
						<span className='service-line service-line-bottom'></span>

						<div className='service-figma-item'>
							<h3>Built to Scale</h3>
							<p>Grow today, upgrade tomorrow.</p>
						</div>
						<div className='service-figma-item'>
							<h3>Quality, Every Time</h3>
							<p>Fast delivery. Zero shortcuts.</p>
						</div>
						<div className='service-figma-item'>
							<h3>Support That Stays</h3>
							<p>We’re here long after launch.</p>
						</div>
						<div className='service-figma-item'>
							<h3>Efficiency Obsessed</h3>
							<p>Less chaos, more results.</p>
						</div>
					</div>
				</div>
			</section>

			{/**  services sectionnnn  */}

			<section
				id='Testonomials'
				className='services-section'>
				{/* Heading Bahar rakho - yeh pin nahi hoga */}
				<div className='text-center mb-12'>
					<h2 className='title'>Our Services</h2>
					<p className='subtitle'>
						Expend your reach and connect with customers online.
					</p>
				</div>

				<div
						className='horizontal-wrapper'
						ref={servicesTrackRef}>
					<div className='s-cards'>
							{[...servicesData, ...servicesData].map((card, index) => (
								<div
									className='s-card'
									key={index}
									aria-hidden={index >= servicesData.length}>
									<div className='s-icon '>{card.icon}</div>

									<div className='s-card-content'>
										<h5> {card.title}</h5>
										<p className='s-text'>{card.text}</p>
									</div>
								</div>
							))}
						</div>
				</div>

				{/* Button bhi bahar */}
				<div className='s-button  text-center'>
					<a
						href='/Services'
						rel='noopener noreferrer'>
						{' '}
						<button className='s-btn'>Show all services</button>
					</a>
				</div>
			</section>

			{/**recomend */}
			<section>
				{' '}
				<section
					id='Recomend'
					className='why-choose-us bg'>
					<div className='gradient-bg'></div>

					<div className='why-choose-frame'>
						<div className='why-choose-copy'>
								<h1 className='title-main'>Why Choose Us?</h1>
								<p className='subtitle-main'>
									Expend your reach and connect with customers
									online.
								</p>
							</div>

								<div
										className='cards-wrapper'
										ref={whyCardsRef}>
									{/* Card 1 */}
									<div
										className='glass-card'
										style={{ '--card-index': 0 }}>
										<h3 className='card-title text-white'>
											Smart Innovation
										</h3>
										<p className='card-text'>
											We build modern, scalable solutions
											powered by the latest technology to
											keep your business ahead of the
											curve.
										</p>
									</div>

									{/* Card 2 */}
									<div
										className='glass-card'
										style={{ '--card-index': 1 }}>
										<h3 className='card-title text-white'>
											User-First
										</h3>
										<p className='card-text'>
											Every product is designed with your
											audience in mind. Engaging, and
											built to convert.
										</p>
									</div>

									{/* Card 3 */}
									<div
										className='glass-card'
										style={{ '--card-index': 2 }}>
										<h3 className='card-title text-white'>
											Trusted Partnership
										</h3>
										<p className='card-text'>
											We value long-term relationships,
											clear communication, and reliable
											support at every step.
										</p>
									</div>
								</div>
					</div>
				</section>
			</section>
			{/**slider */}
			<Slider />

			{/** work section */}

			<div
				id='Work'
				className='workSection'>
				<div className='workHeading'>
					<h1>Our Works</h1>
					<p>
						Witness the brilliance of our previous projects. Our
						portfolio showcases the successful{' '}
						<br className='d-none d-md-block' />
						collaborations we've had with diverse clients across
						various industries. Let our work speak
						<br className='d-none d-md-block' />
						for itself.
					</p>
				</div>
				<div className='workContainer'>
					<div className='subWorkContainer'>
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork2}
									alt=''
									className='workImage'
								/>
							</div>
							<div className='workDetails'>
								<h1>Amazon PPC & Account Growth Case Study</h1>
								<p>
									Strategically scaled a Home & Kitchen brand
									to $528K in 30 days through data-driven PPC
									optimization, strong organic ranking, and
									efficient ACOS/TACOS management.
								</p>
							</div>
						</div>
					</div>
					<div className='subWorkContainer'>
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork1}
									alt=''
									className='workImage'
								/>
							</div>
							<div className='workDetails'>
								<h1>Amazon PPC A/B Testing</h1>
								<p>
									Ran strategic bid, copy, and placement tests
									to reduce ACOS from 24.5% to 19.8% and scale
									campaigns more profitably.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='workButton'>
					<a
						style={{ textDecoration: 'none' }}
						href='/Portfolio'
						rel='noopener noreferrer'>
						{' '}
						<button className='gradient-btn'>
							View All Projects
							<FaArrowRight size={16} />
						</button>
					</a>
				</div>
			</div>
			{/**testonomial */}

			<Testimonials />

			{/** contact section */}

			<section className='contact-section'>
				<div
						className={`contact-container${contactVisible ? ' reveal-in' : ''}`}
						ref={contactRef}>
					{/* LEFT SIDE */}
					<div className='contact-left'>
						<h1
							onMouseMove={moveHeadingGradient}
							onMouseLeave={resetHeadingGradient}>
							<span>Feel</span> <span>free</span> <span>to</span>{' '}
							<br />
							<span>Contact</span> <span>Us</span>
						</h1>

						<p>
							Have any questions or ready to scale your business
							to next level?
						</p>

						<div className='contact-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaEnvelope />
									</div>
									<div>
										<h4>Email Us</h4>
										<p>info@techticks.org</p>
									</div>
								</div>
							</div>
						</div>

						<div className='contact-card'>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaWhatsapp />
									</div>
									<div>
										<h4>Call Us</h4>
										<p>+1 (320) 544-0303</p>
									</div>
								</div>
							</div>
						</div>

						<div className='follow contact-card'>
							<h4>Follow Us</h4>

							<div className='socials'>
								<div>
									<a
										href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
										target='blank'>
										<FaLinkedin className='contact-icon' />{' '}
									</a>
								</div>
								<div>
									<a
										href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
										target='blank'>
										{' '}
										<FaFacebook />{' '}
									</a>
								</div>
								<div>
									{' '}
									<a
										href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
										target='blank'>
										{' '}
										<FaInstagram />{' '}
									</a>
								</div>
								<div>
									<a href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'>
										<FaTwitter />
									</a>
								</div>
								<div>
									<a href='https://www.threads.com/@techticks2020?igshid=NTc4MTIwNjQ2YQ=='>
										{' '}
										<FaAt />
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE FORM */}
					<div className='contact-right'>
						<form
							className='contact-form'
							onSubmit={sendEmail}>
							<input
								type='text'
								name='user_name'
								placeholder='Name'
								required
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Email'
								required
							/>
							<textarea
								name='message'
								placeholder='Message'
								required></textarea>

							<button>Send Message</button>
						</form>
					</div>
				</div>
			</section>

			{/** faqs section */}
			<div className='faq-section'>
				<h2>Frequently Asked Questions</h2>
				<p className='subtitle'>
					Expend your reach and connect with customers online.
				</p>

				<div className='faq-list'>
					{faqData.map((item, index) => (
						<div
							key={index}
							className={`faq-item ${openIndex === index ? 'active' : ''}`}
							onMouseEnter={() => openFAQ(index)}
							onMouseLeave={() => scheduleCloseFAQ(index)}>
							<button
								className='faq-question'
								onClick={() => toggleFAQ(index)}
								aria-expanded={openIndex === index}>
								<span>{item.question}</span>
								<span className='arrow'>
									{openIndex === index ? (
										<FaChevronUp />
									) : (
										<FaChevronDown
											style={{ color: 'white' }}
										/>
									)}
								</span>
							</button>

							<div className='faq-answer-wrapper'>
								<div className='faq-answer'>
									{item.answer || (
										<em style={{ color: '#888' }}>
											Project timelines depend on the
											service and complexity. Simple
											design or SEO projects can take a
											few weeks, while custom development,
											e-commerce solutions, or full-scale
											campaigns may take several months.
											We provide a clear timeline before
											starting.
										</em>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<CtaCard />
		</div>
	)
}

export default Home
