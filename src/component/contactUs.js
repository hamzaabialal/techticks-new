import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
	FaLinkedin,
	FaFacebook,
	FaInstagram,
	FaEnvelope,
	FaWhatsapp,
} from 'react-icons/fa'
import { FaXTwitter, FaThreads } from 'react-icons/fa6'
import Seo from './Seo'

const container = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

const item = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const formReveal = {
	hidden: { opacity: 0, x: 40 },
	show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const SERVICE_OPTIONS = [
	'Amazon PPC',
	'Listing Optimisation',
	'TikTok Shop',
	'Shopify',
	'Digital Marketing',
	'UX/UI Design',
	'Graphic Design',
	'Website Development',
	'Other',
]

function ContactUs() {
	const [servicesNeeded, setServicesNeeded] = useState([])

	const toggleService = (service) => {
		setServicesNeeded((prev) =>
			prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service],
		)
	}

	// The EmailJS template only has {{user_name}}, {{user_email}}, {{message}}
	// placeholders — the extra qualifying fields (platform, revenue, services)
	// are folded into one formatted message body instead of requiring a
	// template change on the EmailJS dashboard.
	const sendEmail = (e) => {
		e.preventDefault()
		const form = e.target

		const lines = [
			form.company.value && `Brand/Company: ${form.company.value}`,
			form.platform.value && `Primary Platform: ${form.platform.value}`,
			form.revenue.value && `Monthly Revenue: ${form.revenue.value}`,
			servicesNeeded.length > 0 && `Services Needed: ${servicesNeeded.join(', ')}`,
			form.message.value && `\n${form.message.value}`,
		].filter(Boolean)

		const templateParams = {
			user_name: form.user_name.value,
			user_email: form.user_email.value,
			message: lines.join('\n'),
		}

		emailjs
			.send(
				'service_f75opab',
				'template_jr1szlf',
				templateParams,
				'_OkziMgM7xZC51NDs',
			)
			.then(() => {
				alert('Message sent successfully')
				form.reset()
				setServicesNeeded([])
			})
			.catch((error) => {
				console.log(error)
				alert('Failed')
			})
	}

	const socials = [
		{
			href: 'https://www.linkedin.com/company/aatechticks/posts/?feedView=all',
			icon: <FaLinkedin />,
		},
		{
			href: 'https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr',
			icon: <FaFacebook />,
		},
		{
			href: 'https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ==',
			icon: <FaInstagram />,
		},
		{
			href: 'https://www.threads.com/@techticks2020?igshid=NTc4MTIwNjQ2YQ==',
			icon: <FaThreads />,
		},
		{
			href: 'https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ',
			icon: <FaXTwitter />,
		},
	]

	return (
		<div>
			<Seo
				title='Contact TechTicks: Book a Free Strategy Call for Your Ecommerce Brand'
				description='Get in touch with TechTicks. Book a free 30-minute strategy call for Amazon, TikTok Shop, Shopify, digital marketing, design, or website development. US timezone availability.'
			/>
			<img
				src='/contactrectleft.png'
				alt=''
				className='contact-leftrect'
			/>
			<img
				src='/contactrectright.png'
				alt=''
				className='contact-rightrect'
			/>
			<section className='contact-page'>
				<div className='contact-p-container'>
					{/* LEFT SIDE */}
					<motion.div
						className='contact-p-left'
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}>
						<motion.h1 variants={item}>
							<span>Get</span>
							<span>In</span>
							<span>Touch</span>
						</motion.h1>

						<motion.p variants={item}>
							Have any questions or ready to scale your business to
							next level?
						</motion.p>

						<motion.div
							className='contact-p-card'
							variants={item}
							whileHover={{ y: -4 }}>
							<div className=''>
								<div className='icons'> </div>
								<div className='contact-card-content'>
									<div className='icon'>
										<FaEnvelope />
									</div>
									<div>
										<h4>Email Us</h4>
										<p>info@techticks.org</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							className='contact-card-content contact-p-card'
							variants={item}
							whileHover={{ y: -4 }}>
							<div className=''>
								<div className='icons'> </div>
								<div className='c-card-content'>
									<div className='icon'>
										<FaWhatsapp />
									</div>
									<div>
										<h4>Call Us</h4>
										<p>+1 (320) 544-0303</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							className='follow-contact contact-card-content contact-p-card'
							variants={item}>
							<h4>Follow Us</h4>

							<div className='socials'>
								{socials.map((s, i) => (
									<motion.div
										key={i}
										whileHover={{ y: -4, scale: 1.08 }}>
										<a
											href={s.href}
											target='blank'>
											{s.icon}
										</a>
									</motion.div>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* RIGHT SIDE FORM */}
					<motion.div
						id='contact-p-right'
						className='contact-p-right'
						variants={formReveal}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.2 }}>
						<form
							className='contact-p-form'
							onSubmit={sendEmail}>
							<input
								type='text'
								name='user_name'
								placeholder='Full Name'
								required
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Email Address'
								required
							/>
							<input
								type='text'
								name='company'
								placeholder='Brand / Company Name'
								required
							/>
							<select name='platform' defaultValue='' required>
								<option value='' disabled>
									Primary Platform
								</option>
								<option value='Amazon'>Amazon</option>
								<option value='TikTok Shop'>TikTok Shop</option>
								<option value='Shopify'>Shopify</option>
								<option value='Walmart'>Walmart</option>
								<option value='eBay'>eBay</option>
								<option value='Etsy'>Etsy</option>
								<option value='Other'>Other</option>
							</select>
							<select name='revenue' defaultValue=''>
								<option value='' disabled>
									Monthly Revenue Range
								</option>
								<option value='Not yet selling'>Not yet selling</option>
								<option value='Under $10K'>Under $10K</option>
								<option value='$10K–$50K'>$10K–$50K</option>
								<option value='$50K–$250K'>$50K–$250K</option>
								<option value='$250K+'>$250K+</option>
							</select>

							<fieldset className='contact-services-needed'>
								<legend>Services Needed</legend>
								<div className='contact-services-grid'>
									{SERVICE_OPTIONS.map((service) => (
										<label key={service}>
											<input
												type='checkbox'
												checked={servicesNeeded.includes(service)}
												onChange={() => toggleService(service)}
											/>
											{service}
										</label>
									))}
								</div>
							</fieldset>

							<textarea
								name='message'
								placeholder='Anything else we should know? (optional)'></textarea>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}>
								Send My Request
							</motion.button>

							<ul className='contact-trust-signals'>
								<li>✓ Free 30-minute call, no commitment required</li>
								<li>✓ 80+ brands scaled across 6 platforms</li>
								<li>✓ US-timezone availability for live calls</li>
								<li>✓ NDA available on request</li>
							</ul>
						</form>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs
