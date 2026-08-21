// Low-level fetch helpers shared by postService.js and authService.js.
// credentials: 'include' on every request so the httpOnly session cookie
// (set by /api/auth/login) travels on both same-origin and the documented
// cross-port local dev topology — without it, the API would never see the
// cookie and every protected route would 401.

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || ''

export async function apiFetch(path, { method = 'GET', body } = {}) {
	const res = await fetch(`${API_BASE_URL}${path}`, {
		method,
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
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
