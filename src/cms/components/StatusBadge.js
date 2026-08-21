import { POST_STATUS } from '../../constants/postStatus'

const STATUS_LABELS = {
	[POST_STATUS.DRAFT]: 'Draft',
	[POST_STATUS.REVIEW]: 'In Review',
	[POST_STATUS.PUBLISHED]: 'Published',
}

const STATUS_COLOR_VARS = {
	[POST_STATUS.DRAFT]: 'var(--cms-color-status-draft)',
	[POST_STATUS.REVIEW]: 'var(--cms-color-status-review)',
	[POST_STATUS.PUBLISHED]: 'var(--cms-color-status-published)',
}

function StatusBadge({ status }) {
	return (
		<span
			style={{
				display: 'inline-block',
				padding: '2px 10px',
				borderRadius: 'var(--cms-radius-sm)',
				fontSize: 'var(--cms-font-size-sm)',
				color: '#fff',
				backgroundColor: STATUS_COLOR_VARS[status] || 'var(--cms-color-status-draft)',
			}}>
			{STATUS_LABELS[status] || status}
		</span>
	)
}

export default StatusBadge
