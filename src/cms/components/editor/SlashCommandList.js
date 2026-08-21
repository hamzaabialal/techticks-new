import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import styles from './SlashCommandList.module.css'

// The popup Suggestion renders via ReactRenderer (see SlashCommand.js).
// Exposes onKeyDown through the ref because Suggestion's `render()` lifecycle
// forwards ProseMirror keydown events here directly — arrow keys/Enter need
// to move the ProseMirror selection's own popup, not a DOM-focused listener.
const SlashCommandList = forwardRef(function SlashCommandList({ items, command }, ref) {
	const [selectedIndex, setSelectedIndex] = useState(0)

	useEffect(() => setSelectedIndex(0), [items])

	const selectItem = (index) => {
		const item = items[index]
		if (item) command(item)
	}

	useImperativeHandle(ref, () => ({
		onKeyDown: ({ event }) => {
			if (event.key === 'ArrowUp') {
				setSelectedIndex((prev) => (prev + items.length - 1) % items.length)
				return true
			}
			if (event.key === 'ArrowDown') {
				setSelectedIndex((prev) => (prev + 1) % items.length)
				return true
			}
			if (event.key === 'Enter') {
				selectItem(selectedIndex)
				return true
			}
			return false
		},
	}))

	if (items.length === 0) {
		return (
			<div className={styles.menu}>
				<div className={styles.empty}>No matching blocks</div>
			</div>
		)
	}

	return (
		<div className={styles.menu}>
			{items.map((item, index) => {
				const Icon = item.icon
				return (
					<button
						key={item.title}
						type='button'
						className={index === selectedIndex ? styles.itemActive : styles.item}
						onClick={() => selectItem(index)}
						onMouseEnter={() => setSelectedIndex(index)}>
						<span className={styles.itemIcon}>
							<Icon size={16} strokeWidth={1.75} />
						</span>
						<span className={styles.itemText}>
							<span className={styles.itemTitle}>{item.title}</span>
							<span className={styles.itemDescription}>{item.description}</span>
						</span>
					</button>
				)
			})}
		</div>
	)
})

export default SlashCommandList
