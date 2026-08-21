// The seam LoginPage.js's and CmsSessionContext.js's own comments have
// named "authService" since Phase 1 — this is it. Thin HTTP client over
// /api/auth/*, same apiClient helpers postService.js uses.

import { apiFetch } from './apiClient'

export async function login(email, password) {
	return apiFetch('/auth/login', { method: 'POST', body: { email, password } })
}

export async function logout() {
	await apiFetch('/auth/logout', { method: 'POST' })
}

// Returns null (never throws) when there's no valid session — a 401 here is
// the normal, expected case on a fresh visit, not an error. Doesn't reuse
// apiClient's apiFetchOrNull, which treats 404 (not this endpoint's "no
// session" status) as the null case.
export async function getCurrentUser() {
	try {
		return await apiFetch('/auth/me')
	} catch (err) {
		if (err.status === 401) return null
		throw err
	}
}
