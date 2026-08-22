import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa6'
import { LuRadioTower } from 'react-icons/lu'
import { HiOutlineShare } from 'react-icons/hi'
import { MdCellTower } from 'react-icons/md'
import { GiBullseye } from 'react-icons/gi'
import { TbArrowsCross } from 'react-icons/tb'
import { useNavigate, NavLink } from 'react-router-dom'
import Slider from '../slider'
import Testimonials from './testonomial'
import { servicesCatalog } from './servicesCatalog'
import Seo from './Seo'

const faqData = [
	{ question: 'What services does TechTicks offer?', answer: 'We provide end-to-end digital solutions, including Design, SEO, Web & App Development, Advertising, Social Media Management, Maintenance, Migration, and industry-specific ecommerce solutions. Our goal is to help your business grow online with tailored strategies.' },
	{ question: 'How long does it take to complete a project?', answer: 'Project timelines depend on the service and complexity. Simple design or SEO projects can take a few weeks, while custom development, ecommerce solutions, or full-scale campaigns may take several months. We provide a clear timeline before starting.' },
	{ question: 'Can TechTicks handle ongoing support after project completion?', answer: 'Absolutely! We offer maintenance, updates, and continuous support to ensure your website, app, or campaigns run smoothly long after launch.' },
	{ question: 'Will my website or ecommerce platform be SEO-friendly?', answer: 'Yes. All our websites, apps, and ecommerce solutions are built with SEO best practices in mind to improve visibility, performance, and long-term traffic growth.' },
	{ question: 'How does TechTicks manage social media and advertising campaigns?', answer: 'We create targeted campaigns aligned with your brand and audience. From strategy to content creation, posting, and performance tracking, we ensure measurable growth and engagement across platforms.' },
]

const categoryIcons = { ecommerce: LuRadioTower, marketing: GiBullseye, design: HiOutlineShare, development: FaCode }

function Services() {
	const navigate = useNavigate()
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<div className='services-page'>
			<Seo
				title='Ecommerce Services, Amazon, TikTok Shop, Shopify, Digital Marketing, Design & Web Dev'
				description='TechTicks offers full-service e-commerce management across Amazon, TikTok Shop, Shopify, Walmart, eBay & Etsy, plus digital marketing, SEO, UX/UI design, graphic design and website development.'
			/>
			<img src='/contactrectleft.png' alt='' className='leftrect-amazon' />
			<img src='/contactrectright.png' alt='' className='rightrect-amazon' />
			<section className='about-page'>
				<hr style={{ color: 'white' }} />
				<div className='main-content'>
					<div className='about'>
						<div className='heading'><h1><span>Every</span><span>Growth</span><span>Lever.</span><span>One</span><span>Team.</span></h1></div>
						<div className='sub-heading'><p className='s-subheading'>Brands plateau when they manage channels in silos. Amazon is doing its thing, Meta Ads are doing their thing, and the Shopify store is doing its thing, and none of it is talking to the rest. TechTicks connects your e-commerce operations, paid media, design, and development so the whole machine moves in one direction.</p></div>
					</div>
					<button onClick={() => navigate('/contactUs')}>Book a Free Strategy Call</button>
				</div>
			</section>

			<Slider />
			<section className='why-choose-section'>
				<h1>Why Choose TechTicks?</h1>
				<p className='why-choose-subtitle'>Because execution without strategy is expensive failure.</p>
				<div className='why-choose-cards'>
					<div className='why-choose-card'><div className='icon'><MdCellTower /></div><h3>Ecommerce-Focused Experience</h3><p>From storefronts to Amazon listings, we understand how online selling works and design accordingly.</p></div>
					<div className='why-choose-card'><div className='icon'><GiBullseye /></div><h3>Clear Communication</h3><p>You get realistic timelines, transparent updates, and a dedicated point of contact - no confusion, no guessing.</p></div>
					<div className='why-choose-card'><div className='icon'><TbArrowsCross /></div><h3>Cross-Functional Expertise</h3><p>Design, development, marketing, and ecommerce all handled under one roof for better alignment and faster execution.</p></div>
				</div>
			</section>

			<section className='service-what-we-do'>
				<div className='swwd-header'><h1>What We Do</h1><NavLink to='/portfolio' className='swwd-btn'>Show Portfolio</NavLink></div>
				{servicesCatalog.map((category) => {
					const Icon = categoryIcons[category.iconKey]
					return <article key={category.id} className='services-category'>
						<div className='services-category-title-row'><div className='services-category-title'><Icon aria-hidden='true' /> {category.title}</div><NavLink to={category.route} className='services-category-link'>View Service →</NavLink></div>
						<p className='services-category-description'>{category.description}</p>
						<div className='services-category-groups'>
							{category.mainPageGroups.map((group) => <div key={group.title} className='services-category-card'><h5>{group.title}</h5><p>{group.description}</p></div>)}
						</div>
					</article>
				})}
			</section>

			<section className='services-pricing-section'>
				<h2>Pricing That Fits What You Actually Need</h2>
				<p className='services-pricing-body'>
					We don't sell fixed packages, because a $50K/month Amazon seller and a $500K/month
					Shopify brand have different problems that need different solutions. Tell us where you
					are and what you're trying to do, we'll put together a straightforward proposal within
					48 hours. No fluff, no upsell tiers.
				</p>
				<button className='services-pricing-btn' onClick={() => navigate('/contactUs')}>
					Get a Custom Proposal →
				</button>
			</section>

			<section className='faq-section'>
				<h2>Frequently Asked Questions</h2>
				<p className='subtitle'>Expand your reach and connect with customers online.</p>
				<div className='faq-list'>
					{faqData.map((item, index) => <div key={item.question} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
						<button className='faq-question' onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}><span>{item.question}</span><span className='arrow'>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span></button>
						<div className='faq-answer-wrapper'><div className='faq-answer'>{item.answer}</div></div>
					</div>)}
				</div>
			</section>
			<Testimonials />
		</div>
	)
}

export default Services
