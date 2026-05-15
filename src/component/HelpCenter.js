import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	FaSearch,
	FaQuestionCircle,
	FaTicketAlt,
	FaBookOpen,
	FaHeadset,
	FaChevronDown,
	FaChevronUp,
	FaEnvelope,
	FaWhatsapp,
} from 'react-icons/fa'

function HelpCenter() {
	const navigate = useNavigate()
	const [openIndex, setOpenIndex] = useState(null)
	const [search, setSearch] = useState('')

	const faqData = [
		{
			question: 'How do I get started with TechTicks?',
			answer: 'Reach out via the Contact form and our team will schedule a discovery call to understand your goals and recommend the right service package.',
		},
		{
			question: 'What is your typical response time?',
			answer: 'We respond to all inquiries within one business day. Active project clients have a dedicated point of contact for faster turnaround.',
		},
		{
			question: 'Can I track the status of my project?',
			answer: 'Yes. Every active client receives access to a shared project dashboard with milestones, timelines, and weekly progress updates.',
		},
		{
			question: 'How do I report a bug or technical issue?',
			answer: 'Open a support ticket from this page or email us at support@techticks.org with screenshots and steps to reproduce.',
		},
		{
			question: 'Do you offer training for the products you build?',
			answer: 'Every delivery includes documentation and a handover session. Extended training packages are available on request.',
		},
	]

	const filtered = faqData.filter(
		(item) =>
			item.question.toLowerCase().includes(search.toLowerCase()) ||
			item.answer.toLowerCase().includes(search.toLowerCase()),
	)

	return (
		<div className='legal-page help-page'>
			<section className='legal-hero'>
				<div className='legal-hero-inner'>
					<span className='legal-eyebrow'>Help Center</span>
					<h1>How can we help you today?</h1>
					<p>
						Browse the most common questions, search the knowledge
						base, or reach our support team directly.
					</p>
					<div className='help-search'>
						<FaSearch className='help-search-icon' />
						<input
							type='text'
							placeholder='Search articles, topics, questions...'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</div>
			</section>

			<section className='legal-section help-cards-section'>
				<div className='help-cards'>
					<div className='help-card'>
						<div className='help-card-icon'>
							<FaBookOpen />
						</div>
						<h3>Knowledge Base</h3>
						<p>
							Step-by-step guides and product documentation for
							every TechTicks service.
						</p>
					</div>
					<div className='help-card'>
						<div className='help-card-icon'>
							<FaTicketAlt />
						</div>
						<h3>Submit a Ticket</h3>
						<p>
							Open a support request and our team will get back
							to you within one business day.
						</p>
						<button
							className='help-card-btn'
							onClick={() => navigate('/contactUs')}>
							Open Ticket
						</button>
					</div>
					<div className='help-card'>
						<div className='help-card-icon'>
							<FaHeadset />
						</div>
						<h3>Talk to a Human</h3>
						<p>
							Prefer a conversation? Reach our team on WhatsApp
							or email — we&apos;re happy to help.
						</p>
					</div>
				</div>
			</section>

			<section className='legal-section help-faq-section'>
				<h2>
					<FaQuestionCircle /> Frequently asked questions
				</h2>
				<div className='help-faq-list'>
					{filtered.length === 0 ? (
						<p className='help-empty'>
							No matching articles. Try different keywords or
							submit a ticket.
						</p>
					) : (
						filtered.map((item, index) => (
							<div
								key={index}
								className={`help-faq-item ${openIndex === index ? 'active' : ''}`}>
								<button
									className='help-faq-question'
									onClick={() =>
										setOpenIndex(
											openIndex === index ? null : index,
										)
									}>
									<span>{item.question}</span>
									{openIndex === index ? (
										<FaChevronUp />
									) : (
										<FaChevronDown />
									)}
								</button>
								{openIndex === index && (
									<div className='help-faq-answer'>
										{item.answer}
									</div>
								)}
							</div>
						))
					)}
				</div>
			</section>

			<section className='legal-section help-contact-section'>
				<div className='help-contact-inner'>
					<h2>Still need help?</h2>
					<p>
						Our team is online during business hours and replies to
						every message.
					</p>
					<div className='help-contact-row'>
						<a
							className='help-contact-link'
							href='mailto:info@techticks.org'>
							<FaEnvelope /> info@techticks.org
						</a>
						<a
							className='help-contact-link'
							href='https://wa.me/+13205440303'
							target='_blank'
							rel='noopener noreferrer'>
							<FaWhatsapp /> +1 (320) 544-0303
						</a>
					</div>
					<button
						className='help-cta-btn'
						onClick={() => navigate('/contactUs')}>
						Contact Support
					</button>
				</div>
			</section>
		</div>
	)
}

export default HelpCenter
