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
				</Routes>
				<FooterSection />
			</BrowserRouter>
		</div>
	)
}

export default App
