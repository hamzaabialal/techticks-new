import { createContext, useContext, useEffect, useState } from 'react'
import * as authService from '../../services/authService'

const CmsSessionContext = createContext(null)

// Holds the current CMS session's React state and the two things that
// change it: logging in (LoginPage calls setSession directly with
// authService.login's result) and logging out (via this context's own
// logout(), not a raw setSession(null) — logging out must also invalidate
// the cookie server-side, not just clear local state).
//
// On mount, checks authService.getCurrentUser() once so a real cookie
// session survives a page refresh instead of always starting null.
// sessionChecked lets CmsLayout wait for that check to resolve before
// deciding whether to redirect to /cms/login, so a returning logged-in user
// doesn't get bounced before the check finishes.
export function CmsSessionProvider({ children }) {
	const [session, setSession] = useState(null)
	const [sessionChecked, setSessionChecked] = useState(false)

	useEffect(() => {
		let cancelled = false
		authService
			.getCurrentUser()
			.then((user) => {
				if (!cancelled) setSession(user)
			})
			.catch(() => {
				if (!cancelled) setSession(null)
			})
			.finally(() => {
				if (!cancelled) setSessionChecked(true)
			})
		return () => {
			cancelled = true
		}
	}, [])

	const logout = async () => {
		await authService.logout().catch(() => {})
		setSession(null)
	}

	return (
		<CmsSessionContext.Provider value={{ session, setSession, sessionChecked, logout }}>
			{children}
		</CmsSessionContext.Provider>
	)
}

export function useCmsSession() {
	const context = useContext(CmsSessionContext)
	if (!context) {
		throw new Error('useCmsSession must be used within a CmsSessionProvider')
	}
	return context
}
