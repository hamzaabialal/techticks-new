function PrivacyPolicy() {
	const sections = [
		{
			title: '1. Information we collect',
			body: 'We collect information you give us directly (name, email, project details when you contact us) and limited technical information automatically (IP address, browser type, pages visited). We do not collect sensitive personal data unless required to deliver a contracted service.',
		},
		{
			title: '2. How we use your information',
			body: 'Your information is used to respond to inquiries, deliver the services you have engaged us for, send relevant updates about active projects, and improve our website. We do not sell your data and we do not share it with third parties for marketing purposes.',
		},
		{
			title: '3. Cookies and tracking',
			body: 'TechTicks uses essential cookies to keep the site functional and analytics cookies to understand how visitors use our pages. You can control cookies through your browser settings. See our Cookie Policy for the full breakdown.',
		},
		{
			title: '4. Data sharing',
			body: 'We share data only with the service providers we depend on to operate (hosting, email, analytics). These vendors are bound by confidentiality and data-processing agreements that match our standards.',
		},
		{
			title: '5. Data retention',
			body: 'Project data is retained for the duration of the engagement and for a reasonable period afterward to support post-launch obligations. Inquiry data is retained for up to 24 months unless you ask us to delete it sooner.',
		},
		{
			title: '6. Your rights',
			body: 'You can request access to, correction of, or deletion of your personal data at any time. Email privacy@techticks.org and we will respond within 30 days. If you are in the EU or UK, you also have the right to object to certain types of processing and to lodge a complaint with your local supervisory authority.',
		},
		{
			title: '7. Security',
			body: 'We use industry-standard technical and organizational safeguards including encryption in transit, restricted internal access, and ongoing monitoring. No system is perfectly secure, but we treat data protection as a core engineering responsibility.',
		},
		{
			title: '8. International transfers',
			body: 'Our team and infrastructure operate across multiple regions. When personal data is transferred internationally, we use approved safeguards (standard contractual clauses) to keep it protected.',
		},
		{
			title: '9. Children',
			body: 'Our services are not directed to children under 16. We do not knowingly collect data from children. If we become aware that we have, we will delete it.',
		},
		{
			title: '10. Changes to this policy',
			body: 'We update this policy as our services evolve or as the law requires. The effective date below reflects the most recent change. Material changes will be communicated to active clients directly.',
		},
		{
			title: '11. Contact',
			body: 'Questions about this policy or our data practices? Email privacy@techticks.org or write to us through the Contact page.',
		},
	]

	return (
		<div className='legal-page privacy-page'>
			<section className='legal-hero'>
				<div className='legal-hero-inner'>
					<span className='legal-eyebrow'>Privacy Policy</span>
					<h1>How we handle your data.</h1>
					<p>
						Effective date: 1 January 2026. This policy describes
						what we collect, how we use it, and the rights you
						have over your information.
					</p>
				</div>
			</section>

			<section className='legal-section legal-content-section'>
				<div className='legal-content'>
					<p className='legal-intro'>
						TechTicks (&quot;we&quot;, &quot;us&quot;) provides
						digital design, development, marketing, and ecommerce
						services. We take data protection seriously and only
						collect what we need to deliver high-quality work.
					</p>
					{sections.map((s, i) => (
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

export default PrivacyPolicy
