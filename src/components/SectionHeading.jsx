import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations/variants'

/**
 * Section heading with animated reveal.
 */
export default function SectionHeading({ eyebrow, title, subtitle, center = true, className = '' }) {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''} ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {eyebrow && (
        <motion.span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4"
          variants={fadeUp}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white dark:text-white mb-4 leading-tight"
        variants={fadeUp}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          variants={fadeUp}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
