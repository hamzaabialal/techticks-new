import { useState } from 'react'
import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import RoleGate from './RoleGate'
import * as postService from '../../services/postService'
import styles from './PostTable.module.css'

function PostTable({ posts, session, isTrashView, onChange }) {
	const [actionError, setActionError] = useState(null)
	// Guards against double-submission on a slow connection - without this a
	// second click on Trash/Restore/Permanent Delete before the first
	// request resolves fires a second write against the same post.
	const [busyId, setBusyId] = useState(null)

	// Await the write before refreshing — with a real network call this
	// ordering is load-bearing (calling onChange() first would refresh with
	// pre-write data); it happened to already be correct with the synchronous
	// mock. None of these three had any error handling before, either — a
	// failed write was an unhandled rejection.
	const runAction = async (id, action) => {
		if (busyId) return
		setBusyId(id)
		try {
			await action()
			setActionError(null)
			onChange()
		} catch (err) {
			setActionError(err.message)
		} finally {
			setBusyId(null)
		}
	}

	const handleSoftDelete = (id) => runAction(id, () => postService.softDeletePost(id))
	const handleRestore = (id) => runAction(id, () => postService.restorePost(id))

	// Permanent delete is irreversible (unlike Trash/Restore) — this confirm
	// step is a UX safety net against a misclick, not a permission check.
	const handlePermanentDelete = (id) => {
		if (!window.confirm('Permanently delete this post? This cannot be undone.')) return
		runAction(id, () => postService.permanentDeletePost(id))
	}

	if (posts.length === 0) {
		return <p className={styles.empty}>No posts here yet.</p>
	}

	return (
		<div className={styles.tableWrapper}>
			{actionError && <p className={styles.error}>{actionError}</p>}
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Title</th>
						<th>Status</th>
						<th>Author</th>
						<th>Updated</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post) => (
						<tr key={post.id}>
							<td>{post.title || <em>Untitled</em>}</td>
							<td>
								<StatusBadge status={post.status} />
							</td>
							<td>{post.authorName}</td>
							<td>{new Date(post.updatedAt).toLocaleDateString()}</td>
							<td className={styles.actions}>
								{!isTrashView && (
									<Link to={`/cms/posts/${post.id}/edit`} className={styles.actionLink}>
										Edit
									</Link>
								)}
								{!isTrashView && (
									<RoleGate role={session.role} action='softDelete'>
										<button className={styles.actionButton} onClick={() => handleSoftDelete(post.id)} disabled={busyId === post.id}>
											Trash
										</button>
									</RoleGate>
								)}
								{isTrashView && (
									<RoleGate role={session.role} action='softDelete'>
										<button className={styles.actionButton} onClick={() => handleRestore(post.id)} disabled={busyId === post.id}>
											Restore
										</button>
									</RoleGate>
								)}
								{isTrashView && (
									<RoleGate role={session.role} action='permanentDelete'>
										<button className={styles.actionButtonDanger} onClick={() => handlePermanentDelete(post.id)} disabled={busyId === post.id}>
											Delete Permanently
										</button>
									</RoleGate>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default PostTable
