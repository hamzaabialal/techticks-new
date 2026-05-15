import { useNavigate } from 'react-router-dom'
import {
	FaLinkedin,
	FaTwitter,
	FaEnvelope,
} from 'react-icons/fa'
import founderimage1 from '../component/images/about-card1.png'
import founderimage2 from '../component/images/about-card2.png'

function Team() {
	const navigate = useNavigate()

	const leadership = [
		{
			image: founderimage1,
			name: 'Muhammad Athar',
			role: 'Founder & CEO',
			bio: 'Drives strategy and product vision. Twelve years building scalable digital systems for ecommerce and SaaS.',
		},
		{
			image: founderimage2,
			name: 'Abdullah Shafeeq',
			role: 'Co-Founder & CTO',
			bio: 'Leads engineering and architecture. Specializes in performance, security, and the boring details that make products last.',
		},
	]

	const departments = [
		{
			title: 'Design',
			count: 6,
			description:
				'UI/UX, brand, and visual designers shaping every customer touchpoint.',
		},
		{
			title: 'Engineering',
			count: 14,
			description:
				'Web, mobile, and backend engineers shipping production-grade software every week.',
		},
		{
			title: 'Marketing & SEO',
			count: 5,
			description:
				'Strategists running paid, organic, and content programs that compound over time.',
		},
		{
			title: 'Ecommerce',
			count: 4,
			description:
				'Amazon and DTC specialists translating data into measurable revenue.',
		},
		{
			title: 'Project Management',
			count: 3,
			description:
				'Owners of timelines, scope, and the dedicated communication every client deserves.',
		},
		{
			title: 'Support',
			count: 2,
			description:
				'Post-launch maintenance, monitoring, and customer help — always on.',
		},
	]

	return (
		<div className='legal-page team-page'>
			<section className='legal-hero'>
				<div className='legal-hero-inner'>
					<span className='legal-eyebrow'>Our Team</span>
					<h1>The people behind every TechTicks delivery.</h1>
					<p>
						A senior team of designers, engineers, and strategists
						who treat every project as their own. We don&apos;t
						outsource the work that matters.
					</p>
				</div>
			</section>

			<section className='legal-section team-leadership-section'>
				<h2>Leadership</h2>
				<div className='team-leadership-grid'>
					{leadership.map((p, i) => (
						<div
							key={i}
							className='team-leader-card'>
							<div className='team-leader-image'>
								<img
									src={p.image}
									alt={p.name}
								/>
							</div>
							<div className='team-leader-body'>
								<h3>{p.name}</h3>
								<span className='team-leader-role'>
									{p.role}
								</span>
								<p>{p.bio}</p>
								<div className='team-leader-socials'>
									<a
										href='#'
										aria-label='LinkedIn'>
										<FaLinkedin />
									</a>
									<a
										href='#'
										aria-label='Twitter'>
										<FaTwitter />
									</a>
									<a
										href='mailto:info@techticks.org'
										aria-label='Email'>
										<FaEnvelope />
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className='legal-section team-stats-section'>
				<div className='team-stats'>
					<div className='team-stat'>
						<h3>34+</h3>
						<p>Team members worldwide</p>
					</div>
					<div className='team-stat'>
						<h3>5</h3>
						<p>Years building together</p>
					</div>
					<div className='team-stat'>
						<h3>12</h3>
						<p>Time zones we cover</p>
					</div>
				</div>
			</section>

			<section className='legal-section team-departments-section'>
				<h2>How we&apos;re organized</h2>
				<p className='team-section-subtitle'>
					Six focused teams, one shared standard for execution.
				</p>
				<div className='team-departments-grid'>
					{departments.map((d, i) => (
						<div
							key={i}
							className='team-department-card'>
							<div className='team-department-count'>
								{d.count}
							</div>
							<h4>{d.title}</h4>
							<p>{d.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className='legal-section team-cta-section'>
				<div className='team-cta'>
					<h2>Want to work with us?</h2>
					<p>
						We&apos;re always open to talking with senior talent
						and ambitious partners.
					</p>
					<button
						className='help-cta-btn'
						onClick={() => navigate('/contactUs')}>
						Get in Touch
					</button>
				</div>
			</section>
		</div>
	)
}

export default Team
