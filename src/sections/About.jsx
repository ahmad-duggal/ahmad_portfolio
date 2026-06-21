import { motion } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Rocket } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { personalInfo } from '../data/portfolio'
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerItem, viewportOnce,
} from '../animations/variants'

const highlights = [
  {
    icon: Rocket,
    label: 'Focus',
    value: 'Backend Systems',
    color: 'indigo',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pakistan',
    color: 'violet',
  },
  {
    icon: Briefcase,
    label: 'Status',
    value: 'Open to Work',
    color: 'emerald',
  },
  {
    icon: GraduationCap,
    label: 'Goal',
    value: 'Internship Ready',
    color: 'pink',
  },
]

const colorMap = {
  indigo:  { bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  border: 'border-indigo-500/20' },
  violet:  { bg: 'bg-violet-500/10',  text: 'text-violet-400',  border: 'border-violet-500/20' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  pink:    { bg: 'bg-pink-500/10',    text: 'text-pink-400',    border: 'border-pink-500/20' },
}

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-violet-500/8 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A MERN stack developer passionate about building impactful digital products."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left — Bio ─────────────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {personalInfo.bioExtended}
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, value, color }) => {
                const c = colorMap[color]
                return (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`flex items-center gap-3 p-3.5 rounded-xl bento-card border ${c.border}`}
                  >
                    <div className={`w-9 h-9 flex items-center justify-center rounded-lg ${c.bg}`}>
                      <Icon className={`w-4 h-4 ${c.text}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono">{label}</p>
                      <p className={`text-sm font-semibold ${c.text}`}>{value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ── Right — Stats ──────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >


            {/* What I'm learning next */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="bento-card p-5 border border-indigo-500/15"
            >
              <p className="text-xs font-mono text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Machine Learning', 'System Design', 'REST APIs'].map(tech => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-400 bg-white/5 border border-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
