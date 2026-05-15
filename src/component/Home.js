import { useState, useLayoutEffect, useRef } from 'react'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

import { Activity, Globe, Code } from 'lucide-react'
import { FaReact } from 'react-icons/fa'
import { BsLaptop } from 'react-icons/bs'
import { FaMobileScreen } from 'react-icons/fa6'
import { PiFolderLockFill, PiCellTowerDuotone } from 'react-icons/pi'
import 'bootstrap/dist/css/bootstrap.min.css'
import Testimonials from './testonomial'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
gsap.registerPlugin(ScrollTrigger)

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

	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	const containerRef = useRef(null)
	const cardsRef = useRef(null)

	useLayoutEffect(() => {
		const cards = gsap.utils.toArray('.s-card')
		const totalCards = cards.length

		if (totalCards === 0 || !containerRef.current) return

		const ctx = gsap.context(() => {
			gsap.to(cardsRef.current, {
				x: () => -(cardsRef.current.scrollWidth - window.innerWidth),
				ease: 'none',
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: () =>
						`+=${cardsRef.current.scrollWidth - window.innerWidth}`,
					scrub: 1.5,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true,

					snap: {
						snapTo: 1 / (totalCards - 1),
						duration: { min: 0.3, max: 0.8 },
						ease: 'power1.out',
					},

					markers: false,
				},
			})
		}, containerRef)

		return () => ctx.revert()
	}, [])

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
		<div>
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
					className='servSection'
					style={{ paddingBottom: '200px' }}>
					<div className='servHeading'>
						<h1>
							We’re here to simplify
							<br /> technology for every
							<br /> business.
						</h1>
						<p>
							Expend your reach and connect with customers online.
						</p>
					</div>
					<div className='servBlock'>
						<div
							className='servBlockOne'
							id='serBlockBottom'>
							<div className='subServBlockOne'>
								<h3>Built to Scale</h3>
								<p>
									Grow today, upgrade <br />
									tomorrow.
								</p>
							</div>
							<div className='subServBlockOne'>
								<h3>Quality, Every Time</h3>
								<p>
									Fast delivery. Zero <br />
									shortcuts.
								</p>
							</div>
						</div>
						<div className='servBlockOne'>
							<div className='subServBlockOne'>
								<h3>Support That Stays</h3>
								<p>
									We’re here long after <br />
									launch.
								</p>
							</div>
							<div className='subServBlockOne'>
								<h3>Efficiency Obsessed</h3>
								<p>
									Less chaos, more <br />
									results.
								</p>
							</div>
						</div>
						<div className='lines lineone'></div>
						<div className='lines linetwo'></div>
						<div className='lines linethree'></div>
						<div className='lines linefour'></div>
					</div>
				</div>
			</section>

			{/**  services sectionnnn  */}

			<section
				id='Testonomials'
				className='services-section'
				ref={containerRef}>
				{/* Heading Bahar rakho - yeh pin nahi hoga */}
				<div className='text-center mb-12'>
					<h2 className='title'>Our Services</h2>
					<p className='subtitle'>
						Expend your reach and connect with customers online.
					</p>
				</div>

				<div
					className='horizontal-wrapper'
					ref={containerRef}>
					<div
						className='s-cards'
						ref={cardsRef}>
						{/* Card 1 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Activity />
							</div>

							<div className='s-card-content'>
								<h5> DESIGN</h5>
								<p className='s-text'>
									We create conversion-focused designs,
									including UI/UX, branding, social media
									creatives, and Amazon listing visuals that
									performs across all platforms.
								</p>
							</div>
						</div>
						{/**card-2 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Globe />
							</div>

							<div className='s-card-content'>
								<h5> SEO</h5>
								<p className='s-text'>
									We improve your search visibility through
									technical optimization, keyword strategy,
									and content structure built for long-term
									organic growth.
								</p>
							</div>
						</div>
						{/**card-3 */}
						<div className='s-card'>
							<div className='s-icon '>
								<Code />
							</div>

							<div className='s-card-content'>
								<h5> DEVELOPMENT</h5>
								<p className='s-text'>
									We build fast, secure, and scalable websites
									and digital products designed for
									performance, reliability, and future
									expansion.
								</p>
							</div>
						</div>
						{/**card-4 */}
						<div className='s-card'>
							<div className='s-icon '>
								<FaReact />
							</div>

							<div className='s-card-content'>
								<h5> ADVERTISING</h5>
								<p className='s-text'>
									We run data-driven advertising campaigns
									across search, social, and ecommerce
									platforms to generate measurable results and
									controlled growth.
								</p>
							</div>
						</div>
						{/**card-5 */}
						<div className='s-card'>
							<div className='s-icon '>
								<BsLaptop />
							</div>

							<div className='s-card-content'>
								<h5> MAINTENANCE</h5>
								<p className='s-text'>
									We maintain your accounts and websites
									end-to-end, handling updates, performance
									monitoring, security, and ongoing support to
									keep everything running smoothly.
								</p>
							</div>
						</div>
						{/**card-6 */}
						<div className='s-card'>
							<div className='s-icon '>
								<FaMobileScreen />
							</div>

							<div className='s-card-content'>
								<h5> SOCIAL MEDIA</h5>
								<p className='s-text'>
									We manage and structure social media
									presence to maintain consistency,
									engagement, and alignment with your brand
									strategy.
								</p>
							</div>
						</div>
						{/**card-7 */}
						<div className='s-card'>
							<div className='s-icon '>
								<PiFolderLockFill />
							</div>

							<div className='s-card-content'>
								<h5> MIGRATIONT</h5>
								<p className='s-text'>
									We handle smooth website and ecommerce
									migrations while preserving data,
									performance, and SEO value.
								</p>
							</div>
						</div>
						{/**card-8 */}
						<div className='s-card'>
							<div className='s-icon '>
								<PiCellTowerDuotone />
							</div>

							<div className='s-card-content'>
								<h5> ECOMMERCE BY INDUSTRY</h5>
								<p className='s-text'>
									We deliver industry-specific ecommerce
									solutions tailored to product type, customer
									behavior, and market demands.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Button bhi bahar */}
				<div className='s-button  text-center'>
					<a
						href='/Services'
						rel='noopener noreferrer'>
						{' '}
						<button className='s-btn'>Show all Services</button>
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

					<div className='container-lg  px-lg-0'>
						<div className='row all min-vh-100 '>
							{/* Left Side - Title */}
							<div className='col-lg-5 mb-5 mb-lg-0'>
								<h1 className='title-main'>Why Choose Us?</h1>
								<p className='subtitle-main'>
									Expend your reach and connect with customers
									online.
								</p>
							</div>

							{/* Right Side - 3 Hardcoded Cards */}
							<div className='col-lg-7'>
								<div className='cards-wrapper'>
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
						<br class='d-none d-md-block' />
						collaborations we've had with diverse clients across
						various industries. Let our work speak
						<br class='d-none d-md-block' />
						for itself.
					</p>
				</div>
				<div className='workContainer'>
					<div className='subWorkContainer'>
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork1}
									alt=''
									className='workImage'
								/>
								<button className='work-btn gradient-btn'>
									View Projects Details
								</button>
							</div>
							<div className='workDetails'>
								<h1>Innovative E-commerce Platform</h1>
								<div className='cat-date'>
									<h3>Category: Web Development.</h3>
									<h3>January 2022</h3>
								</div>
								<p>
									Witness our groundbreaking e-commerce
									platform that seamlessly connects buyers and
									sellers worldwide. With an intuitive user
									interface and secure payment gateways, this
									project revolutionizes online shopping.
								</p>
							</div>
						</div>
					</div>
					<div className='subWorkContainer'>
						<div className='subWork'>
							<div className='workImageBtn'>
								<img
									src={ourWork2}
									alt=''
									className='workImage'
								/>
								<button className='work-btn gradient-btn'>
									View Projects Details
								</button>
							</div>
							<div className='workDetails'>
								<h1>Mobile App for Enhanced Fitness</h1>
								<div className='cat-date'>
									<h3>Category: Mobile App Development.</h3>
									<h3>March 2022</h3>
								</div>
								<p>
									Our fitness app helps users stay fit and
									motivated with personalized workout plans
									and progress tracking. Its user-friendly
									design and comprehensive features make
									staying healthy an enjoyable experience.
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
				<div className='contact-container'>
					{/* LEFT SIDE */}
					<div className='contact-left'>
						<h1>
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
							className={`faq-item ${openIndex === index ? 'active' : ''}`}>
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
