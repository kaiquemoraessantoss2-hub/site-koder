import { useEffect, useRef } from 'react'


interface RingDef {
  inclination: number
  speed: number
  radius: number
  color: string
  alpha: number
  lineWidth: number
  nodeCount: number
  phase: number
}

export function VortexOrb({ size = 440 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = false;

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * dpr
    canvas.height = size * dpr
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const R = size * 0.34

    const rings: RingDef[] = [
      { inclination: Math.PI * 0.04, speed: 0.006,  radius: R,        color: '#FF3C00', alpha: 1.0,  lineWidth: 2.0, nodeCount: 12, phase: 0 },
      { inclination: Math.PI * 0.18, speed: -0.009, radius: R * 0.80, color: '#FF5A20', alpha: 0.80, lineWidth: 1.6, nodeCount: 9,  phase: 1.1 },
      { inclination: Math.PI * 0.38, speed: 0.012,  radius: R * 0.92, color: '#FF3C00', alpha: 0.65, lineWidth: 1.4, nodeCount: 7,  phase: 0.5 },
      { inclination: Math.PI * 0.58, speed: -0.007, radius: R * 1.08, color: '#FF5A20', alpha: 0.50, lineWidth: 1.2, nodeCount: 6,  phase: 2.1 },
      { inclination: Math.PI * 0.78, speed: 0.005,  radius: R * 1.18, color: '#FF3C00', alpha: 0.35, lineWidth: 1.0, nodeCount: 4,  phase: 3.0 },
      { inclination: Math.PI * 0.28, speed: -0.004, radius: R * 1.30, color: '#FF5A20', alpha: 0.22, lineWidth: 0.8, nodeCount: 4,  phase: 1.6 },
    ]

    const rotations = rings.map(r => r.phase)
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, size, size)

      // Core radial glow
      const coreG = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.6)
      coreG.addColorStop(0, 'rgba(255,140,60,0.80)')
      coreG.addColorStop(0.3, 'rgba(255,60,0,0.40)')
      coreG.addColorStop(0.7, 'rgba(255,60,0,0.10)')
      coreG.addColorStop(1, 'rgba(255,60,0,0)')
      ctx.fillStyle = coreG
      ctx.beginPath()
      ctx.arc(cx, cy, R * 0.6, 0, Math.PI * 2)
      ctx.fill()

      // 2. Back rings and nodes
      rings.forEach((ring, idx) => {
        const rot = rotations[idx]
        const rx = ring.radius
        const ry = Math.abs(ring.radius * Math.cos(ring.inclination))

        ctx.save()
        ctx.globalAlpha = ring.alpha
        ctx.strokeStyle = ring.color
        ctx.lineWidth = ring.lineWidth
        ctx.shadowColor = ring.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.ellipse(cx, cy, rx, ry, rot, Math.PI, Math.PI * 2)
        ctx.stroke()
        ctx.restore()

        for (let n = 0; n < ring.nodeCount; n++) {
          const a = (n / ring.nodeCount) * Math.PI * 2
          if (Math.sin(a) >= 0) continue; // Skip front nodes
          
          const xL = rx * Math.cos(a)
          const yL = ry * Math.sin(a)
          const px = cx + xL * Math.cos(rot) - yL * Math.sin(rot)
          const py = cy + xL * Math.sin(rot) + yL * Math.cos(rot)

          const depth = (Math.sin(a) + 1) * 0.5
          const nr = Math.max(1.2, ring.lineWidth * 3 * (0.5 + depth * 0.9))

          ctx.save()
          ctx.globalAlpha = ring.alpha * (0.7 + depth * 0.6)
          ctx.shadowColor = ring.color
          ctx.shadowBlur = nr * 4
          ctx.fillStyle = ring.color
          ctx.beginPath()
          ctx.arc(px, py, nr, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      // 3. Draw Logo in the center
      ctx.save()
      ctx.translate(cx - 45, cy - 45)
      
      // Top white triangle
      ctx.shadowColor = 'rgba(255,60,0,0.55)'
      ctx.shadowBlur = 20
      ctx.fillStyle = '#FFFFFF'
      ctx.beginPath()
      ctx.moveTo(45, 10)
      ctx.lineTo(80, 47)
      ctx.lineTo(45, 47)
      ctx.closePath()
      ctx.fill()
      
      // Bottom orange triangle
      ctx.shadowColor = 'rgba(255,60,0,0.40)'
      ctx.shadowBlur = 8
      ctx.fillStyle = '#FF3C00'
      ctx.beginPath()
      ctx.moveTo(45, 51)
      ctx.lineTo(80, 51)
      ctx.lineTo(45, 80)
      ctx.closePath()
      ctx.fill()
      ctx.restore()

      // 4. Front rings and nodes
      rings.forEach((ring, idx) => {
        const rot = rotations[idx]
        const rx = ring.radius
        const ry = Math.abs(ring.radius * Math.cos(ring.inclination))

        ctx.save()
        ctx.globalAlpha = ring.alpha
        ctx.strokeStyle = ring.color
        ctx.lineWidth = ring.lineWidth
        ctx.shadowColor = ring.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI)
        ctx.stroke()
        ctx.restore()

        for (let n = 0; n < ring.nodeCount; n++) {
          const a = (n / ring.nodeCount) * Math.PI * 2
          if (Math.sin(a) < 0) continue; // Skip back nodes
          
          const xL = rx * Math.cos(a)
          const yL = ry * Math.sin(a)
          const px = cx + xL * Math.cos(rot) - yL * Math.sin(rot)
          const py = cy + xL * Math.sin(rot) + yL * Math.cos(rot)

          const depth = (Math.sin(a) + 1) * 0.5
          const nr = Math.max(1.2, ring.lineWidth * 3 * (0.5 + depth * 0.9))

          ctx.save()
          ctx.globalAlpha = ring.alpha * (0.7 + depth * 0.6)
          ctx.shadowColor = ring.color
          ctx.shadowBlur = nr * 4
          ctx.fillStyle = ring.color
          ctx.beginPath()
          ctx.arc(px, py, nr, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }

        if (!reduced) rotations[idx] += ring.speed
      })

      // Outer ambient halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.7)
      halo.addColorStop(0, 'rgba(255,60,0,0.12)')
      halo.addColorStop(1, 'rgba(255,60,0,0)')
      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.7, 0, Math.PI * 2)
      ctx.fill()

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [size, reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: size, height: size, display: 'block' }}
    />
  )
}
