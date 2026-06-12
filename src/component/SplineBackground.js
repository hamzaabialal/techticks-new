import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function BackgroundStars({ count = 4000, radius = 6, mouse }) {
	const ref = useRef()

	// keep the original (resting) positions so the spread is reversible
	const basePositions = useMemo(() => {
		const arr = new Float32Array(count * 3)
		for (let i = 0; i < count; i++) {
			const theta = Math.random() * Math.PI * 2
			const phi = Math.acos(2 * Math.random() - 1)
			const r = radius * Math.cbrt(Math.random())

			arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
			arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
			arr[i * 3 + 2] = r * Math.cos(phi)
		}
		return arr
	}, [count, radius])

	// pre-computed "scattered" target for each particle: pushed radially
	// outward from the center by a varying amount + a little jitter, so the
	// whole cloud expands and disperses (not a uniform scale) when hovered
	const scatterPositions = useMemo(() => {
		const arr = new Float32Array(count * 3)
		for (let i = 0; i < count; i++) {
			const ix = i * 3
			const bx = basePositions[ix]
			const by = basePositions[ix + 1]
			const bz = basePositions[ix + 2]

			const len = Math.sqrt(bx * bx + by * by + bz * bz) || 0.0001
			const push = 1.6 + Math.random() * 2.6 // how far this particle flies out

			arr[ix] = bx + (bx / len) * push + (Math.random() - 0.5) * 0.8
			arr[ix + 1] = by + (by / len) * push + (Math.random() - 0.5) * 0.8
			arr[ix + 2] = bz + (bz / len) * push + (Math.random() - 0.5) * 0.8
		}
		return arr
	}, [basePositions, count])

	// live buffer the geometry actually renders (starts at rest)
	const positions = useMemo(
		() => new Float32Array(basePositions),
		[basePositions],
	)

	useFrame(() => {
		if (!ref.current) return
		const hovering = mouse.current.active

		// rotate the whole sphere slowly
		ref.current.rotation.y += 0.001

		const posArray = ref.current.geometry.attributes.position.array

		// cursor inside  -> ease toward the scattered/expanded shape
		// cursor outside -> ease back to the resting circle
		const targets = hovering ? scatterPositions : basePositions

		for (let i = 0; i < count * 3; i++) {
			// small lerp factor = slow, gradual scatter in and settle back
			posArray[i] += (targets[i] - posArray[i]) * 0.04
		}

		ref.current.geometry.attributes.position.needsUpdate = true
	})

	return (
		<points ref={ref}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={positions}
					count={count}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				color='#ffffff'
				size={0.06}
				sizeAttenuation
				transparent
				opacity={0.7}
			/>
		</points>
	)
}

/** faint tiny stars that only fill the far left & right edges */
function SideTinyStars({ count = 280, mouse }) {
	const ref = useRef()
	// how far each side star has expanded outward (0 = rest, 1 = scattered)
	const spread = useRef(0)

	// store base positions separately (important)
	const basePositions = useMemo(() => {
		const arr = new Float32Array(count * 3)

		// big clear gap through the middle so the central circle stays prominent
		const centerGap = 9
		const sideSpread = 9

		for (let i = 0; i < count; i++) {
			const side = Math.random() < 0.5 ? -1 : 1
			arr[i * 3] = side * (centerGap + Math.random() * sideSpread) // left / right edges only
			arr[i * 3 + 1] = (Math.random() - 0.5) * 18 // full height
			arr[i * 3 + 2] = (Math.random() - 0.5) * 16 // depth
		}
		return arr
	}, [count])

	// per-particle outward push used while the cursor is inside
	const pushAmount = useMemo(
		() => Float32Array.from({ length: count }, () => 1 + Math.random() * 2),
		[count],
	)

	const positions = useMemo(
		() => new Float32Array(basePositions),
		[basePositions],
	)

	useFrame((state) => {
		if (!ref.current) return
		const t = state.clock.getElapsedTime()
		const posArray = ref.current.geometry.attributes.position.array

		// ease the global spread toward 1 (cursor inside) or 0 (outside)
		const target = mouse.current.active ? 1 : 0
		spread.current += (target - spread.current) * 0.04

		for (let i = 0; i < count; i++) {
			const ix = i * 3
			const iy = i * 3 + 1
			const iz = i * 3 + 2

			// 🌫️ soft floating movement + outward expansion on hover
			const expand = spread.current * pushAmount[i]
			posArray[ix] =
				basePositions[ix] +
				Math.sin(t + ix) * 0.05 +
				Math.sign(basePositions[ix]) * expand
			posArray[iy] = basePositions[iy] + Math.cos(t + iy) * 0.05
			posArray[iz] = basePositions[iz]
		}

		ref.current.geometry.attributes.position.needsUpdate = true
	})

	return (
		<points ref={ref}>
			<bufferGeometry>
				<bufferAttribute
					attach='attributes-position'
					array={positions}
					count={count}
					itemSize={3}
				/>
			</bufferGeometry>

			<pointsMaterial
				color='#ffffff'
				size={0.02}
				sizeAttenuation
				transparent
				opacity={0.25}
				depthWrite={false}
			/>
		</points>
	)
}

export default function EnhancedParticlesLikeSpline() {
	const containerRef = useRef(null)
	// normalized cursor (-1..1) + whether it's over the hero, tracked at window
	// level so the text/button overlay can't swallow the pointer events
	const mouse = useRef({ x: 0, y: 0, active: false })

	useEffect(() => {
		const handleMove = (e) => {
			const el = containerRef.current
			if (!el) return
			const rect = el.getBoundingClientRect()
			const x = (e.clientX - rect.left) / rect.width
			const y = (e.clientY - rect.top) / rect.height
			const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1

			mouse.current.active = inside
			if (inside) {
				mouse.current.x = x * 2 - 1
				mouse.current.y = -(y * 2 - 1)
			}
		}
		const handleLeave = () => {
			mouse.current.active = false
		}

		window.addEventListener('mousemove', handleMove)
		window.addEventListener('mouseout', handleLeave)
		return () => {
			window.removeEventListener('mousemove', handleMove)
			window.removeEventListener('mouseout', handleLeave)
		}
	}, [])

	return (
		<div
			ref={containerRef}
			style={{ position: 'absolute', inset: 0, zIndex: 2 }}>
			<Canvas
				camera={{ position: [0, 0, 14], fov: 60 }}
				dpr={[1, 2]}
				frameloop='always'
				gl={{
					alpha: true,
					antialias: true,
					powerPreference: 'high-performance',
					failIfMajorPerformanceCaveat: false,
					preserveDrawingBuffer: false,
				}}
				style={{
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
					background: 'transparent',
				}}>
				<BackgroundStars
					count={4000}
					radius={6}
					mouse={mouse}
				/>
				<SideTinyStars
					count={280}
					mouse={mouse}
				/>
			</Canvas>
		</div>
	)
}
