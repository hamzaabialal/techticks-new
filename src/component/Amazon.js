import { useNavigate } from 'react-router-dom'
import rectcore1 from '../component/images/rectcore1.png'
import AmazonServicesComponent from './Amazon-Services'
import Testimonials from './testonomial'

const HowItworks = () => {
	const navigate = useNavigate()
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
				id='about'
				className='about-page '>
				<hr style={{ color: 'white' }}></hr>
				<div className='main-content '>
					<div className='about'>
						<div className='heading amazon-heading'>
							<h1>
								<span> Premium </span>
								<span>Amazon</span>
								<span>Growth</span>
								<br></br>
								<span>Services</span>
								<span>— From </span>
								<span> Launch </span>
								<span> to</span>
								<span>Massive</span>
								<span> Scale</span>
							</h1>
						</div>
						<div className='sub-heading'>
							<p>
								We are a full-service Amazon solutions partner,
								handling everything from account setup to
								advanced advertising, SEO, operations, and
								technical integrations so you can focus on
								growth, not grunt work.
							</p>
						</div>
					</div>
					<div>
						<button onClick={() => navigate('/contactUs')}>
							Start Now
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
		</div>
	)
}

export default HowItworks
