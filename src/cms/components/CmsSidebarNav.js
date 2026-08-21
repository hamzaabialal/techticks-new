import { NavLink } from 'react-router-dom'
import styles from './CmsSidebarNav.module.css'

function CmsSidebarNav({ onNavigate }) {
	return (
		<nav className={styles.nav}>
			<NavLink to='/cms' end className={styles.link} onClick={onNavigate}>
				Dashboard
			</NavLink>
			<NavLink to='/cms/posts/new' className={styles.link} onClick={onNavigate}>
				New Post
			</NavLink>
		</nav>
	)
}

export default CmsSidebarNav
