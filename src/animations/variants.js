// ─── Centralized Framer Motion Variants ───────────────────────────────────────

/** Fade up from below — main reveal animation */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Fade in without movement */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/** Fade left → center */
export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Fade right → center */
export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Scale up from 90% */
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Stagger container — wraps staggered children */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
})

/** Stagger item — each child inside a stagger container */
export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Floating animation for hero elements */
export const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/** Hover scale effect */
export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.2 } },
  whileTap:   { scale: 0.97 },
}

/** Button microinteraction */
export const buttonTap = {
  whileTap:   { scale: 0.95 },
  whileHover: { scale: 1.02 },
}

/** Slide in from bottom for modals / overlays */
export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
}

/** Viewport trigger defaults */
export const viewportOnce = { once: true, amount: 0.15 }
