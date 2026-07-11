import { useNavigate, NavLink } from 'react-router-dom'

function SubServicePage({ data }) {
	const navigate = useNavigate()
	const { breadcrumb, breadcrumbLinks, hero, stats, platforms, servicesTitle, services, process, relatedServices } = data

	return (
		<div className='ssp-page'>

			{/* ── HERO ─────────────────────────────────── */}
			<section className='ssp-hero'>
				<div className='ssp-blob ssp-blob-left' />
				<div className='ssp-blob ssp-blob-right' />

				<div className='ssp-hero-inner'>
					{/* breadcrumb */}
					<nav className='ssp-breadcrumb'>
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
					</nav>

					<span className='ssp-hero-tag'>{hero.tag}</span>
					<h1 className='ssp-hero-title'>
						{hero.title}{' '}
						<span className='ssp-hero-highlight'>{hero.titleHighlight}</span>
					</h1>
					<p className='ssp-hero-sub'>{hero.subtitle}</p>
					<button className='ssp-hero-cta' onClick={() => navigate('/contactUs')}>
						Book a Free Strategy Call
					</button>
				</div>
			</section>

			{/* ── STATS BAR ────────────────────────────── */}
			<div className='ssp-stats-bar'>
				{stats.map((s, i) => (
					<div key={i} className='ssp-stat-item'>
						<span className='ssp-stat-value'>{s.value}</span>
						<span className='ssp-stat-label'>{s.label}</span>
						{i < stats.length - 1 && <div className='ssp-stat-divider' />}
					</div>
				))}
			</div>

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

			{/* ── SERVICES GRID ────────────────────────── */}
			<section className='ssp-services'>
				<div className='ssp-section-header'>
					<h2>{servicesTitle}</h2>
					<p>Every deliverable is built for results — nothing included just to pad the scope.</p>
				</div>

				<div className='ssp-services-grid'>
					{services.map((s, i) => (
						<div key={i} className='ssp-service-card'>
							<span className='ssp-card-num'>{s.num}</span>
							<h3>{s.title}</h3>
							<p>{s.desc}</p>
							{s.link && (
								<NavLink to={s.link} className='ssp-card-link'>
									View detail →
								</NavLink>
							)}
						</div>
					))}
				</div>
			</section>

			{/* ── PROCESS ──────────────────────────────── */}
			<section className='ssp-process'>
				<div className='ssp-blob ssp-blob-center' />
				<h2 className='ssp-process-title'>{process.title}</h2>
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

			{/* ── RELATED SERVICES ─────────────────────── */}
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

			{/* ── FINAL CTA ────────────────────────────── */}
			<section className='ssp-cta'>
				<h2>Ready to get started?</h2>
				<p>Book a free strategy call and we will build a plan around your specific goals.</p>
				<button onClick={() => navigate('/contactUs')}>Book a Free Strategy Call</button>
			</section>

		</div>
	)
}

export default SubServicePage
