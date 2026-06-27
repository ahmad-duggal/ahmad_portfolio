import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Download } from 'lucide-react'
import { Link } from 'react-scroll'
import { personalInfo, socialLinks } from '../data/portfolio'
import Avatar from '../components/Avatar'
import { staggerContainer, staggerItem } from '../animations/variants'
import Button from '../components/Button'

const iconMap = { Github, Linkedin, Mail }

export default function Hero() {
  const [downloadError, setDownloadError] = useState(false)

  const handleDownload = async () => {
    try {
      const response = await fetch('/resume/Muhammad_Ahmad_Duggal_Resume.pdf', { method: 'HEAD' })
      if (response.ok) {
        const link = document.createElement('a')
        link.href = '/resume/Muhammad_Ahmad_Duggal_Resume.pdf'
        link.download = 'Muhammad_Ahmad_Duggal_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        setDownloadError(false)
      } else {
        setDownloadError(true)
        setTimeout(() => setDownloadError(false), 3000)
      }
    } catch (error) {
      setDownloadError(true)
      setTimeout(() => setDownloadError(false), 3000)
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-600/12 blur-[140px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[140px] animate-float" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* ── Main Content ───────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ════════════════════════════════════════════════════
              LEFT — Text Content
          ════════════════════════════════════════════════════ */}
          <motion.div
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={staggerItem} className="mb-7">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-emerald-500/25 text-sm text-emerald-400 font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                Available for opportunities
              </span>
            </motion.div>

            {/* ── Name — Syne display font ────────────────────── */}
            <motion.div variants={staggerItem} className="mb-5 overflow-hidden">
              {/* Greeting */}
              <p className="text-slate-500 text-base sm:text-lg font-mono mb-3 tracking-widest uppercase">
                Hi there, I&apos;m
              </p>

              {/* FULL NAME — Syne bold, animated word by word */}
              <h1 className="font-display leading-[0.95] tracking-tight">
                {/* Muhammad */}
                <span
                  className="name-word name-word-delay-1 block text-[2.6rem] sm:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem] font-bold text-white/90"
                >
                  Muhammad
                </span>

                {/* Ahmad — gradient accent */}
                <span
                  className="name-word name-word-delay-2 block text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.4rem] font-extrabold gradient-text"
                  style={{ lineHeight: 1.05 }}
                >
                  Ahmad
                </span>

                {/* Duggal */}
                <span
                  className="name-word name-word-delay-3 block text-[2.6rem] sm:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem] font-bold text-white/90"
                >
                  Duggal
                </span>
              </h1>
            </motion.div>

            {/* ── Typing Role Animation ───────────────────────── */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 mb-6 h-9"
            >
              {/* Animated bar */}
              <span className="w-0.5 h-7 rounded-full bg-indigo-500 animate-pulse flex-shrink-0" />
              <div className="text-lg sm:text-xl font-mono font-medium text-slate-400">
                <TypeAnimation
                  sequence={[
                    'Backend Developer',     2200,
                    'Node.js Developer',     2000,
                    'API Engineer',          1800,
                    'Python Developer',      2000,
                    'MERN Stack Developer',  1800,
                    'C++ Developer',         2000,
                  ]}
                  wrapper="span"
                  speed={55}
                  deletionSpeed={70}
                  repeat={Infinity}
                  className="text-indigo-400"
                />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              Building fast, scalable, and beautiful full-stack applications
              using{' '}
              <span className="text-white/80 font-medium">
                MongoDB · Express · React · Node.js
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <Link to="projects" smooth duration={700} offset={-70} aria-label="View Projects">
                <Button variant="primary" size="lg">
                  <Sparkles className="w-4 h-4" />
                  View Projects
                </Button>
              </Link>
              <div className="relative inline-block">
                <Button variant="secondary" size="lg" onClick={handleDownload}>
                  <Download className="w-4 h-4" />
                  {downloadError ? 'File Unavailable' : 'Download Resume'}
                </Button>
                {downloadError && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-red-400 font-mono whitespace-nowrap">
                    Resume file not found
                  </span>
                )}
              </div>
              <Link to="contact" smooth duration={700} offset={-70} aria-label="Get in Touch">
                <Button variant="secondary" size="lg">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social icons + handle */}
            <motion.div
              variants={staggerItem}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map(({ id, label, url, icon }) => {
                const Icon = iconMap[icon]
                return (
                  <motion.a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${label}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all shadow-lg"
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </motion.a>
                )
              })}
              <span className="hidden sm:block text-xs text-slate-600 font-mono pl-1">
                github.com/ahmad-duggal
              </span>
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════════════════════
              RIGHT — Profile Photo
          ════════════════════════════════════════════════════ */}
          <motion.div
            className="relative flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Ambient glow behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/20 to-pink-500/15 blur-3xl scale-125 animate-pulse-glow" />

            {/* Floating container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Spinning gradient ring */}
              <div
                className="absolute -inset-[3px] rounded-full animate-spin-slow"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)',
                  animationDuration: '6s',
                  borderRadius: '50%',
                }}
              />

              {/* Static outer ring */}
              <div className="absolute -inset-[6px] rounded-full border border-white/8" />

              {/* Profile image */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-[3px] ring-black/40">
                <Avatar
                  src={personalInfo.profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle inner shadow overlay */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_-40px_60px_rgba(10,10,15,0.6)]" />
              </div>

              {/* ── Floating tech badges ──────────────────────── */}
              <motion.div
                animate={{ x: [0, 6, 0], y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}
                className="absolute -top-3 -right-2 sm:-right-6 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass border border-indigo-500/30 shadow-lg shadow-indigo-500/10"
              >
                <span className="text-sm">⚡</span>
                <span className="text-xs font-mono font-semibold text-indigo-300">React</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -6, 0], y: [0, 7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-2 -right-2 sm:-right-6 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass border border-violet-500/30 shadow-lg shadow-violet-500/10"
              >
                <span className="text-sm">🚀</span>
                <span className="text-xs font-mono font-semibold text-violet-300">Node.js</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, -5, 0], y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 1.6 }}
                className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 flex items-center gap-1.5 px-3 py-2 rounded-2xl glass border border-emerald-500/30 shadow-lg shadow-emerald-500/10"
              >
                <span className="text-sm">🍃</span>
                <span className="text-xs font-mono font-semibold text-emerald-300">MongoDB</span>
              </motion.div>

              {/* Experience dot badge */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-6 -left-2 sm:-left-6 flex flex-col items-center justify-center w-14 h-14 rounded-2xl glass border border-pink-500/25"
              >
                <span className="text-sm font-extrabold text-white font-display">4+</span>
                <span className="text-[9px] font-mono text-slate-400 leading-tight">Projects</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll cue ─────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <span className="text-[10px] text-slate-600 font-mono tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
