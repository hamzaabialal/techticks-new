import { Routes, Route } from 'react-router-dom'
import CmsLayout from './CmsLayout'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PostEditPage from './pages/PostEditPage'

// The /cms/* route subtree, kept out of App.js to keep that file's diff
// minimal. CmsLayout redirects to /cms/login whenever there's no session.
// The session itself lives above this file, in App.js — CmsSessionProvider
// wraps the whole app so it survives navigating away from /cms/* and back.
function CmsRoutes() {
	return (
		<Routes>
			<Route path='login' element={<LoginPage />} />
			<Route element={<CmsLayout />}>
				<Route index element={<DashboardPage />} />
				<Route path='posts/new' element={<PostEditPage mode='new' />} />
				<Route path='posts/:id/edit' element={<PostEditPage mode='edit' />} />
			</Route>
		</Routes>
	)
}

export default CmsRoutes
