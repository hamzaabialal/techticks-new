import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { FiShoppingBag, FiCode, FiRefreshCw, FiLayout, FiZap, FiTool, FiMonitor, FiPenTool, FiShare2, FiPrinter, FiDollarSign, FiFileText, FiMail, FiShield, FiTarget, FiShuffle } from 'react-icons/fi'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Testimonials from './testonomial'
import Seo from './Seo'

const SERVICE_ICONS = {
	shopify: <FiShoppingBag />,
	code: <FiCode />,
	refresh: <FiRefreshCw />,
	layout: <FiLayout />,
	speed: <FiZap />,
	support: <FiTool />,
	monitor: <FiMonitor />,
	pen: <FiPenTool />,
	share: <FiShare2 />,
	printer: <FiPrinter />,
	dollar: <FiDollarSign />,
	doc: <FiFileText />,
	mail: <FiMail />,
	badge: <FiShield />,
	target: <FiTarget />,
	shuffle: <FiShuffle />,
}

function SubServicePage({ data }) {
	const navigate = useNavigate()
	const [openFaqIndex, setOpenFaqIndex] = useState(null)
	const { breadcrumb, breadcrumbLinks, hero, stats, platforms, servicesTitle, servicesSubtitle, services, process, relatedServices } = data

	const heroCtaText = data.hero?.ctaText || 'Book a Free Strategy Call'
	const heroCtaLink = data.hero?.ctaLink || '/contactUs'

	return (
		<div className={`ssp-page ${data.pageClass || ""}`}>
			<Seo title={data.seoTitle} description={data.seoDescription} />

			{/* ── HERO ─────────────────────────────────── */}
			<section className={`ssp-hero ${data.hero?.bgClass || ""}`}>
				<div className='ssp-blob ssp-blob-left' />
				<div className='ssp-blob ssp-blob-right' />

				<div className='ssp-hero-inner'>
					{/* breadcrumb */}
					{data.showBreadcrumb !== false && <nav className='ssp-breadcrumb'>
						{breadcrumb.map((crumb, i) => (
							<span key={i}>
								{i < breadcrumbLinks.length ? (
									<NavLink to={breadcrumbLinks[i]}>{crumb}</NavLink>
								) : (
									<span className='ssp-bc-current'>{crumb}</span>
								)}
								{i < breadcrumb.length - 1 && <span className='ssp-bc-sep'> / </span>}
							</span>
						))}
					</nav>}

					{hero.tag && <span className='ssp-hero-tag'>{hero.tag}</span>}
					<h1 className='ssp-hero-title'>
						{hero.titleSegments ? (
							hero.titleSegments.map((seg, i) =>
								seg.break ? (
									<br key={i} />
								) : seg.gradient ? (
									<span key={i} className='ssp-hero-highlight'>{seg.text}</span>
								) : (
									<span key={i}>{seg.text}</span>
								)
							)
						) : (
							<>
								{hero.title}{' '}
								<span className='ssp-hero-highlight'>{hero.titleHighlight}</span>
								{hero.titleSuffix && <><br />{hero.titleSuffix}</>}
							</>
						)}
					</h1>
					<p className='ssp-hero-sub'>{hero.subtitle}</p>
					<button className='ssp-hero-cta' onClick={() => navigate(heroCtaLink)}>
						{heroCtaText}
					</button>
				</div>
			</section>

			{/* ── STATS BAR ────────────────────────────── */}
			{data.showStats !== false && <div className='ssp-stats-bar'>
				{stats.map((s, i) => (
					<div key={i} className='ssp-stat-item'>
						<span className='ssp-stat-value'>{s.value}</span>
						<span className='ssp-stat-label'>{s.label}</span>
						{i < stats.length - 1 && <div className='ssp-stat-divider' />}
					</div>
				))}
			</div>}

			{/* ── PLATFORMS (optional) ─────────────────── */}
			{platforms && (
				<div className='ssp-platforms'>
					<p className='ssp-platforms-label'>End-to-end operations for every major platform</p>
					<div className='ssp-platforms-list'>
						{platforms.map((p, i) => (
							<span key={i} className='ssp-platform-chip'>{p}</span>
						))}
					</div>
				</div>
			)}

			{/* ── TEXT BLOCK (optional, generic 2-col text section) ── */}
			{data.textBlock && (
				<section className='ssp-text-block'>
					<div className='ssp-text-block-left'>
						<h2>{data.textBlock.title}</h2>
					</div>
					<div className='ssp-text-block-right'>
						{data.textBlock.paragraphs.map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
				</section>
			)}

			{/* ── SERVICES GRID ────────────────────────── */}
			<section className='ssp-services'>
				<div className='ssp-section-header'>
					<h2>{servicesTitle}</h2>
					<p>{servicesSubtitle || 'Every deliverable is built for results — nothing included just to pad the scope.'}</p>
				</div>

				<div className='ssp-services-grid'>
					{services.map((s, i) => {
						const serviceLink = s.ctaLink || s.link
						const serviceLabel = s.ctaText || 'View detail →'
						return (
							<div key={i} className='ssp-service-card'>
								<span className='ssp-card-num'>{s.num}</span>
								<h3>{s.title}</h3>
								<p>{s.desc}</p>
								{s.iconKey && SERVICE_ICONS[s.iconKey] ? (
									<div className='ssp-card-icon' aria-hidden='true'>{SERVICE_ICONS[s.iconKey]}</div>
								) : (
									s.icon && (
										<div className='ssp-card-icon'>
											<img src={s.icon} alt='' />
										</div>
									)
								)}
								{serviceLink && (
									<NavLink to={serviceLink} className='ssp-card-link'>
										{serviceLabel}
									</NavLink>
								)}
							</div>
						)
					})}
				</div>
			</section>

			{/* ── PROCESS ──────────────────────────────── */}
			{data.platformLogos?.length > 0 && (
				<section className='ssp-platform-logos' aria-label={data.platformLogosLabel || 'Platforms and technologies'}>
					<p>{data.platformLogosLabel || 'Platforms & technologies we build on'}</p>
					<div className='ssp-platform-logos-list'>
						{data.platformLogos.map((platform, i) => (
							<img key={i} src={platform.image} alt={platform.alt} />
						))}
					</div>
				</section>
			)}

			{data.portfolioBeforeProcess && data.portfolio && (
				<section className='ssp-portfolio'>
					<div className='ssp-portfolio-header'>
						<h2>{data.portfolio.title}</h2>
						{data.portfolio.subtitle && <p className='ssp-portfolio-subtitle'>{data.portfolio.subtitle}</p>}
						{data.portfolio.viewAllLink && <button className='ssp-portfolio-view-all' onClick={() => navigate(data.portfolio.viewAllLink)}>{data.portfolio.viewAllText || 'VIEW ALL WORK ->'}</button>}
					</div>
					<div className='ssp-portfolio-grid'>
						{data.portfolio.items.map((item, i) => (
							<div key={i} className='ssp-portfolio-card'>
								<div className='ssp-portfolio-image'>
									{item.image ? <img src={item.image} alt={item.title} className={item.imageClass || undefined} /> : <div className={`ssp-portfolio-placeholder ${item.visual || ''}`} aria-hidden='true'><span /><span /><span /></div>}
								</div>
								<div className='ssp-portfolio-content'><h3>{item.title}</h3><span className='ssp-portfolio-tag'>{item.category}</span></div>
							</div>
						))}
					</div>
				</section>
			)}

			{process && (
			<section className='ssp-process'>
				<div className='ssp-blob ssp-blob-center' />
				<h2 className='ssp-process-title'>{process.title}</h2>
				{process.subtitle && <p className='ssp-process-subtitle'>{process.subtitle}</p>}
				<div className='ssp-process-steps'>
					{process.steps.map((step, i) => (
						<div key={i} className='ssp-process-step'>
							<div className='ssp-step-num'>{step.num}</div>
							{i < process.steps.length - 1 && <div className='ssp-step-line' />}
							<h4>{step.title}</h4>
							<p>{step.desc}</p>
						</div>
					))}
				</div>
			</section>
			)}

			{/* ── CROSS-SELL (optional, generic 2-col text + stacked cards) ── */}
			{data.crossSell && (
				<section className='ssp-cross-sell'>
					<div className='ssp-cross-sell-left'>
						<h2>{data.crossSell.title}</h2>
						<p>{data.crossSell.subtitle}</p>
					</div>
					<div className='ssp-cross-sell-right'>
						{data.crossSell.items.map((item, i) => (
							<div key={i} className='ssp-cross-sell-card'>
								<h3>{item.title}</h3>
								<p>{item.desc}</p>
								<NavLink to={item.link} className='ssp-cross-sell-link'>
									{item.linkText || 'Learn more'}
								</NavLink>
							</div>
						))}
					</div>
				</section>
			)}

			{/* ── GROWTH PARTNER (optional) ────────────── */}
			{data.growthPartner && (
				<section className='ssp-growth-partner'>
					<div className='ssp-growth-partner-left'>
						<h2>{data.growthPartner.title}</h2>
						<p>{data.growthPartner.subtitle}</p>
					</div>
					<div className='ssp-growth-partner-right'>
						{data.growthPartner.stats.map((stat, i) => (
							<div key={i} className='ssp-growth-partner-row'>
								<span className='ssp-gp-stat'>{stat.stat}</span>
								<div className='ssp-gp-content'>
									<h4>{stat.title}</h4>
									<p>{stat.desc}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* ── PORTFOLIO (optional) ─────────────────── */}
			{!data.portfolioBeforeProcess && data.portfolio && (
				<section className='ssp-portfolio'>
					<div className='ssp-portfolio-header'>
						<h2>{data.portfolio.title}</h2>
						{data.portfolio.subtitle && <p className='ssp-portfolio-subtitle'>{data.portfolio.subtitle}</p>}
						{data.portfolio.viewAllLink && (
							<button
								className='ssp-portfolio-view-all'
								onClick={() => navigate(data.portfolio.viewAllLink)}
							>
								{data.portfolio.viewAllText || 'VIEW ALL WORK →'}
							</button>
						)}
					</div>
					<div className='ssp-portfolio-grid'>
						{data.portfolio.items.map((item, i) => (
							<div key={i} className='ssp-portfolio-card'>
								<div className='ssp-portfolio-image'>
									{item.image ? (
										<img src={item.image} alt={item.title} className={item.imageClass || undefined} />
									) : (
										<div className={`ssp-portfolio-placeholder ${item.visual || ''}`} aria-hidden='true'>
											<span />
											<span />
											<span />
										</div>
									)}
								</div>
								<div className='ssp-portfolio-content'>
									<h3>{item.title}</h3>
									<span className='ssp-portfolio-tag'>{item.category}</span>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* ── RELATED SERVICES ─────────────────────── */}
			{relatedServices?.length > 0 && (
			<section className='ssp-related'>
				<h2>More ways TechTicks can help</h2>
				<p className='ssp-related-sub'>
					Every service is designed to work together — pick one or let us run the full stack.
				</p>
				<div className='ssp-related-grid'>
					{relatedServices.map((r, i) => (
						<div
							key={i}
							className='ssp-related-card'
							onClick={() => navigate(r.link)}
						>
							<h3>{r.title}</h3>
							<p>{r.desc}</p>
							<span className='ssp-related-arrow'>→</span>
						</div>
					))}
				</div>
			</section>
			)}

			{/* ── FAQ (optional) ───────────────────────── */}
			{data.faq?.length > 0 && (
				<div className='faq-section'>
					<h2>Frequently Asked Questions</h2>
					{data.faqSubtitle && <p className='subtitle'>{data.faqSubtitle}</p>}
					<div className='faq-list'>
						{data.faq.map((item, index) => (
							<div
								key={item.question}
								className={`faq-item ${openFaqIndex === index ? 'active' : ''}`}>
								<button
									className='faq-question'
									onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
									aria-expanded={openFaqIndex === index}>
									<span>{item.question}</span>
									<span className='arrow'>
										{openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
									</span>
								</button>
								<div className='faq-answer-wrapper'>
									<div className='faq-answer'>{item.answer}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}

			{/* ── TESTIMONIALS ────────────────────────── */}
			{(data.showTestimonials || data.pageClass === 'ssp-page--digital-marketing' || data.pageClass === 'ssp-page--ui-ux-design') && <Testimonials categories={data.testimonialCategories} />}

			{/* ── FINAL CTA ────────────────────────────── */}
			{data.cta ? (
				<section className='ssp-cta'>
					<h2>{data.cta.title || 'Ready to get started?'}</h2>
					<p>{data.cta.subtitle || 'Book a free strategy call and we will build a plan around your specific goals.'}</p>
					<button onClick={() => navigate(data.cta.buttonLink || '/contactUs')}>{data.cta.buttonText || 'Book a Free Strategy Call'}</button>
				</section>
			) : (
				<section className='ssp-cta'>
					<h2>Ready to get started?</h2>
					<p>Book a free strategy call and we will build a plan around your specific goals.</p>
					<button onClick={() => navigate('/contactUs')}>Book a Free Strategy Call</button>
				</section>
			)}

		</div>
	)
}

export default SubServicePage
