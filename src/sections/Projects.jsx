import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useAnimation, animate } from 'framer-motion'
import {
  Github, ExternalLink, ArrowUpRight, Star,
  ChevronLeft, ChevronRight, Layers,
} from 'lucide-react'
import Badge from '../components/Badge'
import { projects } from '../data/portfolio'
import { fadeUp, viewportOnce } from '../animations/variants'

/* ─── Constants ──────────────────────────────────────────────────────────── */
const CARD_WIDTH = 420   // px — card width
const CARD_GAP   = 20    // px — gap between cards
const CARD_STEP  = CARD_WIDTH + CARD_GAP  // total step per card

/* ─── Color tokens ───────────────────────────────────────────────────────── */
const colorMap = {
  indigo: {
    bg: 'from-indigo-950/80 via-indigo-900/40 to-slate-900/80',
    border: 'border-indigo-500/25', activeBorder: 'border-indigo-500/60',
    accent: 'text-indigo-400', glow: 'shadow-indigo-500/25',
    dot: 'bg-indigo-500', bar: 'from-indigo-600 to-violet-600',
  },
  violet: {
    bg: 'from-violet-950/80 via-violet-900/40 to-slate-900/80',
    border: 'border-violet-500/25', activeBorder: 'border-violet-500/60',
    accent: 'text-violet-400', glow: 'shadow-violet-500/25',
    dot: 'bg-violet-500', bar: 'from-violet-600 to-pink-600',
  },
  orange: {
    bg: 'from-orange-950/60 via-orange-900/30 to-slate-900/80',
    border: 'border-orange-500/25', activeBorder: 'border-orange-500/60',
    accent: 'text-orange-400', glow: 'shadow-orange-500/25',
    dot: 'bg-orange-500', bar: 'from-orange-500 to-red-500',
  },
  cyan: {
    bg: 'from-cyan-950/60 via-cyan-900/30 to-slate-900/80',
    border: 'border-cyan-500/25', activeBorder: 'border-cyan-500/60',
    accent: 'text-cyan-400', glow: 'shadow-cyan-500/25',
    dot: 'bg-cyan-500', bar: 'from-cyan-500 to-blue-500',
  },
}

const techBadgeColor = {
  'React': 'cyan', 'React.js': 'cyan',
  'Node.js': 'green', 'Express': 'green', 'Express.js': 'green',
  'MongoDB': 'green', 'JWT': 'orange', 'JWT Auth': 'orange',
  'Tailwind CSS': 'indigo', 'Vite': 'violet', 'Axios': 'indigo',
  'OpenWeather API': 'cyan', 'Chart.js': 'pink',
}

/* ─── Project Card ───────────────────────────────────────────────────────── */
function ProjectCard({ project, isActive, isDragging }) {
  const [hovered, setHovered] = useState(false)
  const c = colorMap[project.color] || colorMap.indigo
  const showOverlay = isActive && hovered && !isDragging

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        scale:   isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.5,
        y:       isActive ? 0 : 18,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: CARD_WIDTH, flexShrink: 0 }}
      className={`
        relative rounded-2xl border overflow-hidden flex flex-col
        transition-shadow duration-500
        ${isActive
          ? `${c.activeBorder} shadow-2xl ${c.glow}`
          : `${c.border}`
        }
      `}
      css={{ background: 'rgba(8,8,16,0.88)', backdropFilter: 'blur(24px)' }}
      style={{ width: CARD_WIDTH, flexShrink: 0, background: 'rgba(8,8,16,0.88)', backdropFilter: 'blur(24px)' }}
    >
      {/* Top accent line */}
      <div className={`h-0.5 w-full bg-gradient-to-r ${c.bar} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

      {/* Visual header */}
      <div className={`relative h-52 bg-gradient-to-br ${c.bg} overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 grid-pattern opacity-20" />

        {/* Emoji / icon */}
        <motion.div
          animate={{ scale: showOverlay ? 1.3 : isActive ? 1.06 : 1, rotate: showOverlay ? 8 : 0 }}
          transition={{ duration: 0.4 }}
          className="text-[5.5rem] z-10 select-none drop-shadow-2xl"
        >
          {project.emoji}
        </motion.div>

        {/* Ambient glow */}
        {isActive && (
          <motion.div
            className="absolute inset-0 blur-3xl"
            animate={{ opacity: [0.06, 0.14, 0.06] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ background: `radial-gradient(circle, ${project.color === 'indigo' ? '#6366f1' : project.color === 'violet' ? '#a855f7' : project.color === 'orange' ? '#f97316' : '#06b6d4'} 0%, transparent 70%)` }}
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold ${c.accent} bg-black/40 backdrop-blur-sm border ${c.border}`}>
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <Star className="w-3 h-3 fill-amber-400" /> Featured
            </span>
          </div>
        )}

        {/* Hover action overlay — only on active, non-dragging */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 bg-black/55 flex items-center justify-center gap-4 backdrop-blur-sm z-20"
            >
              <motion.a
                href={project.github} target="_blank" rel="noopener noreferrer"
                initial={{ scale: 0, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-indigo-500/30 hover:border-indigo-500/60 transition-all"
              >
                <Github className="w-4 h-4" /> Code
              </motion.a>
              {project.live && (
                <motion.a
                  href={project.live} target="_blank" rel="noopener noreferrer"
                  initial={{ scale: 0, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.06 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 ${c.accent} text-sm font-semibold hover:bg-white/15 transition-all`}
                >
                  <ExternalLink className="w-4 h-4" /> Live
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className={`font-bold text-[17px] leading-snug mb-2.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-500'}`}>
          {project.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Key highlights */}
        {project.highlights && (
          <div className="mb-4 space-y-1.5">
            {project.highlights.map(h => (
              <div key={h} className="flex items-center gap-2 text-xs text-slate-600">
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                {h}
              </div>
            ))}
          </div>
        )}

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map(tech => (
            <Badge key={tech} color={techBadgeColor[tech] || 'slate'} size="xs">{tech}</Badge>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition-colors group/link">
            <Github className="w-3.5 h-3.5" />
            View Code
            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>
          {project.live
            ? <a href={project.live} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-1.5 text-xs font-semibold ${c.accent} hover:opacity-75 transition-opacity`}>
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            : <span className="text-[10px] font-mono text-slate-700 tracking-wide uppercase">In Dev</span>
          }
        </div>
      </div>
    </motion.article>
  )
}

/* ─── Projects Section ───────────────────────────────────────────────────── */
export default function Projects() {
  const [active, setActive]     = useState(0)
  const [isDragging, setIsDrag] = useState(false)
  const [cursor, setCursor]     = useState('grab')

  const total    = projects.length
  const maxIndex = total - 1

  /* Framer Motion x value — drives the track position */
  const x = useMotionValue(0)

  /* ── Snap to a specific index ─────────────────────────── */
  const snapTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(maxIndex, index))
    setActive(clamped)
    animate(x, -(clamped * CARD_STEP), {
      type:      'spring',
      stiffness: 300,
      damping:   35,
      mass:      0.8,
    })
  }, [maxIndex, x])

  const prev = () => snapTo(active - 1)
  const next = () => snapTo(active + 1)

  /* ── On drag end — snap to nearest card ──────────────── */
  const handleDragEnd = (_, info) => {
    setIsDrag(false)
    setCursor('grab')

    const currentX  = x.get()
    const velocity  = info.velocity.x

    // Velocity-based fling — if fast enough, advance one card
    let targetIndex = active
    if (velocity < -200)      targetIndex = Math.min(maxIndex, active + 1)
    else if (velocity > 200)  targetIndex = Math.max(0, active - 1)
    else {
      // Position-based snap
      const rawIndex = -currentX / CARD_STEP
      targetIndex = Math.round(rawIndex)
    }

    snapTo(targetIndex)
  }

  /* ── Keyboard navigation ─────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  /* Drag constraints */
  const dragLeft  = -(maxIndex * CARD_STEP)
  const dragRight = 0

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Bg orbs */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full bg-violet-600/6 blur-[130px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Heading + arrow controls ────────────────────── */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base max-w-lg">
              Drag the cards or use arrows · Real-world MERN stack applications.
            </p>
          </motion.div>

          {/* Arrow buttons */}
          <motion.div
            className="hidden sm:flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={prev} disabled={active === 0}
              whileHover={{ scale: active === 0 ? 1 : 1.08 }}
              whileTap={{   scale: active === 0 ? 1 : 0.93 }}
              className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-200
                ${active === 0
                  ? 'border-white/5 text-slate-700 cursor-not-allowed'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/8 cursor-pointer'
                }`}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <span className="text-xs font-mono text-slate-600 w-12 text-center">
              {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <motion.button
              onClick={next} disabled={active === maxIndex}
              whileHover={{ scale: active === maxIndex ? 1 : 1.08 }}
              whileTap={{   scale: active === maxIndex ? 1 : 0.93 }}
              className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-200
                ${active === maxIndex
                  ? 'border-white/5 text-slate-700 cursor-not-allowed'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/8 cursor-pointer'
                }`}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Draggable track (full-bleed) ────────────────── */}
      <div className="relative overflow-hidden select-none">

        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#07070d] to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#07070d] to-transparent z-10 pointer-events-none" />

        <motion.div
          drag="x"
          dragConstraints={{ left: dragLeft, right: dragRight }}
          dragElastic={0.08}
          dragMomentum={false}
          style={{ x, cursor }}
          onDragStart={() => { setIsDrag(true); setCursor('grabbing') }}
          onDragEnd={handleDragEnd}
          className="flex items-stretch py-8 px-6 sm:px-20 lg:px-32"
          style={{ x, gap: CARD_GAP, width: 'max-content', cursor }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={i === active}
              isDragging={isDragging}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Dot indicators ──────────────────────────────── */}
      <div className="flex items-center justify-center gap-2.5 mt-6">
        {projects.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => snapTo(i)}
            animate={{
              width:           i === active ? 32 : 8,
              backgroundColor: i === active ? '#6366f1' : 'rgba(255,255,255,0.1)',
            }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="h-2 rounded-full cursor-pointer"
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Drag hint ─────────────────────────────────── */}
      <motion.p
        className="text-center text-xs font-mono text-slate-700 mt-3 tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ delay: 0.8 }}
      >
        ← drag to explore →
      </motion.p>

      {/* ── Mobile arrows ──────────────────────────────── */}
      <div className="flex items-center justify-center gap-4 mt-5 sm:hidden">
        <motion.button onClick={prev} disabled={active === 0} whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all
            ${active === 0 ? 'border-white/5 text-slate-700' : 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40'}`}>
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
        <span className="text-xs font-mono text-slate-600">{active + 1} of {total}</span>
        <motion.button onClick={next} disabled={active === maxIndex} whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all
            ${active === maxIndex ? 'border-white/5 text-slate-700' : 'border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40'}`}>
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* ── GitHub CTA ─────────────────────────────────── */}
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/8 hover:border-indigo-500/25 transition-all">
          <Layers className="w-5 h-5 text-indigo-400" />
          <div className="text-left">
            <p className="text-sm font-semibold text-white">More projects on GitHub</p>
            <p className="text-xs text-slate-500">Continuously building and learning</p>
          </div>
          <a
            href="https://github.com/ahmad-duggal" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-semibold hover:bg-indigo-500/20 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
