import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

function SphereDome() {
	const groupRef = useRef()

	const spheres = useMemo(() => {
		const items = []
		const sphereR = 0.9
		const gap = 2.05
		const cols = 9
		const rows = 7

		for (let row = 0; row < rows; row++) {
			const offsetX = (row % 2) * (gap / 2)
			for (let col = 0; col < cols; col++) {
				const x = (col - (cols - 1) / 2) * gap + offsetX
				const z = row * gap * 0.88 - rows * gap * 0.44

				// dome curvature: spheres at edges are slightly lower
				const dist = Math.sqrt(x * x + (z + rows * gap * 0.1) * (z + rows * gap * 0.1))
				const maxDist = (cols / 2) * gap
				const dip = (dist / maxDist) * 0.8
				const y = -1.4 - dip

				items.push([x, y, z])
			}
		}
		return items
	}, [])

	// Very slow rotation
	useFrame((state) => {
		if (groupRef.current) {
			groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.08
		}
	})

	return (
		<group ref={groupRef}>
			{/* Glow lights — blue/purple from center */}
			<pointLight color='#2244ff' intensity={12} position={[0, 1, 3]} decay={2} />
			<pointLight color='#4422ff' intensity={8} position={[-2, 0, 2]} decay={2} />
			<pointLight color='#2233ff' intensity={8} position={[2, 0, 2]} decay={2} />
			<ambientLight intensity={0.04} />

			{spheres.map(([x, y, z], i) => (
				<mesh key={i} position={[x, y, z]}>
					<sphereGeometry args={[0.9, 48, 48]} />
					<meshStandardMaterial
						color='#07080f'
						metalness={1}
						roughness={0.04}
						envMapIntensity={2.5}
					/>
				</mesh>
			))}
		</group>
	)
}

export default function HeroSpheresBg() {
	return (
		<div
			style={{
				position: 'absolute',
				inset: 0,
				zIndex: 0,
				pointerEvents: 'none',
				overflow: 'hidden',
			}}>
			<Canvas
				camera={{ position: [0, 3.5, 10], fov: 58 }}
				dpr={[1, 1.5]}
				gl={{
					alpha: true,
					antialias: true,
					powerPreference: 'high-performance',
					failIfMajorPerformanceCaveat: false,
				}}
				style={{ width: '100%', height: '100%', background: 'transparent' }}>
				<Environment preset='night' />
				<SphereDome />
			</Canvas>
		</div>
	)
}
