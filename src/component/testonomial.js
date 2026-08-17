import { useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaTwitter } from 'react-icons/fa'
import avatarSamLui from './images/testimonial-avatars/sam-lui.jpg'
import avatarAhmedRaza from './images/testimonial-avatars/ahmed-raza.jpg'
import avatarBilalHussain from './images/testimonial-avatars/bilal-hussain.jpg'
import avatarEmilyRodriguez from './images/testimonial-avatars/emily-rodriguez.jpg'
import avatarFrancTin from './images/testimonial-avatars/franc-tin.jpg'
import avatarAliMalik from './images/testimonial-avatars/ali-malik.jpg'
import avatarJasonLee from './images/testimonial-avatars/jason-lee.jpg'
import avatarMichaelBrown from './images/testimonial-avatars/michael-brown.jpg'
import avatarDanielCarter from './images/testimonial-avatars/daniel-carter.jpg'
import avatarZainAli from './images/testimonial-avatars/zain-ali.jpg'

function Testimonials() {
	const testimonials = [
		{
			img: avatarSamLui,
			name: 'Sam Lui',
			title: 'Design - Sam Lui, GlowSkin Co.',
			subtitle: 'Founder of GreenEarth Eco Store',
			text: 'TechTicks transformed our website and app with stunning, user-friendly designs. Our customers love the new look, and our engagement has skyrocketed!',
		},
		{
			img: avatarAhmedRaza,
			name: 'Ahmed Raza',
			title: 'SEO - Ahmed Raza, BuildPro Solutions',
			subtitle: 'Head of Product at HealthTech',
			text: 'Our search rankings improved dramatically after working with TechTicks. Their SEO strategy brought us consistent, high-quality traffic and leads.',
		},
		{
			img: avatarBilalHussain,
			name: 'Bilal Hussain',
			title: 'Development - Bilal Hussain, FinTrack',
			subtitle: 'Marketing Director',
			text: 'They developed a fast, secure, and reliable platform for our services. The performance and scalability of the website exceeded our expectations.',
		},
		{
			img: avatarEmilyRodriguez,
			name: 'Emily Rodriguez',
			title: 'Advertising - Emily Rodriguez, NovaEdge',
			subtitle: 'Marketing Director',
			text: "TechTicks crafted targeted campaigns across social media and search engines. We've seen measurable growth and ROI that truly stands out.",
		},
		{
			img: avatarFrancTin,
			name: 'Franc Tin',
			title: 'Maintenance - Franc Tin, HealthBridge Clinic',
			subtitle: 'Marketing Director',
			text: 'Their maintenance team keeps our systems running smoothly 24/7. Updates, monitoring, and support are handled professionally without any downtime.',
		},
		{
			img: avatarAliMalik,
			name: 'Ali Malik',
			title: 'Social Media - Ali Malik, TrendWear',
			subtitle: 'Marketing Director',
			text: 'Our social media presence has grown consistently thanks to TechTicks. They manage our profiles, boost engagement, and align with our brand perfectly.',
		},
		{
			img: avatarJasonLee,
			name: 'Jason Lee',
			title: 'Migration - Jason Lee, BrightTech',
			subtitle: 'Marketing Director',
			text: 'We migrated our website and e-commerce platform seamlessly. TechTicks ensured zero downtime, preserved performance, and maintained SEO value.',
		},
		{
			img: avatarMichaelBrown,
			name: 'Michael Brown',
			title: 'E-commerce - Michael Brown, StartSpark',
			subtitle: 'Marketing Director',
			text: 'The custom e-commerce solution provided by TechTicks perfectly matches our industry needs. It improved customer experience and sales.',
		},
		{
			img: avatarDanielCarter,
			name: 'Daniel Carter',
			title: 'Multi-Service - Daniel Carter, LearnHub',
			subtitle: 'Marketing Director',
			text: 'From design to development and marketing, TechTicks handled everything with precision. Their expertise across multiple areas made our project a success.',
		},
		{
			img: avatarZainAli,
			name: 'Zain Ali',
			title: 'Ongoing Support - Zain Ali, UrbanSpace',
			subtitle: 'Marketing Director',
			text: 'Even after launch, TechTicks provides reliable support. Their team is always responsive, helping us resolve issues quickly and efficiently.',
		},
	]

	const [emblaRef] = useEmblaCarousel(
		{ loop: true, dragFree: true, align: 'start' },
		[
			AutoScroll({
				speed: 1.5,
				stopOnInteraction: false,
				stopOnMouseEnter: false,
				direction: 'forward',
			}),
		]
	)

	// reveal the whole section when it scrolls into view
	const sectionRef = useRef(null)
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const el = sectionRef.current
		if (!el) return
		const observer = new IntersectionObserver(
			([entry]) => setVisible(entry.isIntersecting),
			{ threshold: 0.15 },
		)
		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	const Card = ({ item }) => (
		<article className='fig-testi-card'>
			<div className='fig-testi-box-wrap'>
				<div className='fig-testi-box'>
					<div className='fig-testi-icon'>
						<FaTwitter />
					</div>
					<p className='fig-testi-text'>{item.text}</p>
				</div>
				<span className='fig-testi-tip' />
			</div>

			<div className='fig-testi-user'>
				<img
					src={item.img}
					alt={item.name}
				/>
				<div className='fig-testi-user-copy'>
					<h6>{item.name}</h6>
					<span>{item.subtitle}</span>
				</div>
			</div>
		</article>
	)

	return (
		<section
			className={`fig-testimonials${visible ? ' reveal-in' : ''}`}
			ref={sectionRef}>
			<div className='fig-testi-heading'>
				<h2>Our Testimonials</h2>
				<p>
					Don't just take our word for it; hear what our satisfied clients
					have to say about their experience with TechTicks.
				</p>
			</div>

			<div
				className='fig-testi-viewport'
				ref={emblaRef}>
				<div className='fig-testi-track'>
					{[...testimonials, ...testimonials].map((item, i) => (
						<div
							className='fig-testi-slide'
							key={i}>
							<Card item={item} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
