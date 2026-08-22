import './App.css'

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Home from './component/Home'
import ContactUs from './component/contactUs'
import About from './component/About'
import HowItworks from './component/Amazon'
import Services from './component/Services'
import Portfolio from './component/portfolio'
import Header from './component/header'
import FooterSection from './component/Footer'
import HelpCenter from './component/HelpCenter'
import Team from './component/Team'
import PrivacyPolicy from './component/PrivacyPolicy'
import TermsConditions from './component/TermsConditions'
import CookiePolicy from './component/CookiePolicy'
import Blog from './component/Blog'
import SubServicePage from './component/SubServicePage'
import { subServicesData } from './component/subServicesData'
import { servicesCatalog } from './component/servicesCatalog'
import CmsRoutes from './cms/CmsRoutes'
import BlogPostDetail from './component/BlogPostDetail'
import WhatsAppFloatButton from './component/WhatsAppFloatButton'
import { CmsSessionProvider } from './cms/context/CmsSessionContext'

// CmsSessionProvider wraps the whole app, not just /cms/*, so the session
// survives navigating to a public route and back — a real logged-in user
// doesn't get signed out by clicking over to the blog, and this is the
// correct foundation for when authService replaces the mock (real session
// state shouldn't be route-scoped either). Public routes simply have access
// to a context they never call useCmsSession() from; nothing about their
// behavior changes.
function App() {
	return (
		<HelmetProvider>
			<CmsSessionProvider>
				<div>
					<BrowserRouter>
						<AppShell />
					</BrowserRouter>
				</div>
			</CmsSessionProvider>
		</HelmetProvider>
	)
}

function AppShell() {
	const { pathname } = useLocation()
	const isCmsRoute = pathname.startsWith('/cms')

	return (
		<>
			{!isCmsRoute && <Header />}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
					<Route
						path='/contactUs'
						element={<ContactUs />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/amazon'
						element={<HowItworks />}
					/>
					<Route
						path='/services'
						element={<Services />}
					/>
					<Route
						path='/portfolio'
						element={<Portfolio />}
					/>
					<Route
						path='/help-center'
						element={<HelpCenter />}
					/>
					<Route
						path='/team'
						element={<Team />}
					/>
					<Route
						path='/privacy-policy'
						element={<PrivacyPolicy />}
					/>
					<Route
						path='/terms-conditions'
						element={<TermsConditions />}
					/>
					<Route
						path='/cookie-policy'
						element={<CookiePolicy />}
					/>
					<Route
						path='/blog'
						element={<Blog />}
					/>
					<Route
						path='/blog/:slug'
						element={<BlogPostDetail />}
					/>
					{servicesCatalog.map((service) => (
						<Route key={service.id} path={service.route} element={<SubServicePage data={service.detail} />} />
					))}
					<Route path='/services/digital-marketing/seo' element={<SubServicePage data={subServicesData['digital-marketing/seo']} />} />
					<Route path='/services/digital-marketing/google-ads' element={<SubServicePage data={subServicesData['digital-marketing/google-ads']} />} />
					<Route path='/services/digital-marketing/meta-ads' element={<SubServicePage data={subServicesData['digital-marketing/meta-ads']} />} />
					<Route path='/services/digital-marketing/social-media' element={<SubServicePage data={subServicesData['digital-marketing/social-media']} />} />
					<Route path='/services/digital-marketing/email-marketing' element={<SubServicePage data={subServicesData['digital-marketing/email-marketing']} />} />
					<Route path='/services/digital-marketing/content-creation' element={<SubServicePage data={subServicesData['digital-marketing/content-creation']} />} />
					<Route path='/services/ui-ux-design' element={<SubServicePage data={subServicesData['ui-ux-design']} />} />
					<Route path='/services/ui-ux-design/ux-research-strategy' element={<SubServicePage data={subServicesData['ui-ux-design/ux-research-strategy']} />} />
					<Route path='/services/ui-ux-design/wireframing-prototyping' element={<SubServicePage data={subServicesData['ui-ux-design/wireframing-prototyping']} />} />
					<Route path='/services/ui-ux-design/shopify-ux-design' element={<SubServicePage data={subServicesData['ui-ux-design/shopify-ux-design']} />} />
					<Route path='/services/ui-ux-design/app-ui-design' element={<SubServicePage data={subServicesData['ui-ux-design/app-ui-design']} />} />
					<Route path='/services/ui-ux-design/website-landing-page-ui' element={<SubServicePage data={subServicesData['ui-ux-design/website-landing-page-ui']} />} />
					<Route path='/services/web-development' element={<SubServicePage data={subServicesData['development']} />} />
					<Route path='/services/web-development/shopify-store-development' element={<SubServicePage data={subServicesData['web-development/shopify-store-development']} />} />
					<Route path='/services/web-development/wordpress-woocommerce' element={<SubServicePage data={subServicesData['web-development/wordpress-woocommerce']} />} />
					<Route path='/services/web-development/landing-pages' element={<SubServicePage data={subServicesData['web-development/landing-pages']} />} />
					<Route path='/services/web-development/speed-performance-optimization' element={<SubServicePage data={subServicesData['web-development/speed-performance-optimization']} />} />
					<Route path='/services/web-development/maintenance-support' element={<SubServicePage data={subServicesData['web-development/maintenance-support']} />} />
					<Route path='/services/web-development/custom-web-application-development' element={<SubServicePage data={subServicesData['web-development/custom-web-application-development']} />} />
					<Route path='/services/graphic-design' element={<SubServicePage data={subServicesData['graphic-design']} />} />
					<Route path='/services/graphic-design/brand-identity-logo-design' element={<SubServicePage data={subServicesData['graphic-design/brand-identity-logo-design']} />} />
					<Route path='/services/graphic-design/amazon-creative-design' element={<SubServicePage data={subServicesData['graphic-design/amazon-creative-design']} />} />
					<Route path='/services/graphic-design/social-media-graphics' element={<SubServicePage data={subServicesData['graphic-design/social-media-graphics']} />} />
					<Route path='/services/graphic-design/ad-creative-design' element={<SubServicePage data={subServicesData['graphic-design/ad-creative-design']} />} />
					<Route path='/services/graphic-design/product-packaging-design' element={<SubServicePage data={subServicesData['graphic-design/product-packaging-design']} />} />
					<Route path='/services/graphic-design/pitch-decks-presentations' element={<SubServicePage data={subServicesData['graphic-design/pitch-decks-presentations']} />} />
					<Route path='/tiktok-shop' element={<SubServicePage data={subServicesData['tiktok-shop']} />} />
					<Route path='/shopify' element={<SubServicePage data={subServicesData['shopify']} />} />
					<Route path='/walmart' element={<SubServicePage data={subServicesData['walmart']} />} />
					<Route path='/ebay' element={<SubServicePage data={subServicesData['ebay']} />} />
					<Route path='/etsy' element={<SubServicePage data={subServicesData['etsy']} />} />
				<Route path='/cms/*' element={<CmsRoutes />} />
			</Routes>
			{!isCmsRoute && <FooterSection />}
			{!isCmsRoute && <WhatsAppFloatButton />}
		</>
	)
}

export default App
