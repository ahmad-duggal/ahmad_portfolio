import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    let ringX = 0
    let ringY = 0
    let rafId

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const animateRing = () => {
      // Lag effect for ring
      setRing(prev => {
        ringX = prev.x
        ringY = prev.y
        return prev
      })
      rafId = requestAnimationFrame(animateRing)
    }

    const onMouseEnterLink = () => setIsHovering(true)
    const onMouseLeaveLink = () => setIsHovering(false)

    window.addEventListener('mousemove', onMouseMove)

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink)
        el.addEventListener('mouseleave', onMouseLeaveLink)
      })
    }

    addHoverListeners()
    rafId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        className="cursor-dot pointer-events-none"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.05 }}
        style={{ position: 'fixed', zIndex: 9999 }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring pointer-events-none"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? 'rgba(168, 85, 247, 0.8)'
            : 'rgba(99, 102, 241, 0.5)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        style={{ position: 'fixed', zIndex: 9998 }}
      />
    </>
  )
}
