import { useEffect, useState, lazy, Suspense } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCmsSession } from '../context/CmsSessionContext'
import RoleGate from '../components/RoleGate'
import * as postService from '../../services/postService'
import { POST_STATUS } from '../../constants/postStatus'
import styles from './PostEditPage.module.css'

// Lazy-loaded so TipTap's bundle is only fetched when a CMS user actually
// opens New/Edit Post — never for the Dashboard, Login, or any public page.
const PostEditor = lazy(() => import('../components/PostEditor'))

const EMPTY_POST = {
	title: '',
	slug: '',
	excerpt: '',
	content: '',
	featuredImage: null,
	categoryIds: [],
}

// Thin route wrapper for both /cms/posts/new and /cms/posts/:id/edit — owns
// load/save against postService and delegates all editing UI to the one
// shared <PostEditor>, so New and Edit never diverge into separate
// implementations.
function PostEditPage({ mode }) {
	const { id } = useParams()
	const navigate = useNavigate()
	const { session } = useCmsSession()
	const [post, setPost] = useState(mode === 'edit' ? null : EMPTY_POST)
	const [error, setError] = useState(null)
	// Guards Save/Submit/Publish/Request-Changes against double-submission —
	// on a slow connection a request can take many seconds, and without this
	// a second click before the first resolves fires a second write (this is
	// exactly how a real session ended up with two duplicate "Check" drafts).
	const [isBusy, setIsBusy] = useState(false)

	useEffect(() => {
		let cancelled = false
		if (mode === 'edit') {
			;(async () => {
				try {
					const existing = await postService.getPostById(id)
					if (cancelled) return
					if (!existing) {
						setError('Post not found')
						return
					}
					setPost(existing)
				} catch (err) {
					if (!cancelled) setError(err.message)
				}
			})()
		}
		return () => {
			cancelled = true
		}
	}, [mode, id])

	const handleChange = (patch) => {
		setPost((prev) => ({ ...prev, ...patch }))
	}

	const runAction = async (action) => {
		if (isBusy) return
		setIsBusy(true)
		try {
			await action()
			setError(null)
		} catch (err) {
			setError(err.message)
		} finally {
			setIsBusy(false)
		}
	}

	const handleSave = () => {
		runAction(async () => {
			if (mode === 'new') {
				await postService.createPost(post)
			} else {
				await postService.updatePost(id, post)
			}
			navigate('/cms')
		})
	}

	// transitionStatus already returns the updated post directly (a fresh
	// object, per postService's reference-safety guarantee), so a second
	// getPostById round trip is unnecessary — this is a real simplification
	// enabled by the async migration, not a silent behavior change.
	const handleSubmitForReview = () => {
		runAction(async () => {
			setPost(await postService.transitionStatus(id, POST_STATUS.REVIEW))
		})
	}

	const handleRequestChanges = () => {
		runAction(async () => {
			setPost(
				await postService.transitionStatus(id, POST_STATUS.DRAFT, {
					reviewerNote: 'Please revise and resubmit.',
				}),
			)
		})
	}

	const handlePublish = () => {
		runAction(async () => {
			setPost(await postService.transitionStatus(id, POST_STATUS.PUBLISHED))
		})
	}

	if (error && !post) {
		return (
			<div className={styles.page}>
				<p className={styles.error}>{error}</p>
			</div>
		)
	}
	if (!post) {
		return <div className={styles.page}>Loading…</div>
	}

	return (
		<div className={styles.page}>
			<h1 className={styles.heading}>{mode === 'new' ? 'New Post' : 'Edit Post'}</h1>

			{error && <p className={styles.error}>{error}</p>}

			{post.reviewerNote && post.status === POST_STATUS.DRAFT && (
				<p className={styles.reviewerNote}>Reviewer note: {post.reviewerNote}</p>
			)}

			<Suspense fallback={<div className={styles.page}>Loading editor…</div>}>
				<PostEditor value={post} onChange={handleChange} onSave={handleSave} disabled={isBusy} />
			</Suspense>

			{mode === 'edit' && post.status === POST_STATUS.DRAFT && (
				<RoleGate role={session.role} action='createPost'>
					<button className={styles.workflowButton} onClick={handleSubmitForReview} disabled={isBusy}>
						Submit for Review
					</button>
				</RoleGate>
			)}

			{mode === 'edit' && post.status === POST_STATUS.REVIEW && (
				<div className={styles.reviewActions}>
					<RoleGate role={session.role} action='review'>
						<button className={styles.workflowButton} onClick={handleRequestChanges} disabled={isBusy}>
							Request Changes
						</button>
					</RoleGate>
					<RoleGate role={session.role} action='publish'>
						<button className={styles.publishButton} onClick={handlePublish} disabled={isBusy}>
							Publish
						</button>
					</RoleGate>
				</div>
			)}
		</div>
	)
}

export default PostEditPage
