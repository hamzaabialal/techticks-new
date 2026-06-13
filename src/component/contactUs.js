import React from 'react'
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

function ContactUs() {
	const sendEmail = (e) => {
		e.preventDefault()

		const templateParams = {
			user_name: e.target.user_name.value,
			user_email: e.target.user_email.value,
			message: e.target.message.value,
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
				e.target.reset()
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
								placeholder='Name'
								required
							/>
							<input
								type='email'
								name='user_email'
								placeholder='Email'
								required
							/>
							<textarea
								name='message'
								placeholder='Message'
								required></textarea>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}>
								Send Message
							</motion.button>
						</form>
					</motion.div>
				</div>
			</section>
		</div>
	)
}

export default ContactUs
