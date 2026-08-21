import { hasPermission } from '../../constants/roles'

// UX-only gate: hides controls a role couldn't use. postService independently
// re-checks role + ownership before any mutation actually happens, so this
// component is a convenience layer, not the enforcement boundary itself.
function RoleGate({ role, action, children, fallback = null }) {
	if (!hasPermission(role, action)) {
		return fallback
	}
	return children
}

export default RoleGate
