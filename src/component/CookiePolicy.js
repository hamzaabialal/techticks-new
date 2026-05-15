function CookiePolicy() {
	const cookieTypes = [
		{
			name: 'Essential cookies',
			purpose: 'Keep the site functional — page navigation, form submissions, security.',
			canDisable: 'No (the site cannot work without them).',
		},
		{
			name: 'Performance cookies',
			purpose: 'Help us understand how visitors use the site so we can improve it (anonymous analytics).',
			canDisable: 'Yes, through your browser settings.',
		},
		{
			name: 'Functional cookies',
			purpose: 'Remember preferences such as language or theme so you don’t have to set them on every visit.',
			canDisable: 'Yes, through your browser settings.',
		},
		{
			name: 'Marketing cookies',
			purpose: 'Used by integrated tools (where applicable) to measure the performance of our advertising campaigns.',
			canDisable: 'Yes, through your browser settings or our cookie banner.',
		},
	]

	const sections = [
		{
			title: 'What are cookies?',
			body: 'Cookies are small text files placed on your device when you visit a website. They let the site remember information about your visit, such as preferences, login status, or how you arrived on a page.',
		},
		{
			title: 'Why we use cookies',
			body: 'We use cookies to keep the site working, to understand how it is used, and to improve the experience over time. We do not use cookies to build profiles of individuals or to sell your data.',
		},
		{
			title: 'Third-party cookies',
			body: 'Some pages may include cookies from third-party services we depend on (analytics, embedded videos, support widgets). These services have their own privacy policies and cookie practices.',
		},
		{
			title: 'How to control cookies',
			body: 'Most browsers let you view, manage, and delete cookies through their settings. Disabling some cookies may break parts of the site (for example, forms or embedded content).',
		},
		{
			title: 'Updates',
			body: 'We update this Cookie Policy as our tools change or as the law requires. The effective date below reflects the most recent change.',
		},
		{
			title: 'Contact',
			body: 'Questions about cookies on techticks.org? Email privacy@techticks.org or reach us through the Contact page.',
		},
	]

	return (
		<div className='legal-page cookie-page'>
			<section className='legal-hero'>
				<div className='legal-hero-inner'>
					<span className='legal-eyebrow'>Cookie Policy</span>
					<h1>How we use cookies on this site.</h1>
					<p>
						Effective date: 1 January 2026. A short, plain-English
						summary of the cookies we use and how to control them.
					</p>
				</div>
			</section>

			<section className='legal-section legal-content-section'>
				<div className='legal-content'>
					<p className='legal-intro'>
						We use cookies the same way most websites do — to keep
						things working and to understand how the site is used.
						You stay in control of your settings.
					</p>

					{sections.slice(0, 2).map((s, i) => (
						<div
							key={i}
							className='legal-block'>
							<h2>{s.title}</h2>
							<p>{s.body}</p>
						</div>
					))}

					<div className='legal-block'>
						<h2>Types of cookies we use</h2>
						<div className='cookie-table'>
							<div className='cookie-table-header'>
								<span>Cookie</span>
								<span>Purpose</span>
								<span>Can it be disabled?</span>
							</div>
							{cookieTypes.map((c, i) => (
								<div
									key={i}
									className='cookie-table-row'>
									<span data-label='Cookie'>
										<strong>{c.name}</strong>
									</span>
									<span data-label='Purpose'>
										{c.purpose}
									</span>
									<span data-label='Can it be disabled?'>
										{c.canDisable}
									</span>
								</div>
							))}
						</div>
					</div>

					{sections.slice(2).map((s, i) => (
						<div
							key={i}
							className='legal-block'>
							<h2>{s.title}</h2>
							<p>{s.body}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	)
}

export default CookiePolicy
