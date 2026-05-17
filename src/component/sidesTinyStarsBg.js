import { useEffect, useRef } from 'react'

export default function SideTinyStarsBg() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		let animationId
		let particles = []

		const createParticles = () => {
			const rect = canvas.getBoundingClientRect()
			const dpr = window.devicePixelRatio || 1

			canvas.width = Math.max(1, Math.floor(rect.width * dpr))
			canvas.height = Math.max(1, Math.floor(rect.height * dpr))
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

			const width = rect.width
			const height = rect.height
			const count = Math.max(1100, Math.floor((width * height) / 220))
			const cols = Math.ceil(Math.sqrt(count * (width / Math.max(height, 1))))
			const rows = Math.ceil(count / cols)

			particles = Array.from({ length: count }, (_, index) => {
				const col = index % cols
				const row = Math.floor(index / cols)
				const cellWidth = width / cols
				const cellHeight = height / rows

				return {
					x: col * cellWidth + Math.random() * cellWidth,
					y: row * cellHeight + Math.random() * cellHeight,
					radius: Math.random() * 0.6 + 0.28,
					alpha: Math.random() * 0.17 + 0.09,
					vx: (Math.random() - 0.5) * 0.08,
					vy: (Math.random() - 0.5) * 0.08,
					phase: Math.random() * Math.PI * 2,
				}
			})

			const bottomBandHeight = Math.max(54, height * 0.32)
			const bottomCols = Math.ceil(width / 14)
			const bottomRows = 5
			const bottomCellWidth = width / bottomCols
			const bottomCellHeight = bottomBandHeight / bottomRows

			for (let row = 0; row < bottomRows; row++) {
				for (let col = 0; col < bottomCols; col++) {
					particles.push({
						x: col * bottomCellWidth + Math.random() * bottomCellWidth,
						y:
							height -
							bottomBandHeight +
							row * bottomCellHeight +
							Math.random() * bottomCellHeight,
						radius: Math.random() * 0.5 + 0.25,
						alpha: Math.random() * 0.13 + 0.075,
						vx: (Math.random() - 0.5) * 0.06,
						vy: (Math.random() - 0.5) * 0.06,
						phase: Math.random() * Math.PI * 2,
					})
				}
			}

			const bottomEdgeCols = Math.ceil(width / 9)
			const bottomEdgeRows = 3
			const bottomEdgeHeight = 22
			const edgeCellWidth = width / bottomEdgeCols
			const edgeCellHeight = bottomEdgeHeight / bottomEdgeRows

			for (let row = 0; row < bottomEdgeRows; row++) {
				for (let col = 0; col < bottomEdgeCols; col++) {
					particles.push({
						x: col * edgeCellWidth + Math.random() * edgeCellWidth,
						y:
							height -
							bottomEdgeHeight +
							row * edgeCellHeight +
							Math.random() * edgeCellHeight,
						radius: Math.random() * 0.45 + 0.25,
						alpha: Math.random() * 0.11 + 0.07,
						vx: (Math.random() - 0.5) * 0.045,
						vy: (Math.random() - 0.5) * 0.035,
						phase: Math.random() * Math.PI * 2,
					})
				}
			}
		}

		const draw = (time = 0) => {
			const rect = canvas.getBoundingClientRect()
			const width = rect.width
			const height = rect.height

			ctx.clearRect(0, 0, width, height)
			ctx.fillStyle = '#000000'
			ctx.fillRect(0, 0, width, height)

			for (const particle of particles) {
				particle.x += particle.vx + Math.sin(time * 0.00045 + particle.phase) * 0.012
				particle.y += particle.vy + Math.cos(time * 0.00045 + particle.phase) * 0.012

				if (particle.x < 0) particle.x = width
				if (particle.x > width) particle.x = 0
				if (particle.y < 0) particle.y = height
				if (particle.y > height) particle.y = 0

				ctx.beginPath()
				ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
				ctx.fill()
			}

			animationId = requestAnimationFrame(draw)
		}

		createParticles()
		draw()

		const resizeObserver = new ResizeObserver(() => {
			createParticles()
		})
		resizeObserver.observe(canvas)

		return () => {
			cancelAnimationFrame(animationId)
			resizeObserver.disconnect()
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			aria-hidden='true'
		/>
	)
}
