// Sole data-access boundary for posts — a thin HTTP client over the Posts
// API (Vercel Functions + Turso). Every exported function keeps its name
// from the mock version; only the return type changed, from a value to a
// Promise of that value. All the business logic that used to live here
// (permission checks, ownership rules, transition rules, slug uniqueness)
// moved to the API — see api/_lib/permissions.js, api/_lib/slug.js, and
// each api/posts/* route — because that's genuinely where it runs now, not
// because it was duplicated.
//
// Identity no longer travels with each request at all: the API derives
// actingUser from the verified session cookie (see api/_lib/auth.js), not
// from anything this file asserts. That's why every write function below
// dropped the actingUser parameter it used to take — passing one would be
// dead weight, since nothing on the server reads it anymore.

import { apiFetch, apiFetchOrNull } from './apiClient'

// ---- Reads ----

export async function getAllPosts({ includeDeleted = false } = {}) {
	const query = includeDeleted ? '?includeDeleted=true' : ''
	return apiFetch(`/posts${query}`)
}

export async function getPostById(id) {
	return apiFetchOrNull(`/posts/${encodeURIComponent(id)}`)
}

export async function getPostBySlug(slug) {
	return apiFetchOrNull(`/posts/by-slug/${encodeURIComponent(slug)}`)
}

export async function getPublishedPosts() {
	return apiFetch('/posts/published')
}

export async function getPublishedPostBySlug(slug) {
	return apiFetchOrNull(`/posts/published/${encodeURIComponent(slug)}`)
}

export async function listCategories() {
	return apiFetch('/categories')
}

// ---- Writes ----

export async function createPost(fields) {
	return apiFetch('/posts', { method: 'POST', body: fields })
}

export async function updatePost(id, patch) {
	return apiFetch(`/posts/${encodeURIComponent(id)}`, { method: 'PATCH', body: patch })
}

export async function transitionStatus(id, nextStatus, { reviewerNote } = {}) {
	return apiFetch(`/posts/${encodeURIComponent(id)}/status`, {
		method: 'POST',
		body: { nextStatus, reviewerNote },
	})
}

export async function softDeletePost(id) {
	return apiFetch(`/posts/${encodeURIComponent(id)}/trash`, { method: 'POST' })
}

export async function restorePost(id) {
	return apiFetch(`/posts/${encodeURIComponent(id)}/restore`, { method: 'POST' })
}

export async function permanentDeletePost(id) {
	await apiFetch(`/posts/${encodeURIComponent(id)}`, { method: 'DELETE' })
}
