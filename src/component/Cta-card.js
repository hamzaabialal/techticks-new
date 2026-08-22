import { useNavigate } from 'react-router-dom'

function CtaCard({
	title = "Not Sure Where to Start? Let's Figure It Out Together.",
	subtitle = "Book a free 30-minute call. We'll look at what you're currently doing, tell you honestly where the gaps are, and walk you through what we'd prioritise first. No deck. No sales pitch. Just a real conversation about your brand.",
	unlockText = 'No commitment. US timezone slots available.',
	buttonText = 'Book Your Free Strategy Call →',
}) {
	const navigate = useNavigate()

	return (
		<section className='fotter-card'>
			<div className='f-card'>
				<div className='cta-upper'>
					<h1 className='f-c-title'>{title}</h1>
					{subtitle && <p className='f-c-subtitle'>{subtitle}</p>}
				</div>

				<div className='cta-lower'>
					{unlockText && <h5 className='unlock-text'>{unlockText}</h5>}
					<button
						onClick={() => navigate('/contactUs')}
						className='contact-btn'>
						{buttonText}
					</button>
				</div>
			</div>
		</section>
	)
}

export default CtaCard
