import { useNavigate } from 'react-router-dom'

function CtaCard() {
	const navigate = useNavigate()

	return (
		<section className='fotter-card'>
			<div className='f-card'>
				<div className='cta-upper'>
					<h1 className='f-c-title'>
						Ready to Build Something Amazing?
					</h1>
					<p className='f-c-subtitle'>
						At TechTicks, we don't just build digital products we
						create smart, scalable solutions that help your business
						grow and stand out in a competitive market. Whether
						you're launching a new idea or upgrading an existing
						platform, our team is here to turn your goals into
						impactful results with strategy, creativity, and
						technology.
					</p>
				</div>

				<div className='cta-lower'>
					<h5 className='unlock-text'>
						Unlock Your Digital Potential Today
					</h5>
					<button
						onClick={() => navigate('/contactUs')}
						className='contact-btn'>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	)
}

export default CtaCard
