// The seam LoginPage.js's and CmsSessionContext.js's own comments have
// named "authService" since Phase 1 — this is it. Thin HTTP client over
// /api/auth/*, same apiClient helpers postService.js uses.

import { apiFetch, setToken, clearToken, getToken } from './apiClient'

export async function login(email, password) {
	const account = await apiFetch('/auth/login', { method: 'POST', body: { email, password } })
	setToken(account.token)
	return account
}

export async function logout() {
	clearToken()
	await apiFetch('/auth/logout', { method: 'POST' }).catch(() => {})
}

// Returns null (never throws) when there's no valid session — a 401 here is
// the normal, expected case on a fresh visit, not an error. Doesn't reuse
// apiClient's apiFetchOrNull, which treats 404 (not this endpoint's "no
// session" status) as the null case. Skips the network round trip entirely
// when there's no stored token — every fresh visit before this existed
// still 401'd, just after a wasted request.
export async function getCurrentUser() {
	if (!getToken()) return null
	try {
		return await apiFetch('/auth/me')
	} catch (err) {
		if (err.status === 401) return null
		throw err
	}
}
