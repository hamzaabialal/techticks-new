import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import rectcore1 from '../component/images/rectcore1.png'
import AmazonServicesComponent from './Amazon-Services'
import Testimonials from './testonomial'
import CtaCard from './Cta-card'
import Seo from './Seo'

const faqData = [
	{
		question: 'How quickly will I see results from Amazon PPC?',
		answer:
			"You'll start seeing data within the first two weeks, but meaningful optimisation happens between weeks 4 and 8. The first phase is auditing and rebuilding structure, not just adjusting bids. We don't rush that part, because doing it properly is what makes the next six months work.",
	},
	{
		question: 'Do you work with brand new Amazon sellers or only established accounts?',
		answer:
			'Both. For new sellers, we handle the full launch from listing creation to PPC strategy. For established sellers, we start with an audit to find what’s leaking before we add more spend.',
	},
	{
		question: 'Is there a minimum ad spend you require?',
		answer:
			"We generally work best with accounts spending $3,000/month or more on Amazon ads. Below that, it takes longer to generate statistically useful data. If you're below that threshold, book a call - we'll be straight with you about whether the timing makes sense.",
	},
	{
		question: 'Can you recover a suppressed or suspended listing?',
		answer:
			"Yes. ASIN suppression recovery and policy appeal management is something we handle regularly. Outcomes depend on the reason for suppression, but we know the process, and we've gotten a lot of listings reinstated.",
	},
]

const HowItworks = () => {
	const navigate = useNavigate()
	const [openIndex, setOpenIndex] = useState(null)
	return (
		<div>
			<Seo
				title='Amazon Agency, PPC Management, Listing Optimisation, A+ Content & Full Account Management'
				description='TechTicks manages Amazon PPC, listing optimisation, A+ Content, Brand Registry and full Seller Central account management for US brands. 80+ accounts, 6+ years of operator experience.'
			/>
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
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading amazon-heading'>
							<h1>
								<span>Your</span>
								<span>Amazon</span>
								<span>Listings</span>
								<span>Should</span>
								<span>Be</span>
								<span>Working</span>
								<span>Harder</span>
								<span>Than</span>
								<span>They</span>
								<span>Are</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								Amazon is the most competitive retail environment on earth. The brands
								winning there aren't just the ones with the best products - they're the
								ones whose listings rank, whose ads are profitable, whose A+ Content
								converts browsers into buyers, and whose accounts stay healthy.
								TechTicks manages all of it.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Book a Free Amazon Audit
						</button>
					</div>
				</div>
			</section>

			<section className='itworks-section itworks-process-section'>
				<div className='itworks-container'>
					<div className='itworks-header'>
						<h2>How it works</h2>
						<p>
							We follow a proven, execution-driven process
							designed to remove guesswork, eliminate waste, and
							scale your Amazon business the right way.
						</p>
					</div>

					<div className='itworks-process-steps'>
						<div className='itworks-step'>
							<div className='itworks-number-box'>01</div>
							<h3>Free Consultation Anytime</h3>
							<p>
								We diagnose your current performance and goals.
							</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>02</div>
							<h3>Custom Strategy Plan</h3>
							<p>Built to hit your KPIs and maximize ROI.</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>03</div>
							<h3>Execution & Optimization</h3>
							<p>We implement, refine, and scale campaigns.</p>
						</div>

						<div className='itworks-step'>
							<div className='itworks-number-box'>04</div>
							<h3>Ongoing Reporting & Transparent Metrics</h3>
							<p>
								Monthly insights and actionable recommendations.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='corr-services-wrapper'>
				<img
					src={rectcore1}
					alt='decorative'
					className='corr-decorativeimg1'
				/>

				<AmazonServicesComponent />
			</section>

			<Testimonials />

			<div className='faq-section'>
				<h2>Frequently Asked Questions</h2>
				<p className='subtitle'>Straight answers about how we run Amazon accounts.</p>

				<div className='faq-list'>
					{faqData.map((item, index) => (
						<div
							key={item.question}
							className={`faq-item ${openIndex === index ? 'active' : ''}`}>
							<button
								className='faq-question'
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								aria-expanded={openIndex === index}>
								<span>{item.question}</span>
								<span className='arrow'>
									{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
								</span>
							</button>
							<div className='faq-answer-wrapper'>
								<div className='faq-answer'>{item.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<CtaCard
				title="Your Amazon Account Has Revenue You're Currently Not Capturing"
				subtitle="A free audit takes 30 minutes. We'll look at your campaigns, your listings, and your account health, then tell you exactly where the money is going and where it's being left on the table."
				unlockText=''
				buttonText='Book a Free Amazon Audit →'
			/>
		</div>
	)
}

export default HowItworks
