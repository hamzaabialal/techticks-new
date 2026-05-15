function TermsConditions() {
	const sections = [
		{
			title: '1. Acceptance of terms',
			body: 'By using techticks.org or engaging TechTicks for any service, you accept these Terms & Conditions. If you do not accept them, please stop using the site and decline our proposal before work begins.',
		},
		{
			title: '2. Services',
			body: 'TechTicks delivers digital services including design, web and mobile development, SEO, advertising, ecommerce, and ongoing maintenance. Specific scope, deliverables, timelines, and fees are defined in a written proposal or statement of work agreed by both parties.',
		},
		{
			title: '3. Payments',
			body: 'Unless agreed otherwise, projects are billed in stages: an initial deposit on signing, milestone payments during the engagement, and a final payment on delivery. Invoices are due within 14 days. Late payments may pause active work and accrue reasonable interest.',
		},
		{
			title: '4. Client responsibilities',
			body: 'You agree to provide timely access to information, accounts, and feedback we need to complete the work. Delays in client input that exceed agreed turnaround times may shift the project timeline accordingly.',
		},
		{
			title: '5. Revisions and change requests',
			body: 'Each scope includes a defined number of revisions per stage. Additional changes outside the agreed scope are estimated separately and require approval before they begin.',
		},
		{
			title: '6. Intellectual property',
			body: 'On full payment, you receive ownership of the final deliverables we create specifically for your project, except for third-party assets, libraries, or pre-existing TechTicks tooling, which remain under their respective licenses.',
		},
		{
			title: '7. Confidentiality',
			body: 'Both parties agree to keep non-public information shared during the engagement confidential. We may reference completed work in our portfolio in summary form unless you request otherwise in writing.',
		},
		{
			title: '8. Warranties and liability',
			body: 'We deliver work to a professional standard. The site and our services are provided on an "as is" basis without further warranties. To the fullest extent permitted by law, our total liability is limited to the fees paid for the relevant project.',
		},
		{
			title: '9. Termination',
			body: 'Either party may terminate an engagement with written notice if the other materially breaches these terms and fails to remedy the breach within 14 days. Fees are payable for all work completed up to the termination date.',
		},
		{
			title: '10. Acceptable use of the site',
			body: 'You agree not to misuse the website (no scraping at scale, no attempts to compromise security, no posting of unlawful content). We may suspend access to anyone who violates these rules.',
		},
		{
			title: '11. Governing law',
			body: 'These terms are governed by the laws of the jurisdiction in which TechTicks is registered. Any disputes will be resolved in the competent courts of that jurisdiction unless we agree otherwise in writing.',
		},
		{
			title: '12. Changes',
			body: 'We may update these terms over time. Material changes will be posted here with an updated effective date and, where required, communicated to active clients.',
		},
		{
			title: '13. Contact',
			body: 'Questions about these terms? Email legal@techticks.org or reach out via the Contact page.',
		},
	]

	return (
		<div className='legal-page terms-page'>
			<section className='legal-hero'>
				<div className='legal-hero-inner'>
					<span className='legal-eyebrow'>Terms &amp; Conditions</span>
					<h1>The agreement between us.</h1>
					<p>
						Effective date: 1 January 2026. These terms cover use
						of techticks.org and the services we provide.
					</p>
				</div>
			</section>

			<section className='legal-section legal-content-section'>
				<div className='legal-content'>
					<p className='legal-intro'>
						We keep these terms readable on purpose — we want both
						sides to know what they&apos;re agreeing to. If
						anything is unclear, ask before signing.
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

export default TermsConditions
