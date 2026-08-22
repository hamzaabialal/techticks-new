import { scrypt, randomBytes, timingSafeEqual } from 'crypto'
import { promisify } from 'util'
import jwt from 'jsonwebtoken'

const scryptAsync = promisify(scrypt)
const KEY_LENGTH = 64

// Node's built-in crypto.scrypt, not bcrypt/bcryptjs — zero new dependency,
// no native-binding compilation (bcrypt depends on node-addon-api /
// node-gyp-build, exactly the platform-specific fragility this project has
// already been burned by), and scrypt is an OWASP-approved password KDF.
// Stored as 'scrypt:<saltHex>:<keyHex>' — self-describing, one round trip.
export async function hashPassword(password) {
	const salt = randomBytes(16)
	const derivedKey = await scryptAsync(password, salt, KEY_LENGTH)
	return `scrypt:${salt.toString('hex')}:${derivedKey.toString('hex')}`
}

// A fixed dummy hash, compared against on every login attempt for an email
// that doesn't exist — keeps the "no such user" and "wrong password" paths
// doing the same amount of work, so response timing doesn't leak which
// emails are registered.
const DUMMY_HASH = 'scrypt:00000000000000000000000000000000:' + '0'.repeat(128)

export async function verifyPassword(password, storedHash) {
	const hash = storedHash || DUMMY_HASH
	const [, saltHex, keyHex] = hash.split(':')
	const salt = Buffer.from(saltHex, 'hex')
	const storedKey = Buffer.from(keyHex, 'hex')
	const derivedKey = await scryptAsync(password, salt, storedKey.length)
	return storedHash ? timingSafeEqual(derivedKey, storedKey) : false
}

const JWT_SECRET = process.env.JWT_SECRET
const SESSION_DURATION = '24h'
const SESSION_DURATION_SECONDS = 24 * 60 * 60

// Fixed 24-hour expiry, no sliding renewal. A stateless JWT with no sessions
// table can't be revoked early short of rotating JWT_SECRET — logout only
// tells the browser to drop the cookie, it doesn't invalidate the token
// itself, so a captured token stays usable until it expires on its own.
// 24h (down from an earlier 7d) is the deliberate bound on that exposure
// window: for this single-admin internal tool, adding real server-side
// revocation would mean turning getActingUser into a DB round trip on every
// protected request across all routes, which isn't worth it against the
// actual risk here (unauthorized blog-content edits, not data exposure).
// Revisit if this ever handles more than one user or more sensitive data.
export function signSession(user) {
	return jwt.sign({ sub: user.id, name: user.name, role: user.role }, JWT_SECRET, { expiresIn: SESSION_DURATION })
}

// Throws on missing/invalid/expired — callers treat any throw as "no session".
export function verifySession(token) {
	return jwt.verify(token, JWT_SECRET)
}

// Header-based, not cookie-based: the frontend (techticks.org) and this API
// (techticks-new.vercel.app) are different registrable domains, and modern
// browsers — Chrome Incognito by default already, regular Chrome rolling
// out the same policy — block third-party cookies outright regardless of
// SameSite/Secure attributes. No cookie attribute combination fixes that;
// the only reliable cross-site option (short of putting the API behind a
// same-site subdomain) is sending the token as an Authorization header,
// which isn't subject to cookie policy at all. The token itself is stored
// client-side (see src/services/apiClient.js) and attached manually.
export function getSessionToken(req) {
	const header = req.headers.authorization || ''
	const match = header.match(/^Bearer (.+)$/)
	return match ? match[1] : null
}

export function getClientIp(req) {
	const forwardedFor = req.headers['x-forwarded-for']
	if (forwardedFor) return forwardedFor.split(',')[0].trim()
	return req.socket?.remoteAddress || 'unknown'
}
