import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Testimonials from './testonomial'
import { FaCode } from 'react-icons/fa6'
import { LuRadioTower } from 'react-icons/lu'
import { HiOutlineShare } from 'react-icons/hi'
import { MdCellTower } from 'react-icons/md'
import { GiBullseye } from 'react-icons/gi'
import { TbArrowsCross } from 'react-icons/tb'
import Slider from '../slider'
import { useNavigate } from 'react-router-dom'

function Services() {
	const navigate = useNavigate()
	const faqData = [
		{
			question: ' ⁠What services does TechTicks offer?',
			answer: 'We provide end-to-end digital solutions, including Design, SEO, Web & App Development, Advertising, Social Media Management, Maintenance, Migration, and Industry-Specific E-commerce solutions. Our goal is to help your business grow online with tailored strategies.',
		},
		{
			question: 'How long does it take to complete a project?',
			answer: 'Project timelines depend on the service and complexity. Simple design or SEO projects can take a few weeks, while custom development, e-commerce solutions, or full-scale campaigns may take several months. We provide a clear timeline before starting.',
		},
		{
			question:
				'Can TechTicks handle ongoing support after project completion?',
			answer: 'Absolutely! We offer maintenance, updates, and continuous support to ensure your website, app, or campaigns run smoothly long after launch.',
		},
		{
			question: 'Will my website or e-commerce platform be SEO-friendly?',
			answer: 'Yes. All our websites, apps, and e-commerce solutions are built with SEO best practices in mind to improve visibility, performance, and long-term traffic growth.',
		},
		{
			question:
				' ⁠How does TechTicks manage social media and advertising campaigns?',
			answer: 'We create targeted campaigns aligned with your brand and audience. From strategy to content creation, posting, and performance tracking, we ensure measurable growth and engagement across platforms.',
		},
		// You can add more items
	]

	const [openIndex, setOpenIndex] = useState(null)

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}
	return (
		<div>
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
			<section
				id='about '
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading'>
							<h1>
								<span>We</span>
								<span>don’t</span>
								<span>just</span>
								<span>check</span>
								<span>boxes</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p className='s-subheading'>
								We solve problems your competitors are still
								ignoring. Every service below is engineered to
								grow your customers, simplify your operations,
								and make your brand impossible to ignore.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Start Now
						</button>

						<Slider />
					</div>
				</div>
			</section>
			{/** why choose tichticks */}
			<section class='why-choose-section'>
				<h1>Why Choose Techticks?</h1>
				<p class='why-choose-subtitle'>
					Because execution without strategy is expensive failure.
				</p>

				<div class='why-choose-cards'>
					<div class='why-choose-card'>
						<div class='icon'>
							<MdCellTower />
						</div>
						<h3>Ecommerce-Focused Experience</h3>
						<p>
							From storefronts to Amazon listings, we understand
							how online selling works and design accordingly.
						</p>
					</div>

					<div class='why-choose-card'>
						<div class='icon'>
							<GiBullseye />
						</div>
						<h3>Clear Communication</h3>
						<p>
							You get realistic timelines, transparent updates,
							and a dedicated point of contact — no confusion, no
							guessing.
						</p>
					</div>

					<div class='why-choose-card'>
						<div class='icon'>
							<TbArrowsCross />
						</div>
						<h3>Cross-Functional Expertise</h3>
						<p>
							Design, development, marketing, and ecommerce all
							handled under one roof for better alignment and
							faster execution.
						</p>
					</div>
				</div>
			</section>

			{/** What We Do section */}

			<section class='service-what-we-do'>
				<div class='swwd-header'>
					<h1>What We Do</h1>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a
						href='#'
						class='swwd-btn'>
						Show Portfolio
					</a>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<LuRadioTower /> Ecommerce Management
					</div>
					<p class='swwd-desc'>
						Amazon · TikTok Shop · Shopify · Walmart · eBay · Etsy.
						<br></br> From account setup and listing optimisation to
						platform PPC and full account management — we handle the
						daily operations so you stop firefighting and start
						scaling. Whether you're launching a new channel or
						trying to scale an existing one, we've done it before.
					</p>

					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Amazon</h5>
							<p style={{ color: 'gray' }}>
								The world's largest ecommerce platform — and the
								most competitive. We manage listings, PPC, A+
								Content, Brand Registry, and account health, run
								by operators who've handled real Seller Central
								accounts, not just read about them.
							</p>
						</div>
						<div class='card'>
							<h5>TikTok Shop</h5>
							<p style={{ color: 'gray' }}>
								The fastest-growing sales channel in ecommerce
								right now. Store setup, creator affiliate
								programs, UGC strategy, and TikTok Ads — built to
								turn discovery into real sales, not just views.
							</p>
						</div>
						<div class='card'>
							<h5>Shopify, Walmart, eBay & Etsy</h5>
							<p style={{ color: 'gray' }}>
								Your owned DTC store plus the marketplaces that
								matter. Custom Shopify builds, Walmart Connect,
								eBay Cassini SEO, and Etsy listing optimisation —
								all managed under one roof by a single team.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						{' '}
						<GiBullseye /> Digital Marketing
					</div>
					<p class='swwd-desc'>
						Meta Ads · Google Ads · SEO · Email Marketing · Social
						Media · Content.<br></br> Paid, organic, and retention —
						built as an integrated system, not separate campaigns. We
						set real KPIs (ROAS, CAC, revenue) and optimise against
						those, not vanity metrics.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Paid Advertising</h5>
							<p style={{ color: 'gray' }}>
								Meta and Google campaigns structured around your
								numbers — ROAS, CAC, and LTV — not clicks and
								impressions. Every dollar of spend is tracked,
								tested, and optimised for measurable returns.
							</p>
						</div>
						<div class='card'>
							<h5>SEO & Content</h5>
							<p style={{ color: 'gray' }}>
								Technical strength, keyword strategy, and content
								structure built to rank and convert. We grow
								organic traffic and long-term discoverability
								without shortcuts that damage your site later.
							</p>
						</div>
						<div class='card'>
							<h5>Email, SMS & Social</h5>
							<p style={{ color: 'gray' }}>
								Retention and community working alongside paid —
								lifecycle email and SMS flows plus platform-native
								social content that keeps customers coming back,
								not just clicking once.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<HiOutlineShare /> UX/UI & Graphic Design
					</div>
					<p class='swwd-desc'>
						UX/UI Design · Brand Identity · Amazon Creatives · Ad
						Design · Packaging.<br></br> Design that serves a
						commercial purpose — improving conversion, building
						trust, and making your brand recognisable. Backed by user
						behaviour data and ecommerce best practices, not just
						taste.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>UX/UI & Web Design</h5>
							<p style={{ color: 'gray' }}>
								Intuitive, conversion-focused interfaces for
								websites, landing pages, and stores. Every screen
								is built around real user behaviour — clean
								layouts, smart flows, and visual hierarchy that
								drives action from the first click.
							</p>
						</div>
						<div class='card'>
							<h5>Brand Identity & Ad Creative</h5>
							<p style={{ color: 'gray' }}>
								From logos and brand systems to scroll-stopping ad
								and social creatives, we keep your brand
								consistent and recognisable across every platform
								and campaign you run.
							</p>
						</div>
						<div class='card'>
							<h5>Amazon & Packaging Design</h5>
							<p style={{ color: 'gray' }}>
								High-converting Amazon listings, A+ Content,
								storefronts, and product packaging —
								strategically crafted to communicate value, build
								buyer confidence, and stand out on the shelf.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<FaCode /> Website Development
					</div>
					<p class='swwd-desc'>
						Shopify · WordPress · Landing Pages · Funnels ·
						Performance Optimisation.<br></br> Websites built for
						speed, clarity, and conversion — not to impress
						designers. We build, we maintain, and we optimise as your
						business grows.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Custom Store Development</h5>
							<p style={{ color: 'gray' }}>
								Full builds on Shopify 2.0 and WordPress —
								mobile-first by default, with 90+ performance
								targets baked into the build, not patched in
								after launch.
							</p>
						</div>
						<div class='card'>
							<h5>Landing Pages & Funnels</h5>
							<p style={{ color: 'gray' }}>
								Conversion-ready landing pages and sales funnels
								engineered around how online shoppers actually
								behave — no bloat, no slow themes, no checkout
								that leaks revenue.
							</p>
						</div>
						<div class='card'>
							<h5>Performance & Optimisation</h5>
							<p style={{ color: 'gray' }}>
								Ongoing speed, CRO, and maintenance as your
								business grows. We measure, test, and refine so
								your site keeps converting long after launch.
							</p>
						</div>
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

			{/**testonomial */}

			<Testimonials />
		</div>
	)
}

export default Services
