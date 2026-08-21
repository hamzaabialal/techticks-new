import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCmsSession } from '../context/CmsSessionContext'
import PostTable from '../components/PostTable'
import * as postService from '../../services/postService'
import { POST_STATUS } from '../../constants/postStatus'
import styles from './DashboardPage.module.css'

const TABS = [
	{ key: 'all', label: 'All' },
	{ key: POST_STATUS.DRAFT, label: 'Draft' },
	{ key: POST_STATUS.REVIEW, label: 'In Review' },
	{ key: POST_STATUS.PUBLISHED, label: 'Published' },
	{ key: 'trash', label: 'Trash' },
]

function DashboardPage() {
	const { session } = useCmsSession()
	const [activeTab, setActiveTab] = useState('all')
	const [rawPosts, setRawPosts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [loadError, setLoadError] = useState(null)
	// Cheap re-fetch trigger after a mutation — the API has no push/subscribe
	// model, so a bumped counter is what tells this effect to re-run.
	const [version, setVersion] = useState(0)

	useEffect(() => {
		let cancelled = false
		setIsLoading(true)
		postService
			.getAllPosts({ includeDeleted: true })
			.then((posts) => {
				if (cancelled) return
				setRawPosts(posts)
				setLoadError(null)
			})
			.catch((err) => {
				if (!cancelled) setLoadError(err.message)
			})
			.finally(() => {
				if (!cancelled) setIsLoading(false)
			})
		return () => {
			cancelled = true
		}
	}, [version])

	// Tab filtering stays client-side against the already-fetched list — no
	// network call on tab switch, exactly like before.
	const posts = useMemo(() => {
		if (activeTab === 'trash') return rawPosts.filter((post) => post.isDeleted)
		const visible = rawPosts.filter((post) => !post.isDeleted)
		if (activeTab === 'all') return visible
		return visible.filter((post) => post.status === activeTab)
	}, [rawPosts, activeTab])

	const refresh = () => setVersion((v) => v + 1)

	return (
		<div className={styles.page}>
			<div className={styles.header}>
				<h1 className={styles.heading}>Posts</h1>
				<Link to='/cms/posts/new' className={styles.newPostButton}>
					New Post
				</Link>
			</div>

			<div className={styles.tabs}>
				{TABS.map((tab) => (
					<button
						key={tab.key}
						className={tab.key === activeTab ? styles.tabActive : styles.tab}
						onClick={() => setActiveTab(tab.key)}>
						{tab.label}
					</button>
				))}
			</div>

			{loadError && <p className={styles.error}>{loadError}</p>}
			{isLoading && rawPosts.length === 0 ? (
				<p className={styles.loading}>Loading posts…</p>
			) : (
				<PostTable posts={posts} session={session} isTrashView={activeTab === 'trash'} onChange={refresh} />
			)}
		</div>
	)
}

export default DashboardPage
