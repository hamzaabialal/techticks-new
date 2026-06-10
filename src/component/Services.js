import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Testimonials from './testonomial'
import { AiOutlineChrome } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa6'
import { GrReactjs } from 'react-icons/gr'
import { IoMdLaptop } from 'react-icons/io'
import { TfiMobile } from 'react-icons/tfi'
import { GoFileDirectory } from 'react-icons/go'
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
						<HiOutlineShare /> Design
					</div>
					<p class='swwd-desc'>
						Design is how users decide whether to trust you or
						leave. We create visual and functional systems that
						guide users, communicate value, and drive action, not
						just look good.<br></br> From UI/UX to brand identity,
						social media creatives, packaging, and Amazon listings,
						our design work is built to convert, scale, and stay
						consistent across platforms.
					</p>

					<div class='swwd-subcards'>
						<div class='card'>
							<h5>UI/UX & Web Design</h5>
							<p style={{ color: 'gray' }}>
								We design intuitive, conversion-focused
								interfaces for websites, landing pages, and web
								apps. Every screen is built around user behavior
								— combining clean layouts, smart user flows, and
								visual hierarchy that builds trust and drives
								action from the very first click.
							</p>
						</div>
						<div class='card'>
							<h5>Brand & Social Media Design</h5>
							<p style={{ color: 'gray' }}>
								From logos and brand identity to scroll-stopping
								social media creatives, we build visual systems
								that keep your brand consistent and recognizable
								across every platform — Instagram posts,
								stories, banners, and ad creatives included.
							</p>
						</div>
						<div class='card'>
							<h5>Amazon & Packaging Design</h5>
							<p style={{ color: 'gray' }}>
								We design high-converting Amazon listings, A+
								content, storefronts, and product packaging that
								stand out in a crowded marketplace. Every visual
								is strategically crafted to communicate value,
								build buyer confidence, and drive more sales.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						{' '}
						<AiOutlineChrome /> SEO
					</div>
					<p class='swwd-desc'>
						Visibility is not optional. If your business doesn’t
						appear where customers search, you’re losing money
						daily.<br></br> Our SEO services focus on technical
						strength, keyword strategy, and content structure to
						improve rankings, organic traffic, and long-term
						discoverability without shortcuts that damage your site
						later.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5> Technical SEO</h5>
							<p style={{ color: 'gray' }}>
								We audit and fix the structural foundation of
								your website — site speed, crawlability,
								indexing, schema markup, and mobile
								optimization. A technically sound site is the
								non-negotiable base that makes everything else
								work.
							</p>
						</div>
						<div class='card'>
							<h5>On-Page & Content SEO</h5>
							<p style={{ color: 'gray' }}>
								We optimize every page with targeted keywords,
								compelling meta data, and content structures
								that search engines reward. From blog strategy
								to landing page copy, we create content that
								ranks, attracts the right traffic, and converts.
							</p>
						</div>
						<div class='card'>
							<h5>Off-Page & Local SEO</h5>
							<p style={{ color: 'gray' }}>
								We build your domain authority through quality
								backlinks, citations, and local SEO strategies
								that get your business found by the right
								customers — whether they're searching globally
								or right around the corner.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<FaCode /> Development
					</div>
					<p class='swwd-desc'>
						A weak build kills even the best design. We develop
						fast, secure, and scalable digital products that
						actually work in real-world conditions. Whether it’s a
						website, ecommerce store, or custom solution, our
						development process prioritizes performance,
						responsiveness, and clean architecture that’s easy to
						maintain and scale.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Website & Landing Page Development</h5>
							<p style={{ color: 'gray' }}>
								We build fast, secure, and fully responsive
								websites and landing pages that perform
								flawlessly across all devices. Clean code,
								optimized architecture, and a relentless focus
								on user experience ensure your site works as
								hard as your business does.
							</p>
						</div>
						<div class='card'>
							<h5>Ecommerce Development</h5>
							<p style={{ color: 'gray' }}>
								From Shopify and WooCommerce to fully custom
								ecommerce builds, we develop online stores
								designed to scale. Every store is structured for
								performance, easy management, and a seamless
								shopping experience that turns visitors into
								loyal buyers.
							</p>
						</div>
						<div class='card'>
							<h5>Custom Solutions & Integrations</h5>
							<p style={{ color: 'gray' }}>
								We build custom web applications, third-party
								integrations, CRM connections, and automation
								workflows that go beyond templates — giving your
								business a technical edge that supports growth
								and simplifies operations.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<GrReactjs /> Advertising
					</div>
					<p class='swwd-desc'>
						Paid ads without strategy are just expensive guesses. We
						build advertising campaigns designed to attract the
						right audience, control spend, and generate measurable
						returns.<br></br> From Google and social ads to Amazon
						PPC, every campaign is structured, tracked, and
						optimized for performance — not vanity metrics.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Amazon PPC</h5>
							<p style={{ color: 'gray' }}>
								We build and manage data-driven Amazon
								advertising campaigns — Sponsored Products,
								Sponsored Brands, and DSP — designed to maximize
								visibility, control ACOS, and drive profitable
								sales growth at every stage of your product
								lifecycle.
							</p>
						</div>
						<div class='card'>
							<h5>Google & Meta Ads</h5>
							<p style={{ color: 'gray' }}>
								From Google Search and Shopping campaigns to
								Facebook and Instagram ads, we create, manage,
								and optimize paid strategies that put your brand
								in front of the right audience — controlling
								spend while delivering measurable, scalable
								returns.
							</p>
						</div>
						<div class='card'>
							<h5>Ad Creative & Strategy</h5>
							<p style={{ color: 'gray' }}>
								Effective advertising starts with the right
								strategy. We handle audience research,
								competitor analysis, creative production, and
								continuous performance optimization — ensuring
								every campaign is built on real insight, not
								guesswork.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<IoMdLaptop /> Maintenance
					</div>
					<p class='swwd-desc'>
						Launching a website is not the finish line. Ongoing
						issues, updates, and performance drops can quietly
						damage your business. Our maintenance services keep your
						digital platforms stable, secure, and optimized through
						regular updates, monitoring, and technical support — so
						problems are fixed before they cost you.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5> Performance & Security Monitoring</h5>
							<p style={{ color: 'gray' }}>
								We proactively monitor your website for speed
								issues, security vulnerabilities, and downtime —
								identifying and resolving problems before they
								affect your traffic, rankings, or customer
								experience.
							</p>
						</div>
						<div class='card'>
							<h5>Regular Updates & Content Management</h5>
							<p style={{ color: 'gray' }}>
								From plugin updates and software patches to
								content changes and page edits, we keep your
								digital platforms current, stable, and aligned
								with your evolving business needs — without you
								lifting a finger.
							</p>
						</div>
						<div class='card'>
							<h5>Technical Support & Emergency Fixes</h5>
							<p style={{ color: 'gray' }}>
								When something breaks, you need fast, reliable
								support. We provide ongoing technical assistance
								and emergency fixes that minimize downtime and
								ensure your platforms stay fully operational at
								all times.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<TfiMobile /> Social Media
					</div>
					<p class='swwd-desc'>
						Social media isn’t about posting daily, it’s about
						presence, consistency, and engagement.<br></br> We
						manage and structure social media accounts to align with
						your brand voice, maintain visual consistency, and build
						real audience interaction that supports your overall
						business goals.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Content Creation & Scheduling</h5>
							<p style={{ color: 'gray' }}>
								We create platform-native content — graphics,
								captions, reels, and carousels — tailored to
								your brand voice and audience. Every post is
								planned, designed, and scheduled to maintain a
								consistent, engaging presence across all
								channels.
							</p>
						</div>
						<div class='card'>
							<h5>Account Growth & Community Management</h5>
							<p style={{ color: 'gray' }}>
								We grow your following strategically by engaging
								with your audience, responding to comments, and
								building real community around your brand —
								turning passive followers into active, loyal
								customers.
							</p>
						</div>
						<div class='card'>
							<h5>Social Media Strategy & Reporting</h5>
							<p style={{ color: 'gray' }}>
								We develop data-backed social media strategies
								aligned with your business goals — tracking
								performance, analyzing what works, and
								continuously refining your approach to ensure
								every platform drives real, measurable growth.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<GoFileDirectory /> Migration
					</div>
					<p class='swwd-desc'>
						Platform changes don’t have to mean broken systems or
						lost traffic.<br></br> We handle website and ecommerce
						migrations carefully, preserving data, SEO value, and
						functionality while improving performance and preparing
						your platform for future growth.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Website Platform Migration</h5>
							<p style={{ color: 'gray' }}>
								Moving from one platform to another doesn't have
								to mean losing traffic or functionality. We
								migrate your website carefully — preserving
								design, content, and SEO value — while upgrading
								your infrastructure for better performance and
								scalability.
							</p>
						</div>
						<div class='card'>
							<h5>Ecommerce Migration</h5>
							<p style={{ color: 'gray' }}>
								We handle full ecommerce migrations between
								platforms like Shopify, WooCommerce, Magento,
								and more — transferring products, customer data,
								order history, and integrations without
								disrupting your sales or losing your search
								rankings.
							</p>
						</div>
						<div class='card'>
							<h5>SEO-Safe Migration & Post-Launch Support</h5>
							<p style={{ color: 'gray' }}>
								Every migration we handle is built around
								protecting what you've already earned. We
								implement redirect strategies, monitor ranking
								fluctuations, and provide post-launch support to
								ensure your traffic and conversions remain
								stable after every transition.
							</p>
						</div>
					</div>
				</div>

				<div class='swwd-item'>
					<div class='swwd-title'>
						<LuRadioTower /> Ecommerce by Industry
					</div>
					<p class='swwd-desc'>
						Every industry sells differently. We don’t apply generic
						ecommerce templates.<br></br> Our industry-specific
						ecommerce solutions are tailored to your product type,
						customer behavior, and market dynamics from product
						structure to user flow and checkout optimization.
					</p>
					<div class='swwd-subcards'>
						<div class='card'>
							<h5>Industry-Specific Store Strategy</h5>
							<p style={{ color: 'gray' }}>
								We don't apply generic ecommerce templates.
								Every industry has unique buyer behavior,
								seasonal patterns, and competitive dynamics —
								and our strategies are tailored specifically to
								how your customers search, compare, and purchase
								within your niche.
							</p>
						</div>
						<div class='card'>
							<h5>Product Listing & Catalog Optimization</h5>
							<p style={{ color: 'gray' }}>
								From product titles and descriptions to pricing
								strategy and category structure, we optimize
								your entire catalog to maximize discoverability,
								improve conversion rates, and create a shopping
								experience that feels effortless for your
								buyers.
							</p>
						</div>
						<div class='card'>
							<h5>Ecommerce Growth & Scaling</h5>
							<p style={{ color: 'gray' }}>
								Once your store is performing, we help you scale
								— expanding to new marketplaces, launching new
								product lines, optimizing fulfillment, and
								building retention systems that turn one-time
								buyers into repeat customers and long-term
								revenue.
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
