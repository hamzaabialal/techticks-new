// Low-level fetch helpers shared by postService.js and authService.js.
// Auth is a bearer token attached manually via the Authorization header, not
// a cookie — the frontend (techticks.org) and this API
// (techticks-new.vercel.app) are different registrable domains, and modern
// browsers block third-party cookies on exactly that kind of cross-site
// request regardless of cookie attributes. A header sidesteps cookie policy
// entirely. See api/_lib/auth.js for the server side of this.

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ''

const TOKEN_STORAGE_KEY = 'techticks_cms_token'

export function getToken() {
	return localStorage.getItem(TOKEN_STORAGE_KEY)
}

export function setToken(token) {
	localStorage.setItem(TOKEN_STORAGE_KEY, token)
}

export function clearToken() {
	localStorage.removeItem(TOKEN_STORAGE_KEY)
}

export async function apiFetch(path, { method = 'GET', body } = {}) {
	const token = getToken()
	const headers = { 'Content-Type': 'application/json' }
	if (token) headers.Authorization = `Bearer ${token}`

	const res = await fetch(`${API_BASE_URL}${path}`, {
		method,
		headers,
		body: body !== undefined ? JSON.stringify(body) : undefined,
	})

	if (res.status === 204) return null

	const data = await res.json().catch(() => null)
	if (!res.ok) {
		const err = new Error(data?.error || `Request failed: ${res.status}`)
		err.status = res.status
		throw err
	}
	return data
}

// For reads whose contract is "return null on not-found, never throw."
export async function apiFetchOrNull(path, options) {
	try {
		return await apiFetch(path, options)
	} catch (err) {
		if (err.status === 404) return null
		throw err
	}
}
