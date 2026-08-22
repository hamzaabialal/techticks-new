import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter, FaThreads } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import logo from '../component/images/logo.png'

const FooterSection = () => {
	return (
		<footer
			id='Footer'
			className='footer-section'>
			{/* CTA Content */}

			{/* Logo and Social */}
			<div className='logo-social-container d-flex justify-content-between align-items-center py-4'>
				<div className='image footer-image'>
					<img
						src={logo}
						alt='logo'
					/>
				</div>
				<div className='social-section'>
					<span className='social-text'>
						Follow Us On Social Media
					</span>
					<div className='social-icons'>
						{' '}
						<a
							href='https://www.linkedin.com/company/aatechticks/posts/?feedView=all'
							className='social-icon mx-2'>
							<FaLinkedin />
						</a>
						<a
							href='https://www.facebook.com/share/16iV8H9B6q/?mibextid=wwXIfr'
							className='social-icon mx-2'>
							<FaFacebook />
						</a>
						<a
							href='https://www.instagram.com/techticks2020?igsh=MWEyenBrdHlhYjVueQ=='
							className='social-icon mx-2'>
							<FaInstagram />
						</a>
						<a
							href='https://www.threads.net/@techticks2020'
							className='social-icon mx-2'>
							<FaThreads />
						</a>
						<a
							href='https://x.com/techticks2020?s=21&t=dUXp1ZW478y4kVDJKGGyGQ'
							className='social-icon mx-2'>
							<FaXTwitter />
						</a>
					</div>
				</div>
			</div>

			{/* Navigation Menus */}
			<div className='container-3 navigation footer-nav py-4'>
				<div className='rows row justify-content-between col-md-12'>
					<div className='col-md-2'>
						<h5>Ecommerce</h5>
						<ul className='list-unstyled footer-links'>
							<li>
								<NavLink to='/amazon'>Amazon</NavLink>
							</li>
							<li>
								<NavLink to='/tiktok-shop'>TikTok Shop</NavLink>
							</li>
							<li>
								<NavLink to='/shopify'>Shopify</NavLink>
							</li>
							<li>
								<NavLink to='/walmart'>Walmart</NavLink>
							</li>
							<li>
								<NavLink to='/ebay'>eBay</NavLink>
							</li>
							<li>
								<NavLink to='/etsy'>Etsy</NavLink>
							</li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h5>Services</h5>
						<ul className='list-unstyled footer-links'>
							<li>
								<NavLink to='/services/digital-marketing'>Digital Marketing</NavLink>
							</li>
							<li>
								<NavLink to='/services/digital-marketing/seo'>SEO</NavLink>
							</li>
							<li>
								<NavLink to='/services/ui-ux-design'>UX/UI Design</NavLink>
							</li>
							<li>
								<NavLink to='/services/graphic-design'>Graphic Design</NavLink>
							</li>
							<li>
								<NavLink to='/services/web-development'>Website Development</NavLink>
							</li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h5>Company</h5>
						<ul className='list-unstyled footer-links'>
							<li>
								<NavLink to='/about'>About Us</NavLink>
							</li>
							<li>
								<NavLink to='/portfolio'>Case Studies</NavLink>
							</li>
							<li>
								<NavLink to='/blog'>Blog</NavLink>
							</li>
							<li>
								<NavLink to='/contactUs'>Contact Us</NavLink>
							</li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h5>Contact</h5>
						<ul className='list-unstyled footer-links'>
							<li>
								<a href='mailto:info@techticks.org'>info@techticks.org</a>
							</li>
							<li>
								<a href='https://techticks.org/' target='_blank' rel='noopener noreferrer'>techticks.org</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='container copyright py-3'>
				<div className='d-flex justify-content-between align-items-center flex-wrap'>
					<span className=''>
						@2026 TechTicks. All Rights Reserved.
					</span>
				</div>
				<div className='links'>
					<span>Version 1.0</span>
					<NavLink to='/privacy-policy'>Privacy Policy</NavLink>
					<NavLink to='/terms-conditions'>Terms & Conditions</NavLink>
					<NavLink to='/cookie-policy'>Cookie Policy</NavLink>
				</div>
			</div>
		</footer>
	)
}

export default FooterSection
