import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCmsSession } from '../context/CmsSessionContext'
import * as authService from '../../services/authService'
import logo from '../../component/images/logo.png'
import '../tokens.css'
import styles from './LoginPage.module.css'

function LoginPage() {
	const { session, sessionChecked, setSession } = useCmsSession()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	// If the mount-time session check already found a valid cookie, skip
	// straight past the form instead of asking an already-logged-in admin to
	// sign in again.
	if (sessionChecked && session) {
		return <Navigate to='/cms' replace />
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setError(null)
		try {
			const account = await authService.login(email, password)
			setSession(account)
			navigate('/cms')
		} catch (err) {
			if (err.status === 429) {
				setError(err.message)
			} else {
				setError('Invalid email or password.')
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className={styles.page}>
			<div className={styles.leftPanel}>
				<div className={styles.leftContent}>
					<img src={logo} alt='TechTicks' className={styles.wordmark} />

					<h1 className={styles.title}>Sign In</h1>
					<p className={styles.subtitle}>Enter your TechTicks credentials to continue.</p>

					<form className={styles.form} onSubmit={handleSubmit}>
						<label className={styles.field}>
							<span className={styles.label}>Email</span>
							<input
								type='email'
								className={styles.underlineInput}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='you@techticks.dev'
								required
							/>
						</label>

						<label className={styles.field}>
							<span className={styles.label}>Password</span>
							<input
								type='password'
								className={styles.underlineInput}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder='••••••••'
								required
							/>
						</label>

						{error && <p className={styles.error}>{error}</p>}

						<button type='submit' className={styles.submitButton} disabled={isSubmitting}>
							{isSubmitting ? 'Signing in…' : 'Sign In'}
						</button>
					</form>
				</div>
			</div>

			<div className={styles.rightPanel}>
				<div className={styles.rightContent}>
					<h2 className={styles.rightHeading}>TechTicks CMS</h2>
					<p className={styles.rightText}>
						The internal platform for managing the TechTicks blog - drafting, reviewing, and publishing
						in one place.
					</p>
					<a
						href='https://techticks.org/'
						target='_blank'
						rel='noopener noreferrer'
						className={styles.rightCta}>
						Visit techticks.org
					</a>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
