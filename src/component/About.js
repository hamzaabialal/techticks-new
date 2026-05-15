import { useEffect, useRef, useState } from 'react'
import founderimage1 from '../component/images/about-card1.png'
import founderimage2 from '../component/images/about-card2.png'
import { useNavigate } from 'react-router-dom'

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
								<span>build</span>
								<span>tech</span>
								<span>that</span>
								<span>moves</span>
								<span>businesses</span>
								<span>forward.</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								Just smart, scalable solutions that solve real
								problems. Since 2020, Techticks has helped
								startups and growing brands turn raw ideas into
								products that perform in the real world. We
								design, build, and ship digital products apps,
								platforms, and intelligent systems with one
								rule: every line of code must earn its place.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Start Now
						</button>
					</div>
				</div>
			</section>

			<div
				ref={statsRef}
				class='stats fade-in'>
				<div class='stat'>
					<h2>
						<StatsCounter end={380} />
					</h2>
					<p>Projects Delivered Successfully</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>
						<StatsCounter end={5} />
					</h2>
					<p>Years of Experience</p>
				</div>
				<span class='divider'></span>
				<div class='stat'>
					<h2>
						<StatsCounter end={230} />
					</h2>
					<p>Businesses Trusted Worldwide</p>
				</div>
			</div>

			<div
				ref={contentRef}
				class='content fade-in'>
				<div class='left'>
					<div className='left-heading'>
						{' '}
						<h1>
							We Shape Ideas.We
							<br />
							Set the Standard.
						</h1>
					</div>
					<div className='about-card'>
						<div class='top-right'>
							<div class='text-card'>
								<p>
									TechTicks is a full-service digital agency
									built for ambition. We turn complex
									challenges into clean, high-performing
									products — from custom web and mobile
									applications to AI-powered solutions and
									full product development.
									<br />
									<br />
									Everything we build is designed for speed,
									scalability, and longevity. No unnecessary
									features. No over-engineering. Just
									technology aligned with real business goals
									— because execution beats promises, every
									time.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/** chosee */}
			<section
				ref={chooseRef}
				className='why-choose fade-in'>
				<div className='container'>
					<div className='left'>
						<h2>
							Why Teams Choose
							<br />
							Techticks
						</h2>
						<span>
							Because execution beats promises, every time.
						</span>
					</div>

					<div className='right'>
						<div className='cards'>
							<span>01</span>
							<h3>Business-first thinking</h3>
							<span>
								Technology built around outcomes, not trends.
							</span>
						</div>

						<div class='cards'>
							<span>02</span>
							<h3>Scalable engineering</h3>
							<span>Products that hold up as you grow.</span>
						</div>

						<div class='cards'>
							<span>03</span>
							<h3>Radical transparency</h3>
							<span>Clear communication at every stage.</span>
						</div>

						<div class='cards'>
							<span>04</span>
							<h3>Long-term partnership</h3>
							<span>Support that doesn’t stop at launch.</span>
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
		</div>
	)
}

export default About
