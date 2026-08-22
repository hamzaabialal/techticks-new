// Sole data-access boundary for media uploads. Separate from apiClient's
// apiFetch, which always JSON-encodes the body — this sends the file's raw
// bytes with Content-Type set to its actual mime type instead.
import { API_BASE_URL, getToken } from './apiClient'

export async function uploadImage(file) {
	const token = getToken()
	const headers = {
		'Content-Type': file.type,
		'X-Filename': encodeURIComponent(file.name),
	}
	if (token) headers.Authorization = `Bearer ${token}`

	const res = await fetch(`${API_BASE_URL}/media/upload`, {
		method: 'POST',
		headers,
		body: file,
	})

	const data = await res.json().catch(() => null)
	if (!res.ok) {
		const err = new Error(data?.error || `Upload failed: ${res.status}`)
		err.status = res.status
		throw err
	}
	return data
}
