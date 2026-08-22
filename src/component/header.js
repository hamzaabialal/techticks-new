import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../component/images/logo.png'
import { FaPhoneAlt, FaGlobe, FaLock, FaBars } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'
import SideTinyStarsBg from './sidesTinyStarsBg'

function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		setIsMobileMenuOpen(false)
	}, [location])

	return (
		<div className='techticks-header'>
			<div className='announcement-bar'>
				<span>
					Ecommerce Growth Agency for US Brands: Amazon · TikTok Shop · Shopify · Paid Ads · Design · Web Dev
				</span>
				<Link to='/contactUs' className='announcement-bar-cta'>
					Book a Free Strategy Call →
				</Link>
			</div>
			<SideTinyStarsBg />
			<div className='Navbar'>
				<div className='upper-content'>
					<a href='tel:+923191496506'>
						<FaPhoneAlt /> +92319 1496506
					</a>
					<a
						href='https://techticks.org/'
						target='_blank'
						rel='noopener noreferrer'>
						<FaGlobe /> techticks.org
					</a>
					<Link to='/cms/login'>
						<FaLock /> Staff Login
					</Link>
				</div>

				<hr style={{ color: 'white' }} />

				<div className='lower-content'>
					<div className='image'>
						<img
							src={logo}
							alt='logo'
						/>
					</div>

					<div className='links'>
						<nav className='navigation'>
							<NavLink
								to='/'
								className='nav-link'>
								Home
							</NavLink>

							<div className='nav-dropdown'>
								<NavLink
									to='/services'
									className='nav-link'>
									Services
								</NavLink>
								<div className='nav-dropdown-menu'>
									<div>
										<p className='nav-dropdown-col-title'>Ecommerce</p>
										<NavLink to='/amazon' className='nav-dropdown-link'>Amazon</NavLink>
										<NavLink to='/tiktok-shop' className='nav-dropdown-link'>TikTok Shop</NavLink>
										<NavLink to='/shopify' className='nav-dropdown-link'>Shopify</NavLink>
										<NavLink to='/walmart' className='nav-dropdown-link'>Walmart</NavLink>
										<NavLink to='/ebay' className='nav-dropdown-link'>eBay</NavLink>
										<NavLink to='/etsy' className='nav-dropdown-link'>Etsy</NavLink>
									</div>
									<div>
										<p className='nav-dropdown-col-title'>Services</p>
										<NavLink to='/services/digital-marketing' className='nav-dropdown-link'>Digital Marketing</NavLink>
										<NavLink to='/services/ui-ux-design' className='nav-dropdown-link'>UX/UI Design</NavLink>
										<NavLink to='/services/graphic-design' className='nav-dropdown-link'>Graphic Design</NavLink>
										<NavLink to='/services/web-development' className='nav-dropdown-link'>Website Development</NavLink>
									</div>
								</div>
							</div>

							<NavLink
								to='/portfolio'
								className='nav-link'>
								Case Studies
							</NavLink>

							<NavLink
								to='/blog'
								className='nav-link'>
								Blog
							</NavLink>

							<NavLink
								to='/about'
								className='nav-link'>
								About Us
							</NavLink>

							<button
								onClick={() => navigate('/contactUs')}
								className='header-btn'>
								Book a Free Call
							</button>
						</nav>
					</div>

					<button
						className='mobile-menu-toggle'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label='Toggle menu'
						aria-expanded={isMobileMenuOpen}>
						<FaBars />
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className='mobile-menu'>
						<nav className='navigation mobile-navigation'>
							<NavLink
								to='/'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Home
							</NavLink>

							<NavLink
								to='/services'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Services
							</NavLink>

							<p className='mobile-nav-group-title'>Ecommerce</p>
							<NavLink to='/amazon' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Amazon</NavLink>
							<NavLink to='/tiktok-shop' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>TikTok Shop</NavLink>
							<NavLink to='/shopify' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Shopify</NavLink>
							<NavLink to='/walmart' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Walmart</NavLink>
							<NavLink to='/ebay' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>eBay</NavLink>
							<NavLink to='/etsy' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Etsy</NavLink>

							<p className='mobile-nav-group-title'>Services</p>
							<NavLink to='/services/digital-marketing' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Digital Marketing</NavLink>
							<NavLink to='/services/ui-ux-design' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>UX/UI Design</NavLink>
							<NavLink to='/services/graphic-design' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Graphic Design</NavLink>
							<NavLink to='/services/web-development' className='nav-link mobile-nav-sublink' onClick={() => setIsMobileMenuOpen(false)}>Website Development</NavLink>

							<NavLink
								to='/portfolio'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Case Studies
							</NavLink>

							<NavLink
								to='/blog'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								Blog
							</NavLink>

							<NavLink
								to='/about'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								About Us
							</NavLink>

							<button
								onClick={() => {
									setIsMobileMenuOpen(false)
									navigate('/contactUs')
								}}>
								Book a Free Call
							</button>

							<NavLink
								to='/cms/login'
								className='nav-link'
								onClick={() => setIsMobileMenuOpen(false)}>
								<FaLock /> Staff Login
							</NavLink>
						</nav>
					</div>
				)}
			</div>
		</div>
	)
}

export default Header
