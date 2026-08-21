import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
import BlogPostDetail from './component/BlogPostDetail'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
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
					<Route path='/services/ui-ux-design' element={<SubServicePage data={subServicesData['design']} />} />
				<Route path='/services/web-development' element={<SubServicePage data={subServicesData['development']} />} />
			</Routes>
				<FooterSection />
			</BrowserRouter>
		</div>
	)
}

export default App
