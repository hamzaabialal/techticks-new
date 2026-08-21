import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useCmsSession } from './context/CmsSessionContext'
import CmsSidebarNav from './components/CmsSidebarNav'
import './tokens.css'
import styles from './CmsLayout.module.css'

function CmsLayout() {
	const { session, sessionChecked, logout } = useCmsSession()
	const [isDrawerOpen, setDrawerOpen] = useState(false)

	// Wait for the mount-time /api/auth/me check to resolve before deciding
	// whether to redirect — otherwise a returning logged-in user gets
	// bounced to /cms/login for a moment before the check finishes.
	if (!sessionChecked) {
		return null
	}

	if (!session) {
		return <Navigate to='/cms/login' replace />
	}

	// logout() clears the cookie server-side, then local session state — the
	// resulting re-render hits the !session branch above, which already
	// redirects to /cms/login, so no separate navigate() call is needed.
	const handleLogout = () => logout()

	return (
		<div className={styles.shell}>
			<header className={styles.topbar}>
				<button
					className={styles.menuToggle}
					aria-label='Toggle navigation'
					aria-expanded={isDrawerOpen}
					onClick={() => setDrawerOpen((open) => !open)}>
					☰
				</button>
				<span className={styles.brand}>TechTicks CMS</span>
				<span className={styles.session}>
					{session.name} · {session.role}
				</span>
				<button className={styles.logoutButton} onClick={handleLogout}>
					Log out
				</button>
			</header>

			<div className={styles.body}>
				<aside className={`${styles.sidebar} ${isDrawerOpen ? styles.sidebarOpen : ''}`}>
					<CmsSidebarNav onNavigate={() => setDrawerOpen(false)} />
				</aside>
				{isDrawerOpen && <div className={styles.overlay} onClick={() => setDrawerOpen(false)} />}
				<main className={styles.content}>
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default CmsLayout
